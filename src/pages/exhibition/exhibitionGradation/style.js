import styled from "styled-components";
import { H1, H5, H8, H7, EN_H3, H3, EN_H4 } from "../../../styles/common";
import { SwiperSlide } from "swiper/react";

const S = {};

S.TitleWrap = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.Title = styled.p`
  ${H1};
`;

S.SwiperWrap = styled.div`
  width: 1872px; 
  height: 320px; 
  margin: 0 auto;
`;

S.SwiperSlide = styled(SwiperSlide)`
  width: 320px;
  display: flex; 
  flex-direction: column;
  align-items: center;
`

S.ArtInfo = styled.div`
  width: 100%;
  height: 100%;
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
  width: 320px;
  height: 320px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

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

/* 전시회 정보 */

S.InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

S.InfoWrap = styled.div`
  margin: 200px 0 56px 0;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  `
  
  S.Infomation = styled.p`
  ${EN_H3};
  color: ${({ theme }) => theme.PALLETE.black};
  `

S.Guide = styled.p`
  ${H5}
  color: ${({ theme }) => theme.PALLETE.gray[900]};
`

S.Map = styled.div`
  width:520px; 
  height: 520px;
  border: 1px solid #333333;
`

S.MapWrap = styled.div`
  width: 1124px;
  display: flex;
  gap: 160px;
`

S.InfoDetail = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`

S.InfoName = styled.p`
  ${H7}
  width: 80px;
  margin-right: 12px;
`
S.bar = styled.p`
  color: ${({ theme }) => theme.PALLETE.gray[900]};

`
S.InfoContent = styled.p`
  ${H8}
  margin-left: 28px;
`

S.gradationInfo = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  gap: 64px;
`

S.Address = styled.p`
  ${H3}
`
S.Line = styled.img`
  width: 450px;
  height: 2px;
`
S.Date = styled.p`
  ${EN_H4}
`

S.LastExhibition = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
`





export default S;