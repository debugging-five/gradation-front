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


  useEffect(() => {

    const fetchGradationImgs = async () => {
      try {
        const response = await fetch(`http://localhost:10000/exhibitions/api/gradation/top-liked-art`);
        const arts = await response.json();
        setArts(arts);
      } catch (error) {
        // console.error('Error fetching data:', error);
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

  // 전시회 지도
useEffect(() => {
  if (!info?.gradation?.gradationExhibitionRealAddress) return;

  // 이미 SDK가 로드된 경우
  if (window.kakao && window.kakao.maps) {
    loadMap();
  } else {
    // 동적으로 Kakao 지도 API 로드
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=009a52c6bf731449d477ab86172f9d4e&autoload=false&libraries=services`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        loadMap();
      });
    };
    document.head.appendChild(script);
  }

  function loadMap() {
    const container = document.getElementById("map");
    const map = new window.kakao.maps.Map(container, {
      center: new window.kakao.maps.LatLng(37.5665, 126.9780),
      level: 3,
      draggable: true,
      scrollwheel: false,
    });

    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(info.gradation.gradationExhibitionRealAddress, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        new window.kakao.maps.Marker({ map, position: coords });
        map.setCenter(coords);
      }
    });
  }
}, [info]);

  useEffect(() => {
    const fetchLastExhibition = async () => {
      const response = await fetch(`http://localhost:10000/exhibitions/api/gradation/recent`);
      if (!response.ok) {
        throw new Error(`lastGradation fetch Error`)
      }
      const data = await response.json();
      setLastExhibition(data.exhibitions);
      return data;
    };
    fetchLastExhibition()
      .then((res) => {
        // console.log(res)
      })
      .catch((error) => {
        // console.error(error)
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

          <S.Map id="map" 
          // onClick={() => {
          //   const query = info.gradation.gradationExhibitionRealAddress;
          //   const url = `https://map.kakao.com/?q=${encodeURIComponent(query)}`;
          //   window.open(url, '_blank');
          // }} 
          />
          
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

        <S.gradationContainer>
          <S.gradationInfo>
            <S.Address>{info?.gradation?.gradationExhibitionAddress}</S.Address>
            <S.Line src={`/assets/images/icon/Line.png`} alt='line'></S.Line>
            <S.Date>{info?.gradation?.gradationExhibitionDate}</S.Date>
          </S.gradationInfo>

          <S.LastExhibition>
            {lastExhibition.map((exhibition, idx) => (
              <S.NavLink key={idx} to={`/exhibition/gradation/past/${exhibition.id}`}>
                <p>{exhibition.title}</p>
              </S.NavLink>
            ))}
          </S.LastExhibition>
        </S.gradationContainer>

      </S.InfoContainer>

      {info?.images?.length > 0 && (
        <S.GradationImgWrap>
          <S.GradationInfo>공간 정보</S.GradationInfo>
          {info.images?.map((img, idx) => (
              <S.GradationImg 
                key={idx}
                src={`http://localhost:10000/files/api/get/${img.gradationExhibitionImgName}?filePath=${img.gradationExhibitionImgPath}`}
                alt={`${idx}번째 전시회 이미지`}
              />
          ))}
        </S.GradationImgWrap>
      )}

    </div>
  );
};

export default ExhibitionGradation;