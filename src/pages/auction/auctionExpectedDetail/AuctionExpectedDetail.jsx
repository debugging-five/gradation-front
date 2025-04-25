import React from 'react';
import { Outlet } from 'react-router-dom';

const AuctionExpectedDetail = () => {
  return (
    <div>
      AuctionExpectedDetail 상세정보
      <Outlet />
    </div>
  );
};

export default AuctionExpectedDetail;