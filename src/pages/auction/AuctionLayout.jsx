import React from 'react';
import { Link, Navigate, Outlet, useParams, useSearchParams } from 'react-router-dom';
import S from './style';

const AuctionLayout = () => {

  const params = useParams()
  if(!(params.type === "bidding" || params.type === "expected" || params.type === "complete" || params.type === null)) {
    return <Navigate to="/auction/bidding/korean"></Navigate>
  }
  
  
  return (
    <div>
      <S.TypeWrapper>
        <Link to={"/auction/bidding/korean"}>경매중</Link>
         |
        <Link to={"/auction/expected/korean"}>경매 예정</Link>
         |
        <Link to={"/auction/complete/korean"}>경매 완료</Link> 
      </S.TypeWrapper>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuctionLayout;