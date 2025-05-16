// 회원가입 완료 modal
import styled from 'styled-components'
import { H10, H2, H4, H5, H7, H8 } from '../../../../styles/common';

const S = {};

S.Container = styled.div`
  background-color: #FBFCFC;
  width: 450px;
  height: 278px;
`
S.Line = styled.div`
  border-bottom: solid 1px #6E6F76;
  /* margin: 30px 0 0 0; */
  height: 30px;
  width: 450px;
  margin: 0 0 30px 0;
`

S.CloseIconWrapper = styled.div`
  display: flex;
`

S.CloseIcon = styled.img`
  width: 11px;
  height: 11px;
  margin-left: auto;
`

S.H5 = styled.p`
  ${H5}
`

S.H2 = styled.p`
  ${H2}
  width: 136px;
  height: 36px;
`

S.Notice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.Icon = styled.img`
  width : 48px;
  height : 48px;
`

S.ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`


export default S;