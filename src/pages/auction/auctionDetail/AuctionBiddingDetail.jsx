import React, { use, useEffect, useState } from 'react';
import S from './style';
import { Navigate, useNavigate } from 'react-router-dom';
import AuctionPopup from './AuctionBiddingPopup/AuctionModal';
const AuctionBiddingDetail = ({type, category, id}) => {
	
	// console.log(id);
	const [auction, setAuction] = useState([]);
	const [bidding, setBidding] = useState([]);
	const [data, setData] = useState([]);
	const navigate = useNavigate();
	const [openBidding, setOpenBidding] = useState(false);

	useEffect(() => {
		const fetchAuction = async () => {
			const response = await fetch(`http://localhost:10000/auction/api/detail/${id}`);
			const auction = await response.json();
			setAuction(auction);
			setData(auction[0]);
		};
		fetchAuction();

		const fetchBidding = async () => {
			const response = await fetch(`http://localhost:10000/auction/api/read-bidder/${id}`);
			const bidder = await response.json();
			setBidding(bidder);
		}
		fetchBidding();
	}, []);

	const popup = () => {
		setOpenBidding(true);
	}
	const popupAuto = () => {
		
	}
	const backToList = () => {
		navigate("../");
	}

	
	
	console.log(auction);
	if(auction.length !== 0) {
		const biddingDate = new Date(data.auctionStartDate);
		console.log(bidding);
		
		if(biddingDate > new Date()) {
			return <Navigate to={`/auction/expected/${category}/detail/${id}`} state={{message: "잘못된 접근"}} replace={true} />
		}
		
		if(data.auctionBidDate){
			return <Navigate to={`/auction/complete/${category}/detail/${id}`} state={{message: "잘못된 접근"}} replace={true} />
		}
		
		return (
			<S.Wrapper>
				<S.AuctionDetail>
				{/* <!-- 경매 작품 사진--> */}
					<S.ImgWrapper>
						<S.AuctionImg src={`http://localhost:10000/files/api/get/${auction[0].artImgName}?filePath=${auction[0].artImgPath}`} alt="경매 작품" />
					</S.ImgWrapper>
				
				{/* <!-- 경매 정보 --> */}
					<S.AuctionInfo>
						{/* <!-- 경매 정보1 --> */}
						<S.AuctionInfo1>
							<S.Title>{data.artTitle}</S.Title>
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
								<S.H7>2025 . 01 . 21 . 8:00:00</S.H7>
							</S.AuctionInfo2Detail>
							<S.AuctionInfo2Detail>
								<S.H5>추정가</S.H5>
								<S.H7>KRW {data.auctionEstimatedMinPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ~ {data.auctionEstimatedMaxPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H7>
							</S.AuctionInfo2Detail>
							<S.AuctionInfo2Detail>
								<S.H5>시작가</S.H5>
								<S.H7>KRW {data.auctionStartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H7>
							</S.AuctionInfo2Detail>
						</S.AuctionInfo2>
						
						{/* <!-- 경매 정보3 --> */}
						<S.AuctionInfo3>
							<S.Deadline>
									<S.H2>마감시간</S.H2>
									<S.H2>4일 4시간 44분 44초</S.H2>
							</S.Deadline>
							
							<S.PriceWrapper>
								<S.CurrentPrice>
										<S.H3>현재 입찰가</S.H3>
										<S.H3>KRW {(bidding.auctionBiddingPrice || '-').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H3>
								</S.CurrentPrice>
								<S.MinPrice>
										<S.H3>최소 응찰가</S.H3>
										<S.H3>KRW {((Math.ceil(bidding.auctionBiddingPrice * 1.1 / 1000) * 1000) || data.auctionStartPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H3>
								</S.MinPrice>
							</S.PriceWrapper>
						</S.AuctionInfo3>
						
						<S.ButtonWrapper>
							<S.ListButton onClick={backToList}>목록으로</S.ListButton>
							<S.BiddingButton onClick={popupAuto}>자동응찰</S.BiddingButton>
							<S.BiddingButton onClick={popup}>응찰</S.BiddingButton>
						</S.ButtonWrapper>
					</S.AuctionInfo>
				</S.AuctionDetail>
					{openBidding ? 
						<S.PopupBody>
							<S.PopupContainer1>
								<S.PopupPosition>
									<AuctionPopup data={data} bidding={bidding} /> 
								</S.PopupPosition>
							</S.PopupContainer1>
						</S.PopupBody>
							: null
					}
			</S.Wrapper>
		);
	} else {
		return null
	}

  

};

export default AuctionBiddingDetail;