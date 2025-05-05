import styled from 'styled-components'
import { H2, H5, H7 } from '../../../styles/common';
import UncheckButton from '../../../components/button/UncheckButton';

const S = {};

S.Container = styled.div`
  background-color: #FBFCFC;
  height: 100dvh;
`

S.Wrapper = styled.div`
  margin: 84px 0 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.H2 = styled.p`
  ${H2}
  width: 104px;
  height: 36px;
`

S.InputContainer = styled.div`
  margin: 76px 0 48px 0;
`

S.Border = styled.div`
  width: 760px;
  border-bottom: 1px solid #6E7476;
  margin : 0 0 48px 0;
`

S.InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin : 0 0 4px 0;
`

S.Label = styled.label`
  display: flex;
  align-items: center;
`

S.H5 = styled.p`
  ${H5}
  width : 108px;

  span {
    color: #EE3333;
  }
`

S.Input = styled.input`
border: none;
background-color: #FBFCFC;

&::placeholder {
  ${H7}
}
`

S.ButtonWrapper = styled.div`
  margin-left: auto;
`




export default S;