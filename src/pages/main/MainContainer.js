import React, { useEffect, useState } from 'react';
import S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';

const MainContainer = () => {
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    const fetchArts = async () => {
      const response = await fetch('http://localhost:10000/displays/api/list/main');
      if (!response.ok) throw new Error('mainArtsList fetch Error');
      const data = await response.json();
      setArtList(data.artListForMain);
      return data;
    };
    fetchArts()
      // .then((res) => console.log(res))
      // .catch((error) => console.error(error));
  }, []);

  return (
    <S.VerticalSwiper 
      className='vertical-swiper'
      direction="vertical"
      slidesPerView={1}
      mousewheel={{ forceToAxis: true }}
      speed={800}
      pagination={{ clickable: true }}
      modules={[Mousewheel, Pagination]}
    >
      <SwiperSlide>
        <S.MainSection>
          <S.SwiperWrap>
            <Swiper
              className='horizontal-swiper'
              modules={[Navigation, Autoplay]}
              slidesPerView={'auto'}
              spaceBetween={68}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {artList.map((art, idx) => (
                <S.SwiperSlide key={idx}>
                  <S.ImgWrap>
                    <S.ArtImg
                      src={`http://localhost:10000/files/api/get/${art.artImgName}?filePath=${art.artImgPath}`}
                      alt={art.artTitle}
                    />
                    <NavLink to={`/display/detail/${art.id}`}>
                      <S.ArtInfo>
                        <S.ArtTitle>{art.artTitle}</S.ArtTitle>
                        <S.UserName>{art.userName}</S.UserName>
                      </S.ArtInfo>
                    </NavLink>
                  </S.ImgWrap>
                </S.SwiperSlide>
              ))}
            </Swiper>
          </S.SwiperWrap>
          <S.MainTextWrap>
            <S.MainSectionTitle>모든 작품들은 빛날 가치가 있습니다</S.MainSectionTitle>
          </S.MainTextWrap>
        </S.MainSection>
      </SwiperSlide>

      <SwiperSlide>
        <S.Section>
          <S.Link to="/auction/bidding/korean">
            <S.SectionTitleWrap>
              <S.SectionTitle>Gradation Auction</S.SectionTitle>
              <S.Line/>
            </S.SectionTitleWrap>
            <S.Banner>
              <div>
                <img src={`/assets/images/icon/main-auction.png`} alt="auction" />
              </div>
              <S.BannerText>
                <S.Text1>졸업작품 전문 경매 플랫폼</S.Text1>
                <S.Text2>그라데이션은 미래의 창작가를</S.Text2>
                <S.Text2>응원할 당신을 기다립니다.</S.Text2>
              </S.BannerText>
            </S.Banner>
          </S.Link>
        </S.Section>
      </SwiperSlide>

      <SwiperSlide>
        <S.Section>
          <S.Link to="/display/korean">
            <S.SectionTitleWrap>
              <S.SectionTitle>Gradation Art</S.SectionTitle>
              <S.Line/>
            </S.SectionTitleWrap>
            <S.Banner>
              <div>
                <img src={`/assets/images/icon/main-exhibition1.png`} alt="exhibition1" />
                <img src={`/assets/images/icon/main-exhibition2.png`} alt="exhibition2" />
              </div>
              <S.BannerText>
                  <S.Text3>세상이 알지 못한 숨겨진 작품들</S.Text3>
                  <S.Text4>꿈꾸는 청춘들을 만나보세요</S.Text4>
              </S.BannerText>
            </S.Banner>
          </S.Link>
        </S.Section>
      </SwiperSlide>

      <SwiperSlide>
        <S.Section style={{ marginBottom: "200px" }}>
          <S.Link to="/upcycling">
            <S.SectionTitleWrap>
              <S.SectionTitle>Gradation Upcycling</S.SectionTitle>
              <S.Line/>
            </S.SectionTitleWrap>
            <S.Banner>
              <div>
                <img src={`/assets/images/icon/main-upcycling.png`} alt="upcycling" />
              </div>
              <S.BannerText>
                  <S.Text4 style={{marginBottom:"40px"}}>창작과 환경의 공존</S.Text4>
                  <S.Text2>작은 노력이 큰 변화를 만들어 냅니다.</S.Text2>
              </S.BannerText>
            </S.Banner>
          </S.Link>
        </S.Section>
      </SwiperSlide>
    </S.VerticalSwiper>
  );
};

export default MainContainer;
