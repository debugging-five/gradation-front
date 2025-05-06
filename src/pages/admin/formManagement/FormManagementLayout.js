import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FormManagementLayout = () => {
  return (
    <div>
      <div><Link to={"/mypage/admin/form-management"}>미승인</Link></div>
      <div><Link to={"/mypage/admin/form-management/complete"}>승인완료</Link></div>
      <Outlet />
    </div>
  );
};

export default FormManagementLayout;