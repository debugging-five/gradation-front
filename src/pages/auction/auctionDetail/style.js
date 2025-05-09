import styled from 'styled-components'
import { EN_H2, H2, H3, H4, H5, H7, H8 } from '../../../styles/common';
import theme from '../../../styles/theme';
const primary = "#EE3333";
const gray100 = "#FBFCFC";
const gray500 = "#C0C5C7";
const gray900 = "#6E7476";
const warning = "#E49804";

const S = {};

S.H2 = styled.p`
  ${H2}
`

S.H3 = styled.p`
  ${H3}
`

S.H5 = styled.p`
  ${H5}
`

S.H7 = styled.p`
  ${H7}
`

S.Wrapper = styled.div`
  display : flex; 
  flex-direction : column;
  align-items: center; 
  justify-content: center;
  margin-bottom: 200px;
`

S.AuctionDetail = styled.div`
  display: flex;
  width : 1160px;
  margin : 70px 0 94px 0 ;
  gap : 120px;
`

S.ImgWrapper = styled.div`
  display : flex;
  justify-content : center;
  width : 560px;
`

S.AuctionImg = styled.img`
  width: 100%;
  height: min-content;
  display : flex;
  justify-content : center;
  align-items : center;
`

S.AuctionInfo = styled.div`
  height : 560px;
`

S.AuctionInfo1 = styled.div`
  border-bottom : solid 1px ${gray500};
  width : 480px;
  padding : 0 0 20px 0;
`

S.Title = styled.p`
  ${H2}
  height : 36px;
`

S.Artist = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px;
  margin : 22px 0 0 0;
  height : 25px;
`

S.Etc = styled.div`
  margin : 19px 0;
  height : 54px;
`

S.EtcP = styled.p`
  ${H8}
  color : ${gray900};
  margin : 6px 0 0 0;
`

S.AuctionInfo2 = styled.div`
  border-bottom : solid 1px #c0c5c7;
  width : 480px;
`

S.AuctionInfo2Detail = styled.div`
  display : flex;
  justify-content : space-between;
  margin : 28px 0 28px 0;
  height : 20px;
  `


S.AuctionInfo3 = styled.div`
  margin : 16px 0 0 0;
`

S.Deadline = styled.div`
  display : flex;
	justify-content : space-between;
	height : 36px;
`

S.PriceWrapper = styled.div`
  margin : 12px 0 0 0;
`

S.CurrentPrice = styled.div`
  display : flex;
	justify-content : space-between; 
	color : ${primary};
`

S.MinPrice = styled.div`
  display : flex;
	justify-content : space-between; 
	margin : 8px 0 0 0;
	color : ${primary};
`

S.ButtonWrapper = styled.div`
  margin : 26px 0 0 0;
  display : flex;
  gap : 60px;
`

S.ListButton = styled.button`
  ${H5}
  width : 120px;
  height : 45px;
  border-radius : 3px;
  border : solid 1.5px ${primary};
  background-color: ${gray100};
  color: ${primary};
`

S.BiddingButton = styled.button`
  ${H5}
  width : 120px;
  height : 45px;
  border-radius : 3px;
  border : solid 1.5px ${primary};
  background-color: ${primary};
  color: ${gray100};
`

S.AuctionList = styled.div`
  height : 269px;
  margin : 20px 0 38px 0;
`

S.AuctionIng = styled.div`
  border-bottom : solid 1px ${gray500};
	width : 1920px;
	display : flex;
	justify-content : center;
`

S.AuctionIngTitle = styled.div`
  margin : 0 0 10px 0;
	width : 1160px;
`

S.ArtWrapper = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
	gap : 120px;
	margin : 38px 0;
`

S.ArtList = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f0f0f0; /* 여백 확인용 */
  overflow: hidden;
`

S.ArtListImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`

S.NoneButton = styled.button`
  border: none;
  background-color: ${gray100};
`

S.buttonImg = styled.img`
  width: 48px;
  height: 48px;
`





export default S;