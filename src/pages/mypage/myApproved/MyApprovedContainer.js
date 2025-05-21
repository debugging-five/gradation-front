import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from '../style';

const MyApprovedContainer = () => {
  return (
    <S.MainWrapper>
      <S.MainTitle>내 활동 / 내 승인내역</S.MainTitle>
      
      <Outlet />
    </S.MainWrapper>
  );
};

export default MyApprovedContainer;