import styled from 'styled-components'
import { EN_H6, H10, H3, H5, H7, H8 } from '../../../styles/common';
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

S.H5 = styled.p`
  ${H5}
`

S.RedStar = styled.span`
  ${H5}
  color: ${primary};
`

S.WarningText = styled.p`
  ${H10}
  color: ${warning};
  margin: 5px 0 0 108px;
`

S.LastWarningText = styled.p`
  ${H10}
  color: ${warning};
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
	width : 560px;
  margin-bottom: 200px;
`

S.auctionImg = styled.img`
  width : 560px;
  height: 1000px;
	background-color : #c0c5c7;
	display : flex;
  flex-direction: column;
`

S.StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 480px;
`

S.Price = styled.div`
  display : flex;
	margin : 39px 0 0 0;
`

S.InputForm = styled.div`
  margin : 0 0 20px 0;
`

S.InputWrapper = styled.div`
  border-bottom : solid 1px ${gray900};
	margin : 30px 0 0 0;
	display : flex;
`

S.InputText = styled.div`
  display : flex;
	gap : 67px;
	height : 28px;
`

S.InputText2 = styled.div`
  display : flex;
	gap : 32px;
	height : 28px;
`

S.InputText3 = styled.div`
  display : flex;
	gap : 36px;
	height : 28px;
`

S.InputText4 = styled.div`
  display : flex;
	gap : 50px;
	height : 28px;
`

S.PaymentInput = styled.input`
  ${EN_H6}
  color: ${gray900};
  border : none;
  outline : none;
  width : 300px;
  background-color : ${gray100};
`

S.WarningArea = styled.div`
  height: 20px;
`

S.InputButtonWrapper = styled.div`
  border-bottom : solid 1px var(--color-gray900);
	width : 480px;
	margin : 39px 0 0 0;
	display : flex;
	align-items : center;
	justify-content : space-between;
`

S.SearchAddress = styled.button`
  ${H7}
  width : 125px;
	height : 35px;
	background-color : ${primary};
	border : solid 1px ${primary};
	border-radius : 2px;
	color : ${gray100};
	margin : 0 0 4px 0;
`

S.CheckLabelSpan = styled.span`
  ${H8}
	color : ${gray500};
`

S.StyledInput = styled.input`
  margin: 0;
  appearance: none;
  border: none;
  width: 20px;
  height: 20px;
  background-image: url('/assets/images/icon/checked_off.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  
  &:checked {
    background-image: url('/assets/images/icon/checked_on.png');
    border-color: transparent;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`

S.CheckboxDiv = styled.div`
  display: flex;
  flex-direction: column;
`

S.StyledLabel = styled.label`
  display: flex;
  cursor: pointer;
  margin-bottom: 12px;
`

S.PaymentButtonWrap = styled.div`
  margin-top: 9px;
  display: flex;
  justify-content: center;
  margin-bottom: 200px;;
`

S.PaymentButton = styled.button`
  ${H5}
  width : 190px;
	height : 50px;
	background-color : ${gray100};
	border : solid 1.5px ${primary};
	border-radius : 3px;
	color : ${primary};
  
  &:hover {
    background-color : ${primary};
    color : ${gray100};
  }
`




export default S;