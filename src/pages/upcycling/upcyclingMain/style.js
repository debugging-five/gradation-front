import styled from "styled-components";
import * as CS from "../../../styles/common";

export const UpcyclingWrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UpcycleTitle = styled.h1`
  ${CS.EN_H1};
  text-align: center;
  margin-bottom: 50px;
`;

export const BannerContainer = styled.section`
  width: 100%;
  ${CS.flexCenter};
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
  color: white;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.6;
`;

export const Chapter1 = styled.section`
  ${CS.flexCenterColumn};
  margin: 100px 0;
`;

export const Chapter1Title = styled.h1`
  ${CS.H1};
  text-align: center;
  margin-bottom: 50px;
`;

export const ChapterStats = styled.div`
  display: flex;
  gap: 80px;
`;

export const ChapterBox = styled.div`
  text-align: center;
`;

export const StatsTitle = styled.h2`
  ${CS.H1};
`;

export const StatsDesc = styled.div`
  ${CS.H3};
  margin-top: 10px;
  line-height: 1.5;
`;

export const Chapter2 = styled.section`
  ${CS.flexCenter};
  margin: 80px 0;
`;

export const Chapter2Img = styled.img`
  width: 1160px;
  height: 653px;
`;

export const Chapter3 = styled.section`
  ${CS.flexCenterColumn};
  margin: 100px 0;
`;

export const Chapter3Title = styled.h1`
  ${CS.H1};
  text-align: center;
  margin-bottom: 50px;
`;

export const Chapter3TopImg = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

export const Chapter3MidImg = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

export const Chapter3BottomImg = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

export const Chapter3Labels = styled.div`
  ${CS.H5};
  text-align: center;
  margin-top: 20px;
`;

export const StepImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const ArrowImg = styled.img`
  width: 104px;
  height: 134px;
`;

export const Chapter4 = styled.section`
  margin: 100px 0;
`;

export const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 60px;
`;

export const CircleContainer = styled.div`
  ${CS.flexCenterColumn};
  margin-right: 40px;
  text-align: center;
`;

export const Number = styled.div`
  ${CS.H1};
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-top: 10px;
  border: ${({ color }) => (color === 'white' ? '1px solid #ccc' : 'none')};
`;

export const TimelineContent = styled.div`
  flex: 1;
`;

export const TimelineTitle = styled.h2`
  ${CS.H2};
  margin-bottom: 10px;
`;

export const TimelineText = styled.p`
  ${CS.H3};
  margin-bottom: 8px;
`;

export const BottomText = styled.div`
  ${CS.flexCenterColumn};
  text-align: center;
  margin-bottom: 50px;
`;

export const BottomTextTop = styled.div`
  ${CS.H1};
`;

export const BottomTextBottom = styled.div`
  ${CS.H2};
  margin-top: 10px;
`;

export const ButtonsWrapper = styled.div`
  ${CS.flexCenter};
  gap: 30px;
  margin-top: 30px;
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
