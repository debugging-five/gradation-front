import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <S.FooterWrap>
      <S.FooterInner>
        <S.FooterMenu>
          <S.Menu>
            <p className="menu-wrap">주요 기능</p>
            <p><S.Link className='menu' to="/display">작품 모아보기</S.Link></p>
            <p><S.Link className='menu' to="/artist">작가</S.Link></p>
            <p><S.Link className='menu' to="/auction/bidding/korean">경매</S.Link></p>
            <p><S.Link className='menu' to="/exhibition/gradation">전시회</S.Link></p>
            <p><S.Link className='menu' to="/upcycling">업사이클링</S.Link></p>
          </S.Menu>

          <S.Menu>
            <p className="menu-wrap">고객 지원</p>
            <p><S.Link className='menu' to="/service-center/qna">1 : 1 문의하기</S.Link></p>
            <p><S.Link className='menu' to="/service-center/faq">자주 묻는 질문</S.Link></p>
          </S.Menu>

          <S.Menu>
            <p className="menu-wrap">기업 소개</p>
            <p><S.Link className='menu' to="/">그라데이션</S.Link></p>
          </S.Menu>

          <S.IconWrap>
            <a href="https://www.instagram.com/gradationOfficial" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/icon/instagram.png" alt="instagram" />
            </a>
            <a href="https://www.facebook.com/gradationOfficial" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/icon/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.youtube.com/gradationOfficial" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/icon/youtube.png" alt="youtube" />
            </a>
          </S.IconWrap>
        </S.FooterMenu>

        <S.FooterInfoWrap>
          <S.FooterInfo>
            <p>상호명 (주)Gradation | 대표 : 서민아 | 개인정보관리책임자 : 김동건 | 사업자 등록번호 : 123-456-7890 | 통신판매업신고번호 : 제 2025-IT아카데미-1008 | 본사 : 서울시 강남구 테헤란로146, 3층</p>
            <p>이용약관 | 개인정보처리방침 | 고객지원 : 이메일(rlaehdrjs@naver.com)</p>
          </S.FooterInfo>
          <S.FooterLogoWrap>
            <Link to="/">
              <S.FooterLogo src="/assets/images/icon/logo.png" alt="Gradation" />
            </Link>
          </S.FooterLogoWrap>
        </S.FooterInfoWrap>
      </S.FooterInner>
    </S.FooterWrap>
  );
};

export default Footer;