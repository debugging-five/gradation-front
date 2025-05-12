import styled from "styled-components";
import { H2, H3, H4, H5, H6, H7, H9 } from "../../../../styles/common";

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

S.H3Red = styled.p`
  ${H3}
  color: ${primary};
`

S.H4 = styled.p`
  ${H4}
`

S.RedH4 = styled.p`
  ${H4}
  color: ${primary};
`

S.H5 = styled.p`
  ${H5}
`

S.H6 = styled.p`
  ${H6}
`

S.H7 = styled.p`
  ${H7}
`

S.PopupBody = styled.div`
  width : 100%;
  height : 100%;
`

S.PopupContainer = styled.div`
  display : flex; 
  flex-direction : column;
  align-items: center; 
  justify-content: center;
`

S.Popup = styled.div`
  width : 688px;
  height : 540px;
  border : solid 1px ${gray900};
  border-radius : 5px;
  background-color: ${gray100};
`

S.Bar = styled.div`
  width : 688px;
  height : 30px;
  border-bottom : solid 1px #6e7476;
  display : flex;
  align-items : center;
  justify-content : flex-end;
`

S.BarImg = styled.img`
  width : 16px;
	height : 16px;
	margin : 0 7px 0 0;
`

S.PopupWrapper = styled.div`
  display : flex;
  gap : 40px;
`

S.PopupLeft = styled.div`
  width : 394px;
  margin : 34px 0 45px 34px;
`

S.Info = styled.div`
  display : flex;
  justify-content : space-between;
  margin : 0 0 15px 0;
`

S.PopupRight = styled.div`
  width : 186px;
  height : 186px;
  background-color : ${gray100};
  display : flex;
  align-items: center; 
  justify-content: center;
  margin : 34px 0 0 0;
`

S.PopupArtImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`

S.PopupInfo2 = styled.div`
  border-top : solid 1px ${gray900};
  display : flex;
`

S.Input = styled.input`
  width : 392px;
  height : 35px;
  border-radius : 3px;
  border : solid 1px #6e7476;
  background-color: #fbfcfc;
`

S.PopupLeft2 = styled.div`
  margin : 34px 0 0 34px;
`

S.Info3 = styled.div`
  display : flex;
  justify-content : space-between;
`

S.Info3Bid = styled.div`
  display : flex;
  justify-content : space-between;
  margin : 15px 0 10px 0;
`

S.PopupButton = styled.div`
  margin : 15px 0 10px 0;
`

S.BiddingButton = styled.button`
  width : 190px;
  height : 70px;
  background-color : ${primary};
  color : ${gray100};
  margin : 34px 0 0 0;
`

S.BackButton = styled.button`
  width : 190px;
  height : 35px;
  background-color : ${gray100};
  color : ${primary};
  margin : 20px 0 0 0;
`

S.Notice = styled.div`
  margin : 20px 0 27px 34px;
`

S.NoticeP = styled.p`
  ${H9}
  color : ${gray900};
  
`


export default S;