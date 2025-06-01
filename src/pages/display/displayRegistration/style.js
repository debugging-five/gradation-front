import styled from 'styled-components'
import { EN_H3, H10, H2, H3, H4, H5, H7, H8 } from '../../../styles/common';
import Flatpickr from 'react-flatpickr';

const S = {};

S.Container = styled.div`
  background-color: #FBFCFC;
  margin: 70px 0 0 0;
`

S.Line = styled.div`
  border-bottom: 2px solid #EE3333;
  width: 1160px;
  padding: 0 0 10px 0;
`

S.ENH3 = styled.p`
  ${EN_H3}
  color: #EE3333;
`

S.FormWrapper = styled.div`
  margin: 80px 0 60px 0;
`

S.Form = styled.div`
  display: flex;
  gap: 120px;
`

S.FileWrapper = styled.label`
  width: 560px;
  height: 560px;
  background-color: #C0C5C7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

S.File = styled.input`
  position: absolute;
  cursor: pointer;
  opacity: 0;
`

S.IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

S.Icon = styled.img`
  width: 56px;
  height: 56px;
  margin: 0 0 32px 0;
`

S.H5 = styled.p`
  ${H5}
`

S.InputContainer = styled.div`
`

S.Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 28px 0 0 0;
`

S.H3 = styled.p`
  ${H3}
  height: 25px;
`

S.H2 = styled.p`
  ${H2}
  width: 104px;
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
  margin: ${({$visible}) => ($visible ? '0 0 30px 0' : '0')};
  height: ${({$visible}) => ($visible ? '44px' : '0')};
`

S.Border = styled.div`
  width: 480px;
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
  width : 100px;

  span {
    color: #EE3333;
  }
`

S.Input = styled.input`
border: none;
background-color: #FBFCFC;
outline: none;
${H8}
width: 375px;

  &::placeholder {
    ${H8}
  }
`

S.SizeInputWrapper = styled.div`
  display: flex;
  width: 251px;
  height: 19px;
  gap: 12px;

  span {
    color: #6E7476;
    width: 10px;
  }
`

S.SizeInput = styled.input`
border: none;
background-color: #FBFCFC;
outline: none;
${H8}
width: 61px;

&::placeholder {
    ${H8}
  }
`

S.Count = styled.div``

S.ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;

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
  background-color: ${({ $active }) => ( $active ? "#EE3333" : "#C0C5C7" )};
`

S.H4 = styled.p`
  ${H4}
  color : #FBFCFC;
`

S.Warning = styled.p`
  ${H10}
  color: #E49804;
  margin: 4px 0 0 100px;
`


S.Description = styled.div`
  margin: 48px 0 0 0;
  position: relative;
`

S.InputBox = styled.textarea`
  width: 1160px;
  height: 335px;
  border: 1px solid #6E7476;
  border-radius: 2px;
  margin: 8px 0 0 0;
  background-color: #FBFCFC;
  outline: none;
  padding: 12px;
  resize: none;
  ${H8}
`

S.Count = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`

// 드롭다운
S.DropdownWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  
`

S.DropdownButton = styled.div`
`

S.OptionList = styled.div`
  position: absolute;
  /* left: 0; */
  top: 645px;
  left: 810px;
  /* right: auto; */
  width: 75px;
  border: solid 1px #6E7476;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  background-color: #FCFBFB;
  border-radius: 2px;
`

S.Option = styled.div`
  height: 35px;
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
    &:hover {
      color: #EE3333;
    }
`

S.H8 = styled.p`
  ${H8}
  color: ${({ selected }) => (selected ? '#333333' : '#6E7476')};

`

S.DropdownIcon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 0 0 4px;
`

S.calendar = styled.img`
	width: 20px;
	height: 20px;
`

S.Datewrap = styled.div`
	display: flex;
	align-items: center;
`

S.StyledFlatpickr = styled(Flatpickr)`
  border: none !important;
  outline: none !important;
  background-color: transparent;
  width: 355px;
  ${H8}
  &::placeholder {
    color: #6E7476
  }
`

S.ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
S.CloseIcon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  cursor: pointer;
  z-index: 100;
  top: 14px;
  right: 14px;
`

export default S;