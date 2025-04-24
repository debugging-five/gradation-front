import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ArtLikeContainer = () => {
  return (
    <div>
      <p>내 활동 / (작품 / 전시회) 좋아요</p>
      <div>
        <NavLink to={"art"}>작품 좋아요</NavLink>
        <NavLink to={"university"}>전시회 좋아요</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ArtLikeContainer;