import React, { useEffect, useState } from 'react';
import * as SA from './approvedListStyle';
import { useSelector } from 'react-redux';

const ApprovedUpcyclingList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [upcyclingList, setUpcyclingList] = useState([]);

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

  return (
    <SA.MainWrapper>
      <SA.Wrapper>
        {/* 리스트 헤더 */}
        <SA.ListHeader>
          <SA.NumberTitle>번호</SA.NumberTitle>
          <SA.Title>신청자</SA.Title>
          <SA.ApprovedBox>승인상태</SA.ApprovedBox>
        </SA.ListHeader>

        {/* 리스트 아이템 */}
        {upcyclingList.map((item, index) => (
          <SA.ContentBox key={item.id}>
            <SA.Number>{index + 1}</SA.Number>
            <SA.Content>{item.userName}</SA.Content>
            <SA.ApprovedStatus status={item.upcyclingStatus}>
              {(item.upcyclingStatus  === '신청' || item.upcyclingStatus === '대기') ? '승인대기'  : item.upcyclingStatus}
            </SA.ApprovedStatus>
          </SA.ContentBox>
        ))}
      </SA.Wrapper>
    </SA.MainWrapper>
  );
};

export default ApprovedUpcyclingList;
