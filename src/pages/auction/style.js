import styled from 'styled-components'
import { EN_H1, EN_H2, H8 } from '../../styles/common';
const primary = "#EE3333";
const gray100 = "#FBFCFC";
const gray500 = "#C0C5C7";
const gray900 = "#6E7476";
const black = "#333333";
const warning = "#E49804";

const S = {};
S.EN_H2 = styled.p`
  ${EN_H2}
`

S.H8 = styled.p`
  ${H8}
  color: ${black};
`
S.UnSelectedType = styled.p`
  ${H8}
  color: ${gray900};
  cursor: pointer;
  
  &:hover {
    color: ${black};
  }
`

S.SelectedRed = styled.p`
  ${H8}
  color: ${primary};
  cursor: pointer;
  border-bottom: solid 2px ${primary};
`

S.Wrapper = styled.div`
  display : flex; 
  flex-direction : column;
  align-items: center; 
  justify-content: center;
`

S.TypeWrapper = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: center;
`

S.TypeDiv = styled.div`
  width: 120px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
S.Bar = styled.p`
  ${H8}
`

S.CategoryWrapper = styled.div`
  display: flex;
`




export default S;