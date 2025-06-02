import styled from 'styled-components'
import { H8 } from '../../../../styles/common'

const S = {}

S.Container = styled.div`
  background-color: rgba(110, 116, 118, 0.3); 
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 56px;
`

S.Wrapper = styled.div`
  background-color: #FBFCFC;
  border: solid 1px #EE3333;
  border-radius: 1.2px;
  width: 320px;
  height: 164px;
  display: flex;
  align-items: center;
  justify-content: center;
`

S.Icon = styled.img`
  width: 32px;
  height: 32px;
`

S.Message = styled.p`
  ${H8}
  margin: 16px 0 24px 0;
`

S.Content = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

S.ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`

export default S;