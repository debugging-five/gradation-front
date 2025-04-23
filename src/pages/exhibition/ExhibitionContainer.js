import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ExhibitionContainer = () => {

  // const id = 1;

  return (
    <div>
      <div>
        <NavLink to={""}>그라데이션 전시회</NavLink>
        <NavLink to={""}>대학교 전시회</NavLink>
      </div>
      <Outlet />

      {/* <p>일반 사용자</p> */}
      {/* {id === 1 && (
        <p>어드민 일 때</p>
      )} */}

    </div>
  );
};

export default ExhibitionContainer;