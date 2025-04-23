import React from 'react';
import { Outlet } from 'react-router-dom';

const AuctionCompleteContainer = () => {
  return (
    <div>
      완료
      성공 또는 실패 할 수 있음! 마치 김동건의 SQLD 합격처럼
      서민아의 60점 기적의 합격처럼
      <Outlet />
    </div>
  );
};

export default AuctionCompleteContainer;