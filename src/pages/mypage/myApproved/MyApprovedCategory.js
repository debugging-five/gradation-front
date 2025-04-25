import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MyApprovedCategory = () => {
  
  return (
    <div>
      <div>
        <Link to={`/mypage/mypage-approved-list/display`}>display</Link>
        <Link to={`/mypage/mypage-approved-list/exhibition`}>exhibition</Link>
        <Link to={`/mypage/mypage-approved-list/upcycling`}>upcycling</Link>
        <Link to={`/mypage/mypage-approved-list/university`}>university</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MyApprovedCategory;