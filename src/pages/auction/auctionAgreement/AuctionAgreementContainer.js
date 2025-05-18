import React from 'react';
import { Outlet } from 'react-router-dom';
import S from './style';

const AuctionAgreementContainer = () => {
  return (
    <div>
      <S.biddingCatImg src='/assets/images/icon/auction_banner.png' alt='배너사진'/>
      <Outlet />
    </div>
  );
};

export default AuctionAgreementContainer;