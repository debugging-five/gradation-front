import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import S from "./UserManagementLayoutStyle";

const UserManagementLayout = () => {
  const location = useLocation();

  // 현재 경로에서 pending / completed 구분
  const isPending = location.pathname.includes("/pending");
  const isCompleted = location.pathname.includes("/completed");

  return (
    <S.Container>
      <S.PageTitle>관리자 / 양식 관리</S.PageTitle>

      <S.TabWrapper>
        <S.TabButton
          to="/mypage/admin/user-management/pending/display"
          className={({ isActive }) => (isPending ? "active" : "")}
        >
          미승인
        </S.TabButton>
        <S.TabButton
          to="/mypage/admin/user-management/completed/display"
          className={({ isActive }) => (isCompleted ? "active" : "")}
        >
          승인완료
        </S.TabButton>
      </S.TabWrapper>

      <S.CategoryWrapper>
        <S.Category
          to="/mypage/admin/user-management/pending/display"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          display
        </S.Category>
        <S.Category
          to="/mypage/admin/user-management/pending/exhibition"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          exhibition
        </S.Category>
        <S.Category
          to="/mypage/admin/user-management/pending/upcycling"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          upcycling
        </S.Category>
        <S.Category
          to="/mypage/admin/user-management/pending/university"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          university
        </S.Category>
      </S.CategoryWrapper>

      <Outlet />
    </S.Container>
  );
};

export default UserManagementLayout;
