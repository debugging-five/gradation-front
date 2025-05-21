import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import * as S from '../../style';
const ArtLikeContainer = () => {
  const location = useLocation()
  const path = location.pathname;
  console.log(path)
  let title = ""
  if(path.includes("university")){
    title = "전시회 좋아요"
  }else{
    title = "작품 좋아요"
  }

  return (
    <S.MainWrapper>
      <S.MainTitle>내 활동 / {title}</S.MainTitle>
      <S.ChooseBarWapper>
        <S.ChooseBar as={NavLink} to="art" end>작품 좋아요</S.ChooseBar>
        <S.ChooseBar as={NavLink} to="university" end>전시회 좋아요</S.ChooseBar>
      </S.ChooseBarWapper>

      <div>
        <Outlet />
      </div>

    </S.MainWrapper>
  );
};

export default ArtLikeContainer;