import React from 'react';
import { Button120x45R, Category, Content, Emptybox, ListHeader, MainWrapper, Number, Title, TitleNavigate, Wrapper } from '../../style';
import { NavLink } from 'react-router-dom';
import { ContentBox } from './myAvailableAuctionArtStyle';

const MyAvailableAuctionArt = () => {
  return (
    <MainWrapper>
      <Wrapper>
        {/* 리스트 헤더 */}
        <ListHeader>
          <Number>번호</Number>
          <Category>구분</Category>
          <Emptybox></Emptybox>
          <Title>작품명</Title>
          <Emptybox></Emptybox>
        </ListHeader>

        {/* 리스트 배열 */}
        <ContentBox>
          <Number>1</Number>
          <Category>한국화</Category>
          <Emptybox></Emptybox>
          <TitleNavigate  as={NavLink} to="/service-center/qna/detail/1" end>
            <Content>빌라모형</Content>
          </TitleNavigate>
          <Emptybox><Button120x45R>경매 등록</Button120x45R></Emptybox>
        </ContentBox>
      </Wrapper>
    </MainWrapper>
  );
};

export default MyAvailableAuctionArt;