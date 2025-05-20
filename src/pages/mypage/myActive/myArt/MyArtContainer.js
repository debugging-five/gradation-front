import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import * as S from '../../style';

const MyArtContainer = () => {
  const location = useLocation()
  const path = location.pathname;
  console.log(path)
  let title = ""
  if(path.includes("available-auction-art-list")){
    title = "경매 등록 가능작품"
  }else{
    title = "내 작품"
  }

  return (
    <S.MainWrapper>
      <S.MainTitle>내 활동 / {title}</S.MainTitle>
      <S.ChooseBarWapper>
        <S.ChooseBar as={NavLink} to="art-list" end>내 작품</S.ChooseBar>
        <S.ChooseBar as={NavLink} to="available-auction-art-list" end>경매 등록 가능작품</S.ChooseBar>
      </S.ChooseBarWapper>

      <div>
        <Outlet />
      </div>

    </S.MainWrapper>
  );
};

export default MyArtContainer;