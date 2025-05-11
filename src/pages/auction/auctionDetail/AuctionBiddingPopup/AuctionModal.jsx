import React from 'react';
import S from './style';

const AuctionModal = () => {

  console.log('S.H4:', S.H4);

  return (
    <S.PopupBody>
      <S.PopupContainer>
        <S.Popup>
	      {/* <!-- 팝업 상단바 x 아이콘 --> */}
          <S.Bar>
            <S.BarImg src="/images/icon/close.png" alt="x" />
          </S.Bar>
            <S.PopupWrapper>
              <S.PopupLeft>
                <S.Info>
                  <S.H4>당황한 동상</S.H4>
                  <S.H4>경매중</S.H4>
                </S.Info>
                <S.Info>
                  <S.H4>마감시간</S.H4>
                  <S.RedH4>4일 12시간 44분 44초</S.RedH4>
                </S.Info>
                <S.Info>
                  <S.H4>경쟁응찰자</S.H4>
                  <S.H4>1명</S.H4>
                </S.Info>
                
                {/* <!-- 추정가, 시작가 --> */}
                <S.Info>
                  <S.H6>추정가 KRW</S.H6>
                  <S.H6>1,000,000,000 ~ 2,000,000,000</S.H6>
                </S.Info>
                <S.Info>
                  <S.H6>시작가 KRW</S.H6>
                  <S.H6>500,000</S.H6>
                </S.Info>
              </S.PopupLeft>
        
              <S.PopupRight>
                  <S.PopupArtImg src="../assets/images/display/art/sculpture/img-sculpture-cat-2.jpeg" alt="경매 작품" />
              </S.PopupRight>
            </S.PopupWrapper>
            
            <S.PopupInfo2>
              <S.PopupLeft2>
                <S.Input type="text" placeholder="응찰가를 입력해주세요."/>
                <S.Info3Bid>
                    <S.H4>현재 입찰가 KRW</S.H4>
                    <S.H3>550,000</S.H3>
                </S.Info3Bid>
                <S.Info3>
                    <S.H4>최소 응찰가 KRW</S.H4>
                    <S.H3Red>560,000</S.H3Red>
                </S.Info3>
              </S.PopupLeft2>
                
              <S.PopupButton>
                        <S.BiddingButton>응찰하기</S.BiddingButton>
                        <S.BackButton>돌아가기</S.BackButton>
              </S.PopupButton>
            </S.PopupInfo2>
        
          <S.Notice>
              <S.NoticeP>※ 작품 마감 30초 전에 응찰이 들어왔을 경우 해당작품 마감이 30초 연장됩니다. 한번 응찰된 작품은 응찰을 취소 할 수 없습니다. </S.NoticeP>
              <S.NoticeP>신중한 선택 부탁드립니다. 낙찰 후 결제기한 내에 결제하지 않으면 경매이용이 불가능해질 수 있습니다. </S.NoticeP>
          </S.Notice>
		    </S.Popup>
      </S.PopupContainer>
    </S.PopupBody>
  );
};

export default AuctionModal;