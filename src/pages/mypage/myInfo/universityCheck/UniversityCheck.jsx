import React from 'react';
import { ButtonDiv, EndBar, InputBox, MainTitle, MainWrapper, OneLine, TitleBox } from '../../style';
import { AddBox, AddButton, Box, CheckButton } from './universityCheckStyle';

const UniversityCheck = () => {
  return (
    <MainWrapper>
      <MainTitle>대학교 인증</MainTitle>

      <Box>
        <OneLine>
          <TitleBox>학교</TitleBox>
          <InputBox placeholder='학교를 입력하세요.'/>
        </OneLine>
        <EndBar></EndBar>
      </Box>
      
      <Box>
        <OneLine>
          <TitleBox>학과</TitleBox>
          <InputBox placeholder='학과를 입력하세요.'/>
        </OneLine>
        <EndBar></EndBar>  
      </Box>

      <OneLine>
        <AddBox>
          <TitleBox>첨부파일</TitleBox>
            <AddButton>파일첨부</AddButton>
            현재 재학중인 대학교의 학생증 사진을 첨부해주세요.
        </AddBox>
      </OneLine>
      
      <ButtonDiv>
        <CheckButton>인증</CheckButton>
      </ButtonDiv>
      

    </MainWrapper>
  );
};

export default UniversityCheck;