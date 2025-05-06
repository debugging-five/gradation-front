import React from 'react';
import { Button, ButtonDiv, Line, MainWrapper, QContent, QSize, QTitle, Title, Wrapper } from './qnaDetailStyle';

const QnaDetail = () => {
  return (
    <MainWrapper>
      
      <Wrapper>

        <div>경매 관련 문의</div>

        {/* 제목  */}
        <Title>
          <QSize>Q</QSize>
          <QTitle>경매 금액을 잘못 올렸어요</QTitle>
        </Title>
        <Line/>

        {/* 내용  */}
        <QContent> 
        삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...
        삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...
        삼각자...삼각자...삼각자...삼각자...
        삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...
        삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...삼각자...
        삼각자...삼각자...삼각자...삼각자...
        </QContent>
        
      </Wrapper>

      <ButtonDiv>
        <Button>목록</Button>
      </ButtonDiv>

    </MainWrapper>
  );
};

export default QnaDetail;