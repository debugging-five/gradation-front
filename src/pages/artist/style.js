import styled from 'styled-components'
import { EN_H2, H1, H10, H8 } from '../../styles/common';
import { Link } from 'react-router-dom';
const primary = "#EE3333";
const gray900 = "#6E7476";
const black = "#333333";

const S = {};

S.Container = styled.div`
  background-color: #FBFCFC;
  margin: 140px 0 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.Link = styled(Link)`
  color: inherit;
  text-decoration: none;
`

S.EN_H2 = styled.p`
  ${EN_H2}
`

S.CategoryWrapper = styled.div`
  display: flex;
  margin: 64px 0 0 0;
  justify-content: center;
`

S.TypeDiv = styled.div`
  width: 120px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

S.SelectedRed = styled.p`
  ${H8}
  color: ${primary};
  cursor: pointer;
  border-bottom: solid 2px ${primary};
`

S.UnSelectedType = styled.p`
  ${H8}
  color: ${gray900};
  cursor: pointer;
  
  &:hover {
    color: ${black};
  }
`

S.Bar = styled.p`
  ${H8}
`
S.InputWrapper = styled.div`
  display: flex;
  margin: 84px 0 0 0;
`

S.Input = styled.input`
  width: 200px;
  height: 32px;
  border: solid 1px #6E7476;
  border-radius: 3px;
  margin-left: auto;
  background-color: #FBFCFC;
  outline: none;
  padding: 0 0 0 9px;
  ${H10}

  &::placeholder {
    ${H10}
    color: #6E7476;
  }
`

S.Menu = styled.div`
  margin: 20px 0 0 auto;
  width: 1160px;
  position: relative;
`

S.DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
`

S.DropdownButton = styled.div`
  width: 60px;
  height: 35px;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  ${H8}
`

S.DropdownIcon = styled.img`
  width: 16px;
  height: 16px;
`
S.Dropdown = styled.div`
  position: absolute;
  top: 36px; 
  left: auto;
  right: 0;
  background-color: #FBFCFC;
  border-radius: 2px;
  z-index: 100; 

  :hover {
    background-color: #EE3333;
    color: #FBFCFC;
  }
`

S.Option = styled.div`
  border: 1px solid #6E7476;
  width: 75px;
  height: 35px;
  ${H8}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

`


export default S;