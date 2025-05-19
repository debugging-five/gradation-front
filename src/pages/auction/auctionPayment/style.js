import styled from 'styled-components'
import { H3 } from '../../../styles/common';
const primary = "#EE3333";
const gray100 = "#FBFCFC";
const gray500 = "#C0C5C7";
const gray900 = "#6E7476";
const black = "#333333";
const warning = "#E49804";

const S = {};

S.H3 = styled.p`
  ${H3}
`

S.Wrapper = styled.div`
  display : flex; 
	flex-direction : column;
	align-items: center; 
  justify-content: center;
`

S.Payment = styled.div`
  display : flex;
	gap : 120px;
	margin : 70px 0 0 0;
`

S.imgWrapper = styled.div`
  display : flex;
	justify-content : center;
	align-items : center;
	width : 560px;
	height : 560px;
`

S.auctionImg = styled.img`
  width : 420px;
	height : 420px;
	background-color : #c0c5c7;
	display : flex;
	justify-content : center;
	align-items : center;
`





export default S;