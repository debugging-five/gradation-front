import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Category, Content, ContentBox, Emptybox, ListHeader, MainTitle, MainWrapper, Number, Title, TitleNavigate, Wrapper } from '../style';
import { Admin } from './mypageAlertListStyle';

const MypageAlertList = () => {
  return (
    <MainWrapper>

      <Wrapper>
        {/* 리스트 헤더 */}
        <ListHeader>
          <Number>번호</Number>
          <Category>발신인</Category>
          <Emptybox></Emptybox>
          <Title>제목</Title>
          <Emptybox>작성일</Emptybox>
        </ListHeader>

        {/* 리스트 배열 */}
        <ContentBox>
          <Number>1</Number>
          <Admin>관리자</Admin>
          <Emptybox></Emptybox>
          <TitleNavigate  as={NavLink} to="/mypage/alert/detail/1" end>
            <Content>업사이클 신청이 기각되었습니다.</Content>
          </TitleNavigate>
          <Emptybox>25.12.25</Emptybox>
        </ContentBox>
      </Wrapper>

    </MainWrapper>
  );
};

export default MypageAlertList;