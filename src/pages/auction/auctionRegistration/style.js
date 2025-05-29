import styled from "styled-components";
import { EN_H4, EN_H5, EN_H6, H10, H2, H3, H4, H5, H7 } from "../../../styles/common";

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

S.EN_H7 = styled.p`
  ${EN_H6}
  width: auto;
`

S.H5 = styled.p`
  ${H5}
`

S.H7 = styled.p`
  ${H7}
`

S.ArtArtist = styled.div`
  display: flex;
  margin-bottom: 24px;
`

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${gray100};
`

S.ModifyButton = styled.button`
  ${H5}
  width: 120px;
	height: 45px;
	border-radius: 3px;
	border: solid 1.5px;
  background-color: ${primary};
	color: ${gray100};
`

S.CancelButton = styled.button`
  ${H5}
  width: 120px;
	height: 45px;
	border-radius: 3px;
	border: solid 1.5px;
  background-color: ${gray100};
	color: ${primary};
	border: solid 1.5px;
`

S.Reference = styled.p`
  text-align: right;
	color: ${gray900};
	margin-bottom: 200px;
`

S.ForMattedDate = styled.span`
  ${EN_H6}
  color: ${gray900};
  padding-top: 2px;
`

S.ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1160px;
`

S.Modify = styled.div`
  width : 1160px;
	border-bottom: solid 2px ${primary};
	margin-bottom: 50px;
  margin-top: 72px;
`

S.EN_H4Primary = styled.div`
  ${EN_H4}
  color: ${primary};
  margin-bottom: 10px;
`

S.ImageWrap = styled.div`
	width: 560px;
	display: flex;
	justify-content: center;
	margin-right: 120px;
  margin-bottom: 200px;
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

S.InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 483px;
`

S.ArtName = styled.div`
  display: flex;
	gap: 12px;
	margin-bottom: 35px;
	align-items: center;
`

S.ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 54px;
  margin-bottom: 50px;
`

S.H10gray900 = styled.p`
  ${H10}
  color: ${gray900};
`

S.InputBoxWrap = styled.div`
  width: 480px;
	border-bottom: solid 1px ${gray900};
`

S.InputBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 7px;
`

S.InputBoxInfo = styled.div`
  display: flex;
`

S.RedStar = styled.p`
  color: ${primary};
`

S.WriteImg = styled.img`
  display : flex;
  justify-content : center;
  align-items : center;
  height: min-content;
  width : 12px;
  margin: 5px;
`

S.InputText = styled.input`
  ${EN_H6};
	color: ${gray900};
	text-align: right;
	background: none;
	border: none;
	outline: none;
`

S.InputMin = styled.input.withConfig({
   shouldForwardProp: (prop) => prop !== 'inputMinWidth',
})`
  width : ${({inputMinWidth}) => inputMinWidth};
  ${EN_H6};
  color: ${gray900};
  text-align: right;
  background: none;
  border: none;
  outline: none;
  min-width: 20px;
`


S.InputMax = styled.input.withConfig({
   shouldForwardProp: (prop) => prop !== 'inputMaxWidth',
})`
  width : ${({inputMaxWidth}) => inputMaxWidth};
  ${EN_H6};
  color: ${gray900};
  text-align: right;
  background: none;
  border: none;
  outline: none;
  min-width: 20px;
`

S.InputDate = styled.input`
	text-align: right;
	${EN_H6};
	background: none;
	border: none;
	outline: none;
  color: ${gray900};
  user-select: none;
`

S.ButtonWrap = styled.div`
  display: flex;
	gap: 20px;
	justify-content: flex-end;
	margin-bottom: 11px;
`

S.CalendarInput = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  color: #666666;
  padding: 0 4px;
`;

S.CalendarIcon = styled.img`
  display : flex;
  justify-content : center;
  align-items : center;
  height: min-content;
  width : 12px;
  margin: 5px;
`

S.WarningArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 480px;
  height: 48px;
`

S.NeedWrite = styled.p`
  margin-top: 2px;;
  color: ${warning};
  ${H10}
  `

S.NeedWriteDiv = styled.p`
  * {
    color: ${warning};
    border-color: ${warning}
  }

  input::placeholder,
  textarea::placeholder {
    color: ${warning}
  }
`





export default S;