import React from 'react';
import { Outlet } from 'react-router-dom';

const AuctionContainer = () => {
  return (
    <div>
      <h1>Auction</h1>
      <Outlet />
    </div>
  );
};

export default AuctionContainer;