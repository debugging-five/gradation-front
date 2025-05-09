import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MainWrapper } from '../../style';

const ContactArtistContainer = () => {
  return (
    <MainWrapper>
      <p>내활동 / 작가와 연락</p>
      <div>
        {/* 임시 */}
        <NavLink to={"sended"}>쪽지 수신함</NavLink>
        <NavLink to={"received"}>내가 보낸 쪽지</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </MainWrapper>
  );
};

export default ContactArtistContainer;