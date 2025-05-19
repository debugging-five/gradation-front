import styled from 'styled-components';

const S = {};

S.VerticalSwiper = styled.div`
  width: 100%;
  height: 100vh;

  .swiper-wrapper {
    display: flex;
    flex-direction: column;
  }
`;

S.Slide = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

S.Main = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 120px;
  background-image: url('/assets/images/main/main.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

S.SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

S.MainTextWrap = styled.div`
  width: 100%;
  margin-top: 60px;
  text-align: center;
  z-index: 2;
`;

S.MainText = styled.p`
  font-size: 48px;
  color: ${({ theme }) => theme.PALLETE.gray[900]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_KR.bold};
  margin-top: 176px;
`;

S.Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 60px 0;
`;

S.SectionTitleWrap = styled.div`
  display: flex;
  align-items: center;
  width: 1160px;
  margin-bottom: 32px;
`;

S.SectionTitle = styled.h1`
  margin-right: 20px;
  font-size: 40px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    font-size: 44px;
    color: ${({ theme }) => theme.PALLETE.primary.main};
  }
`;

S.Line = styled.div`
  flex: 1;
  border-bottom: 2px solid ${({ theme }) => theme.PALLETE.gray[900]};
`;

S.Banner = styled.div`
  position: relative;
  width: 1160px;
  height: 500px;
  display: flex;
  gap: 20px;
`;

S.BannerText = styled.div`
  position: absolute;
  bottom: 32px;
  left: 48px;
  color: ${({ theme }) => theme.PALLETE.gray[100]};
`;

S.GradationText = styled.div`
  position: absolute;
  bottom: 32px;
  left: 48px;
  color: ${({ theme }) => theme.PALLETE.gray[100]};
`;

export default S;
