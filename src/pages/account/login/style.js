import styled from 'styled-components'
import { H10, H2, H4, H7, H8 } from '../../../styles/common';
import { Link } from 'react-router-dom';

const S = {};

S.Container = styled.div`
  background-color: #FBFCFC;
`

S.Wrapper = styled.div`
  /* margin: 84px 0 200px 0; */
  padding: 188px 0 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.H2 = styled.p`
  ${H2}
  width: 104px;
  height: 36px;
  /* margin : 0 0 64px 0; */
`

S.InputContainer = styled.div`
  margin: 64px 0 0 0;
`

S.BorderWrapper = styled.div`
  margin : 0 0 18px 0;  
  height: 45px;
`

S.PasswordBorderWrapper = styled.div` 
  margin: 0 0 10px 0;
  height: 45px;
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
  height: 27px;
`

S.Label = styled.label`
  display: flex;
  margin: 0 0 7px 0;
  align-items: center;
`

S.H7 = styled.p`
  ${H7}
  width : 140px;

  span {
    color: #EE3333;
  }
`

S.Input = styled.input`
border: none;
background-color: #FBFCFC;
outline: none;
height: 20px;
padding: 0;
margin: 0;


  &::placeholder {
    ${H8}
}
`

S.ButtonWrapper = styled.div`
  /* margin-left: auto; */
  margin: 0 0 4px 0;
`

// S.CheckboxContainer = styled.div`
//   margin : 0 0 50px 0;
//   width: 760px;
// `

S.LoginButton = styled.button`
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
  background-color: ${({ $active }) => ($active ? "#EE3333" : "#C0C5C7")};
  margin: 32px 0 0 0;
`

S.H4 = styled.p`
  ${H4}
  color : #FBFCFC;
`

S.CheckboxWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: center;
  color: #C0C5C7;
  gap: 10px;
  width: 440px;
`

S.Login = styled.div`
  display: flex;
`

S.Id = styled.div`
  display: flex;
`

S.Checkbox = styled.img`
  width : 20px;
  height : 20px;
  /* background-image: url(${({ checked }) => checked ? '/assets/images/join/checked-on.png' : '/assets/images/join/checked-off.png'}); */
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
S.IconWrapper = styled.div`
  /* width: 36px; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px 0 0;
`

S.Icon = styled.img`
  width : 20px;
  height : 20px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`

S.PasswordIcon = styled.img`
  width : 16px;
  height : 10px;
  margin: 0 8px 12px 0;
  cursor: pointer;
`

S.Warning = styled.p`
  ${H10}
  color: #E49804;
  margin: 4px 0 0 36px;
`

S.Error = styled.p`
  ${H10};
  color: #EE3333; 
  margin: 4px 0 0 36px;
`

S.H8 = styled.p`
  ${H8}

  .span {
    margin : 0 0 0 5px;
  }

  &.service {
    cursor: pointer;
  }
`

S.Service = styled.div`
  display: flex;
  gap : 5px;
  margin : 20px 0 0 0;
  /* justify-content: center; */
`

S.Link = styled(Link)`
  text-decoration: none;
  color: inherit;
`

S.Line = styled.p`
  display: flex;
  justify-content: center;
  width: 15px;
`


S.SocialContainer = styled.div`
  margin: 68px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

`

S.SocialWrapper = styled.div`

`

S.SocialButton = styled.div`
  display: flex;
  width: 192px;
  gap: 36px;
  margin: 15px 0 0 0;
  cursor: pointer;
`

S.Google = styled.img`
  width: 40px;
  height: 40px;
  `

S.Kakao = styled.img`
  width: 40px;
  height: 40px;
  `

S.Naver = styled.img`
  width: 40px;
  height: 40px;
`


export default S;