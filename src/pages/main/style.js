import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { H2, H4, EN_H2, H5, H3 } from '../../styles/common';
const primary = "#EE3333";
const gray100 = "#FBFCFC";
const gray500 = "#C0C5C7";
const gray900 = "#6E7476";
const black = "#333333";
const warning = "#E49804";

const S = {};

S.Bg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  filter: grayscale(1);
  /* background-image: url('../assets/images/icon/main-section1.png'); */
  /* background-image: url('/assets/images/main/main_bg.jpg'); */
  background-image: url('/assets/images/main/main_walkable_bg.jpg');
  background-size: cover;
  background-position: center;
`

S.VerticalSwiper = styled(Swiper)`
  background:transparent;
  width: 100%;
  height: 100vh;

  &.vertical-swiper .swiper-wrapper {
    display: flex;
    flex-direction: column;
  }

  & .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets {
  
    right: 60px;

    & .swiper-pagination-bullet-active {
      background-color: white !important;
    }
  }


`;

S.MainSection = styled.div`
  width: 100%;
  height: 100vh;
  /* padding-top: 120px; */
  /* background-image: url('../assets/images/icon/main-section1.png'); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .swiper-wrapper {
    align-items: center;
  }
`;

S.MainSectionTitle = styled.p`
  font-size: 34px;
  font-weight: bold;
  margin-top: 40px;
`

S.SwiperWrap = styled.div`
  width: 100%;
  & .swiper {
    overflow: visible;
    padding: 0 100px;
  }

  .horizontal-swiper .swiper-wrapper {
    flex-direction: row !important;
  }
`;

S.SwiperSlide = styled(SwiperSlide)`
  border-width: 4px;
  border: 4px solid transparent;
  border-image: linear-gradient(135deg, rgba(255, 254, 248, .8) 0%, rgba(255, 255, 255, .5) 20%, rgba(255, 255, 255, .8) 50%, rgba(200, 200, 200, .8) 100%) 1;
  box-shadow: -4px 10px 5px rgba(0, 0, 0, 0.1);
  width: 220px;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
`;

S.ImgWrap = styled.div`
  /* width: 320px;
  height: 320px; */
  position: relative;
  cursor: pointer;

  &:hover div {
    opacity: 1;
  }
`;

S.ArtImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

S.ArtInfo = styled.div`
  width: 100%;
  height: 100%;
  gap: 16px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${gray100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

S.ArtTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
`
S.UserName = styled.p`
  ${H4};
`

S.MainTextWrap = styled.div`
  width: 100%;
  margin: 40px 0 100px 0;
  text-align: center;
  z-index: 2;
`;

S.Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 60px 0;
  box-sizing: border-box;
`;

S.SectionTitle = styled.h1`
  font-size: 40px;
  margin-right: 20px;
  transition: 0.3s;
`;

S.Link = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  margin: 0 0 100px 0;
  &:hover {
    ${S.SectionTitle} {
      cursor: pointer;
      font-size: 44px;
    }
  }
`

S.SectionTitleWrap = styled.div`
  display: flex;
  align-items: center;
  width: 1160px;
  margin-bottom: 32px;
  height: 60px;

  h1 {
    margin-right: 20px;
    font-size: 40px;
    transition: 0.3s;
  }
`;

S.Line = styled.div`
  flex: 1;
  border-bottom: 2px solid black;
`;

S.Banner = styled.div`
  position: relative;
  width: 1160px;
  height: 500px;
  display: flex;
  gap: 20px;

  & .linear-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0.5;
    background: linear-gradient(to top, black, transparent);
    width: 100%;
    height: 50%;
  }
`;

S.BannerText = styled.div`
  position: absolute;
  color: ${gray100};
  bottom: 32px;
  left: 48px;
`;

S.TextGradation1 = styled.div`
`
S.TextGradation2 = styled.div`
`

S.Text1 = styled.p`
  ${H2}
  margin-bottom: 16px;
  font-weight: 600;
`
S.Text2 = styled.p`
  ${H3}
  font-weight: 300;
  `
S.Text3 = styled.p`
  ${H2};
  margin: 0 0 16px 0;
`
S.Text4 = styled.p`
  ${H3}
  font-weight: 300;
`

export default S;
