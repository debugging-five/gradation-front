import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import { useSelector } from 'react-redux';

const Header = ({ onLogout }) => {

  const { currentUser, isLogin } = useSelector((state) => state.user);

  return (
    <S.Header>
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
            <Link to="/auction/bidding">auction</Link>
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
                <li><Link to="/mypage/service-center/qna">고객센터</Link></li>
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
