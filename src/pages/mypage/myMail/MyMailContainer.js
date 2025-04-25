import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyMailContainer = () => {
  return (
    <div>
      <p>내 쪽지</p>
      <Outlet />
    </div>
  );
};

export default MyMailContainer;