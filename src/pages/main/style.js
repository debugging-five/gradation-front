import styled from 'styled-components';

const S = {};

S.SwiperWrap = styled.div`
  width: 100%;
`;

S.SlideImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

S.SlideTitle = styled.h3`
  font-size: 18px;
`;

S.SlideArtist = styled.p`
  font-size: 14px;
  color: gray;
`;

export default S;
