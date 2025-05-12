import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ChooseBar, ChooseBarWapper, MainTitle, MainWrapper } from '../style';

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
    <MainWrapper>
      <MainTitle>내 결제내역 / {title}</MainTitle>
      <ChooseBarWapper>
        <ChooseBar as={NavLink} to="auction-list" end>경매 내역</ChooseBar>
        <ChooseBar as={NavLink} to="payment-list" end>구매 내역</ChooseBar>
      </ChooseBarWapper>

      <div>
        <Outlet />
      </div>
      
    </MainWrapper>
  );
};

export default MyPaymentContainer;