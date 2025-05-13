import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainTitle, MainWrapper } from '../style';

const MyApprovedContainer = () => {
  return (
    <MainWrapper>
      <MainTitle>내 활동 / 내 승인내역</MainTitle>
      
      <Outlet />
    </MainWrapper>
  );
};

export default MyApprovedContainer;