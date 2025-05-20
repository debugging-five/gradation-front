import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import S from './style';
import { useSelector } from 'react-redux';

const Header = ({ onLogout }) => {
  const { currentUser, isLogin } = useSelector((state) => state.user);

  // 스크롤
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollTop = useRef(0); // 스크롤 위치를 저장
  const delta = 5; // 민감도

  // const [openMenu, setOpenMenu] = useState('');
  // const location = useLocation();

  // useEffect(() => {
  //   setOpenMenu()
  // }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY; // 현재 스크롤한 픽셀 값 저장

      if (Math.abs(lastScrollTop.current - st) <= delta) return;

      if (st > lastScrollTop.current) {
        setShowHeader(false); // 스크롤 아래로
      } else {
        setShowHeader(true); // 스크롤 위로
      }

      lastScrollTop.current = st;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <S.Header className={showHeader ? "show" : "hide"}>
      <S.Nav>
        <S.HeaderLogoWrap>
          <Link to="/">
            <S.HeaderLogo src={`/assets/images/icon/logo.png`} alt="Gradation" />
          </Link>
        </S.HeaderLogoWrap>

        <S.Menu>

          <S.MenuItem>
            <S.MenuLink to="/display">display</S.MenuLink>
            <S.Dropdown>
              <li><S.DropdownLink to="/display">전시 중인 작품</S.DropdownLink></li>
              <li><S.DropdownLink to="/display/registration">작품 업로드</S.DropdownLink></li>
            </S.Dropdown>
          </S.MenuItem>

          <S.MenuItem><S.MenuLink to="/artist">artist</S.MenuLink></S.MenuItem>

          <S.MenuItem>
            <S.MenuLink to="/auction/bidding/korean">auction</S.MenuLink>
            <S.Dropdown>
              <li><S.DropdownLink to="/auction/bidding/korean">경매중</S.DropdownLink></li>
              <li><S.DropdownLink to="/auction/expected/korean">경매 예정</S.DropdownLink></li>
              <li><S.DropdownLink to="/auction/complete/korean">경매 완료</S.DropdownLink></li>
            </S.Dropdown>
          </S.MenuItem>

          <S.MenuItem>
            <S.MenuLink to="/exhibition/gradation">exhibition</S.MenuLink>
            <S.Dropdown>
              <li><S.DropdownLink to="/exhibition/gradation">그라데이션 전시회</S.DropdownLink></li>
              <li><S.DropdownLink to="/exhibition/university">대학교 전시회</S.DropdownLink></li>
              <li><S.DropdownLink to="/exhibition/university/registration">학교 신청</S.DropdownLink></li>
            </S.Dropdown>
          </S.MenuItem>

          <S.MenuItem>
            <S.MenuLink to="/upcycling">upcycling</S.MenuLink>
            <S.Dropdown>
              <li><S.DropdownLink to="/upcycling">업사이클</S.DropdownLink></li>
              <li><S.DropdownLink to="/upcycling/registration">업사이클 신청</S.DropdownLink></li>
            </S.Dropdown>
          </S.MenuItem>
        </S.Menu>

        <S.LoginSection>
          <img className="header-bell" src={`/assets/images/icon/bell.png`} alt="bell" />
          {isLogin ? (
            <S.SignInWrap>
              <span className="sign-in">{currentUser.userName}님</span>
              <S.Dropdown>
                <li><S.DropdownLink to="/mypage">마이페이지</S.DropdownLink></li>
                <li><S.DropdownLink to="/service-center/qna">고객센터</S.DropdownLink></li>
                <li><S.DropdownSpan  onClick={onLogout}>로그아웃</S.DropdownSpan></li>
              </S.Dropdown>
            </S.SignInWrap>
          ) : (
            <S.SignInWrap>
              <S.MenuLink to="/login" className="sign-in">sign in</S.MenuLink>
            </S.SignInWrap>
          )}
        </S.LoginSection>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
