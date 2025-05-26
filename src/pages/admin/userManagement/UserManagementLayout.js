// src/pages/admin/user-management/UserManagementLayout.jsx
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import * as S from "./UserManagementLayoutStyle";

const UserManagementLayout = () => {
  const location = useLocation();

  const isPending = location.pathname.includes("/user-management/pending");
  const isCompleted = location.pathname.includes("/user-management/completed");
  const category = location.pathname.split("/").pop();

  return (
    <S.Container>
      <S.PageTitle>관리자 / 양식관리</S.PageTitle>

      <S.TabWrapper>
        <S.TabButton to="/mypage/admin/user-management/pending/display" isActive={isPending}>
          미승인
        </S.TabButton>
        <S.TabButton to="/mypage/admin/user-management/completed/display" isActive={isCompleted}>
          승인 완료
        </S.TabButton>
      </S.TabWrapper>

      <S.CategoryWrapper>
        {["display", "exhibition", "upcycling", "university"].map((cat) => {
          const pathBase = isPending
            ? "/mypage/admin/user-management/pending"
            : "/mypage/admin/user-management/completed";
          return (
            <S.Category
              key={cat}
              to={`${pathBase}/${cat}`}
              className={category === cat ? "active" : ""}
            >
              {cat}
            </S.Category>
          );
        })}
      </S.CategoryWrapper>

      <Outlet />
    </S.Container>
  );
};

export default UserManagementLayout;
