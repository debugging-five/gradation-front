import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import S from "./style";

const FormManagementLayout = () => {
  const location = useLocation();
  const isDetail = location.pathname.includes("/detail/");

  // 탭 상태에 따라 prefix 동적으로 설정
  const isPending = location.pathname.includes("/pending");
  const isCompleted = location.pathname.includes("/completed");
  const tabPrefix = isPending ? "pending" : "completed";

  return (
    <S.Container>
      {!isDetail && (
        <>
          <S.TabWrapper>
            <S.TabBox>
              <S.TabButton to="/mypage/admin/form-management/pending/display"
                $active={isPending}>
                미승인
              </S.TabButton>
              <S.TabButton to="/mypage/admin/form-management/completed/display"
                $active={isCompleted}>
                승인완료
              </S.TabButton>
            </S.TabBox>
          </S.TabWrapper>
          <S.CategoryWrapper>
            <S.Category to={`/mypage/admin/form-management/${tabPrefix}/display`}
              className={({ isActive }) => (isActive ? "active" : "")}>
              display
            </S.Category>
            <S.Separator>|</S.Separator>
            <S.Category to={`/mypage/admin/form-management/${tabPrefix}/exhibition`}
              className={({ isActive }) => (isActive ? "active" : "")}>
              exhibition
            </S.Category>
            <S.Separator>|</S.Separator>
            <S.Category to={`/mypage/admin/form-management/${tabPrefix}/upcycling`}
              className={({ isActive }) => (isActive ? "active" : "")}>
              upcycling
            </S.Category>
            <S.Separator>|</S.Separator>
            <S.Category to={`/mypage/admin/form-management/${tabPrefix}/university`}
              className={({ isActive }) => (isActive ? "active" : "")}>
              university
            </S.Category>
          </S.CategoryWrapper>
        </>
      )}

      <Outlet />
    </S.Container>
  );
};

export default FormManagementLayout;
