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
            <Link to="/display">display</Link>
            <S.Dropdown>
              <li><Link to="/display">전시 중인 작품</Link></li>
              <li><Link to="/display/registration">작품 업로드</Link></li>
            </S.Dropdown>
          </S.MenuItem>

          <S.MenuItem><Link to="/artist">artist</Link></S.MenuItem>

          <S.MenuItem>
            <Link to="/auction/bidding/korean">auction</Link>
            <S.Dropdown>
              <li><Link to="/auction/bidding/korean">경매중</Link></li>
              <li><Link to="/auction/expected/korean">경매 예정</Link></li>
              <li><Link to="/auction/complete/korean">경매 완료</Link></li>
            </S.Dropdown>
          </S.MenuItem>

          <S.MenuItem>
            <Link to="/exhibition/gradation">exhibition</Link>
            <S.Dropdown>
              <li><Link to="/exhibition/gradation">그라데이션 전시회</Link></li>
              <li><Link to="/exhibition/university">대학교 전시회</Link></li>
              <li><Link to="/exhibition/university/registration">학교 신청</Link></li>
            </S.Dropdown>
          </S.MenuItem>

          <S.MenuItem>
            <Link to="/upcycling">upcycling</Link>
            <S.Dropdown>
              <li><Link to="/upcycling">업사이클</Link></li>
              <li><Link to="/upcycling/registration">업사이클 신청</Link></li>
            </S.Dropdown>
          </S.MenuItem>
        </S.Menu>

        <S.LoginSection>
          <img className="header-bell" src={`/assets/images/icon/bell.png`} alt="bell" />
          {isLogin ? (
            <S.SignInWrap>
              <span className="sign-in">{currentUser.userName}님</span>
              <S.Dropdown>
                <li><Link to="/mypage">마이페이지</Link></li>
                <li><Link to="/service-center/qna">고객센터</Link></li>
                <li><span onClick={onLogout}>로그아웃</span></li>
              </S.Dropdown>
            </S.SignInWrap>
          ) : (
            <S.SignInWrap>
              <Link to="/login" className="sign-in">sign in</Link>
            </S.SignInWrap>
          )}
        </S.LoginSection>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
