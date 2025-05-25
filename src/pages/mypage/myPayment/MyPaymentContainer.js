import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import * as S from '../style';

const MyPaymentContainer = () => {
  const location = useLocation()
  const path = location.pathname;
  console.log(path)
  let title = ""
  if(path.includes("payment-list")){
    title = "구매 내역"
  }else{
    title = "경매 내역"
  }

  return (
    <S.MainWrapper>
      <S.MainTitle>내 결제내역 / {title}</S.MainTitle>
      <S.ChooseBarWapper>
        <S.ChooseBar as={NavLink} to="auction-list">경매 내역</S.ChooseBar>
        <S.ChooseBar as={NavLink} to="payment-list">구매 내역</S.ChooseBar>
      </S.ChooseBarWapper>

      <div>
        <Outlet />
      </div>
      
    </S.MainWrapper>
  );
};

export default MyPaymentContainer;