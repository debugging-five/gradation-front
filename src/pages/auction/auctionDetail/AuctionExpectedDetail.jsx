import { useEffect, useMemo, useState } from "react";
import S from "./style";
import dayjs from "dayjs";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuctionCompleteDetail = ({type, category, id}) => {
  const [auction, setAuction] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const categoryMap = new Map([
		["한국화", "korean"],
		["회화", "painting"],
		["건축", "architecture"],
		["조각", "sculpture"],
		["서예", "calligraphy"],
		["공예", "craft"]
  ]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchAuction = async () => {
      const response = await fetch(`http://localhost:10000/auction/api/detail/${id}`);
      const auction = await response.json();
      console.log(auction);
      if(auction.length === 0) {
        navigate("/auction")
        return
      }
      setAuction(auction);
      setData(auction[0]);
    };
    fetchAuction();
  },[id])
  
  const baseDate = useMemo(() => {
    return new Date(data.auctionStartDate)
  }, [data.auctionStartDate]);

  const [timeLeft, setTimeLeft] = useState(baseDate - new Date());
  
  const formatTime = (ms) => {
		const totalSeconds = Math.floor(ms / 1000);
		const days = Math.floor(totalSeconds / (60 * 60 * 24));
		const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
		const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
		const seconds = totalSeconds % 60;
		return `${days}일 ${hours}시 ${minutes}분 ${seconds.toString().padStart(2, "0")}초`;
	};
  
  


  useEffect(() => {
      const interval = setInterval(() => {
        const diff = baseDate - new Date();
        if (diff <= 0) {
          clearInterval(interval);
          setTimeLeft(0)
          alert("경매가 시작되었습니다.");
          navigate(window.location.href = `/auction/bidding/${category}/detail/${id}`, { replace: true });
        } else {
          setTimeLeft(diff);
        }
      }, 1000); // 1초마다 갱신
  
      return () => clearInterval(interval);
    }, [baseDate, category, id, navigate, timeLeft])

  const backToList = () => {
		navigate(`../expected/${category}`);
	}
  
  const remove = async () => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm("예정된 경매를 삭제하시겠습니까?")){
      await fetch(`http://localhost:10000/auction/api/delete/${data.id}`, {
        method: 'DELETE',
      });
      alert("경매가 삭제되었습니다");
      navigate(`../expected/${category}`, { replace: true });
    };
  }

  const modify = () => {
    navigate(`../expected/${category}/modify/${id}`)
  }

  if (auction.length !== 0){

    const biddingDate = new Date(data.auctionStartDate);
		const dataCategory = categoryMap.get(data.artCategory);
    if(category !== dataCategory) {
      return <Navigate to={`/auction/expected/${dataCategory}/detail/${data.id}`} state={{message: "잘못된 접근"}} replace={true} />
    }
		if(data.auctionBidDate){
      return <Navigate to={`/auction/complete/${dataCategory}/detail/${data.id}`} state={{message: "잘못된 접근"}} replace={true} />
    }
		
		if(biddingDate < new Date() && !data.auctionBidDate){
			return <Navigate to={`/auction/bidding/${category}/detail/${data.id}`} state={{message: "잘못된 접근"}} replace={true} />
		}

    return (
      <S.Wrapper>
        <S.AuctionDetail>
        
          <S.ImgWrapper>
            <S.AuctionImg src={`http://localhost:10000/files/api/get/${data.artImgName}?filePath=${data.artImgPath}`} alt="경매 작품" />
          </S.ImgWrapper>
          
          <S.AuctionInfo>
            {/* <!-- 경매 정보1 --> */}
            <S.AuctionInfo1>
              <S.TitleWrapper>
                <S.Title>{data.artTitle}</S.Title>
                {currentUser && data.artistId === currentUser.id?
                <S.TitleButtonWrapper>
                  <S.TitleButton1 onClick={modify}>수정하기</S.TitleButton1>
                  <S.TitleButton2 onClick={remove}>삭제하기</S.TitleButton2>
                </S.TitleButtonWrapper>
                : <></>}
              </S.TitleWrapper>
              <S.Artist>
                <S.H3>작가명</S.H3>
                <S.H3>|</S.H3>
                <S.H3>{data.artistName}</S.H3>
              </S.Artist>
            
            <S.Etc>
              <S.EtcP>{data.artMaterial}</S.EtcP>
              <S.EtcP>{data.artSize}</S.EtcP>
              <S.EtcP>{data.artEndDate.split('-')[0]}년</S.EtcP>
            </S.Etc>						
            </S.AuctionInfo1>

            
            {/* <!-- 경매 정보2 --> */}
            <S.AuctionInfo2>
              <S.AuctionInfo2Detail>
                <S.H5>경매 개시</S.H5>
                <S.H7>{dayjs(data.auctionStartDate).format('YYYY-MM-DD HH:mm:ss')}</S.H7>
              </S.AuctionInfo2Detail>
              <S.AuctionInfo2Detail>
                <S.H5>추정가</S.H5>
                <S.H7>KRW {data?.auctionEstimatedMinPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ~ {data?.auctionEstimatedMaxPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H7>
              </S.AuctionInfo2Detail>
              <S.AuctionInfo2Detail>
                <S.H5>시작가</S.H5>
                <S.H7>KRW {data?.auctionStartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H7>
              </S.AuctionInfo2Detail>
            </S.AuctionInfo2>
            
            {/* <!-- 경매 정보3 --> */}
            <S.AuctionInfo3>
              <S.AuctionInfo3Detail>
                <S.H2>경매 시작</S.H2>
                <S.H2>{isNaN(timeLeft) ? "로딩중" : formatTime(timeLeft)}</S.H2>
              </S.AuctionInfo3Detail>
              
              <S.Notice>
                <S.H2Gray500>준비중인 작품입니다</S.H2Gray500>
                <S.ListButton onClick={backToList}>목록으로</S.ListButton>
              </S.Notice>
            </S.AuctionInfo3>
            
          </S.AuctionInfo>
        </S.AuctionDetail>
      </S.Wrapper>
    );
  }
  return null;
};

export default AuctionCompleteDetail;