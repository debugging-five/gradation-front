import styled from 'styled-components';
import { EN_H2, EN_H4, H3 } from '../../../styles/common';

const S = {};

S.EN_H2 = styled.div`
  ${EN_H2}
`

S.Wrap = styled.div`
  background-color: #FBFCFC;
  margin: 140px 0 200px 0;
  display : flex; 
  flex-direction : column;
  align-items: center; 
`

S.Title = styled.h1`
	${H3};
	margin-bottom :7px;
`	

S.TitleWrap = styled.div`
	width : 760px;
	border-bottom : solid 2px ${({ theme }) => theme.PALLETE.primary.main};
	display: flex;
	margin-top: 82px; 
`

export default S;