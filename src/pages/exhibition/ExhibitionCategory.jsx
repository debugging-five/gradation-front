import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ExhibitionCategory = () => {
  return (
    <div>
      <div>
        <NavLink to={""}>그라데이션 전시회</NavLink>
        <NavLink to={""}>대학교 전시회</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default ExhibitionCategory;