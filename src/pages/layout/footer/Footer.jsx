import React from 'react';
import S from './style';

const Footer = () => {
  return (
    <S.FooterWrap>
      <S.FooterInner>
        <S.FooterMenu>
          <S.Menu>
            <p className="menu-wrap">주요 기능</p>
            <p><a href="/display">작품 모아보기</a></p>
            <p><a href="/artist">작가</a></p>
            <p><a href="/auction">경매</a></p>
            <p><a href="/exhibition/gradation">전시회</a></p>
            <p><a href="/upcycling">업사이클링</a></p>
          </S.Menu>

          <S.Menu>
            <p className="menu-wrap">고객 지원</p>
            <p><a href="/mypage/service-center/qna">1 : 1 문의하기</a></p>
            <p><a href="/mypage/service-center/faq">자주 묻는 질문</a></p>
          </S.Menu>

          <S.Menu>
            <p className="menu-wrap">기업 소개</p>
            <p><a href="/exhibition/gradation">그라데이션</a></p>
          </S.Menu>

          <S.IconWrap>
            <a className="icon" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-facebook fa-2xl"></i>
            </a>
            <a className="icon" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </a>
            <a className="icon" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube fa-2xl"></i>
            </a>
          </S.IconWrap>
        </S.FooterMenu>

        <S.FooterInfoWrap>
          <S.FooterInfo>
            <p id="info1">상호명 (주)Gradation | 대표 : 서민아 | 개인정보관리책임자 : 김동건 | 사업자 등록번호 : 123-456-7890 | 통신판매업신고번호 : 제 2025-IT아카데미-1008 | 본사 : 서울시 강남구 테헤란로146, 3층</p>
            <p id="info2">이용약관 | 개인정보처리방침 | 고객지원 : 이메일(rlaehdrjs@naver.com)</p>
          </S.FooterInfo>
          <S.FooterLogoWrap>
            <a href="/">
              <S.FooterLogo src="/assets/images/layout/footer/footerLogo.png" alt="footerLogo" />
            </a>
          </S.FooterLogoWrap>
        </S.FooterInfoWrap>
      </S.FooterInner>
    </S.FooterWrap>
  );
};

export default Footer;