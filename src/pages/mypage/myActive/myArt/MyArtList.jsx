import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../style';
import * as SA from './myArtListStyle';
import { NavLink } from 'react-router-dom';

const MyArtList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [myArtList, setMyArtList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // ✅ 3줄 * 3개

  const categoryMap = {
    '한국화': 'korean',
    '건축': 'architecture',
    '조각': 'sculpture',
    '공예': 'craft',
    '회화': 'painting',
    '서예': 'calligraphy',
  };

  useEffect(() => {
    if (!currentUser) return;

    const fetchMyArtList = async () => {
      try {
        const response = await fetch(`http://localhost:10000/displays/api/list/my?userId=${currentUser.id}`);
        if (!response.ok) {
          throw new Error('서버 응답 실패');
        }
        const data = await response.json();
        setMyArtList(data.myArtList);
      } catch (error) {
        console.error('작품 목록 불러오기 실패:', error);
      }
    };

    fetchMyArtList();
  }, [currentUser]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(myArtList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myArtList.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <S.Wrapper>
      <SA.ArtGrid>
        {currentItems.length > 0 ? (
          currentItems.map((art, index) => (
            <SA.ArtItem key={index}>
              <SA.ArtImage
                src={`http://localhost:10000/files/api/get/${art.artImgName}?filePath=${art.artImgPath}`}
                alt={art.artTitle}
              />
              <NavLink to={`/display/${categoryMap[art.artCategory]}/detail/${art.artPostId}`}>
                <SA.Overlay>{art.artTitle}</SA.Overlay>
              </NavLink>
              <SA.LikeDiv>
                <span>♡</span>
                <span>{art.artLikeCount || 0}</span>
              </SA.LikeDiv>
            </SA.ArtItem>
          ))
        ) : (
          <S.NoneText>작품이 없습니다.</S.NoneText>
        )}
      </SA.ArtGrid>

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
    </S.Wrapper>
  );
};

export default MyArtList;
