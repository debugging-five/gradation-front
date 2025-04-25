import React from 'react';
import { Outlet } from 'react-router-dom';

const MyApprovedContainer = () => {
  return (
    <div>
      컨테이너
      <Outlet />
    </div>
  );
};

export default MyApprovedContainer;