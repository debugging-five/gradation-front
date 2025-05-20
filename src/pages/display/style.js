import styled from 'styled-components'
import { EN_H2, H10, H8 } from '../../styles/common';
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

S.H8 = styled.p`
  ${H8}
  color: ${black};
`
S.UnSelectedType = styled.p`
  ${H8}
  color: ${gray900};
  cursor: pointer;
  
  &:hover {
    color: ${black};
  }
`

S.SelectedRed = styled.p`
  ${H8}
  color: ${primary};
  cursor: pointer;
  border-bottom: solid 2px ${primary};
`

S.Wrapper = styled.div`
  display : flex; 
  flex-direction : column;
  align-items: center; 
  justify-content: center;
`

S.TypeWrapper = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: center;
`

S.TypeDiv = styled.div`
  width: 120px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
S.Bar = styled.p`
  ${H8}
`

S.CategoryWrapper = styled.div`
  display: flex;
  margin: 64px 0 0 0;
  justify-content: center;
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


  &::placeholder {
    ${H10}
    color: #6E7476;
    padding : 9px 11px;
  }
`

S.Upload = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

S.Icon = styled.img`
  width: 18px;
  height: 18px;
`

S.H8 = styled.p`
  ${H8}
`

S.Dropdown = styled.div`

`

S.Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
  width: 1160px;
`




export default S;