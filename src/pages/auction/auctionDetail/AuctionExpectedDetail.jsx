import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AuctionExpectedDetail = ({type, category, id}) => {

  const [auctionData, setAuctionData] = useState({});

  const testId = 41;
  // console.log(id);
  
  const auctionDetail = async () => {
    const response = await fetch(`http://localhost:10000/auction/api/detail/${testId}`);
    const datas = await response.json();
    console.log(datas[0]);
    
    return datas
  } 

  useEffect(() => {
    auctionDetail().then(datas => {
      setAuctionData(datas[0]);
    });
  }, [])

  return (
    <div>
      {type}, {category}, {id}
      {<p><Link to={`/auction/${type}/${category}/modify/${id}`}>수정</Link></p>}
      경매 예정
      <div id="img-wrapper">
          <img id="auction-img" src="http://localhost:10000/files/api/get/0001.jpg?filePath=art" alt="경매 작품"/>
          <img id="pepe-img" src="http://localhost:10000/files/api/get/0005.jpg?filePath=exhibition/gradation" alt="경매 작품"/>
      </div>
      <p>{auctionData.artTitle}</p>
      <div id="wrapper">
	   <div id="title-wrapper">   
	      <h2>auction</h2>   
	   </div>
	   
      <div id="auction-detail">
            <div id="img-wrapper">
                <img id="auction-img" src="../assets/images/display/art/sculpture/img-sculpture-cat-2.jpeg" alt="경매 작품"/>
            </div>
            
            <div id="auction-info">
              <div id="auction-info1">
                  <h2 id="title">당황한 동상</h2>
                  <div class="artist">
                    <h3>작가명</h3>
                    <span id="span">|</span>
                    <h3>홍길동</h3>
                  </div>
                  
                  <div class="etc">
                    <p>돌맹이에 조각칼</p>
                    <p>200 X 50 X 50</p>
                    <p>2025년</p>
                  </div>
              </div>
              
              <div id="auction-info2">
                  <div id="deadline-info">
                    <h5>마감일</h5>
                    <p>2025 . 01 . 21 . 8:00:00</p>
                  </div>
                  <div id="estimate-info">
                    <h5>추정가</h5>
                    <p>KRW 1,000,000 ~ 2,000,000</p>
                  </div>
                  <div id="start-info">
                    <h5>시작가</h5>
                    <p>KRW 500,000</p>
                  </div>
              </div>
              
              <div id="auction-info3">
                  <div id="deadline">
                    <h2>마감시간</h2>
                    <h2 id="countdown">4일 4시간 44분 44초</h2>
                  </div>
                  
                  <div id="price-wrapper">
                    <div id="current-price">
                      <h3>현재 입찰가</h3>
                      <h3>KRW 550,000</h3>
                    </div>
                    <div id="min-price">
                      <h3>최소 응찰가</h3>
                      <h3>KRW 560,000</h3>
                    </div>
                  </div>
              </div>
              
              <form>
              </form>
              <div id="button-wrapper">
                  <button id="list-button">목록으로</button>
                  <button id="auto-bidding-button" onclick="openPopup1()">자동응찰</button>
                  <button id="bidding-button" onclick="openPopup2()">응찰</button>
              </div>
            </div>
            </div>
        <div id="auction-list">
            <div id="auction-ing">
              <div id="auction-ing-title">경매중인 작품</div>
            </div>
            <div id="art-wrapper">
              <div class="art-list">
                  <img src="../assets/images/display/art/sculpture/img-sculpture-cat.jpeg" alt="리스트1"/>
              </div>
              <div class="art-list">
                  <img src="../assets/images/display/art/sculpture/img-sculpture-cat-3.jpeg" alt="리스트2"/>
              </div>
              <div class="art-list">
                  <img src="../assets/images/display/art/sculpture/img-sculpture-furuit.jpeg" alt="리스트3"/>
              </div>
              <div class="art-list">
                  <img src="../assets/images/display/art/sculpture/img-sculpture-wow.jpeg" alt="리스트4"/>
              </div>
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default AuctionExpectedDetail;