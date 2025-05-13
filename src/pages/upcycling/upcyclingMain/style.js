import * as CS from "../../../styles/common";
import styled, { keyframes } from "styled-components";

const fadeSlideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    max-height: 800px;
  }
`;

export const UpcyclingWrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UpcycleTitle = styled.h1`
  ${CS.EN_H2};
  text-align: center;
  margin-bottom: 95px;
`;

export const BannerContainer = styled.section`
  width: 100%;
  ${CS.flexCenter};
  margin-bottom: 275px;
`;

export const BannerImgContainer = styled.div`
  position: relative;
`;

export const BannerImg = styled.img`
  width: 1920px;
  height: auto;
`;

export const BannerText = styled.div`
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

export const Chapter1 = styled.section`
  width: 1160px;               
  margin: 100px auto 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Chapter1Title = styled.h1`
  ${CS.H1};
  text-align: center;
  margin-bottom: 100px;
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
`;

export const ChapterStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;

`;

export const ChapterBox = styled.div`
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

export const StatsTitle = styled.h2`
  ${CS.H1};
  text-align: center;
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const StatsDesc = styled.div`
  ${CS.H3};
  margin-top: 20px;
  line-height: 1.5;
  text-align: center;
  word-break: keep-all;
`;

export const Chapter2 = styled.section`
  ${CS.flexCenter};
  margin: 80px;
`;

export const Chapter2Img = styled.img`
  width: 1160px;
  height: 653px;
  margin-bottom: 150px;
`;

export const Chapter3 = styled.section`
  ${CS.flexCenterColumn};
  margin-top: 230px;
  margin-bottom: 400px;
`;

export const Chapter3Title = styled.h1`
  ${CS.H1};
  text-align: center;
  margin-bottom: 70px;
`;

export const Chapter3TopImg = styled.div`
  display: flex;
  gap: 30px;
`;

export const Chapter3MidImg = styled.div`
  display: flex;
  gap: 30px;
`;

export const Chapter3BottomImg = styled.div`
  display: flex;
  gap: 30px;
`;

export const Chapter3Labels = styled.div`
  ${CS.H5};
  text-align: center;
  margin-top: 5px;
  margin-bottom: 25px;
`;

export const StepImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const ArrowImg = styled.img`
  width: 104px;
  height: 134px;
  margin-top: 30px;
`;

export const Chapter4 = styled.section`
  margin: 100px 0;
`;

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 40px;
`;


export const Number = styled.div`
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

export const BlueCircle = styled(BaseCircle)`
  background-color: #295AA0;
  margin-left: 7px;
`;

export const GrayCircle = styled(BaseCircle)`
  background-color: #C0C5C7;
  margin-left: 2px;
`;

export const RedCircle = styled(BaseCircle)`
  background-color: #EE3333;
`;

export const WhiteCircle = styled(BaseCircle)`
  background-color: #FFFFFF;
  border: 1px solid #C0C5C7;
`;

export const YellowCircle = styled(BaseCircle)`
  background-color: #FFCF52;
  margin-left: 2px;
`;



export const TimelineContent = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 65px;
`;

export const TimelineTitle = styled.h2`
  ${CS.H2};
  margin-top: 6px;
`;

export const TimelineText = styled.p`
  ${CS.H3};
  overflow: hidden;
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
  transition: opacity 2s ease, transform 2s ease;
  &.visible {
    animation: ${fadeSlideDown} 2s ease forwards;
  }

  margin-top: 20px;
  margin-bottom: 0;
`;

export const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 60px;
  position: relative;

  &::before{
    content: "";
    position: absolute;
    top: 36px;
    left: 114px;
    width: 5px;
    height: calc(100% + 60px);
    background-color: #C0C5C7;
    z-index: 0;
  }

  &:last-of-type::before{
    display: none;
  }

  &:hover ${TimelineText} {
    max-height: 500px;
    opacity: 1;
    margin-bottom: 8px;
  }
`;

export const BottomText = styled.div`
  ${CS.flexCenterColumn};
  text-align: center;
  margin-top: 160px;
  margin-bottom: 50px;
`;

export const BottomTextTop = styled.div`
  ${CS.H1};
`;

export const BottomTextBottom = styled.div`
  ${CS.H2};
  margin-top: 30px;
  margin-bottom: 100px;
`;

export const ButtonsWrapper = styled.div`
  ${CS.flexCenter};
  gap: 30px;

`;

export const ApplicationButton = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary.main};
  ${CS.H4};
  background-color: white;
  color: ${({ theme }) => theme.PALLETE.primary.main};
`;

export const InquiryButton = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary.main};
  ${CS.H4};
  background-color: ${({ theme }) => theme.PALLETE.primary.main};
  color: ${({ theme }) => theme.PALLETE.gray[100]};
`;
