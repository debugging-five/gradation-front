import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyMailListContainer = () => {
  return (
    <div>
      <div>
        <NavLink to={"received"}>쪽지 수신함</NavLink>
        <NavLink to={"sended"}>내가 보낸 쪽지</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MyMailListContainer;