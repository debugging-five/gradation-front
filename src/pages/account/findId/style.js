import styled from 'styled-components'
import { H10, H2, H4, H7, H8 } from '../../../styles/common';

const S = {};

S.Container = styled.div`
  background-color: #FBFCFC;
`

S.Wrapper = styled.div`
  /* margin: 84px 0 200px 0; */
  padding: 84px 0 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.H2 = styled.p`
  ${H2}
  width: 136px;
  height: 36px;
`

S.InputContainer = styled.div`
  margin: 76px 0 0 0;
`

S.BorderWrapper = styled.div`
  margin : 0 0 30px 0;  
  height: 44px;
`

S.HiddenBorderWrapper = styled.div`
  margin: ${({visible}) => (visible ? '0 0 30px 0' : '0')};
  height: ${({visible}) => (visible ? '44px' : '0')};
`

S.Border = styled.div`
  width: 440px;
  border-bottom: 1px solid #6E7476;
  /* margin : 0 0 48px 0; */
`

S.InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 26px;
`

S.Label = styled.label`
  display: flex;
  margin: 0 0 7px 0;
`

S.H7 = styled.p`
  ${H7}
  width : 72px;

  span {
    color: #EE3333;
  }
`

S.Input = styled.input`
border: none;
background-color: #FBFCFC;
outline: none;
width: 225px;
/* ${H8} */

  &::placeholder {
    ${H8}
  }
`

S.ButtonWrapper = styled.div`
  /* margin-left: auto; */
  margin: 0 0 4px 0;
`

S.CheckboxContainer = styled.div`
  margin : 0 0 50px 0;
  width: 760px;
`

S.JoinButton = styled.button`
  all: unset;
  width: 440px;
  height: 50px;
  background-color: #C0C5C7;
  border-radius: 3px;
  border-color: #C0C5C7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#EE3333" : "#C0C5C7")};
`

S.H4 = styled.p`
  ${H4}
  color : #FBFCFC;
`

S.CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
  color: #C0C5C7;

  &.detail {
    margin-left: 20px;
  }

`

S.Checkbox = styled.div`
  width : 20px;
  height : 20px;
  background-image: url(${({ checked }) => checked ? '/assets/images/join/checked-on.png' : '/assets/images/join/checked-off.png'});
  margin: 0 5px 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`

S.Terms = styled.span`
  ${H8}
  color: ${({ checked }) => (checked ? "#333333" : "#C0C5C7")};
  cursor: pointer;
`


S.Icon = styled.img`
  width : 16px;
  height : 10px;
  margin: 0 8px 12px 0;
  cursor: pointer;
`

S.Warning = styled.p`
  ${H10}
  color: #E49804;
  margin: 4px 0 0 82px;
`

S.Error = styled.p`
  ${H10};
  color: #EE3333; 
  margin: 4px 0 0 82px;
  `


export default S;