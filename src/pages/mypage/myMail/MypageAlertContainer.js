import React from 'react';
import { Outlet} from 'react-router-dom';
import { MainTitle, MainWrapper } from '../style';

const MypageAlertContainer = () => {
  return (
    <MainWrapper>
      <MainTitle>내 알림</MainTitle>

      <div>
        <Outlet />
      </div>
      
    </MainWrapper>
  );
};

export default MypageAlertContainer;