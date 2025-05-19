import React from 'react';
import S from './style';

const AuctionPayment = () => {
  return (
    <S.Wrapper>
      <S.Payment>
        <S.imgWrapper>
          <S.auctionImg id="auction-img" src="../assets/images/display/art/sculpture/img-sculpture-cat-2.jpeg" alt="경매 작품" />
        </S.imgWrapper>
        
        <div>
          <S.H3>낙찰을 축하드립니다!</S.H3>
          {/* <!-- 낙찰 금액 --> */}
          <div id="success-price">
            <div id="price">
              <h5>낙찰 금액<span>|</span></h5>
              <h5>999,999,999 KRW</h5>
            </div>
          </div>
          
        <div id="input-form">
          {/* <!-- 이름 --> */}
          <div class="input-wrapper">
            <div class="input-text">
              <h5>이름<span class="star">*</span></h5>
              <input id="name" type="text" placeholder="이름을 입력하세요." />
            </div>
            <p id="name-error">*필수 항목입니다</p>
          </div>
          
          {/* <!-- 주소 --> */}
          <div id="input-button-wrapper">
            <div class="input-text">
              <h5>주소<span class="star">*</span></h5>
              <input id="address" type="text" placeholder="주소를 검색하세요." name="address" required/>
            </div>
            <button type="button" id="search-address" onclick="execDaumPostcode()">주소 검색</button>
          </div>
          
          {/* <!-- 상세 주소 --> */}
          <div class="input-wrapper">
            <div class="input-text2">
              <h5>상세 주소<span class="star">*</span></h5>
              <input id="detail-address" type="text" placeholder="상세 주소를 입력하세요." />
            </div>
            <p id="detail-address-error">*필수 항목입니다</p>
          </div>
          
          {/* <!-- 전화번호 --> */}
          <div class="input-wrapper">
            <div class="input-text3">
              <h5>전화번호<span class="star">*</span></h5>
              <input id="phone" type="text" placeholder="전화번호를 입력하세요." />
            </div>
            <p id="phone-error">*필수 항목입니다</p>
          </div>
          
          {/* <!-- 이메일 --> */}
          <div class="input-wrapper">
            <div class="input-text4">
              <h5>이메일<span class="star">*</span></h5>
              <input id="email" type="text" placeholder="이메일을 입력하세요." />
            </div>
            <p id="email-error">*필수 항목입니다</p>
          </div>
        </div>
          
          <input class="check-label" type="checkbox" id="check-user"/>
              <label class="checkbox-label" for="check-user">
                <span class="check-label-span">주문자 본인이 맞습니까?</span>
              </label>
          <input class="check-label" type="checkbox" id="check-payment"/>
              <label class="checkbox-label" for="check-payment">
                <span class="check-label-span">결제에 동의하십니까?</span>
              </label>
        </div>
    
    </S.Payment>
          <button id="payment-button" onclick="openPopup()">결제하기</button>
          
            <div id="overlay"></div>
          <div id="popup-wrapper">         
            {/* <%@ include file="./auction-payment-success.jsp"%> */}
        </div>  
	</S.Wrapper>
  );
};

export default AuctionPayment;