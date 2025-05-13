import React from 'react';
import { Category, Content, ContentBox, Emptybox, ListHeader, MainWrapper, Number, Title, TitleNavigate, Wrapper } from '../../style';
import { NavLink } from 'react-router-dom';

const Comment = () => {
  return (
    <MainWrapper>
      <Wrapper>
        {/* 리스트 헤더 */}
        <ListHeader>
          <Number>번호</Number>
          <Category>작품명</Category>
          <Emptybox></Emptybox>
          <Title>내 댓글</Title>
          <Emptybox>작성일</Emptybox>
        </ListHeader>

        {/* 리스트 배열 */}
        <ContentBox>
          <Number>1</Number>
          <Category>절망에 빠진 동상</Category>
          <Emptybox></Emptybox>
          <TitleNavigate  as={NavLink} to="/service-center/qna/detail/1" end>
            <Content>전시가 안될 땐 어떻게 해야 하나요전시가 안될 땐 어떻게 해야 하나요전시가 안될 땐 어떻게 해야 하나요?</Content>
          </TitleNavigate>
          <Emptybox>25.12.25</Emptybox>
        </ContentBox>
      </Wrapper>
    </MainWrapper>
  );
};

export default Comment;