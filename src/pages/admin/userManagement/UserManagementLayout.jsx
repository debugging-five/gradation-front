import React from 'react';
import { Outlet } from 'react-router-dom';
import S from './UserManagementStyle';

const UserManagementLayout = () => {
  return (
    <S.Container>
      <S.PageTitle>관리자 / 회원관리</S.PageTitle>
      <Outlet />
    </S.Container>
  );
};

export default UserManagementLayout;
