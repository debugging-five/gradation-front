import styled from "styled-components";
import { H1, H5, H8, H7, EN_H3, H3, EN_H4, H6 } from "../../../styles/common";
import { SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

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

S.gradationContainer = styled.div`
  width: 1124px;
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
  ${H8}
  margin-top: 40px;

  div {
    margin-bottom: 20px
  }

  p {
    display: inline-block;
    padding: 0.2em 0;
    transform-origin: left top;
    transition: transform 0.4s ease;
  }

  p:hover {
    transform: scale(1.1);
    font-weight: 500;
    cursor: pointer;
  }
`

S.NavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none
`

S.GradationImgWrap = styled.div`
  width: 760px;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.GradationInfo = styled.p`
  ${H3}
  margin-bottom: 60px;
`

S.GradationImg = styled.img`
  width: 100%;
  height: 480px;
`

export default S;