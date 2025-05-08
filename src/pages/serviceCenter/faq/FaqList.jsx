import React from 'react';
import { Wrapper, MainWrapper, ListHeader, ContentBox, Category, Number, Title, Content, Emptybox, TitleNavigate } from './faqListStyle';
import { NavLink } from 'react-router-dom';

const FaqList = () => {
  return (
    // 전체를 감싸는 div
    <MainWrapper>

      <Wrapper>
        {/* 리스트 헤더 */}
        <ListHeader>
          <Number>번호</Number>
          <Category>구분</Category>
          <Emptybox></Emptybox>
          <Title>제목</Title>
          <Emptybox></Emptybox>
        </ListHeader>

        {/* 리스트 배열 */}
        <ContentBox>
          <Number>1</Number>
          <Category>전시회 관리</Category>
          <Emptybox></Emptybox>
          <TitleNavigate  as={NavLink} to="/service-center/faq/detail/1" end>
            <Content>전시가 안될 땐 어떻게 해야 하나요전시가 안될 땐 어떻게 해야 하나요전시가 안될 땐 어떻게 해야 하나요?</Content>
          </TitleNavigate>
          <Emptybox></Emptybox>
        </ContentBox>
      </Wrapper>

      
    </MainWrapper>
  );
};

export default FaqList;