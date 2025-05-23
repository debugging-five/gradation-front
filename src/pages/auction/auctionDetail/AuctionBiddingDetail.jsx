import React, { useEffect, useMemo, useState } from 'react';
import S from './style';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import AuctionPopup from './AuctionBiddingPopup/AuctionModal';
import AuctionAutoPopup from './AuctionAutoBiddingPopup/AuctionAutoModal';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import AuctionTime from './AuctionTime';
import AuctionPrice from './AuctionPrice';
import getLatestPrice from './_function/getLatePrice';
const AuctionBiddingDetail = ({auction}) => {
	
	const {id} = useParams();
	const navigate = useNavigate();

	// 모달 띄우는거
	const [openBidding, setOpenBidding] = useState(false);
	const [openAutoBidding, setOpenAutoBidding] = useState(false);

	const popup = () => {
		setOpenBidding(true);
		setOpenAutoBidding(false);
	}
	const popupAuto = () => {
			setOpenBidding(false);
			setOpenAutoBidding(true);
	}

	// 최신 가격을 조회하는 쿼리
	const [price, setPrice] = useState({})
	const [isPriceUpdate, setIsPriceUpdate] = useState(false)


	useEffect(() => {
			getLatestPrice(id)
			.then(({price}) => {
				setPrice(price)
			})
			.catch(console.err)
			
		const getPrice = setInterval(() => {
			getLatestPrice(id)
			.then(({price}) => {
				setPrice(price)
			})
			.catch(console.err)
		}, 5000);

		return () => clearInterval(getPrice)
	}, [isPriceUpdate])

	return (
		<S.Wrapper>
			<S.AuctionDetail>
			{/* <!-- 경매 작품 사진--> */}
				<S.ImgWrapper>
					{ auction.argImgList.map((img, i) => (
						<S.AuctionImg key={i} src={`http://localhost:10000/files/api/get/${img.artImgName}?filePath=${img.artImgPath}`} alt="경매 작품" />
					))}
				</S.ImgWrapper>
			
			{/* <!-- 경매 정보 --> */}
				<S.AuctionInfo>
					{/* <!-- 경매 정보1 --> */}
					<S.AuctionInfo1>
						<S.Title>{auction.artTitle}</S.Title>
						<S.Artist>
							<S.H3>작가명</S.H3>
							<S.H3>|</S.H3>
							<S.H3>{auction.artistName}</S.H3>
						</S.Artist>
					
					<S.Etc>
						<S.EtcP>{auction.artMaterial}</S.EtcP>
						<S.EtcP>{auction.artSize}</S.EtcP>
						<S.EtcP>{auction.artEndDate.split('-')[0]}년</S.EtcP>
					</S.Etc>						
					</S.AuctionInfo1>
					
					{/* <!-- 경매 정보2 --> */}
					<S.AuctionInfo2>
						<S.AuctionInfo2Detail>
							<S.H5>마감일</S.H5>
							<S.H7>{dayjs(auction.auctionStartDate).add(3, 'day').format('YYYY-MM-DD HH:mm:ss')}</S.H7>
						</S.AuctionInfo2Detail>
						<S.AuctionInfo2Detail>
							<S.H5>추정가</S.H5>
							<S.H7>KRW {auction?.auctionEstimatedMinPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ~ {auction?.auctionEstimatedMaxPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H7>
						</S.AuctionInfo2Detail>
						<S.AuctionInfo2Detail>
							<S.H5>시작가</S.H5>
							<S.H7>KRW {auction?.auctionStartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H7>
						</S.AuctionInfo2Detail>
					</S.AuctionInfo2>
					
					{/* <!-- 경매 정보3 --> */}
					<S.AuctionInfo3>
						{/* 시간 */}
						<AuctionTime id={id} auctionBidDate={auction.auctionBidDate} auctionStartDate={auction.auctionStartDate} auctionEndDate={auction.auctionEndDate}/>
						<S.PriceWrapper>
							<AuctionPrice id={id} price={price} auction={auction} />
						</S.PriceWrapper>
					</S.AuctionInfo3>
					
					<S.ButtonWrapper>
						<S.ListButton>목록으로</S.ListButton>
						<S.BiddingButton onClick={popupAuto}>자동응찰</S.BiddingButton>
						<S.BiddingButton onClick={popup}>응찰</S.BiddingButton>
					</S.ButtonWrapper>
				</S.AuctionInfo>
			</S.AuctionDetail>
				{openBidding ? 
					<S.PopupBody>
							<S.PopupPosition>
								<AuctionPopup 
									id={id} auction={auction} setOpenBidding={setOpenBidding} 
									auctionBidDate={auction.auctionBidDate} 
									auctionStartDate={auction.auctionStartDate} auctionEndDate={auction.auctionEndDate}
									price={price} isPriceUpdate={isPriceUpdate} setIsPriceUpdate={setIsPriceUpdate}
								/> 
							</S.PopupPosition>
					</S.PopupBody>
						: null
				}
				{openAutoBidding ? 
					<S.PopupBody>
							<S.PopupPosition>
								<AuctionAutoPopup id={id} auction={auction} openAutoBidding={openAutoBidding} setOpenAutoBidding={setOpenAutoBidding} /> 
							</S.PopupPosition>
					</S.PopupBody>
						: null
				}
		</S.Wrapper>
	);
};

export default AuctionBiddingDetail;