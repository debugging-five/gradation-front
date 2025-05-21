import React, { useEffect, useState } from 'react';
import S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useNavigate } from 'react-router-dom';

const MainContainer = () => {
  const [artList, setArtList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:10000/displays/api/display/main')
      .then((res) => {
        if (!res.ok) throw new Error('서버 응답 오류');
        return res.json();
      })
      .then((data) => {
        setArtList(data.artListForMain); 
      })
      .catch((error) => {
      });
  }, []);

  return (
    <>
    </>
  );
};

export default MainContainer;
