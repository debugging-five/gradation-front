import React, { useEffect, useState } from 'react';
import * as SA from './approvedListStyle';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from '../../style';

const ApprovedDisplayList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [artList, setArtList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const categoryMap = {
    '한국화': 'korean',
    '건축': 'architecture',
    '조각': 'sculpture',
    '공예': 'craft',
    '회화': 'painting',
    '서예': 'calligraphy',
  };

  useEffect(() => {
    const fetchMyArtList = async () => {
      if (!currentUser?.id) return;

      try {
        const response = await fetch(`http://localhost:10000/displays/api/list/my?userId=${currentUser.id}`);
        if (!response.ok) {
          throw new Error('서버 응답 오류');
        }
        const data = await response.json();
        setArtList(data.myArtList || []);
      } catch (error) {
        console.error('작품 목록 불러오기 실패:', error);
      }
    };

    fetchMyArtList();
  }, [currentUser]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(artList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = artList.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <SA.MainWrapper>
      <SA.Wrapper>
        {/* 리스트 헤더 */}
        <SA.ListHeader>
          <SA.NumberTitle>번호</SA.NumberTitle>
          <SA.Title>작품명</SA.Title>
          <SA.ApprovedBox>승인상태</SA.ApprovedBox>
        </SA.ListHeader>

        {/* 리스트 아이템 */}
        {Array.isArray(artList) && artList.length > 0 ? (
          <>
            {currentItems.map((art, index) => (
              <SA.ContentBox key={art.id}>
                <SA.Number>{indexOfFirstItem + index + 1}</SA.Number>
                <SA.TitleNavigate as={NavLink} to={`/display/${categoryMap[art.artCategory]}/detail/${art.artPostId}`}>
                  <SA.Content>{art.artTitle}</SA.Content>
                </SA.TitleNavigate>
                <SA.ApprovedStatus status={art.artStatus}>
                  {art.artStatus === '신청' ? '승인대기' : art.artStatus}
                </SA.ApprovedStatus>
              </SA.ContentBox>
            ))}

            {/* 페이지네이션 */}
            {totalPages > 1 && (
              <S.Pagination>
                {pageNumbers.map(number => (
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
          </>
        ) : (
          <div style={{ padding: '1rem', textAlign: 'center' }}>
            승인내역이 없습니다.
          </div>
        )}
      </SA.Wrapper>
    </SA.MainWrapper>
  );
};

export default ApprovedDisplayList;
