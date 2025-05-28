import styled from 'styled-components'
import { EN_H2, H10, H2, H4, H6, H7, H8 } from '../../../styles/common';
import { Link } from 'react-router-dom';

const S = {};

S.Container = styled.div`
  background-color: #FBFCFC;
  display: flex;
  flex-direction: column;
  align-items: center;
`
S.Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 130px;
  justify-content: center;
  margin: 40px 0 160px 0;
`

S.Display = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  text-decoration: none;
  color: inherit;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .overlay {
    opacity: 1;
  }

`

S.Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

S.Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  text-align: center;
`

S.H2 = styled.p`
  ${H2}
  color: #FBFCFC;
  width: 236px;
`

S.H4 = styled.p`
  ${H4}
  color: #FBFCFC;
`

S.H6 = styled.p`
  ${H6}
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

S.Upload = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

S.Icon = styled.img`
  width: 18px;
  height: 18px;
`
export default S;