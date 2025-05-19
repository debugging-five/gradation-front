import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import S from './style';

const DisplayContainer = () => {
  return (
    <S.Container>
      <S.Link to="/display">
        <S.EN_H2>display</S.EN_H2>
      </S.Link>
        <Outlet />
    </S.Container>
  );
};

export default DisplayContainer;