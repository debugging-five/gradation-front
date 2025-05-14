import React from 'react';
import { Box, Title, Line, OneLine, Wrapper, Category, InputTitle, 
  ButtonDiv, CategoryWrapper, InputContent, ButtonSend, ButtonPhoto } from '../qna/qnaSendStyle';
import { Important, MainWrapper } from '../../mypage/style';

const QnaSend = () => {
  return (
    <MainWrapper>

      <Wrapper>

        <Box>
          <OneLine>
           <Title>구분<Important>*</Important></Title>
           <CategoryWrapper>
            <Category>작품전시</Category>
            <Category>전시회</Category>
            <Category>경매</Category>
            <Category>마이페이지</Category>
            <Category>기타</Category>
           </CategoryWrapper>
          </OneLine>
          <Line/>
        </Box>

        <Box>
          <OneLine>
            <Title>제목<Important>*</Important></Title>
            <InputTitle placeholder='제목을 입력하세요.' />
          </OneLine>
          <Line/>
        </Box>

        <Box>
          <Title>내용<Important>*</Important></Title>
          <InputContent/>
        </Box>

        <Box>
          <OneLine>
            <Title>첨부파일</Title>
            <ButtonPhoto>첨부파일</ButtonPhoto>
          </OneLine>
        </Box>

      </Wrapper>

      <ButtonDiv>
        <ButtonSend>등록</ButtonSend>
      </ButtonDiv>      

    </MainWrapper>
  );
};

export default QnaSend;