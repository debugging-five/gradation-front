// 아이디 찾기 modal
import styled from 'styled-components'
import {EN_H6, H2, H5, H6} from '../../../../styles/common';

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
  width: 600px;
  height: 366px;
  border-radius: 5px;
  transition: transform 0.5s ease-out;
`

S.Line = styled.div`
  border-bottom: solid 1px #6E6F76;
  height: 30px;
  width: 600px;
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
  width: 246px;
  height: 36px;
`

S.H6 = styled.p`
  ${H6}
  color: #6E7476;
`

S.EnH7 = styled.p`
  ${EN_H6}
  margin: 0 0 0 30px;
`

S.Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 0 0; 
`

S.Notice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.Icon = styled.img`
  width : 56px;
  height : 56px;
  margin: 0 0 15px 0;
`

S.Info = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 54px;
`

S.Id = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
`

S.Email = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
`

S.ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 40px 0 0 0;
`

export default S;