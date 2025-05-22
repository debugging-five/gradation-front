import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import * as S from './mypageContainerStyle';
import { useSelector } from 'react-redux';

const MyPageContainer = () => {
  
  // 현재 유저
  const currentUser = useSelector(state => state.user.currentUser);
  // 아이디가 1이면 관리자 항목 표시
  const isAdmin = currentUser?.id === 1;

  const [userName, setUserName] = useState(currentUser?.userName);
  const [profileImg, setProfileImg] = useState("http://localhost:10000/files/api/get/defaultProfile.jpg?filePath=images/mypage");
  
  // 숨겨진 파일 input 접근을 위한 ref
  const fileInputRef = useRef(null);

  // 카메라 아이콘 클릭 시 파일 선택창 열기
  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  // 파일 선택 시 미리보기 이미지 변경
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 임시 URL 생성
      const imageUrl = URL.createObjectURL(file);
      setProfileImg(imageUrl);

    }
  };

  useEffect(() => {
      if (!currentUser) return;  // 이메일 없으면 호출 안 함

      fetch(`http://localhost:10000/api/user/${encodeURIComponent(currentUser.userEmail)}`)
        .then(res => {
          if (!res.ok) throw new Error("회원 정보 불러오기 실패");
          return res.json();
        })
        .then(data => {
          if (data.currentUser) {
            const user = data.currentUser;
            // 프로필 이미지가 없으면 기본 이미지 유지
            if (user.userProfileImagePath) {
              setProfileImg(user.userProfileImagePath);
            }
            if (user.userName) {
              setUserName(user.userName);
            }
          }
        })
        .catch(err => {
          console.error(err);
        });
    }, [currentUser]);



  return (
    <S.MainWrapper>
      <S.Leftbar>
         <S.ImageBox>
          <S.ProfileImage src={profileImg} alt="profile" />
          <span>{userName}</span>
          <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange}/>
          <S.CameraImage src="http://localhost:10000/files/api/get/camera.png?filePath=images/mypage" alt="edit img" onClick={handleCameraClick}/>
        </S.ImageBox>

        <S.BarTitle>내 정보</S.BarTitle>
        
        <S.BarContentWapper>
          <S.BarContent  as={NavLink} to="" end onClick={() => window.scrollTo(0, 0)}>회원 정보</S.BarContent>
          <S.BarContent  as={NavLink} to="artist-datail-modify" onClick={() => window.scrollTo(0, 0)}>내 작가페이지 수정</S.BarContent>
          <S.BarContent  as={NavLink} to="change-password" onClick={() => window.scrollTo(0, 0)}>비밀번호 변경</S.BarContent>
          <S.BarContent  as={NavLink} to="university-check" onClick={() => window.scrollTo(0, 0)}>대학교 인증</S.BarContent>
        </S.BarContentWapper>
        <S.EndBar></S.EndBar>

        <S.BarTitle>내 활동</S.BarTitle>
        <S.BarContentWapper>
          <S.BarContent  as={NavLink} to="comment-list" onClick={() => window.scrollTo(0, 0)}>작성한 댓글</S.BarContent>
          <S.BarContent  as={NavLink} to="contact-artist" onClick={() => window.scrollTo(0, 0)}>작가와 연락</S.BarContent>
          <S.BarContent  as={NavLink} to="like" onClick={() => window.scrollTo(0, 0)}>좋아요</S.BarContent>
          <S.BarContent  as={NavLink} to="my-art" onClick={() => window.scrollTo(0, 0)}>내 작품</S.BarContent>
          <S.BarContent  as={NavLink} to="mypage-approved-list" onClick={() => window.scrollTo(0, 0)}>내 승인내역</S.BarContent>
        </S.BarContentWapper>
        <S.EndBar></S.EndBar>

        <S.BarTitle>내 결제내역</S.BarTitle>
        <S.BarContentWapper>
          <S.BarContent  as={NavLink} to="my-payment/auction-list" onClick={() => window.scrollTo(0, 0)}>경매내역</S.BarContent>
          <S.BarContent  as={NavLink} to="my-payment/payment-list" onClick={() => window.scrollTo(0, 0)}>구매내역</S.BarContent>
        </S.BarContentWapper>
        <S.EndBar></S.EndBar>

        <S.BarTitle>내 알림</S.BarTitle>
        <S.BarContentWapper>
          <S.BarContent  as={NavLink} to="alert" onClick={() => window.scrollTo(0, 0)}>내 알림</S.BarContent>
        </S.BarContentWapper>
        <S.EndBar></S.EndBar>

        <S.BarContentWapper>
          <S.BarContent  as={NavLink} to="delete" onClick={() => window.scrollTo(0, 0)}><S.DeleteIdFont>회원 탈퇴</S.DeleteIdFont></S.BarContent>          
        </S.BarContentWapper>
        

        
        {isAdmin && (
          <>
            <S.EndBar></S.EndBar>
            <S.BarTitle>관리자</S.BarTitle>
            <S.BarContentWapper>
              <S.BarContent  as={NavLink} to="admin/faq" end onClick={() => window.scrollTo(0, 0)}>자주 묻는 질문</S.BarContent> 
              <S.BarContent  as={NavLink} to="admin/qna" end onClick={() => window.scrollTo(0, 0)}>1 : 1 문의</S.BarContent> 
              <S.BarContent  as={NavLink} to="admin/form-management/upcycling" end onClick={() => window.scrollTo(0, 0)}>양식관리</S.BarContent> 
              <S.BarContent  as={NavLink} to="admin/user-management" end onClick={() => window.scrollTo(0, 0)}>회원관리</S.BarContent> 
            </S.BarContentWapper>
          </>
        )}
      </S.Leftbar>
      <div>
        <Outlet />
      </div>
    </S.MainWrapper>
  );
};

export default MyPageContainer;