import React, { useEffect, useState } from 'react';
import * as SA from './approvedListStyle';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ApprovedDisplayList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    const fetchMyArtList = async () => {
      if (!currentUser?.id) return;

      try {
        const response = await fetch(`http://localhost:10000/displays/api/list/my?userId=${currentUser.id}`);
        if (!response.ok) {
          throw new Error('서버 응답 오류');
        }
        const data = await response.json();
        setArtList(data.myArtList);
      } catch (error) {
        console.error('작품 목록 불러오기 실패:', error);
      }
    };

    fetchMyArtList();
  }, [currentUser]);

  return (
    <SA.MainWrapper>
      <SA.Wrapper>
        {/* 리스트 헤더 */}
        <SA.ListHeader>
          <SA.NumberTitle>번호</SA.NumberTitle>
          <SA.Title>작품명</SA.Title>
          <SA.ApprovedBox>승인상태</SA.ApprovedBox>
        </SA.ListHeader>

        {/* 리스트 아이템 렌더링 */}
        {artList.map((art, index) => (
          <SA.ContentBox key={art.id}>
            <SA.Number>{index + 1}</SA.Number>
            <SA.TitleNavigate as={NavLink} to={`/art/detail/${art.id}`}>
              <SA.Content>{art.artTitle}</SA.Content>
            </SA.TitleNavigate>
            <SA.ApprovedStatus status={art.artStatus}>{art.artStatus}</SA.ApprovedStatus>
          </SA.ContentBox>
        ))}
      </SA.Wrapper>
    </SA.MainWrapper>
  );
};

export default ApprovedDisplayList;
