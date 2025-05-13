import React from 'react';
import { Category, Content, ContentBox, Emptybox, ListHeader, MainWrapper, Number, Title, TitleNavigate, Wrapper } from '../style';
import { NavLink } from 'react-router-dom';

const MyAuctionList = () => {
  return (
    <MainWrapper>
      <Wrapper>
        {/* 리스트 헤더 */}
        <ListHeader>
          <Number>번호</Number>
          <Category>구분</Category>
          <Emptybox>경매상태</Emptybox>
          <Title>상품명</Title>
          <Emptybox>내 입찰가</Emptybox>
        </ListHeader>

        {/* 리스트 배열 */}
        <ContentBox>
          <Number>1</Number>
          <Category>조각</Category>
          <Emptybox>낙찰</Emptybox>
          <TitleNavigate  as={NavLink} to="/service-center/qna/detail/1" end>
            <Content>빌라모형</Content>
          </TitleNavigate>
          <Emptybox>20,000,000</Emptybox>
        </ContentBox>
      </Wrapper>
    </MainWrapper>
  );
};

export default MyAuctionList;