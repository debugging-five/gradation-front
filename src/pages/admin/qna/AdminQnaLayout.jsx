import { NavLink, Outlet } from "react-router-dom";
import * as S from "./AdminQnaLayoutStyle";

const AdminQnaLayout = () => {
  return (
    <S.Container>
      <S.TabWrapper>
        <S.TabButton to="/mypage/admin/qna">답변대기</S.TabButton>
        <S.TabButton to="/mypage/admin/qna/complete">답변완료</S.TabButton>
      </S.TabWrapper>
      <Outlet />
    </S.Container>
  );
};