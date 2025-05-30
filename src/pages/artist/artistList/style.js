import styled from 'styled-components';
import {H5, H9 } from '../../../styles/common';
const primary = "#EE3333";
const gray900 = "#6E7476";
const gray500 = "#C0C5C7";
const black = "#333333";
const white = "#FFFFFF"


const S = {};

S.Container = styled.div``;

S.MyCard = styled.div`
  width: 360px;
  height: 272px;
  position: relative;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

S.ArtistCard = styled.div`
  width: 360px;
  height: 272px;
  position: relative;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

S.BackgroundImg = styled.img`
  width: 360px;
  height: 180px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;

S.ProfileImg = styled.img`
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${white};
`;

S.CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
  position: absolute;
  width: 100%;
`;

S.CardName = styled.p`
  ${H5};
`;

S.CardUniversity = styled.p`
  ${H9};
`;

S.ArtistWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 360px);
  gap: 100px 40px;
`;

S.Line = styled.hr`
  margin: 50px 0 50px 0;
  width: 100%;
  color: 1px solid ${gray900};
`;

export default S;