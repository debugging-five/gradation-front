import styled from "styled-components";
import { H1, H5, H8, H7, EN_H3, H3, EN_H4, H6 } from "../../../styles/common";
import { SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
const primary = "#EE3333";
const gray900 = "#6E7476";
const black = "#333333";

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

  border-width: 4px;
  border: 4px solid transparent;
  border-image: linear-gradient(135deg, rgba(255, 254, 248, .8) 0%, rgba(255, 255, 255, .5) 20%, rgba(255, 255, 255, .8) 50%, rgba(200, 200, 200, .8) 100%) 1;
  box-shadow: -4px 10px 5px rgba(0, 0, 0, 0.1);
  background-color: #111;
`

S.ArtInfo = styled.div`
  width: 100%;
  height: 100%;
  gap: 32px;
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
  position: relative;
  width: 1124px;
  margin: 200px 0 56px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.ButtonArea = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(312px);
  display: flex;
  gap: 20px;
`;

S.AddButton = styled.button`
  ${H6};
  width: 120px;
  height: 45px;
  background: white;
  color: ${primary};
  border: 1.5px solid  ${primary};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${primary};
    border: 1.5px solid  ${primary};
    color: white;
  }
`;

S.EditButton = styled.button`
  ${H6};
  width: 120px;
  height: 45px;
  background: white;
  color: ${black};
  border: 1.5px solid ${black};
  border-radius: 3px;
  cursor: pointer;
`;
  
S.Input = styled.input`
  ${H8};
  color: ${gray900};
  border: none;
  border-bottom: 1px solid ${gray900};
  background: transparent;
  width: 100%;
  outline: none;
  margin-left: 28px;
`;

S.Infomation = styled.p`
${EN_H3};
color: ${({ theme }) => theme.PALLETE.black};
`

S.Guide = styled.p`
  ${H5}
  color: ${({ theme }) => theme.PALLETE.gray[900]};
`

S.Map = styled.div`
  width: 520px; 
  height: 520px;
`

S.MapWrap = styled.div`
  width: 1160px;
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
  width: 108px;
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
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
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
`
S.AddForm = styled.button`
  border: solid 1px;
  width: 120px;
  height: 45px;
  ${H6}
  background-color: transparent;
  margin-top: 52px;
`
S.AddFormDiv = styled.div`
  padding: 0 0 24px 640px;
`

S.GradationImg = styled.img`
  width: 100%;
  height: 480px;
`
S.UploadDiv = styled.div`
  width: 760px;
  margin: 1px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
S.AddPhoto = styled.div`
  width: 760px;
  height: 480px;
  background-color: #D9D9D9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
`
S.AddImg = styled.img`
  width: 36px;
  height: 36px;
`
S.ImgFile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export default S;