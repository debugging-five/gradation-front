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



export default S;