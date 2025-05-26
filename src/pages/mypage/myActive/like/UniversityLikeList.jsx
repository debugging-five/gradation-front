import React, { useEffect, useState } from 'react';
import * as SU from './universityLikeListStyle';
import * as S from '../../style';
import { useSelector } from 'react-redux';

const UniversityLikeList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [likedExhibitions, setLikedExhibitions] = useState([]);

  useEffect(() => {
    const fetchLikedExhibitions = async () => {
      if (!currentUser?.id) return;

      try {
        const response = await fetch(`http://localhost:10000/exhibitions/api/university/${currentUser.id}/liked-exhibitions`);
        if (!response.ok) {
          throw new Error('서버 응답 오류');
        }
        const data = await response.json();
        setLikedExhibitions(data.likedExhibitions || []);
      } catch (error) {
        console.error('좋아요한 전시회 목록 불러오기 실패:', error);
      }
    };

    fetchLikedExhibitions();
  }, [currentUser]);

  // 전시 상태 판단 함수
  const getExhibitionStatus = (startDateStr, endDateStr) => {
    if (!startDateStr || !endDateStr) return '정보없음';

    const now = new Date();
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    if (now < startDate) return '전시예정';
    if (now > endDate) return '전시종료';
    return '전시중';
  };

  return (
    <S.MainWrapper>
        {likedExhibitions.length === 0 && (
          <div style={{ padding: "1rem", textAlign: "center" }}>좋아요한 대학교 전시회가 없습니다.</div>
        )}
      <SU.UniversityGrid>
        {likedExhibitions.map((exhibition, index) => {
          const status = getExhibitionStatus(
            exhibition.universityExhibitionStartDate,
            exhibition.universityExhibitionEndDate
          );

          return (
            <SU.UniversityBox key={exhibition.exhibitionId || index}>
              <SU.UniversityPictureDiv>
                <SU.UniversityPicture
                  src={`http://localhost:10000/files/api/get/${exhibition.universityLogoImgName}?filePath=${exhibition.universityLogoImgPath}`}
                  alt={`${exhibition.universityName} 로고`}
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = "http://localhost:10000/files/api/get/university-logo.png?filePath=images/default"; // 기본 이미지 경로
                  }}
                />
              </SU.UniversityPictureDiv>
              <div>
                <SU.Title>{exhibition.universityName}</SU.Title>
                <SU.Content>{exhibition.universityExhibitionTitle}</SU.Content>
                <SU.Content>{exhibition.majorName}</SU.Content>
                <SU.EmptyBox></SU.EmptyBox>
                <SU.Content>
                  {exhibition.universityExhibitionStartDate?.slice(2, 10).replace(/-/g, '/')} ~ {exhibition.universityExhibitionEndDate?.slice(2, 10).replace(/-/g, '/')}
                </SU.Content>
                <SU.Content>{exhibition.universityExhibitionLocation}</SU.Content>
                <SU.Button status={status}>{status}</SU.Button>
              </div>
            </SU.UniversityBox>
          );
        })}
      </SU.UniversityGrid>
    </S.MainWrapper>
  );
};

export default UniversityLikeList;
