// 경매 여부와 시간을 가져오는 함수
const getTimeLeft = (startDate, endDate, now) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let isAuction = "";
  
  if(now < start){
    isAuction = "경매예정"
  }else if(now >= start && now <= end){
    isAuction = "경매중"
  }else {
    isAuction = "경매종료"
  }

  const StartDiff = start - now;
  const StartDays = Math.floor((StartDiff / 1000 / 60 / 60 / 24));
  const StartHours = Math.floor((StartDiff / 1000 / 60 / 60 ) % 24);
  const StartMinutes = Math.floor((StartDiff / 1000 / 60 ) % 60);
  const StartSeconds = Math.floor((StartDiff / 1000 ) % 60);
  
  const EndDiff = end - now;
  const EndDays = Math.floor((EndDiff / 1000 / 60 / 60 / 24));
  const EndHours = Math.floor((EndDiff / 1000 / 60 / 60 ) % 24);
  const EndMinutes = Math.floor((EndDiff / 1000 / 60 ) % 60);
  const EndSeconds = Math.floor((EndDiff / 1000 ) % 60);

  return {
    isAuction : isAuction,
    isExpected : {
      days : StartDays,
      hours : StartHours,
      minutes : StartMinutes,
      seconds : StartSeconds
    },
    isBidding : {
      days : EndDays,
      hours : EndHours,
      minutes : EndMinutes,
      seconds : EndSeconds
    },
  }
}

export default getTimeLeft;