import React from 'react';
import { Outlet } from 'react-router-dom';
import AuctionBidding from './AuctionBidding';

const AuctionBiddingContainer = () => {

  return (
    <div>
      <Outlet />
      <AuctionBidding />
    </div>
  );
};

export default AuctionBiddingContainer;