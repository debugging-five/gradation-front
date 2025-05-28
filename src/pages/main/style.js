import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const S = {};

S.VerticalSwiper = styled(Swiper)`
  width: 100%;
  height: 100vh;

  &.vertical-swiper .swiper-wrapper {
    display: flex;
    flex-direction: column;
  }
`;

S.MainSection = styled.div`
  width: 100%;
  height: 100vh;
  /* padding-top: 120px; */
  background-image: url('../assets/images/icon/main-section1.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0px;
`;

S.SwiperWrap = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 80px;

  .horizontal-swiper .swiper-wrapper {
    flex-direction: row !important;
  }
`;

S.SwiperSlide = styled(SwiperSlide)`
  width: 320px;
  height: 320px;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  flex-shrink: 0;
`;

S.ImgWrap = styled.div`
  width: 320px;
  height: 320px;
  position: relative;
  overflow: hidden;
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
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

S.MainTextWrap = styled.div`
  width: 100%;
  margin-top: 60px;
  text-align: center;
  z-index: 2;

  p {
    font-size: 48px;
    color: #111;
    font-weight: bold;
    margin-top: 60px;
  }
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

S.Link = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    h1 {
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
`;

S.BannerText = styled.div`
  color: #eee;
  position: absolute;
  bottom: 32px;
  left: 48px;
`;

export default S;
