import styled from 'styled-components'
import { EN_H2, H10, H2, H4, H6, H7, H8 } from '../../../styles/common';
import { Link } from 'react-router-dom';

const S = {};

S.Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 130px;
  justify-content: center;
  margin: 40px 0 0 0;
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
`
S.H2 = styled.p`
  ${H2}
  color: #FBFCFC;
  `

S.H4 = styled.p`
  ${H4}
  color: #FBFCFC;
`

S.H6 = styled.p`
  ${H6}
`
export default S;