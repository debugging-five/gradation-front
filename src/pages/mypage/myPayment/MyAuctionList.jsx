import React from 'react';
import * as S from '../style';
import { NavLink } from 'react-router-dom';

const MyAuctionList = () => {
  return (
    <S.MainWrapper>
      <S.Wrapper>
        {/* 리스트 헤더 */}
        <S.ListHeader>
          <S.NumberBold>번호</S.NumberBold>
          <S.CategoryBold>구분</S.CategoryBold>
          <S.EmptyboxBold>경매상태</S.EmptyboxBold>
          <S.Title>상품명</S.Title>
          <S.EmptyboxBold>내 입찰가</S.EmptyboxBold>
        </S.ListHeader>

        {/* 리스트 배열 */}
        <S.ContentBox>
          <S.Number>1</S.Number>
          <S.Category>조각</S.Category>
          <S.RedText>낙찰</S.RedText>
          <S.TitleNavigate  as={NavLink} to="/service-center/qna/detail/1" end>
            <S.Content>빌라모형</S.Content>
          </S.TitleNavigate>
          <S.Emptybox>20,000,000</S.Emptybox>
        </S.ContentBox>
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default MyAuctionList;