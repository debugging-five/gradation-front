import React from 'react';
import { NavLink, Outlet, useLocation  } from 'react-router-dom';
import S from "./AdminQnaLayoutStyle";

const AdminQnaLayout = () => {
  // url로 현재 탭 활성화
  const location = useLocation();
  const isWaiting = location.pathname === "/mypage/admin/qna";
  const isCompleted = location.pathname === "/mypage/admin/qna/complete";

  return (
    <S.Container>
      <S.TabWrapper>
        <S.TabButton to="/mypage/admin/qna" isActive={isWaiting}>
          답변대기
        </S.TabButton>
        <S.TabButton to="/mypage/admin/qna/complete" isActive={isCompleted}>
          답변완료
        </S.TabButton>
      </S.TabWrapper>
      <Outlet />
    </S.Container>
  );
};

export default AdminQnaLayout;