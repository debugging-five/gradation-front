import React, { useEffect, useState } from 'react';
import S from './style';
import getTimeLeft from './_function/getTimeLeft';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import endBidding from './_function/endBidding';

// 상태만 업데이트
const AuctionTime = ({id, auctionStartDate, auctionEndDate, auctionBidDate}) => {
  const navigate = useNavigate();
  const isComplete = !!auctionBidDate;

  // 1초마다 시간을 비교 화면에서 자식컴포넌트 리랜더링
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(auctionStartDate, auctionEndDate, new Date()))
  useEffect(() => {
    setTimeLeft(getTimeLeft(auctionStartDate, auctionEndDate, new Date()));
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(auctionStartDate, auctionEndDate, new Date()))
    }, 1000);

    return () => clearInterval(timer)
  }, [id])

  const { isAuction, isBidding, isExpected } = timeLeft;
  
  const { days, hours, minutes, seconds } = isBidding; 
  if(isAuction === "경매중" && days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    alert("경매가 종료되었습니다!")
    endBidding(id).then(() => {
      return <Navigate to={`/auction/complete/korean/detail/${id}`} />
    })
  }

  if(isAuction === "경매종료" && (days < 0)) {
    navigate(0)
  }

  if(isAuction === "경매예정"){
    const { days, hours, minutes, seconds } = isExpected;
    return (
       <S.Deadline>
          <S.H2>경매시작</S.H2>
          <S.H2>{`${days}일 ${hours}시 ${minutes}분 ${seconds}초`}</S.H2>
      </S.Deadline>
    );
  }
  
  if(isComplete){
    return <Navigate to={`/auction/complete/korean/detail/${id}`} />
  }
  
  return (
       <S.Deadline>
          <S.H2>마감시간</S.H2>
          <S.H2>{`${days}일 ${hours}시 ${minutes}분 ${seconds}초`}</S.H2>
      </S.Deadline>
  );
};

export default AuctionTime;