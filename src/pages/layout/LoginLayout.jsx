import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const LoginLayout = () => {
  
  const { isLogin } = useSelector((state) => state.user);
  
  if(!isLogin) {
    return <Navigate to="/login" replace={true} />
  }

  return (  
    <Outlet />
  );
};

export default LoginLayout;