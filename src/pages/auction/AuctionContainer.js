import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import S from './style';

const AuctionContainer = () => {
  return (
    <S.Wrapper>
      <S.EN_H2>auction</S.EN_H2>
      <Outlet />
      
    </S.Wrapper>
  );
};

export default AuctionContainer;
