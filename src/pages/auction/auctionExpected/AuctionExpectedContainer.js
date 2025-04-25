import React from 'react';
import { Outlet } from 'react-router-dom';
import AuctionExpected from './AuctionExpected';

const AuctionExpectedContainer = () => {
  return (
    <div>
      <Outlet />
      <AuctionExpected />
    </div>
  );
};

export default AuctionExpectedContainer;