import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FormManagementCategory = () => {
  return (
    <div>
      <div>
        <Link to={"/mypage/admin/form-management/upcycling"}>upcycling</Link> |
        <Link to={"/mypage/admin/form-management/display"}>display</Link> |
        <Link to={"/mypage/admin/form-management/exhibition"}>exhibition</Link> |
        <Link to={"/mypage/admin/form-management/university"}>university</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default FormManagementCategory;