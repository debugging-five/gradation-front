import React, { useEffect, useState } from 'react';
import * as SA from './approvedListStyle';
import { useSelector } from 'react-redux';
import * as S from '../../style'; 

const ApprovedExhibitionList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [exhibitionList, setExhibitionList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchExhibitionStatus = async () => {
      if (!currentUser?.id) return;

      try {
        const response = await fetch(`http://localhost:10000/exhibitions/api/university/${currentUser.id}/exhibition-status`);
        if (!response.ok) {
          throw new Error('서버 응답 오류');
        }
        const data = await response.json();
        setExhibitionList(data.statusList);
      } catch (error) {
        console.error('전시회 승인내역 불러오기 실패:', error);
      }
    };

    fetchExhibitionStatus();
  }, [currentUser]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(exhibitionList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = exhibitionList.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <SA.MainWrapper>
      <SA.Wrapper>
        {/* 리스트 헤더 */}
        <SA.ListHeader>
          <SA.NumberTitle>번호</SA.NumberTitle>
          <SA.Title>전시명</SA.Title>
          <SA.ApprovedBox>승인상태</SA.ApprovedBox>
        </SA.ListHeader>

        {/* 리스트 아이템 */}
        {Array.isArray(exhibitionList) && exhibitionList.length > 0 ? (
          <>
            {currentItems.map((item, index) => (
              <SA.ContentBox key={item.universityExhibitionId}>
                <SA.Number>{indexOfFirstItem + index + 1}</SA.Number>
                <SA.Content>{item.universityExhibitionTitle}</SA.Content>
                <SA.ApprovedStatus status={item.universityExhibitionStatus}>
                  {(item.universityExhibitionStatus === '신청' || item.universityExhibitionStatus === '대기')
                    ? '승인대기'
                    : item.universityExhibitionStatus}
                </SA.ApprovedStatus>
              </SA.ContentBox>
            ))}

            {/* 페이지네이션 */}
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
          </>
        ) : (
          <div style={{ padding: "1rem", textAlign: "center" }}>승인내역이 없습니다.</div>
        )}
      </SA.Wrapper>
    </SA.MainWrapper>
  );
};

export default ApprovedExhibitionList;
