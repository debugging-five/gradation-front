import React from 'react';
import { Outlet } from 'react-router-dom';

const AuctionAgreementContainer = () => {
  return (
    <div>
      고양이 사진 배너
      <Outlet />
    </div>
  );
};

export default AuctionAgreementContainer;