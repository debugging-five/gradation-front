import React from 'react';
import { Button120x45R, Button120x45W, MainWrapper} from '../style';
import { ButtonDiv, Content, Day, Emptybox, Menu, MenuBox, OneLine, Price, ProductImage, Status, StatusDiv, Wrapper } from './myPaymentListStyle';

const MyPaymentList = () => {
  return (
    <MainWrapper>
      {/* 이거 통째로 반복문 */}
      <Wrapper>
          <ProductImage>
            사진
          </ProductImage>

          <div>
            <div>
              <StatusDiv>
                <Status>배송완료</Status>
                <Day>2/14(금) 도착</Day>
              </StatusDiv>
            </div>
            
            <MenuBox>
              <OneLine>
                <Menu>주문 작품</Menu>
                <Content>당황한 동상</Content>
              </OneLine>
              <Emptybox/>
              <OneLine>
                <Menu>결제수단</Menu>
                <div>
                  <Content>신용카드</Content>
                  <Content>코리아 카드</Content>
                </div>
              </OneLine>
              <Emptybox/>
              <OneLine>
                <Menu>결제 금액</Menu>
                <Price>1,234,567 KRW</Price>
              </OneLine>
            </MenuBox>
              
            <ButtonDiv>
              <Button120x45W>배송조회</Button120x45W>
              <Button120x45R>주문상세</Button120x45R>
            </ButtonDiv>
        </div>
        
      </Wrapper>
    </MainWrapper>
  );
};

export default MyPaymentList;