import styled from 'styled-components'
import { EN_H2, H10, H2, H3, H4, H6, H7, H8 } from '../../../styles/common';
import { Link } from 'react-router-dom';

const S = {};

S.Container = styled.div`
  margin: 40px 0 0 0;
`

S.Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 130px;
  justify-content: center;
  /* margin: 40px 0 0 0; */
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
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
`
S.H2 = styled.p`
  /* ${H2} */
  font-size: 24px;
  font-weight: 400;
  color: #FBFCFC;
  width: 236px;
`

S.H4 = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #FBFCFC;
`

S.H6 = styled.p`
  ${H6}
`

// 페이지네이션
S.PagenationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 160px 0 0 0;
`

S.PagenationButton = styled.div`
  width: 9px;
  height: 20px;
  color: ${(props) => (props.$active ? '#FF3333' : '#6E7476')};
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center;

  &:hover {
    color: #333333;
  }
`

S.PagenationIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`
export default S;