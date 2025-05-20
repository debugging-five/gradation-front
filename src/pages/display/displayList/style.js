import styled from 'styled-components'
import { EN_H2, H10, H2, H4, H7, H8 } from '../../../styles/common';

const S = {};

S.Container = styled.div`
  background-color: #FBFCFC;
`

S.Wrapper = styled.div`
  padding: 140px 0 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.EnH2 = styled.p`
  ${EN_H2}
`

S.H8 = styled.p`
  ${H8}
`

S.Category = styled.div`
`

export default S;