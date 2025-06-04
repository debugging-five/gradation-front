import styled from 'styled-components';
import { EN_H2, H3, H8 } from '../../../styles/common';
const primary = "#EE3333";
const gray900 = "#6E7476";
const black = "#333333";

const S = {};

S.EN_H2 = styled.div`
  ${EN_H2}
  display: flex;
  justify-content: center;
`

S.Wrap = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 140px auto 200px auto;
  background-color: #FBFCFC;
  display : flex; 
  flex-direction : column;
`

S.TitleWrap = styled.div`
  width : 100%;
  margin: 0 auto;
  border-bottom : solid 2px ${({ theme }) => theme.PALLETE.primary.main};
  margin-top: 82px; 
`

S.Title = styled.h1`
   ${H3};
   margin-bottom :7px;
`   
S.Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  margin-top: 60px;
`;

S.ListWrap = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.PALLETE.primary.main};
`

S.ListTitle = styled.p`
  color: ${({ theme }) => theme.PALLETE.primary.main};
  margin-bottom: 16px;
`

S.Sidebar = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
`;

S.ListItem = styled.div`
  ${H8}
  width: 200px;
  cursor: pointer;
  margin: 16px 0 16px 0 ;

  &.active {
    color: ${primary};
  }

  &:hover {
    color: ${primary};
  }
`;

S.ListWrap2 = styled.div`
  width: 200px;
  border-bottom: 1px solid ${({ theme }) => theme.PALLETE.gray[900]};
`

S.Content = styled.div`
  width: 840px;
  margin-left: 80px;
`;

// ExhibitionGradationPast

S.LastImgContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px 60px;
`


S.ArtInfo = styled.div`
  width: 100%;
  height: 100%;
  gap: 18px;
  position: absolute;
  top: 0; 
  left: 0;
  background-color: rgba(0,0,0,0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`

S.ImgWrap = styled.div`
  width: 240px;
  height: 240px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  border-width: 4px;
  border: 4px solid transparent;
  border-image: linear-gradient(135deg, rgba(255, 254, 248, .8) 0%, rgba(255, 255, 255, .5) 20%, rgba(255, 255, 255, .8) 50%, rgba(200, 200, 200, .8) 100%) 1;
  box-shadow: -4px 10px 5px rgba(0, 0, 0, 0.1);
  background-color: #111;

  &:hover ${S.ArtInfo} {
    opacity: 1;
  }
`

S.ArtImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block
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