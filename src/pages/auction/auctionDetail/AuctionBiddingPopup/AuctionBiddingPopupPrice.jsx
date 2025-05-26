import React from 'react';
import S from './style';

const AuctionBiddingPopupPrice = ({price, auction}) => {
  console.log(price);
  console.log(auction);
  if(price && price.id === null) {
    return (
      <>
        <S.Info3Bid>
          <S.H4>현재 입찰가 KRW</S.H4>
          <S.H3> - 원</S.H3>
        </S.Info3Bid>
        <S.Info3>
          <S.H4>최소 응찰가 KRW</S.H4>
          <S.H3Red>응찰가 {typeof price?.auctionBiddingPrice === 'number' && price?.auctionBiddingPrice.toLocaleString('ko-KR').replace(/\B(?=(\d{3})+(?!\d))/g, ",") || auction?.auctionStartPrice.toLocaleString('ko-KR').replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</S.H3Red>
        </S.Info3>
      </>
    )
  }
  return (
   <>
      <S.Info3Bid>
        <S.H4>현재 입찰가 KRW</S.H4>
        <S.H3>입찰가 {typeof price?.auctionBiddingPrice === 'number' && price?.auctionBiddingPrice.toLocaleString('ko-KR') || auction?.auctionStartPrice}원</S.H3>
      </S.Info3Bid>
      <S.Info3>
        <S.H4>최소 응찰가 KRW</S.H4>
        <S.H3Red>응찰가 {typeof price?.auctionBiddingMinimumPrice === 'number' && price?.auctionBiddingMinimumPrice.toLocaleString('ko-KR') || Math.ceil(auction?.auctionStartPrice * 1.1 / 1000) * 1000}원</S.H3Red>
      </S.Info3>
   </>
  );
};

export default AuctionBiddingPopupPrice;