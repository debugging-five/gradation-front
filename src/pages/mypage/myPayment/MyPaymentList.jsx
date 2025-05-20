import React from 'react';
import * as S from '../style';
import * as SP from './myPaymentListStyle';

const MyPaymentList = () => {
  return (
    <S.MainWrapper>
      {/* 이거 통째로 반복문 */}
      <SP.Wrapper>
          <SP.ProductImage>
            사진
          </SP.ProductImage>

          <div>
            <div>
              <SP.StatusDiv>
                <SP.Status>배송완료</SP.Status>
                <SP.Day>2/14(금) 도착</SP.Day>
              </SP.StatusDiv>
            </div>
            
            <SP.MenuBox>
              <SP.OneLine>
                <SP.Menu>주문 작품</SP.Menu>
                <SP.Content>당황한 동상</SP.Content>
              </SP.OneLine>
              <SP.Emptybox/>
              <SP.OneLine>
                <SP.Menu>결제수단</SP.Menu>
                <div>
                  <SP.Content>신용카드</SP.Content>
                  <SP.Content>코리아 카드</SP.Content>
                </div>
              </SP.OneLine>
              <SP.Emptybox/>
              <SP.OneLine>
                <SP.Menu>결제 금액</SP.Menu>
                <SP.Price>1,234,567 KRW</SP.Price>
              </SP.OneLine>
            </SP.MenuBox>
              
            <SP.ButtonDiv>
              <S.Button120x45W>배송조회</S.Button120x45W>
              <S.Button120x45R>주문상세</S.Button120x45R>
            </SP.ButtonDiv>
        </div>
        
      </SP.Wrapper>
    </S.MainWrapper>
  );
};

export default MyPaymentList;