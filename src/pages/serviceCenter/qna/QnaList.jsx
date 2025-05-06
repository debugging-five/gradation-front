import React from 'react';
import { Wrapper, MainWrapper, ListHeader, ContentBox, Category, Number, Title, Content, Emptybox, Button, ButtonDiv, TitleNavigate } from './qnaListStyle';
import { NavLink } from 'react-router-dom';

const QnaList = () => {
  return (
    // 전체를 감싸는 div
    <MainWrapper>

      <Wrapper>
        {/* 리스트 헤더 */}
        <ListHeader>
          <Number>번호</Number>
          <Category>구분</Category>
          <Emptybox>처리현황</Emptybox>
          <Title>제목</Title>
          <Emptybox>작성일</Emptybox>
        </ListHeader>

        {/* 리스트 배열 */}
        <ContentBox>
          <Number>1</Number>
          <Category>전시회 관리</Category>
          <Emptybox>답변대기</Emptybox>
          <TitleNavigate  as={NavLink} to="/service-center/qna/detail/1" end>
            <Content>전시가 안될 땐 어떻게 해야 하나요전시가 안될 땐 어떻게 해야 하나요전시가 안될 땐 어떻게 해야 하나요?</Content>
          </TitleNavigate>
          <Emptybox>25.12.25</Emptybox>
        </ContentBox>
      </Wrapper>
      
      <ButtonDiv>
        <Button>문의하기</Button>
      </ButtonDiv>
      
    </MainWrapper>
  );
};

export default QnaList;