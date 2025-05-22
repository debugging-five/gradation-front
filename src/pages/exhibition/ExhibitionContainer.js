import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import S from './style';

const ExhibitionContainer = () => {

    const exhibition = useLocation();
    const navigate = useNavigate();

    const gradationExhibition = () => {
      navigate(`/exhibition/gradation`);
    }
    const universityExhibition = () => {
      navigate(`/exhibition/university`);
    }

    const isGradation = exhibition.pathname.includes("gradation");
    const isUniversity = exhibition.pathname.includes("university");

  // const id = 1;

  return (
    <div>
    <S.Wrapper>
        <S.EN_H2>exhibition</S.EN_H2>
        <S.CategoryWrapper>
          <S.TypeDiv>
            {isGradation ? (
              <S.SelectedRed>그라데이션 전시회</S.SelectedRed> 
            ) : ( 
              <S.UnSelectedType onClick={gradationExhibition}>그라데이션 전시회</S.UnSelectedType>
            )}
          </S.TypeDiv>
          <S.Bar>|</S.Bar>
          <S.TypeDiv>
            {isUniversity ? (
              <S.SelectedRed>대학교 전시회</S.SelectedRed>
            ) : (
              <S.UnSelectedType onClick={universityExhibition}>대학교 전시회</S.UnSelectedType>
            )}
          </S.TypeDiv>
        </S.CategoryWrapper>

        <Outlet />
    </S.Wrapper>
      {/* <p>일반 사용자</p> */}
      {/* {id === 1 && (
        <p>어드민 일 때</p>
      )} */}

    </div>
  );
};

export default ExhibitionContainer;