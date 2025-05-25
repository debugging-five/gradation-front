import React from 'react';
import S from './style';

const AuctionPrice = ({price, auction}) => {
  
  if(price && price.id === null) {
    return (
      <div>
        <S.CurrentPrice>
            <S.H3>현재 입찰가</S.H3>
            <S.H3>KRW - 원</S.H3>
        </S.CurrentPrice>
        <S.MinPrice>
            <S.H3>최소 응찰가</S.H3>
            <S.H3>KRW {auction?.auctionStartPrice.toLocaleString('ko-KR').replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</S.H3>
        </S.MinPrice>
      </div>
    )
  }
  return (
    <div>
      <S.CurrentPrice>
          <S.H3>현재 입찰가</S.H3>
          <S.H3>KRW {typeof price?.auctionBiddingPrice === 'number' && price?.auctionBiddingPrice.toLocaleString('ko-KR').toLocaleString('ko-KR').replace(/\B(?=(\d{3})+(?!\d))/g, ",") || auction?.auctionStartPrice.toLocaleString('ko-KR').replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</S.H3>
      </S.CurrentPrice>
      <S.MinPrice>
          <S.H3>최소 응찰가</S.H3>
          <S.H3>KRW {typeof price?.auctionBiddingMinimumPrice === 'number' && price?.auctionBiddingMinimumPrice.toLocaleString('ko-KR').toLocaleString('ko-KR').replace(/\B(?=(\d{3})+(?!\d))/g, ",") || Math.ceil(auction?.auctionStartPrice * 1.1 / 1000) * 1000}원</S.H3>
      </S.MinPrice>
    </div>
  );
};

export default AuctionPrice;