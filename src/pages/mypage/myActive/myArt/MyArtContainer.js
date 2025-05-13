import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ChooseBar, ChooseBarWapper, MainTitle, MainWrapper } from '../../style';

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
    <MainWrapper>
      <MainTitle>내 활동 / {title}</MainTitle>
      <ChooseBarWapper>
        <ChooseBar as={NavLink} to="art-list" end>내 작품</ChooseBar>
        <ChooseBar as={NavLink} to="available-auction-art-list" end>경매 등록 가능작품</ChooseBar>
      </ChooseBarWapper>

      <div>
        <Outlet />
      </div>

    </MainWrapper>
  );
};

export default MyArtContainer;