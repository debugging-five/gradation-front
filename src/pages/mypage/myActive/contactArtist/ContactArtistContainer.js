import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import * as S from '../../style';

const ContactArtistContainer = () => {
  return (
    <S.MainWrapper>
      <S.MainTitle>내 활동 / 작가와 연락</S.MainTitle>
      <S.ChooseBarWapper>
        <S.ChooseBar as={NavLink} to="received" end>쪽지 수신함</S.ChooseBar>
        <S.ChooseBar as={NavLink} to="sended" end>내가 보낸 쪽지</S.ChooseBar>
      </S.ChooseBarWapper>
      <div>
        <Outlet />
      </div>
    </S.MainWrapper>
  );
};

export default ContactArtistContainer;