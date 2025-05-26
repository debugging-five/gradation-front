import React, { useEffect, useState } from 'react';
import * as SA from './approvedListStyle';
import { useSelector } from 'react-redux';

const ApprovedUniversityList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [exhibitionList, setExhibitionList] = useState([]);

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
        {exhibitionList.map((item, index) => (
          <SA.ContentBox key={item.universityExhibitionId}>
            <SA.Number>{index + 1}</SA.Number>
            <SA.Content>{item.universityExhibitionTitle}</SA.Content>
            <SA.ApprovedStatus status={item.universityExhibitionStatus}>
              {(item.universityExhibitionStatus === '신청' || item.universityExhibitionStatus === '대기') ? '승인대기'  : item.universityExhibitionStatus}
            </SA.ApprovedStatus>
          </SA.ContentBox>
        ))}
      </SA.Wrapper>
    </SA.MainWrapper>
  );
};

export default ApprovedUniversityList;
