import * as CS from "../../../styles/common";
import styled, { css } from "styled-components";

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 0;
`;

S.UpcyclingWrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.UpcycleTitle = styled.h1`
  ${CS.EN_H2};
  text-align: center;
  margin-bottom: 95px;
`;

S.BannerContainer = styled.section`
  width: 100%;
  ${CS.flexCenter};
  margin-bottom: 275px;
`;

S.BannerImgContainer = styled.div`
  position: relative;
`;

S.BannerImg = styled.img`
  width: 1920px;
  height: auto;
`;

S.BannerText = styled.div`
  ${CS.H1};
  text-align: center;
  color: #FBFCFC;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

S.Chapter1 = styled.section`
  width: 1160px;               
  margin: 100px auto 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.Chapter1Title = styled.h1`
  ${CS.H1};
  text-align: center;
  margin-bottom: 100px;
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
`;

S.ChapterStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;

`;

S.ChapterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  border-right: 3px solid #333333;
  position: relative;

  &:last-child {
    border-right: none;
  }
`;

S.StatsTitle = styled.h2`
  ${CS.H1};
  text-align: center;
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

S.StatsDesc = styled.div`
  ${CS.H3};
  margin-top: 20px;
  line-height: 1.5;
  text-align: center;
  word-break: keep-all;
`;

S.Chapter2 = styled.section`
  ${CS.flexCenter};
  margin: 80px;
`;

S.Chapter2Img = styled.img`
  width: 100%;
  max-width: 1160px;
  height: auto;
  display: block;
  margin: 0 auto;
  opacity: 0; // 처음에 안보이게
  transform: translateY(40px); // 아래로 살짝 내려가서 숨어있음
  transition: opacity 2s ease, transform 2s ease;
  // 조건부 스타일
  // $ 는 돔에 전달되지 않게 하는 것. 내부 스타일 계산에만 사용한다 > 경고 방지용
  ${({ $isVisible }) => //컴포넌트에 전달된 props 중 $isVisible을 구조분해
    $isVisible && // $isVisible이 맞으면 css적용
    css`
      opacity: 1; // 완전히 보이게
      transform: translateY(0); // 원래 자리로
    `}
`;

S.Chapter3 = styled.section`
  ${CS.flexCenterColumn};
  margin-top: 230px;
  margin-bottom: 400px;
`;

S.Chapter3Title = styled.h1`
  ${CS.H1};
  text-align: center;
  margin-bottom: 70px;
`;

S.Chapter3TopImg = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 10px;

  img {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 3s ease, transform 3s ease;
  }

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      img {
        opacity: 1;
        transform: translateX(0);
      }
      img:nth-child(1) {
        transition-delay: 0s;
      }
      img:nth-child(2) {
        transition-delay: 0.2s;
      }
      img:nth-child(3) {
        transition-delay: 0.4s;
      }
      img:nth-child(4) {
        transition-delay: 0.6s;
      }
      img:nth-child(5) {
        transition-delay: 0.8s;
      }
      img:nth-child(6) {
        transition-delay: 1s;
      }
      img:nth-child(7) {
        transition-delay: 1.2s;
      }
    `}
`;

S.Chapter3MidImg = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 10px;

  img {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 3s ease, transform 3s ease;
  }

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      img {
        opacity: 1;
        transform: translateX(0);
      }
      img:nth-child(1) {
        transition-delay: 0s;
      }
      img:nth-child(2) {
        transition-delay: 0.2s;
      }
      img:nth-child(3) {
        transition-delay: 0.4s;
      }
      img:nth-child(4) {
        transition-delay: 0.6s;
      }
      img:nth-child(5) {
        transition-delay: 0.8s;
      }
      img:nth-child(6) {
        transition-delay: 1s;
      }
      img:nth-child(7) {
        transition-delay: 1.2s;
      }
    `}
`;

S.Chapter3BottomImg = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 10px;

  img {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 3s ease, transform 3s ease;
  }

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      img {
        opacity: 1;
        transform: translateX(0);
      }
      img:nth-child(1) {
        transition-delay: 0s;
      }
      img:nth-child(2) {
        transition-delay: 0.2s;
      }
      img:nth-child(3) {
        transition-delay: 0.4s;
      }
      img:nth-child(4) {
        transition-delay: 0.6s;
      }
      img:nth-child(5) {
        transition-delay: 0.8s;
      }
      img:nth-child(6) {
        transition-delay: 1s;
      }
      img:nth-child(7) {
        transition-delay: 1.2s;
      }
    `}
`;

S.Chapter3Labels = styled.div`
  ${CS.H5};
  text-align: center;
  font-size: 18px;
  color: #333;
  opacity: 0;
  transform: translateX(-50%);
  transition: opacity 3s ease, transform 3s ease;
  transition-delay: 1.5s;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      transform: translateX(0);

      
    `}
`;

S.StepImg = styled.img`
  width: 200px;
  height: 200px;
`;

S.ArrowImg = styled.img`
  width: 104px;
  height: 134px;
  margin-top: 30px;
`;

S.Chapter4 = styled.section`
  margin: 100px 0;
`;

S.CircleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 40px;
`;


S.Number = styled.div`
  ${CS.H1};
  margin-right: 30px;
  color: #6E7476;
`;

const BaseCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 1;
`;

S.BlueCircle = styled(BaseCircle)`
  background-color: #295AA0;
  margin-left: 7px;
`;

S.GrayCircle = styled(BaseCircle)`
  background-color: #C0C5C7;
  margin-left: 2px;
`;

S.RedCircle = styled(BaseCircle)`
  background-color: #EE3333;
`;

S.WhiteCircle = styled(BaseCircle)`
  background-color: #FFFFFF;
  border: 1px solid #C0C5C7;
`;

S.YellowCircle = styled(BaseCircle)`
  background-color: #FFCF52;
  margin-left: 2px;
`;



S.TimelineContent = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 65px;
`;

S.TimelineTitle = styled.h2`
  ${CS.H2};
  margin-top: 6px;
`;

S.TimelineText = styled.h3`
  ${CS.H3};
  overflow: hidden;
  opacity: 0;
  max-height: 0;
  margin-left: 30px;
  transform: translateY(-10px);
  transition: all 0.4s ease;
  margin-top: 30px;
  margin-bottom: 0;
`;

S.Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 60px;
  position: relative;
  min-height: 200px;

  &::before {
    content: "";
    position: absolute;
    top: 36px;
    left: 114px;
    width: 5px;
    height: 0;
    background-color: #c0c5c7;
    z-index: 0;
    transition: height 1s ease;
    opacity: ${({ isLast }) => (isLast ? 0 : 1)};
  }

  ${({ isLast }) =>
    !isLast &&
    css`
      &:hover::before {
        height: calc(100% + 60px);
      }
    `}

  &:hover ${S.TimelineText} {
    max-height: 500px;
    opacity: 1;
    margin-bottom: 8px;
    transform: translateY(0);
  }
`;

S.BottomText = styled.div`
  ${CS.flexCenterColumn};
  text-align: center;
  margin-top: 160px;
  margin-bottom: 50px;
`;

S.BottomTextTop = styled.div`
  ${CS.H1};
`;

S.BottomTextBottom = styled.div`
  ${CS.H2};
  margin-top: 30px;
  margin-bottom: 100px;
`;

S.ButtonsWrapper = styled.div`
  ${CS.flexCenter};
  gap: 30px;

`;

S.ApplicationButton = styled.button`
  ${CS.H4};
  width: 300px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #EE3333;
  background-color: white;
  color: #EE3333;
`;

S.InquiryButton = styled.button`
  ${CS.H4};
  width: 300px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #EE3333;
  background-color: #EE3333;
  color: #FBFCFC;
`;

export default S;