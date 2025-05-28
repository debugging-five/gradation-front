import React, { useEffect, useState } from 'react';
import S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { NavLink, useNavigate } from 'react-router-dom';

const MainContainer = () => {
  const [artList, setArtList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArts = async () => {
      const response = await fetch('http://localhost:10000/displays/api/list/main');
      if (!response.ok) throw new Error('mainArtsList fetch Error');
      const data = await response.json();
      setArtList(data.artListForMain);
      return data;
    };
    fetchArts()
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
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
              loop={artList.length >= 6}
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
                        <p>{art.artTitle}</p>
                        <p>{art.userName}</p>
                      </S.ArtInfo>
                    </NavLink>
                  </S.ImgWrap>
                </S.SwiperSlide>
              ))}
            </Swiper>
          </S.SwiperWrap>
          <S.MainTextWrap>
            <p>모든 작품들은 빛날 가치가 있습니다</p>
          </S.MainTextWrap>
        </S.MainSection>
      </SwiperSlide>

      <SwiperSlide>
        <S.Section>
          <S.Link to="/auction/bidding/korean">
            <S.SectionTitleWrap>
              <h1>Gradation Auction</h1>
              <S.Line/>
            </S.SectionTitleWrap>
            <S.Banner>
              <div>
                <img src={`/assets/images/icon/main-auction.png`} alt="auction" />
              </div>
              <S.BannerText>
                <h3>졸업작품 전문 경매 플랫폼</h3>
                <h2>그라데이션은 미래의 창작가를</h2>
                <h2>응원할 당신을 기다립니다.</h2>
              </S.BannerText>
            </S.Banner>
          </S.Link>
        </S.Section>
      </SwiperSlide>

      <SwiperSlide>
        <S.Section>
          <S.Link to="/display/korean">
            <S.SectionTitleWrap>
              <h1>Gradation Art</h1>
              <S.Line/>
            </S.SectionTitleWrap>
            <S.Banner>
              <div>
                <img src={`/assets/images/icon/main-exhibition1.png`} alt="exhibition1" />
                <img src={`/assets/images/icon/main-exhibition2.png`} alt="exhibition2" />
              </div>
              <S.BannerText>
                <div>
                  <h3>세상이 알지 못한</h3>
                  <h2>숨겨진 작품들</h2>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <h3>꿈꾸는 청춘들을</h3>
                  <h2>만나보세요</h2>
                </div>
              </S.BannerText>
            </S.Banner>
          </S.Link>
        </S.Section>
      </SwiperSlide>

      <SwiperSlide>
        <S.Section style={{ marginBottom: '200px' }}>
          <S.Link to="/upcycling">
            <S.SectionTitleWrap>
              <h1>Gradation Upcycling</h1>
              <S.Line/>
            </S.SectionTitleWrap>
            <S.Banner>
              <div>
                <img src={`/assets/images/icon/main-upcycling.png`} alt="upcycling" />
              </div>
              <S.BannerText>
                <div>
                  <h3>창작과 환경의 공존</h3>
                  <h2>작은 노력이 큰 변화를 만들어 냅니다.</h2>
                </div>
              </S.BannerText>
            </S.Banner>
          </S.Link>
        </S.Section>
      </SwiperSlide>
    </S.VerticalSwiper>
  );
};

export default MainContainer;
