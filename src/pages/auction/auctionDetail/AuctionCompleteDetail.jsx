import React from 'react';

const AuctionCompleteDetail = ({type, category, id}) => {
  return (
    <div id="wrapper">
      <div id="title-wrapper">	
        <h2>auction</h2>	
      </div>
      
      <div id="auction-detail">
      
        <div id="auction-img">
          <div class="img">
            <p>경매 작품 사진</p>
          </div>
        </div>
        
        <div id="auction-info">
          <div id="auction-info1">
            <h2 class="title">귀여운 고양이<span>낙찰</span></h2>
            <div class="artist">
              <h3>작가명</h3>
              <h3>홍길동</h3>
            </div>
            
            <div class="etc">
              <p>돌맹이에 조각칼</p>
              <p>200 X 50 X 50</p>
              <p>2025년</p>
            </div>
          </div>
          
          <div id="auction-info2">
            <div class="info">
              <h5>경매개시</h5>
              <h4>2025 . 01 . 21 . 8:00:00</h4>
            </div>
            <div class="info">
              <h5>추정가</h5>
              <h4>KRW 1,000,000 ~ 2,000,000</h4>
            </div>
            <div class="info">
              <h5>시작가</h5>
              <h4>KRW 500,000</h4>
            </div>
          </div>
          
            <div class="info">
              <h3>판매완료된 작품입니다.</h3>
            </div>
            
            <div class="info">
              <h3>낙찰가</h3>
            </div>
            
            <div id="notice">
              <div class="bid-price">
                <h2>100,000,000 KRW</h2>
              </div>
              <button>목록으로</button>
            </div>
            

        </div>
      </div>

      <div id="auction-list">
        <div id="auction-ing">
          <p>경매중인 작품</p>
        </div>
          
        <div id="art-wrapper">
          <div class="art-list">
            <h6>경매 작품 사진</h6>
          </div>
          <div class="art-list">
            <h6>경매 작품 사진</h6>
          </div>
          <div class="art-list">
            <h6>경매 작품 사진</h6>
          </div>
          <div class="art-list">
            <h6>경매 작품 사진</h6>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AuctionCompleteDetail;