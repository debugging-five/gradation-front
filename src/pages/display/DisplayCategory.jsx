import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DisplayCategory = () => {
  return (
    <div>
      <div>
        <NavLink to={"korea"}>한국화</NavLink>
        <NavLink to={"jokak"}>조각</NavLink>
        <NavLink to={"kongyeo"}>공예</NavLink>
        <NavLink to={"kunchuk"}>건축</NavLink>
        <NavLink to={"seoyea"}>서예</NavLink>
        <NavLink to={"hehe"}>회화</NavLink>
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

export default DisplayCategory;