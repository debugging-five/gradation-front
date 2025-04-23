import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LoginContainer;