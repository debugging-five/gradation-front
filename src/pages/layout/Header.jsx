// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const Header = ({ userName }) => {
  return (
    <S.Header>
      <S.Nav>
        <S.HeaderLogoWrap>
          <Link to="/">
            <S.HeaderLogo src={`${process.env.PUBLIC_URL}/assets/images/icon/logo.png`} alt="Gradation" />
          </Link>
        </S.HeaderLogoWrap>

        <S.Menu>
          <S.MenuItem>
            <Link to="/display/ing">display</Link>
            <S.Dropdown>
              <li><Link to="/display/ing">전시 중인 작품</Link></li>
              <li><Link to="/display/coming">전시 예정인 작품</Link></li>
            </S.Dropdown>
          </S.MenuItem>

          <S.MenuItem><Link to="/artist">artist</Link></S.MenuItem>

          <S.MenuItem>
            <Link to="/auction/bidding">auction</Link>
            <S.Dropdown>
              <li><Link to="/auction/bidding">경매중</Link></li>
              <li><Link to="/auction/coming">경매 예정</Link></li>
              <li><Link to="/auction/complete">경매 완료</Link></li>
            </S.Dropdown>
          </S.MenuItem>

          <S.MenuItem>
            <Link to="/exhibition/gradation">exhibition</Link>
            <S.Dropdown>
              <li><Link to="/exhibition/gradation">그라데이션 전시회</Link></li>
              <li><Link to="/exhibition/university">대학교 전시회</Link></li>
              <li><Link to="/exhibition/form">학교 신청</Link></li>
            </S.Dropdown>
          </S.MenuItem>

          <S.MenuItem>
            <Link to="/upcycling">upcycling</Link>
            <S.Dropdown>
              <li><Link to="/upcycling">업사이클</Link></li>
              <li><Link to="/upcycling/form">업사이클 신청</Link></li>
            </S.Dropdown>
          </S.MenuItem>
        </S.Menu>

        <S.LoginSection>
          <img className="header-bell" src={`${process.env.PUBLIC_URL}/assets/images/icon/bell.png`} alt="bell" />
          {userName ? (
            <S.SignInWrap>
              <span className="sign-in">{userName}님</span>
              <S.Dropdown>
                <li><Link to="/mypage">마이페이지</Link></li>
                <li><Link to="/mypage/qna">고객센터</Link></li>
                <li><Link to="/logout">로그아웃</Link></li>
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
