import React, { useEffect, useState } from 'react';
import * as SA from './approvedListStyle';
import { useSelector } from 'react-redux';
import * as S from '../../style'; 

const ApprovedUpcyclingList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [upcyclingList, setUpcyclingList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchUpcyclingList = async () => {
      if (!currentUser?.id) return;

      try {
        const response = await fetch(`http://localhost:10000/upcycling/api/list/${currentUser.id}`);
        if (!response.ok) {
          throw new Error('서버 응답 오류');
        }
        const data = await response.json();
        setUpcyclingList(data);
      } catch (error) {
        console.error('업사이클링 목록 불러오기 실패:', error);
      }
    };

    fetchUpcyclingList();
  }, [currentUser]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(upcyclingList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = upcyclingList.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <SA.MainWrapper>
      <SA.Wrapper>
        {/* 리스트 헤더 */}
        <SA.ListHeader>
          <SA.NumberTitle>번호</SA.NumberTitle>
          <SA.Title>이름</SA.Title>
          <SA.ApprovedBox>승인상태</SA.ApprovedBox>
        </SA.ListHeader>

        {/* 리스트 아이템 */}
        {Array.isArray(upcyclingList) && upcyclingList.length > 0 ? (
          <>
            {currentItems.map((item, index) => (
              <SA.ContentBox key={item.id}>
                <SA.Number>{indexOfFirstItem + index + 1}</SA.Number>
                <SA.Content>{item.userName}</SA.Content>
                <SA.ApprovedStatus status={item.upcyclingStatus}>
                  {(item.upcyclingStatus === '신청' || item.upcyclingStatus === '대기')
                    ? '승인대기'
                    : item.upcyclingStatus}
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
            요청한 인증이 없습니다.
          </div>
        )}
      </SA.Wrapper>
    </SA.MainWrapper>
  );
};

export default ApprovedUpcyclingList;
