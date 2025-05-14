import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CategoryWrapper } from './myApprovedCategoryStyle';
import { BarContent } from '../mypageContainerStyle';

const MyApprovedCategory = () => {
  
  return (
    <div>
      <CategoryWrapper>
        <BarContent  as={NavLink} to="/mypage/mypage-approved-list/display" end>display</BarContent>
        |
        <BarContent  as={NavLink} to="/mypage/mypage-approved-list/exhibition" end>exhibition</BarContent>
        |
        <BarContent  as={NavLink} to="/mypage/mypage-approved-list/upcycling" end>upcycling</BarContent>
        |
        <BarContent  as={NavLink} to="/mypage/mypage-approved-list/university" end>university</BarContent>
      </CategoryWrapper>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MyApprovedCategory;