import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const AuctionBiddingContainer = () => {

  if(useLocation().pathname === "/auction"){
    return <Navigate to={"/auction/bidding"} />
  }
  
  return (
    <div>
      비딩!
      <Outlet />
    </div>
  );
};

export default AuctionBiddingContainer;