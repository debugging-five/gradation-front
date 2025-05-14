import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ChooseBar, ChooseBarWapper, MainTitle, MainWrapper } from '../../style';

const ContactArtistContainer = () => {
  return (
    <MainWrapper>
      <MainTitle>내 활동 / 작가와 연락</MainTitle>
      <ChooseBarWapper>
        <ChooseBar as={NavLink} to="received" end>쪽지 수신함</ChooseBar>
        <ChooseBar as={NavLink} to="sended" end>내가 보낸 쪽지</ChooseBar>
      </ChooseBarWapper>
      <div>
        <Outlet />
      </div>
    </MainWrapper>
  );
};

export default ContactArtistContainer;