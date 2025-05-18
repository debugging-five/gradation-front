import React from 'react';
import { Link, Navigate, Outlet, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import S from './style';

const AuctionLayout = () => {

  const params = useParams()
  const navigate = useNavigate();
  if(!(params.type === "bidding" || params.type === "expected" || params.type === "complete" || params.type === null)) {
    return <Navigate to="/auction/bidding/korean"></Navigate>
  }

  const goBidding = () => {
    navigate(`/auction/bidding/korean`);
  }
  const goExpected = () => {
    navigate(`/auction/expected/korean`);
  }
  const goComplete = () => {
    navigate(`/auction/complete/korean`);
  }

  
  
  return (
    <div>
      <S.TypeWrapper>
        <S.TypeDiv>
          {params.type === "bidding"? 
            <S.SelectedRed>경매중</S.SelectedRed> : 
            <S.UnSelectedType onClick={goBidding} >경매중</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {params.type === "expected"? 
            <S.SelectedRed>경매예정</S.SelectedRed> : 
            <S.UnSelectedType onClick={goExpected} >경매예정</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {params.type === "complete"? 
            <S.SelectedRed>경매결과</S.SelectedRed> : 
            <S.UnSelectedType onClick={goComplete} >경매결과</S.UnSelectedType>
          }
        </S.TypeDiv> 
      </S.TypeWrapper>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuctionLayout;