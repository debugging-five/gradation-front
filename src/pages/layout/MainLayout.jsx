import React, { useRef } from 'react';
import S from './style';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

const MainLayout = () => {

  const footerRef = useRef(null);

  return (
    <S.Container>
      <Header />
      <S.Main>
        <Outlet context={{ footerRef }} />
      </S.Main>
      <Footer ref={footerRef} />
    </S.Container>
  );
};

export default MainLayout;