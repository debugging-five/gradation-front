// 회원가입 완료 modal
import styled from 'styled-components'
import { H2, H5} from '../../../../styles/common';

const S = {};

S.Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(192, 197, 199, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

S.Wrapper = styled.div`
  background-color: #FBFCFC;
  width: 450px;
  height: 278px;
  transition: transform 0.5s ease-out;
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
  width: 16px;
  height: 16px;
  /* margin-left: auto; */
  margin: 7px 7px 7px auto;
`

S.H5 = styled.p`
  ${H5}
`

S.H2 = styled.p`
  ${H2}
  width: 136px;
  height: 36px;
`

S.Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 0 0; 
`

S.Notice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.Icon = styled.img`
  width : 48px;
  height : 48px;
  margin: 0 0 20px 0;
`

S.ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 40px 0 0 0;
`

export default S;