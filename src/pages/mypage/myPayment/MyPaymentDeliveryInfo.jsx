import React from 'react';
import * as S from '../style';
import * as SP from './myPaymentDeliveryInfoStyle';

const MyPaymentDeliveryInfo = () => {
  return (
    <S.MainWrapper>
      <S.Wrapper>

        <SP.OneLine>
          <SP.SendedWrapper>
            <SP.ProductImg src="http://localhost:10000/files/api/get/product.png?filePath=images/mypage" alt="product"/>
            <div>
              <SP.TextOneLine>
                <SP.Title>택배사</SP.Title>
                <SP.Content>한진택배</SP.Content>
              </SP.TextOneLine>
              <SP.TextOneLine>
                <SP.Title>전화번호</SP.Title>
                <SP.Content>1699-5588</SP.Content>
              </SP.TextOneLine>
              <SP.TextOneLine>
                <SP.Title>송장번호</SP.Title>
                <SP.Content>458528916333</SP.Content>
              </SP.TextOneLine>
            </div>
          </SP.SendedWrapper>
          <SP.Line/>
          <SP.SendedWrapper>
            <div>
              <SP.TextOneLine>
                <SP.RTitle>받는 사람</SP.RTitle>
                <SP.Content>홍길동</SP.Content>
              </SP.TextOneLine>
              <SP.TextOneLine>
                <SP.RTitle>받는 주소</SP.RTitle>
                <SP.RContent>서울특별시 관악구 역삼로 119 -112 스카이 캐슬 1004호</SP.RContent>
              </SP.TextOneLine>
              <SP.TextOneLine>
                <SP.RTitle>배송 요청사항</SP.RTitle>
                <SP.Content>종 + 2789</SP.Content>
              </SP.TextOneLine>
            </div>
          </SP.SendedWrapper>
        </SP.OneLine>

        <S.Wrapper>
          <SP.RedBox>
            <SP.RedText1>시간</SP.RedText1>
            <SP.RedText2>현재위치</SP.RedText2> 
            <SP.RedText3>배송상태</SP.RedText3> 
          </SP.RedBox>
          <SP.TextOneLine>
            <SP.Text1>2월 14, 2025 12:05</SP.Text1>
            <SP.Text2>역삼(집)</SP.Text2>
            <SP.Text3>배달완료</SP.Text3>
          </SP.TextOneLine>
          <SP.TextOneLine>
            <SP.Text1>2월 14, 2025 12:05</SP.Text1>
            <SP.Text2>역삼(집)</SP.Text2>
            <SP.Text3>배달완료</SP.Text3>
          </SP.TextOneLine>
          <SP.TextOneLine>
            <SP.Text1>2월 14, 2025 12:05</SP.Text1>
            <SP.Text2>역삼(집)</SP.Text2>
            <SP.Text3>배달완료</SP.Text3>
          </SP.TextOneLine>
          <SP.TextOneLine>
            <SP.Text1>2월 14, 2025 12:05</SP.Text1>
            <SP.Text2>역삼(집)</SP.Text2>
            <SP.Text3>배달완료</SP.Text3>
          </SP.TextOneLine>
          <SP.TextOneLine>
            <SP.Text1>2월 14, 2025 12:05</SP.Text1>
            <SP.Text2>역삼(집)</SP.Text2>
            <SP.Text3>배달완료</SP.Text3>
          </SP.TextOneLine>
          <S.EndBar/>
        </S.Wrapper>
      
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default MyPaymentDeliveryInfo;