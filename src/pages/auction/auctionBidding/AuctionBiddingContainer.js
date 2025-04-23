import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import AuctionBidding from './AuctionBidding';

const AuctionBiddingContainer = () => {

  if(useLocation().pathname === "/auction"){
    return <Navigate to={"/auction/bidding"} />
  }
  
  return (
    <div>
      <Outlet />
      <AuctionBidding />
    </div>
  );
};

export default AuctionBiddingContainer;