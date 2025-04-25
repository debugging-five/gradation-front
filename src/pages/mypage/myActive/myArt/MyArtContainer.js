import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyArtContainer = () => {
  return (
    <div>
      <p>내 작품 / (내 작품 / 경매 등록 가능 작품) 좋아요</p>
      <div>
        <NavLink to={"art-list"}>내 작품</NavLink>
        <NavLink to={"available-auction-art-list"}>경매 등록 가능작품</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MyArtContainer;