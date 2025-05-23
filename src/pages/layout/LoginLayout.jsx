import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const LoginLayout = () => {
  
  const { isLogin } = useSelector((state) => state.user);

  // 토큰이 없을 때 강제로 로그인
  if(localStorage.getItem("jwtToken") === null) {
    return <Navigate to="/login" replace={true} />
  }
  
  // 리덕스에 로그인이 처리중일 때는 null 아니라면 컴포넌트
  if(isLogin === null || isLogin === undefined) {
    return null;
  }

  return (  
    <Outlet />
  );
};

export default LoginLayout;