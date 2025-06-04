import { useEffect } from 'react';

const useFooterObserver = (footerRef, swiperRef) => {
  useEffect(() => {
    if (!footerRef?.current || !swiperRef?.current?.swiper) return;

    const swiper = swiperRef.current.swiper;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
        //   console.log('swiper mousewheel 비활성화');
          swiper.mousewheel.disable();
        } else {
        //   console.log('swiper mousewheel 활성화');
          swiper.mousewheel.enable();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, [footerRef, swiperRef]);
};

export default useFooterObserver;
