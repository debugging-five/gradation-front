import React from 'react';
import { Outlet } from 'react-router-dom';

const MyAuctionListContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MyAuctionListContainer;