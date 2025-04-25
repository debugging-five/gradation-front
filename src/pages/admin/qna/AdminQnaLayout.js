import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminQnaLayout = () => {
  return (
    <div>
      <div>
        <Link to={"/mypage/admin/qna"}>답변 대기</Link>
        <Link to={"/mypage/admin/qna/complete"}>답변 완료</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminQnaLayout;