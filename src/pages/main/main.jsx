import React, { useEffect, useState } from 'react';
import S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';

const Main = () => {

  const [artList, setArtList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:10000/displays/api/display/main')
      .then((res) => {
        if(!res.ok) {
          throw new Error('서버 응답 오류');
        }
        return res.json();
      })
      .then((data) => {
        setArtList(data.artListForMain);
      })
      .catch((error) => {
        console.error('최신 작품 불러오기 실패', error);
      });
  }, []);

  return (
    <div>
      <S.SwiperWrap>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {artList.map((art) => (
            <SwiperSlide key={art.displayId}>
              <S.SlideImg src={art.artImgPath} alt={art.artImgName} />
              <S.SlideTitle>{art.artTitle}</S.SlideTitle>
              <S.SlideArtist>{art.userName}</S.SlideArtist>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperWrap>
    </div>
  );
};

export default Main;