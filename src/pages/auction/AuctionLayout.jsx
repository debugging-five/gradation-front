import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AuctionLayout = () => {
  return (
    <div>
      <div>
        <Link to={"/auction/bidding/korean"}>경매중</Link> |
        <Link to={"/auction/expected/korean"}>경매 예정</Link> |
        <Link to={"/auction/complete/korean"}>경매 완료</Link> 
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuctionLayout;