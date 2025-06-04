import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import S from './style';
import { useSelector } from 'react-redux';

const Header = ({ onLogout }) => {
  const { currentUser, isLogin } = useSelector((state) => state.user);
  const [ latestPastId, setLatestPastId ] = useState();

  // 스크롤
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollTop = useRef(0); // 스크롤 위치를 저장
  const delta = 5; // 민감도

  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

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

  useEffect(() => {
    const fetchLatestPastExhibition = async () => {
      const res = await fetch('http://localhost:10000/exhibitions/api/gradation/past');
      const data = await res.json();
      if (data?.exhibitions?.length > 0) {
        setLatestPastId(data.exhibitions[0].id);
      }
    };
    fetchLatestPastExhibition();
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

          <S.MenuItemWrapper
            onMouseEnter={() => setOpenMenu(0)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <S.MenuItem>
              <S.MenuLink to="/display/korean">display</S.MenuLink>
            </S.MenuItem>
            {openMenu === 0 && (
              <S.Dropdown>
                <li><S.DropdownLink to="/display/korean">전시 중인 작품</S.DropdownLink></li>
                <li><S.DropdownLink to="/display/registration">작품 업로드</S.DropdownLink></li>
              </S.Dropdown>
            )}
          </S.MenuItemWrapper>

          <S.MenuItem><S.MenuLink to="/artist/korean">artist</S.MenuLink></S.MenuItem>

          <S.MenuItemWrapper
            onMouseEnter={() => setOpenMenu(1)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <S.MenuItem>
              <S.MenuLink to="/auction/bidding/korean">auction</S.MenuLink>
            </S.MenuItem>
            {openMenu === 1 && (
              <S.Dropdown>
                <li><S.DropdownLink to="/auction/bidding/korean">경매중</S.DropdownLink></li>
                <li><S.DropdownLink to="/auction/expected/korean">경매 예정</S.DropdownLink></li>
                <li><S.DropdownLink to="/auction/complete/korean">경매 완료</S.DropdownLink></li>
              </S.Dropdown>
            )}
          </S.MenuItemWrapper>

          <S.MenuItemWrapper
            onMouseEnter={() => setOpenMenu(2)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <S.MenuItem>
              <S.MenuLink to="/exhibition/gradation">exhibition</S.MenuLink>
            </S.MenuItem>
              {openMenu === 2 && (
                <S.Dropdown>
                  <li><S.DropdownLink to="/exhibition/gradation">그라데이션 전시회</S.DropdownLink></li>
                  <li><S.DropdownLink to={`/exhibition/gradation/past/${latestPastId}`} $sub>지난 전시회</S.DropdownLink></li>
                  <li><S.DropdownLink to="/exhibition/university">대학교 전시회</S.DropdownLink></li>
                  <li><S.DropdownLink to="/exhibition/university/registration">학교 신청</S.DropdownLink></li>
                </S.Dropdown>
              )}
          </S.MenuItemWrapper>

          <S.MenuItemWrapper
            onMouseEnter={() => setOpenMenu(3)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <S.MenuItem>
              <S.MenuLink to="/upcycling">upcycling</S.MenuLink>
            </S.MenuItem>
            {openMenu === 3 && (
              <S.Dropdown>
                <li><S.DropdownLink to="/upcycling">업사이클</S.DropdownLink></li>
                <li><S.DropdownLink to="/upcycling/registration">업사이클 신청</S.DropdownLink></li>
              </S.Dropdown>
            )}
          </S.MenuItemWrapper>
        </S.Menu>

        <S.LoginSection>
          <S.BellWrap>
            <S.BellIcon className="header-bell" src={`/assets/images/icon/bell.png`} alt="bell" />
          </S.BellWrap>

          {isLogin ? (
            <S.MenuItemWrapper
              onMouseEnter={() => setOpenMenu(4)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <S.SignInWrap>
                <span className="sign-in">{currentUser.userNickName || currentUser.userName}님</span>
                {openMenu === 4 && (
                  <S.Dropdown>
                    <li><S.DropdownLink to="/mypage">마이페이지</S.DropdownLink></li>
                    <li><S.DropdownLink to="/service-center/qna">고객센터</S.DropdownLink></li>
                    <li><S.DropdownSpan onClick={onLogout}>로그아웃</S.DropdownSpan></li>
                  </S.Dropdown>
                )}
              </S.SignInWrap>
            </S.MenuItemWrapper>
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
