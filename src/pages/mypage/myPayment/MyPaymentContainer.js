import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyPaymentContainer = () => {
  return (
    <div>
      <p>내 결제내역 / (경매 / 구매) 내역</p>
      <div>
        <NavLink to={"auction-list"}>경매 내역</NavLink>
        <NavLink to={"payment-list"}>구매 내역</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MyPaymentContainer;