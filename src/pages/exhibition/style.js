import styled from 'styled-components';
import { EN_H2 } from '../../styles/common';

const S = {};

S.EN_H2 = styled.p`
  ${EN_H2}
  margin-top: 142px;
`
S.Wrapper = styled.div`
  display : flex; 
  flex-direction : column;
  align-items: center; 
  justify-content: center;
`

export default S;