import { useEffect, useState } from "react";
import S from "./style";
import dayjs from "dayjs";
import { Navigate, useNavigate } from "react-router-dom";

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

  useEffect(() => {
    const fetchAuction = async () => {
      const response = await fetch(`http://localhost:10000/auction/api/detail/${id}`);
      const auction = await response.json();
      setAuction(auction);
      setData(auction[0]);
    };
    fetchAuction();
  },[id])

  const backToList = () => {
		navigate(`../complete/${category}`);
	}

  if (auction.length !== 0){

    const biddingDate = new Date(data.auctionStartDate);
		const dataCategory = categoryMap.get(data.artCategory);
    if(category !== dataCategory) {
      return <Navigate to={`/auction/bidding/${dataCategory}/detail/${id}`} state={{message: "잘못된 접근"}} replace={true} />
    }
		if(biddingDate > new Date()) {
			return <Navigate to={`/auction/expected/${category}/detail/${id}`} state={{message: "잘못된 접근"}} replace={true} />
		}
		
		if(biddingDate < new Date() && !data.auctionBidDate){
			return <Navigate to={`/auction/bidding/${category}/detail/${id}`} state={{message: "잘못된 접근"}} replace={true} />
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
              <S.Title>{data.artTitle}{data.auctionAttracted?<S.H2Red>{" <낙찰>"}</S.H2Red> : <S.H2Gray500>{" <유찰>"}</S.H2Gray500>}</S.Title>
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
                <S.H5>마감일</S.H5>
                <S.H7>{dayjs(data.auctionStartDate).add(3, 'day').format('YYYY-MM-DD HH:mm:ss')}</S.H7>
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
            {data.auctionAttracted? 
              <S.AuctionInfo3>
                <S.AuctionInfo3Detail>
                  <S.H3Gray900>판매완료된 작품입니다.</S.H3Gray900>
                </S.AuctionInfo3Detail>
                
                <S.AuctionInfo3Detail>
                  <S.H3Gray900>낙찰가</S.H3Gray900>
                </S.AuctionInfo3Detail>
                
                <S.Notice>
                  <S.EnH2Red>{data?.auctionBidPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} KRW</S.EnH2Red>
                  <S.ListButton onClick={backToList}>목록으로</S.ListButton>
                </S.Notice>
              </S.AuctionInfo3>
              :
              <S.AuctionInfo3>

                <S.AuctionInfo3Detail>
                  <S.H3Gray500>유찰된 작품입니다.</S.H3Gray500>
                </S.AuctionInfo3Detail>
                
                <S.AuctionInfo3Detail>
                  <S.H3Gray500>낙찰가</S.H3Gray500>
                </S.AuctionInfo3Detail>
                
                <S.Notice>
                  <S.H2Gray500>-</S.H2Gray500>
                  <S.ListButton onClick={backToList}>목록으로</S.ListButton>
                </S.Notice>
              </S.AuctionInfo3>
            }
            
          </S.AuctionInfo>
        </S.AuctionDetail>
      </S.Wrapper>
    );
  }
  return null;
};

export default AuctionCompleteDetail;