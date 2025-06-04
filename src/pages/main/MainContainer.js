import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { NavLink, useOutletContext } from 'react-router-dom';

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import useFooterObserver from '../../hooks/swiper/useFooterObserver';


const MainContainer = () => {
  const [artList, setArtList] = useState([]);
  const categoryMap = new Map([
  ["한국화", "korean"],
  ["회화", "painting"],
  ["건축", "architecture"],
  ["조각", "sculpture"],
  ["서예", "calligraphy"],
  ["공예", "craft"]
]);


  const { footerRef } = useOutletContext();
  const swiperRef = useRef(null);

  useFooterObserver(footerRef, swiperRef);

  useEffect(() => {
    const fetchArts = async () => {
      const response = await fetch('http://localhost:10000/displays/api/list/main');
      // console.log("qwer", response.status);
      if (!response.ok) throw new Error('mainArtsList fetch Error');
      const data = await response.json();
      // console.log(data);
      setArtList(data.artListForMain);
      return data;
    };
    fetchArts()
      .then((res) => {
        // console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })
    
    // aos
    AOS.init();
      // .then((res) => console.log(res))
      // .catch((error) => console.error(error));
  }, []);

 useEffect(() => {
  const swiper = swiperRef.current?.swiper;
  if (!swiper) return;

  let canScroll = false;
  let scrolled = false;

  const handleTransitionEnd = () => {
    if (swiper.activeIndex === swiper.slides.length - 1) {
      canScroll = true;
    }
  };

    const handleWheel = (e) => {
      const isLast = swiper.activeIndex === swiper.slides.length - 1;

      if (isLast && e.deltaY > 0 && canScroll && !scrolled) {
        e.preventDefault();
        scrolled = true;
        swiper.mousewheel.disable();

        setTimeout(() => {
          requestAnimationFrame(() => {
            window.scrollBy({ top: 100, behavior: 'smooth' });
          });
        }, 100);
      }
    };

    swiper.on('slideChangeTransitionEnd', handleTransitionEnd);
    swiper.on('slideChangeTransitionStart', () => {
      canScroll = false;
      scrolled = false;
    });

    const container = swiper.el;
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      swiper.off('slideChangeTransitionEnd', handleTransitionEnd);
      swiper.off('slideChangeTransitionStart', () => {
        canScroll = false;
        scrolled = false;
      });
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <S.VerticalSwiper 
        ref={swiperRef}
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
                slidesPerView={"auto"}
                spaceBetween={100}
                speed={5000}
                autoplay={{
                  // disableOnInteraction: false,
                  // pauseOnMouseEnter: true,
                }}
              >
                {/* {console.log("arts", artList)} */}
                {artList.map((art, idx) => (
                  <S.SwiperSlide key={idx} >
                    <S.ImgWrap>
                      <S.ArtImg
                        src={`http://localhost:10000/files/api/get/${art.artImgName}?filePath=${art.artImgPath}`}
                        alt={art.artTitle}
                      />
                      <NavLink to={`/display/${categoryMap.get(art.artCategory)}/detail/${art.artPostId}`}>
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
              <S.MainSectionTitle data-aos="fade-up" data-aos-duration={1000}>모든 작품들은 빛날 가치가 있습니다</S.MainSectionTitle>
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
                  <div className='linear-bg'></div>
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
                  <div className='linear-bg'></div>
                </div>
                <S.BannerText>
                    <S.Text3>세상이 알지 못한 숨겨진 작품들</S.Text3>
                    <S.Text4>꿈꾸는 청춘들의 가능성을 만나보세요</S.Text4>
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
                  <div className='linear-bg'></div>
                </div>
                <S.BannerText>
                    <S.Text3 style={{marginBottom:"16px"}}>창작과 환경의 공존</S.Text3>
                    <S.Text2>작은 노력이 큰 변화를 만들어 냅니다.</S.Text2>
                </S.BannerText>
              </S.Banner>
            </S.Link>
          </S.Section>
        </SwiperSlide>
      </S.VerticalSwiper>
      <S.Bg />
    </>
  );
};

export default MainContainer;
