import styled from 'styled-components';
import { EN_H2, H8 } from '../../styles/common';
const primary = "#EE3333";
const gray900 = "#6E7476";
const black = "#333333";

const S = {};

S.EN_H2 = styled.p`
  ${EN_H2}
`
S.Wrapper = styled.div`
  background-color: #FBFCFC;
  margin: 140px 0 200px 0;
  display : flex; 
  flex-direction : column;
  align-items: center; 
`

S.CategoryWrapper = styled.div`
  display: flex;
  margin: 36px 0 0 0;
  justify-content: center;
`

S.TypeDiv = styled.div`
  width: 120px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

S.SelectedRed = styled.p`
  ${H8}
  color: ${primary};
  cursor: pointer;
  border-bottom: solid 2px ${primary};
`

S.UnSelectedType = styled.p`
  ${H8}
  color: ${gray900};
  cursor: pointer;
  
  &:hover {
    color: ${black};
  }
`

S.Bar = styled.p`
  ${H8}
  margin: 0 65px 0 65px;
`
export default S;