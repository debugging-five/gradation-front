import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ArtistCategory = () => {
  return (
    <div>
      <div>
        <NavLink to={"korean"}>한국화</NavLink>
        <NavLink to={"painting"}>조각</NavLink>
        <NavLink to={"sculpture"}>공예</NavLink>
        <NavLink to={"craft"}>건축</NavLink>
        <NavLink to={"architecture"}>서예</NavLink>
        <NavLink to={"calligraphy"}>회화</NavLink>
      </div>
      <div>
        업로드
        검색
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ArtistCategory;