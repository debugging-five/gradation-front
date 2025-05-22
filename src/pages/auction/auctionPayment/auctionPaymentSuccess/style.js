import styled from 'styled-components'
import { H1, H2, H3, H5, H8 } from '../../../../styles/common';
const primary = "#EE3333";
const gray100 = "#FBFCFC";
const gray500 = "#C0C5C7";
const gray900 = "#6E7476";
const black = "#333333";
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

S.RedStar = styled.span`
  ${H5}
  color: ${primary};
`

S.H8Black = styled.p`
  ${H8}
  color: ${black};
`
S.H8Gray = styled.p`
  ${H8}
  color: ${gray900};
`

S.Wrapper = styled.div`
  display : flex; 
	flex-direction : column;
	align-items: center; 
  justify-content: center;
`

S.Popup = styled.div`
  width : 688px;
	height : 588px;
	border : solid 1px #6e7476;
	border-radius : 5px;
	background-color : ${gray100};
  top: 50%;
  left: 50%;
`

S.Bar = styled.div`
  width : 688px;
	height : 30px;
	border-bottom : solid 1px #6e7476;
	display : flex;
	align-items : center; 
`

S.IconWrapper2 = styled.div`
	display : flex;
	justify-content : center;
	align-items : center;
`

S.CheckIcon = styled.img`
	width : 56px;
	height : 56px;
	margin : 28px 0 0 0;
`

S.PaymentSuccess = styled.div`
display : flex;
	flex-direction : column;
	justify-content : center;
	align-items : center;
	margin : 15px 0 0 0;
	border-bottom : solid 1px ${gray500};
`

S.PaymentSuccessH3 = styled.p`
  ${H3}
	margin : 12px 0 20px 0;
`

S.Info = styled.div`
  display : flex;
	margin : 16px 0 0 20px;
`

S.InfoLeftImg = styled.img`
  width : 246px;
	height : 246px;
	background-color : var(--color-gray500);
	display : flex;
	justify-content : center;
	align-items : center;
`

S.InfoRight = styled.div`
  margin : 0 0 0 20px;
`

S.PaymentInfo = styled.div`
  width : 365px;
	border-bottom : solid 1px ${gray500};
	display : flex;
	justify-content : space-between;
  padding-bottom: 12px;
`

S.PaymentMethod = styled.div`
  width : 365px;
	display : flex;
	justify-content : space-between;
	margin : 11px 0 8px 0;
`

S.PaymentMethod2 = styled.div`
	display : flex;
	justify-content : flex-end;
	margin : 8px 0 0 0;
`

S.PaymentPrice = styled.div`
	width : 365px;
	border-bottom : solid 1px ${gray500};
	display : flex;
	justify-content : space-between;
  margin-top: 12px;
  padding-bottom: 12px;
`

S.PaymentCode = styled.div`
  width : 365px;
	display : flex;
	justify-content : space-between;
	margin : 14px 0 0 0;
`

S.ButtonWrapper = styled.div`
  display : flex;
	align-items : center;
	justify-content : center;
	margin : 25px 0 0 0;
`

S.BackToListButton = styled.button`
  ${H5}
  color: ${primary};
	width : 120px;
	height : 45px;
	background-color : ${gray100};
	border : solid 1.5px ${primary};
	border-radius : 3px;
`

S.PaymentListButton = styled.button`
  ${H5}
  color: ${gray100};
	width : 120px;
	height : 45px;
	background-color : ${primary};
	border : solid 1.5px ${primary};
	border-radius : 3px;
  margin-left: 20px;
`
S.loading = styled.p`
  ${H2}
  margin: auto;
`


export default S;