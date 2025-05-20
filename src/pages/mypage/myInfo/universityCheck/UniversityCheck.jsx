import React from 'react';
import * as S from '../../style';
import * as SU from './universityCheckStyle';

const UniversityCheck = () => {
  return (
    <S.MainWrapper>
      <S.MainTitle>대학교 인증</S.MainTitle>

      <SU.Box>
        <S.OneLine>
          <S.TitleBox>학교</S.TitleBox>
          <S.InputBox placeholder='학교를 입력하세요.'/>
        </S.OneLine>
        <S.EndBar></S.EndBar>
      </SU.Box>
      
      <SU.Box>
        <S.OneLine>
          <S.TitleBox>학과</S.TitleBox>
          <S.InputBox placeholder='학과를 입력하세요.'/>
        </S.OneLine>
        <S.EndBar></S.EndBar>  
      </SU.Box>

      <S.OneLine>
        <SU.AddBox>
          <S.TitleBox>첨부파일</S.TitleBox>
            <SU.AddButton>파일첨부</SU.AddButton>
            현재 재학중인 대학교의 학생증 사진을 첨부해주세요.
        </SU.AddBox>
      </S.OneLine>
      
      <S.ButtonDiv>
        <SU.CheckButton>인증</SU.CheckButton>
      </S.ButtonDiv>
      

    </S.MainWrapper>
  );
};

export default UniversityCheck;