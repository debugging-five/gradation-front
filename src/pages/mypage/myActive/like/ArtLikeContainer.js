import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ChooseBar, ChooseBarWapper, MainTitle, MainWrapper } from '../../style';

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
    <MainWrapper>
      <MainTitle>내 활동 / {title}</MainTitle>
      <ChooseBarWapper>
        <ChooseBar as={NavLink} to="art" end>작품 좋아요</ChooseBar>
        <ChooseBar as={NavLink} to="university" end>전시회 좋아요</ChooseBar>
      </ChooseBarWapper>

      <div>
        <Outlet />
      </div>

    </MainWrapper>
  );
};

export default ArtLikeContainer;