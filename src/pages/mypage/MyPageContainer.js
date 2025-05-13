import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BarContent, BarContentWapper, BarTitle, DeleteIdFont, EndBar, ImageBox, Leftbar, MainWrapper, ProfileImage } from './mypageContainerStyle';

const MyPageContainer = () => {

  const isAdmin = true;

  return (
    <MainWrapper>
      <Leftbar>
        <ImageBox>
          <ProfileImage src="http://localhost:10000/files/api/get/defaultProfile.jpg?filePath=images/mypage" alt="default profile" />
          <span>홍길동</span>
        </ImageBox>

        <BarTitle>내 정보</BarTitle>
        <BarContentWapper>
          <BarContent  as={NavLink} to="" end onClick={() => window.scrollTo(0, 0)}>회원 정보</BarContent>
          <BarContent  as={NavLink} to="artist-datail-modify" onClick={() => window.scrollTo(0, 0)}>내 작가페이지 수정</BarContent>
          <BarContent  as={NavLink} to="change-password" onClick={() => window.scrollTo(0, 0)}>비밀번호 변경</BarContent>
          <BarContent  as={NavLink} to="university-check" onClick={() => window.scrollTo(0, 0)}>대학교 인증</BarContent>
        </BarContentWapper>
        <EndBar></EndBar>

        <BarTitle>내 활동</BarTitle>
        <BarContentWapper>
          <BarContent  as={NavLink} to="comment-list" onClick={() => window.scrollTo(0, 0)}>작성한 댓글</BarContent>
          <BarContent  as={NavLink} to="contact-artist" onClick={() => window.scrollTo(0, 0)}>작가와 연락</BarContent>
          <BarContent  as={NavLink} to="like" onClick={() => window.scrollTo(0, 0)}>좋아요</BarContent>
          <BarContent  as={NavLink} to="my-art" onClick={() => window.scrollTo(0, 0)}>내 작품</BarContent>
          <BarContent  as={NavLink} to="mypage-approved-list" onClick={() => window.scrollTo(0, 0)}>내 승인내역</BarContent>
        </BarContentWapper>
        <EndBar></EndBar>

        <BarTitle>내 결제내역</BarTitle>
        <BarContentWapper>
          <BarContent  as={NavLink} to="my-payment/auction-list" onClick={() => window.scrollTo(0, 0)}>경매내역</BarContent>
          <BarContent  as={NavLink} to="my-payment/payment-list" onClick={() => window.scrollTo(0, 0)}>구매내역</BarContent>
        </BarContentWapper>
        <EndBar></EndBar>

        <BarTitle>내 알림</BarTitle>
        <BarContentWapper>
          <BarContent  as={NavLink} to="alert" onClick={() => window.scrollTo(0, 0)}>내 알림</BarContent>
        </BarContentWapper>
        <EndBar></EndBar>

        <BarContentWapper>
          <BarContent  as={NavLink} to="delete" onClick={() => window.scrollTo(0, 0)}><DeleteIdFont>회원 탈퇴</DeleteIdFont></BarContent>          
        </BarContentWapper>
        

        
        {isAdmin && (
          <>
            <EndBar></EndBar>
            <BarTitle>관리자</BarTitle>
            <BarContentWapper>
              <BarContent  as={NavLink} to="admin/faq" end onClick={() => window.scrollTo(0, 0)}>자주 묻는 질문</BarContent> 
              <BarContent  as={NavLink} to="admin/qna" end onClick={() => window.scrollTo(0, 0)}>1 : 1 문의</BarContent> 
              <BarContent  as={NavLink} to="admin/form-management/upcycling" end onClick={() => window.scrollTo(0, 0)}>양식관리</BarContent> 
              <BarContent  as={NavLink} to="admin/user-management" end onClick={() => window.scrollTo(0, 0)}>회원관리</BarContent> 
            </BarContentWapper>
          </>
        )}
      </Leftbar>
      <div>
        <Outlet />
      </div>
    </MainWrapper>
  );
};

export default MyPageContainer;