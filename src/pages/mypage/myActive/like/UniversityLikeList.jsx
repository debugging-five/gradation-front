import React from 'react';
import {  MainWrapper} from '../../style';
import { Button, Content, EmptyBox, Title, UniversityBox, UniversityGrid, UniversityPicture, UniversityPictureDiv } from './universityLikeListStyle';

const UniversityLikeList = () => {
  return (
    <MainWrapper>
      <UniversityGrid>
        <UniversityBox>
          <UniversityPictureDiv>
            <UniversityPicture src="http://localhost:10000/files/api/get/korea.png?filePath=images/mypage" alt="default profile" />
          </UniversityPictureDiv>
          <div>
            <Title>고려대학교</Title>
            <Content>제 8회 졸업전시회</Content>
            <Content>패션디자인전공</Content>
            <EmptyBox></EmptyBox>
            <Content>25/02/10 ~ 25/02/15</Content>
            <Content>고려대학교 패션디자인 A클래스 입시학원</Content>
            <Button>전시중</Button>
          </div>
        </UniversityBox>
      </UniversityGrid>
    </MainWrapper>
  );
};

export default UniversityLikeList;