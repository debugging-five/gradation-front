import React from 'react';
import { Category, Content, ContentBox, Emptybox, ListHeader, MainWrapper, Number, Title, TitleNavigate, Wrapper } from '../../style';
import { NavLink } from 'react-router-dom';

const SendedList = () => {
  return (
    <MainWrapper>
      <Wrapper>
        {/* 리스트 헤더 */}
        <ListHeader>
          <Number>번호</Number>
          <Category>이름</Category>
          <Emptybox></Emptybox>
          <Title>제목</Title>
          <Emptybox>작성일</Emptybox>
        </ListHeader>

        {/* 리스트 배열 */}
        <ContentBox>
          <Number>1</Number>
          <Category>전시회 관리</Category>
          <Emptybox></Emptybox>
          <TitleNavigate  as={NavLink} to="/service-center/qna/detail/1" end>
            <Content>작품이 마음에 듭니다. 후원요청합니다.</Content>
          </TitleNavigate>
          <Emptybox>25.12.25</Emptybox>
        </ContentBox>
      </Wrapper>
    </MainWrapper>
  );
};

export default SendedList;