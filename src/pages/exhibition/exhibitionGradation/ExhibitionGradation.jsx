import React, { useEffect, useState } from 'react';
import S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { NavLink, useLocation } from 'react-router-dom';

const ExhibitionGradation = () => {

  const [arts, setArts] = useState([]);
  const [info, setInfos] = useState();


  useEffect(() => {

    const fetchGradationImgs = async () => {
      try {
        const response = await fetch(`http://localhost:10000/exhibitions/api/gradation/top-liked-art`);
        const arts = await response.json();
        setArts(arts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchGradationImgs();

    // useEffect(() => {
    //   const fetchGradationInfo = async () => {
    //     const response = await fetch(``)
    //   }

    // })


  }, []);

  return (
    <div>
      <S.TitleWrap>
        <S.Title>"여러분의 작품을 전시해드립니다."</S.Title>
      </S.TitleWrap>
      
      <S.SwiperWrap >
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView= {'auto'}
          spaceBetween={68}
          loop={arts.length >= 6}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
        >
          {arts.map((art, idx) => (
            <S.SwiperSlide key={idx} >
              <S.ImgWrap>
                <S.ArtImg src={`http://localhost:10000/files/api/get/${art.artImgName}?filePath=${art.artImgPath}`} 
                alt={art.artTitle} />
                <NavLink to={`/display/detail/${art.id}`}>
                  <S.ArtInfo>
                    <p>{art.artTitle}</p>
                    <p>{art.userName}</p>
                  </S.ArtInfo>
                </NavLink>
              </S.ImgWrap>
            </S.SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperWrap>

      <S.InfoContainer>
        <S.InfoWrap>
          <S.Infomation>INFORMATION</S.Infomation>
          <S.Guide>전시안내</S.Guide>
        </S.InfoWrap>


        <S.MapWrap>

          <S.Map>
            지도
          </S.Map>
          
          <div>
            <S.InfoDetail>
              <S.InfoName>전시명</S.InfoName>
              <p>|</p>
              <S.InfoContent>이상향의 재현</S.InfoContent>
            </S.InfoDetail>
            
          </div>
        </S.MapWrap>
      </S.InfoContainer>



    </div>
  );
};

export default ExhibitionGradation;