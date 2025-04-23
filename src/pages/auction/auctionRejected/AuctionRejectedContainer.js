import React from 'react';
import { Outlet } from 'react-router-dom';

const AuctionRejectedContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuctionRejectedContainer;