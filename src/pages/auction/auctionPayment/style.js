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

S.WarnDiv = styled.div`
  * {
    color: ${warning};
  }
`

S.PopupBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(110, 116, 118, 0.3);
  z-index: 999;
`

S.PopupPosition = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

S.InputText2 = styled.div`
  display : flex;
	gap : 80px;
	height : 28px;
`

S.InputText3 = styled.div`
  display : flex;
	gap : 64px;
	height : 28px;
`

S.InputText4 = styled.div`
  display : flex;
	gap : 50px;
	height : 28px;
`
S.InputText6 = styled.div`
  display : flex;
	gap : 20px;
	height : 28px;
`

S.PaymentInput = styled.input`
  ${EN_H6}
  color: ${gray900};
  border : none;
  outline : none;
  width : 356px;
  background-color : ${gray100};
`
S.PaymentInputA = styled.input`
  ${EN_H6}
  color: ${gray900};
  border : none;
  outline : none;
  width : 232px;
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
  margin-top: -7px;
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

S.Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    overflow: auto;
    width: 540px;
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    & #payment-method {
      width: 100%;
    }

    & .toss-button-wrap {
      width: 100%;
    }

    & .toss-button {
      width: 100%;
      padding: 11px 22px;
      border: none;
      border-radius:  8px;
      background-color: #f2f4f6;
      color: #4e5968;
      font-weight: 600;
      font-size: 17px;
      cursor: pointer;
      background-color: #3282f6;
      color: #f9fcff;
    }

`;

S.ModalBg = styled.div`
  position: fixed;
  width: 100dvw;
  height: 100dvh; //최근 브라우저들은 뷰포트 높이를 더 정확하게 계산할 수 있는 dvh(dynamic viewport height)
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 90;
`

S.PopupWrapper = styled.div`
  position : fixed;
  top: 0%;
  left: 0%;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 90;
`




export default S;