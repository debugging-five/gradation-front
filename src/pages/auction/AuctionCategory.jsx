import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const AuctionCategory = () => {

  const pathName = useLocation().pathname
  const type = pathName.split("/")[2]

  return (
    <div>
      <div>
        <NavLink to={`/auction/${type}/korean`}>한국화</NavLink>
        <NavLink to={`/auction/${type}/sculpture`}>조각</NavLink>
        <NavLink to={`/auction/${type}/craft`}>공예</NavLink>
        <NavLink to={`/auction/${type}/architecture`}>건축</NavLink>
        <NavLink to={`/auction/${type}/calligraphy`}>서예</NavLink>
        <NavLink to={`/auction/${type}/painting`}>회화</NavLink>
      </div>
      <div>
        업로드
        검색
      </div>
      <Outlet />
    </div>
  );
};

export default AuctionCategory;