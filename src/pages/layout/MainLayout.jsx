import React from 'react';
import S from './style';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

const MainLayout = () => {
  return (
    <S.Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </S.Container>
  );
};

export default MainLayout;