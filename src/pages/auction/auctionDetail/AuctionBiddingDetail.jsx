import React, { useEffect, useMemo, useState } from 'react';
import S from "./style.js";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import AuctionPopup from './AuctionBiddingPopup/AuctionModal';
import AuctionAutoPopup from './AuctionAutoBiddingPopup/AuctionAutoModal';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import AuctionTime from './AuctionTime';
import AuctionPrice from './AuctionPrice';
import getLatestPrice from './_function/getLatePrice';
const AuctionBiddingDetail = ({auction, timeLeft}) => {
	
	const {id, category} = useParams();
	const { currentUser } = useSelector((state) => state.user);
	const navigate = useNavigate();

	// 먼저 페이지 경매예정, 경매중, 경매완료 검사 후 라우팅

	const isBiddingConfirm = timeLeft.isAuction === "경매중";
	const isExpectedConfirm = timeLeft.isAuction === "경매예정";
	const isCompleteConfirm = timeLeft.isAuction === "경매종료";

	useEffect(() => {
		if(isBiddingConfirm){
			navigate(`/auction/bidding/${category}/detail/${id}`, {replace: true})
		}else if(isExpectedConfirm){
			navigate(`/auction/expected/${category}/detail/${id}`, {replace: true})
		}else {
			// 경매 완료
			navigate(`/auction/complete/${category}/detail/${id}`, {replace: true})
		}
	}, [id])

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
	const [price, setPrice] = useState(null)
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
	}, [isPriceUpdate, id])

	// 본인일 때 수정
	  const remove = async () => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm("예정된 경매를 삭제하시겠습니까?")){
      await fetch(`http://localhost:10000/auction/api/delete/${auction.id}`, {
        method: 'DELETE',
      });
      alert("경매가 삭제되었습니다");
      navigate(`../expected/${category}`, { replace: true });
    };
  }

	const modify = () => {
    navigate(`../expected/${category}/modify/${auction.id}`)
  }

	const backToList = () => {
		navigate(`../bidding/${category}`);
	}

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
						<S.TitleWrapper>
							<S.Title>{auction.artTitle}</S.Title>
							{isCompleteConfirm ? auction.auctionAttracted ?<S.H2Red>{" <낙찰>"}</S.H2Red> : <S.H2Gray500>{" <유찰>"}</S.H2Gray500> : <></>}
							{isExpectedConfirm && currentUser && auction.artistId === currentUser.id?
								<S.TitleButtonWrapper>
									<S.TitleButton1 onClick={modify}>수정하기</S.TitleButton1>
									<S.TitleButton2 onClick={remove}>삭제하기</S.TitleButton2>
								</S.TitleButtonWrapper>
							: <></>}
						</S.TitleWrapper>
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
							{isCompleteConfirm ? (
								<>
									{ auction.auctionAttracted ? (
										<>
											<S.AuctionInfo3Detail>
												<S.H3Gray900>판매완료된 작품입니다.</S.H3Gray900>
											</S.AuctionInfo3Detail>
											
											<S.AuctionInfo3Detail>
												<S.H3Gray900>낙찰가</S.H3Gray900>
											</S.AuctionInfo3Detail>
											
											<S.Notice>
												<S.EnH2Red>{auction?.auctionBidPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} KRW</S.EnH2Red>
											</S.Notice>
										</>
									) : (
										<S.AuctionInfo3>
			
											<S.AuctionInfo3Detail>
												<S.H3Gray500>유찰된 작품입니다.</S.H3Gray500>
											</S.AuctionInfo3Detail>
											
											<S.AuctionInfo3Detail>
												<S.H3Gray500>낙찰가</S.H3Gray500>
											</S.AuctionInfo3Detail>
											
											<S.Notice>
												<S.H2Gray500>-</S.H2Gray500>
											</S.Notice>
										</S.AuctionInfo3>
										)
									}
								</>
							) : (
								<>
									{isBiddingConfirm ? (
										<>
											<AuctionTime id={id} auctionBidDate={auction.auctionBidDate} auctionStartDate={auction.auctionStartDate} auctionEndDate={auction.auctionEndDate}/>
											<S.PriceWrapper>
												<AuctionPrice id={id} price={price} auction={auction} />	
											</S.PriceWrapper>
										</>
									) : (
										<>
											<AuctionTime id={id} auctionBidDate={auction.auctionBidDate} auctionStartDate={auction.auctionStartDate}/>
										</>
									)}
								</>
							)}
					</S.AuctionInfo3>
					
					<S.ButtonWrapper>
						{isCompleteConfirm ? <></> : (
							<>
								{isBiddingConfirm ? (
									<>
										<S.BiddingButton onClick={popupAuto}>자동응찰</S.BiddingButton>
										<S.BiddingButton onClick={popup}>응찰</S.BiddingButton>
									</>
								) : (
									<>
										<S.H2Gray500>준비중인 작품입니다</S.H2Gray500>
									</>
								)}
							</>
						)}
						<S.ListButton onClick={backToList}>목록으로</S.ListButton>
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
								<AuctionAutoPopup 
									id={id} auction={auction} setOpenAutoBidding={setOpenAutoBidding} 
									auctionBidDate={auction.auctionBidDate} 
									auctionStartDate={auction.auctionStartDate} auctionEndDate={auction.auctionEndDate}
									price={price} isPriceUpdate={isPriceUpdate} setIsPriceUpdate={setIsPriceUpdate}
								/> 
							</S.PopupPosition>
					</S.PopupBody>
						: null
				}
		</S.Wrapper>
	);
};

export default AuctionBiddingDetail;