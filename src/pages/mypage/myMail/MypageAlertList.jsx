import React from 'react';
import { Outlet } from 'react-router-dom';

const MypageAlertList = () => {
  return (
    <div>
      내 알림
      <Outlet />
    </div>
  );
};

export default MypageAlertList;