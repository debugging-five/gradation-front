import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {

  // 만약 로그인이 되지 않았다면 로그인페이지로 이동 로그인 구현되면 주석 없애기
  // const { isLogin } = useSelector((state) => state.user)

  // if(!isLogin){
  //   return <Navigate to={"/user/login"} />
  // }

  return (  
    <Outlet />
  );
};

export default LoginLayout;