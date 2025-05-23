import React, { useEffect, useState } from 'react';
import getTimeLeft from '../_function/getTimeLeft';
import S from './style';
import { Navigate } from 'react-router-dom';

const AuctionBiddingPopupTime = ({id, auctionStartDate, auctionEndDate, auctionBidDate}) => {

  const isComplete = !!auctionBidDate;

  // 1초마다 시간을 비교 화면에서 자식컴포넌트 리랜더링
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(auctionStartDate, auctionEndDate, new Date()))
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(auctionStartDate, auctionEndDate, new Date()))
    }, 1000);

    return () => clearInterval(timer)
  }, [])

  
  const { isAuction, isBidding } = timeLeft;
  const { days, hours, minutes, seconds } = isBidding; 
  
  if(isAuction === "경매예정"){
    return <Navigate to={`/auction/bidding/korean/detail/${id}`} />
  }
  
  if(isComplete){
    return <Navigate to={`/auction/complete/korean/detail/${id}`} />
  }
  
  return (
    <>
      <S.H4>마감시간</S.H4>
      <S.RedH4>{`${days}일 ${hours}시 ${minutes}분 ${seconds}초`}</S.RedH4>
    </>
  );
};

export default AuctionBiddingPopupTime;