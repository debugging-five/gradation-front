import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../style';
import * as SL from './artLikeListStyle';

const ArtLikeList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [likedArts, setLikedArts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // ✅ 3줄 * 3개 = 9개

  const categoryMap = {
    '한국화': 'korean',
    '건축': 'architecture',
    '조각': 'sculpture',
    '공예': 'craft',
    '회화': 'painting',
    '서예': 'calligraphy',
  };

  useEffect(() => {
    if (!currentUser?.id) return;

    const fetchLikedArts = async () => {
      try {
        const response = await fetch(`http://localhost:10000/displays/api/list/my/liked?userId=${currentUser.id}`);
        if (!response.ok) throw new Error('서버 응답 실패');
        const data = await response.json();
        setLikedArts(data.likedArtList);
      } catch (error) {
        console.error('좋아요 작품 목록 불러오기 실패:', error);
      }
    };

    fetchLikedArts();
  }, [currentUser]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(likedArts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = likedArts.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <S.MainWrapper>
      {likedArts.length === 0 && (
        <div style={{ padding: "1rem", textAlign: "center" }}>좋아요한 작품이 없습니다.</div>
      )}

      <S.ArtGrid>
        {currentItems.map((art) => (
          <SL.ArtContainer key={art.id}>
            <S.TitleNavigate to={`/display/${categoryMap[art.artCategory]}/detail/${art.artPostId}`}>
              <S.ArtImage
                src={`http://localhost:10000/files/api/get/${art.artImgName}?filePath=${art.artImgPath}`}
                alt={art.artTitle || '좋아요 작품 이미지'}
              />
              <SL.Overlay className="overlay">
                <SL.HoverText>{art.artTitle}</SL.HoverText>
                <SL.HoverText>{art.userName}</SL.HoverText>
              </SL.Overlay>
            </S.TitleNavigate>
          </SL.ArtContainer>
        ))}
      </S.ArtGrid>

      {/* ✅ 페이지네이션 */}
      {totalPages > 1 && (
        <S.Pagination>
          {pageNumbers.map((number) => (
            <S.PageButton
              key={number}
              onClick={() => setCurrentPage(number)}
              className={number === currentPage ? 'active' : ''}
            >
              {number}
            </S.PageButton>
          ))}
        </S.Pagination>
      )}
    </S.MainWrapper>
  );
};

export default ArtLikeList;
