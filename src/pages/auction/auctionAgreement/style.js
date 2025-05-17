import styled from 'styled-components'
import { H2, H3, H4, H5, H6, H8 } from '../../../styles/common';
import { Link } from 'react-router-dom';
const primary = "#EE3333";
const gray100 = "#FBFCFC";
const gray500 = "#C0C5C7";
const gray900 = "#6E7476";
const warning = "#E49804";
const black = "#333333"

const S = {};

S.H3 = styled.p`
  ${H3}
`

S.H5 = styled.p`
  ${H5}
`
S.H5Red = styled.p`
  ${H5}
  color: ${primary};
 
`
S.H5Title = styled.p`
  ${H5}
  margin-top: 22px;
`

S.H6 = styled.p`
  ${H6}
`

S.H8 = styled.p`
  ${H8}
`

S.biddingCatImg = styled.img`
  margin-top: 33px;
  margin-bottom: 64px;
  width: 1920px;
`

S.Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1920px;
`

S.TextDiv = styled.div`
  margin-bottom: 10px;
`

S.MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1160px;
`

S.FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

S.H2 = styled.p`
  ${H2}
`

S.StyledLink = styled(Link)`
  ${H4}
  color: ${black};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

S.Icon18 = styled.img`
  width: 18px;
`

S.Order = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px ${gray900};
`

S.OrderImg = styled.img`
  width: 1004px;
  margin: 60px 0 50px 0;
`

S.Step = styled.div`
  width: 100%;
  border-bottom: solid 1px ${gray900};
`

S.StepWrapper = styled.div`
  display: flex;
  margin: 40px 0;
`

S.TitleDiv = styled.div`
  margin-right: 100px;
`

S.ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`

S.StepImg = styled.img`
  width: 148px;
  margin-top: 10px;
`

S.ChartDiv = styled.div`
  width: 840px;
  height: 200px;
  border: solid 1px ${gray900};
  border-radius: 3px;
  margin-top: 13px;
`

S.ChartIndex = styled.div`
  display: flex;
  background-color: ${gray500};
  border-bottom: solid 1px ${gray900};
  height: 39px;
`

S.IndexBlank = styled.div`
  width: 280px;
  height: 39px;
  border-right: solid 1px ${gray900};
`

S.IndexTitle = styled.div`
  width: 560px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
`

S.ChartContent = styled.div`
  width: 840px;
  height: 160px;
  display: flex;
`

S.ChartContentTitles = styled.div`
  width: 280px;
  height: 160px;
  display: flex;
  flex-direction: column;
  border-right: solid 1px ${gray900};
`

S.ChartContentTitle1 = styled.div`
  width: 279px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px ${gray900};
`

S.ChartContentTitle2 = styled.div`
  width: 279px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`

S.ChartContents = styled.div`
  width: 559px;
  height: 160px;
  display: flex;
  flex-direction: column;
`

S.ChartContent1_1 = styled.div`
  width: 559px;
  height: 40px;
  border-bottom: solid 1px ${gray900};
  display: flex;
  justify-content: center;
  align-items: center;
`

S.ChartContent2_1 = styled.div`
  width: 559px;
  height: 80px;
  border-bottom: solid 1px ${gray900};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

S.ChartContent2_2 = styled.div`
  width: 559px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

S.Margin10Block = styled.div`
  height: 10px;
`

S.Step3Content = styled.div`
  width: 912px;
  height: 62px;
  background-color: #f1f2f2 ;
  color: ${gray900};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`

S.Step4_1 = styled.div`
  margin-bottom: 40px;
`








export default S;