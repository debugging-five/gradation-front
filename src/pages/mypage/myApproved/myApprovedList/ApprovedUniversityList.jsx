import React, { useEffect, useState } from 'react';
import * as SA from './approvedListStyle';
import { useSelector } from 'react-redux';

const ApprovedUniversityList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [universityList, setUniversityList] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      if (!currentUser?.id) return;

      try {
        const response = await fetch(`http://localhost:10000/users/api/user/${currentUser.userEmail}`);
        if (!response.ok) throw new Error('서버 응답 오류');
        const data = await response.json();
        const user = data.currentUser;

        const singleUniversity = {
          name: user.userName,
          universityStatus: user.userUniversityStatus,
        };

        if (user.userMyUniversity) {
          setUniversityList([singleUniversity]);
        } else {
          setUniversityList([]);
        }

      } catch (error) {
        console.error('대학교 목록 불러오기 실패:', error);
      }
    };

    fetchUniversities();
  }, [currentUser]);

  return (
    <SA.MainWrapper>
      <SA.Wrapper>
        <SA.ListHeader>
          <SA.NumberTitle>번호</SA.NumberTitle>
          <SA.Title>이름</SA.Title>
          <SA.ApprovedBox>승인상태</SA.ApprovedBox>
        </SA.ListHeader>

        {universityList.length > 0 ? (
            universityList.map((uni, index) => (
            <SA.ContentBox key={index}>
                <SA.Number>{index + 1}</SA.Number>
                <SA.Content>{uni.name}</SA.Content>
                <SA.ApprovedStatus status={uni.universityStatus}>
                {uni.universityStatus === '신청' && '대기' ? '승인대기' : uni.universityStatus}
                </SA.ApprovedStatus>
            </SA.ContentBox>
            ))
        ) : (
          <div style={{ padding: "1rem", textAlign: "center" }}>요청한 인증이 없습니다.</div>
        )}
      </SA.Wrapper>
    </SA.MainWrapper>
  );
};

export default ApprovedUniversityList;
