import React from 'react';
import S from './style';
const AuctionBiddingDetail = ({type, category, id}) => {

  

  return (
		<S.Wrapper>
			<S.AuctionDetail>
			{/* <!-- 경매 작품 사진--> */}
				<S.ImgWrapper>
					<S.AuctionImg id="auction-img" src="http://localhost:10000/files/api/get/0001.jpg?filePath=art" alt="경매 작품" />
				</S.ImgWrapper>
			
			{/* <!-- 경매 정보 --> */}
				<S.AuctionInfo>
					{/* <!-- 경매 정보1 --> */}
					<S.AuctionInfo1>
						<S.Title>당황한 동상</S.Title>
						<S.Artist>
							<S.H3>작가명</S.H3>
							<S.H3>|</S.H3>
							<S.H3>홍길동</S.H3>
						</S.Artist>
					
					<S.Etc>
						<S.EtcP>돌맹이에 조각칼</S.EtcP>
						<S.EtcP>200 X 50 X 50</S.EtcP>
						<S.EtcP>2025년</S.EtcP>
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
							<S.H7>KRW 1,000,000 ~ 2,000,000</S.H7>
						</S.AuctionInfo2Detail>
						<S.AuctionInfo2Detail>
							<S.H5>시작가</S.H5>
							<S.H7>KRW 500,000</S.H7>
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
									<S.H3>KRW 550,000</S.H3>
							</S.CurrentPrice>
							<S.MinPrice>
									<S.H3>최소 응찰가</S.H3>
									<S.H3>KRW 560,000</S.H3>
							</S.MinPrice>
						</S.PriceWrapper>
					</S.AuctionInfo3>
					
					<S.ButtonWrapper>
						<S.ListButton>목록으로</S.ListButton>
						<S.BiddingButton>자동응찰</S.BiddingButton>
						<S.BiddingButton>응찰</S.BiddingButton>
					</S.ButtonWrapper>
				</S.AuctionInfo>
			</S.AuctionDetail>
		</S.Wrapper>
  );
};

export default AuctionBiddingDetail;