import React, { useEffect, useState } from 'react';
import S from './style';
import { Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom';

const ExhibitionGradation = () => {

  const [arts, setArts] = useState([]);
  const [info, setInfos] = useState();
  const [lastExhibition, setLastExhibition] = useState([]);
  // const [images, setImages] = useState([]);


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
  }, []);

  // 전시회 정보
  useEffect(() => {
    const fetchGradationInfo = async () => {
      const response = await fetch(`http://localhost:10000/exhibitions/api/gradation/current`);

      if(!response.ok) {
        throw new Error('gradation fetch Error')
      }

      const data = await response.json();
      setInfos(data);
      return data;
    };

    fetchGradationInfo()
      .then((res) => {
        // console.log(res)
      })
      .catch((error) => {
        // console.error(error)
      })
  }, []);

  useEffect(() => {
    const fetchLastExhibition = async () => {
      const response = await fetch(`http://localhost:10000/exhibitions/api/gradation/recent`);
      if (!response.ok) {
        throw new Error(`lastGradation fetch Error`)
      }
      const data = await response.json();
      setLastExhibition(data);
      return data;
    };
    fetchLastExhibition()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])


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
              <S.bar>|</S.bar>
              <S.InfoContent>{info?.gradation?.gradationExhibitionTitle}</S.InfoContent>
            </S.InfoDetail>
            <S.InfoDetail>
              <S.InfoName>전시 작품</S.InfoName>
              <S.bar>|</S.bar>
              <S.InfoContent>{info?.gradation?.gradationExhibitionArt}</S.InfoContent>
            </S.InfoDetail>
            <S.InfoDetail>
              <S.InfoName>작품 구성</S.InfoName>
              <S.bar>|</S.bar>
              <S.InfoContent>{info?.gradation?.gradationExhibitionCategory}</S.InfoContent>
            </S.InfoDetail>
            <S.InfoDetail>
              <S.InfoName>관람 시간</S.InfoName>
              <S.bar>|</S.bar>
              <S.InfoContent>{info?.gradation?.gradationExhibitionTime}</S.InfoContent>
            </S.InfoDetail>
            <S.InfoDetail>
              <S.InfoName>관람료</S.InfoName>
              <S.bar>|</S.bar>
              <S.InfoContent>{info?.gradation?.gradationExhibitionFee}</S.InfoContent>
            </S.InfoDetail>
            <S.InfoDetail>
              <S.InfoName>전시 문의</S.InfoName>
              <S.bar>|</S.bar>
              <S.InfoContent>{info?.gradation?.gradationExhibitionTel}</S.InfoContent>
            </S.InfoDetail>
          </div>
        </S.MapWrap>

        <S.gradationInfo>
          <S.Address>{info?.gradation?.gradationExhibitionAddress}</S.Address>
          <S.Line src={`/assets/images/icon/Line.png`} alt='line'></S.Line>
          <S.Date>{info?.gradation?.gradationExhibitionDate}</S.Date>
        </S.gradationInfo>

        <S.LastExhibition>
          {lastExhibition.map((exhibition, idx) => (
            <div key={idx}>
              {Array.isArray(exhibition)
                ? exhibition.map((item, i) => <p key={i}>{item}</p>)
                : <p>{exhibition}</p>
              }
            </div>
          ))}
        </S.LastExhibition>

      </S.InfoContainer>



    </div>
  );
};

export default ExhibitionGradation;