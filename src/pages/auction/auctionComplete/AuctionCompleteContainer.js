import React from 'react';
import { Outlet } from 'react-router-dom';
import AuctionComplete from './AuctionComplete';

const AuctionCompleteContainer = () => {
  return (
    <div>
      <Outlet />
      <AuctionComplete />
    </div>
  );
};

export default AuctionCompleteContainer;