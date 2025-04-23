import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyPageContainer = () => {
  return (
    <div style={{display : "flex"}}>
      <div>
        <NavLink to={""}>회원 정보</NavLink>
        <NavLink to={"my-artist"}>내 작가페이지 수정</NavLink>
      </div>
      <div><Outlet /></div>
    </div>
  );
};

export default MyPageContainer;