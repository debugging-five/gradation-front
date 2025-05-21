import React from 'react';
import * as SU from './universityLikeListStyle';
import * as S from '../../style';

const UniversityLikeList = () => {
  return (
    <S.MainWrapper>
      <SU.UniversityGrid>
        <SU.UniversityBox>
          <SU.UniversityPictureDiv>
            <SU.UniversityPicture src="http://localhost:10000/files/api/get/korea.png?filePath=images/mypage" alt="default profile" />
          </SU.UniversityPictureDiv>
          <div>
            <SU.Title>고려대학교</SU.Title>
            <SU.Content>제 8회 졸업전시회</SU.Content>
            <SU.Content>패션디자인전공</SU.Content>
            <SU.EmptyBox></SU.EmptyBox>
            <SU.Content>25/02/10 ~ 25/02/15</SU.Content>
            <SU.Content>고려대학교 패션디자인 A클래스 입시학원</SU.Content>
            <SU.Button>전시중</SU.Button>
          </div>
        </SU.UniversityBox>
      </SU.UniversityGrid>
    </S.MainWrapper>
  );
};

export default UniversityLikeList;