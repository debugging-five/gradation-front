import styled from 'styled-components'
import { EN_H1, EN_H2 } from '../../styles/common';
const primary = "#EE3333";
const gray100 = "#FBFCFC";
const gray500 = "#C0C5C7";
const gray900 = "#6E7476";
const warning = "#E49804";

const S = {};
S.EN_H2 = styled.p`
  ${EN_H2}
`

S.Wrapper = styled.div`
  display : flex; 
  flex-direction : column;
  align-items: center; 
  justify-content: center;
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
  width : 200px;
  height : 200px;
  background-color : ${gray500};
  display : flex;
  align-items : center;
  justify-content : center;
  margin : 0 0 38px 0;
`

export default S;