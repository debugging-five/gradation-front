import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyPageContainer = () => {

  const isAdmin = true;

  return (
    <div style={{display : "flex"}}>
      <div style={{
        display : "flex",
        flexDirection : "column"
        }}>
        <NavLink to={""}>회원 정보</NavLink>
        <NavLink to={"artist-datail-modify"}>내 작가페이지 수정</NavLink>
        <NavLink to={"change-password"}>비민번호 변경</NavLink>
        <NavLink to={"university-check"}>대학교 인증</NavLink>
        <NavLink to={"comment-list"}>작성한 댓글</NavLink>
        <NavLink to={"contact-artist"}>작가와 연락</NavLink>
        <NavLink to={"like"}>좋아요</NavLink>
        <NavLink to={"my-art"}>내 작품</NavLink>
        <NavLink to={"mypage-approved-list/display"}>내 승인내역</NavLink>
        <NavLink to={"my-payment/auction-list"}>경매 내역</NavLink>
        <NavLink to={"my-payment/payment-list"}>구매 내역</NavLink>
        <NavLink to={"my-mail"}>내 쪽지</NavLink>
        <NavLink to={"delete"}>회원 탈퇴</NavLink>

        {isAdmin && (
          <>
            <p>관리자</p>
            <NavLink to={"admin/faq"}>자주 묻는 질문</NavLink>
            <NavLink to={"admin/qna"}>1 : 1 문의</NavLink>
            <NavLink to={"admin/form-management/upcycling"}>양식관리</NavLink>
            <NavLink to={"admin/user-management"}>회원관리</NavLink>
          </>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MyPageContainer;