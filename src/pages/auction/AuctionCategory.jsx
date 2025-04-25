import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const AuctionCategory = () => {

  const pathName = useLocation().pathname
  console.log(pathName)

  return (
    <div>
    <div>
      <NavLink to={pathName === "/auction/bidding" ? "" : "koreanPainting"}>한국화</NavLink>
      <NavLink to={"sculpture"}>조각</NavLink>
      <NavLink to={"craft"}>공예</NavLink>
      <NavLink to={"architecture"}>건축</NavLink>
      <NavLink to={"calligraphy"}>서예</NavLink>
      <NavLink to={"painting"}>회화</NavLink>
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