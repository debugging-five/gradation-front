import React from 'react';
import { useLocation } from 'react-router-dom';
import S from './style';

const Header = ({ userName }) => {
  const location = useLocation();

  return (
    <S.Container>
      <S.Logo to="/">Gradation</S.Logo>

      <S.Nav>
        <S.MenuItem to="/display" className={location.pathname.includes('display') ? 'active' : ''}>display</S.MenuItem>
        <S.MenuItem to="/artist" className={location.pathname.includes('artist') ? 'active' : ''}>artist</S.MenuItem>
        <S.MenuItem to="/auction" className={location.pathname.includes('auction') ? 'active' : ''}>auction</S.MenuItem>
        <S.MenuItem to="/exhibition" className={location.pathname.includes('exhibition') ? 'active' : ''}>exhibition</S.MenuItem>
        <S.MenuItem to="/upcycle" className={location.pathname.includes('upcycle') ? 'active' : ''}>upcycle</S.MenuItem>
      </S.Nav>

      <S.RightMenu>
        <S.BellIcon src="/assets/images/icon/bell.png" alt="bell" />
        {userName ? (
          <S.UserMenu>
            <S.UserName>{userName}님</S.UserName>
            <S.Dropdown>
              <li><S.DropdownLink to="/mypage">마이페이지</S.DropdownLink></li>
              <li><S.DropdownLink to="/qna">고객센터</S.DropdownLink></li>
              <li><S.DropdownLink to="/logout">로그아웃</S.DropdownLink></li>
            </S.Dropdown>
          </S.UserMenu>
        ) : (
          <S.SignIn to="/login">sign in</S.SignIn>
        )}
      </S.RightMenu>
    </S.Container>
  );
};

export default Header;