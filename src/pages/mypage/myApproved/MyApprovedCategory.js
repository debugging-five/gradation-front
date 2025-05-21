import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import * as SA from './myApprovedCategoryStyle';
import * as SC from '../mypageContainerStyle';

const MyApprovedCategory = () => {
  
  return (
    <div>
      <SA.CategoryWrapper>
        <SC.BarContent  as={NavLink} to="/mypage/mypage-approved-list/display" end>display</SC.BarContent>
        |
        <SC.BarContent  as={NavLink} to="/mypage/mypage-approved-list/exhibition" end>exhibition</SC.BarContent>
        |
        <SC.BarContent  as={NavLink} to="/mypage/mypage-approved-list/upcycling" end>upcycling</SC.BarContent>
        |
        <SC.BarContent  as={NavLink} to="/mypage/mypage-approved-list/university" end>university</SC.BarContent>
      </SA.CategoryWrapper>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MyApprovedCategory;