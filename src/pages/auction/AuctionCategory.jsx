import React from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import S from './style';

const AuctionCategory = () => {

  const pathName = useLocation().pathname
  const type = pathName.split("/")[2]
  const params = useParams()
  const navigate = useNavigate();

  const goKorean = () => {
    navigate(`/auction/${type}/korean`);
  }
  const goSculpture = () => {
    navigate(`/auction/${type}/sculpture`);
  }
  const goCraft = () => {
    navigate(`/auction/${type}/craft`);
  }
  const goArchitecture = () => {
    navigate(`/auction/${type}/architecture`);
  }
  const goCalligraphy = () => {
    navigate(`/auction/${type}/calligraphy`);
  }
  const goPainting = () => {
    navigate(`/auction/${type}/painting`);
  }
  
  

  return (
    <div>
      <S.CategoryWrapper>
        <S.TypeDiv>
          {params.category === "korean"? 
            <S.SelectedRed>한국화</S.SelectedRed> : 
            <S.UnSelectedType onClick={goKorean}>한국화</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {params.category === "sculpture"? 
            <S.SelectedRed>조각</S.SelectedRed> : 
            <S.UnSelectedType onClick={goSculpture}>조각</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {params.category === "craft"? 
            <S.SelectedRed>공예</S.SelectedRed> : 
            <S.UnSelectedType onClick={goCraft}>공예</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {params.category === "architecture"? 
            <S.SelectedRed>건축</S.SelectedRed> : 
            <S.UnSelectedType onClick={goArchitecture}>건축</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {params.category === "calligraphy"? 
            <S.SelectedRed>서예</S.SelectedRed> : 
            <S.UnSelectedType onClick={goCalligraphy}>서예</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {params.category === "painting"? 
            <S.SelectedRed>회화</S.SelectedRed> : 
            <S.UnSelectedType onClick={goPainting}>회화</S.UnSelectedType>
          }
        </S.TypeDiv>
      </S.CategoryWrapper>
      <div>
        <Link to={"/auction/agreement"}>이용약관</Link>
        검색
      </div>
      <Outlet />
    </div>
  );
};

export default AuctionCategory;