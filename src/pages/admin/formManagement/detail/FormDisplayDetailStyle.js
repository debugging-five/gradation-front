import styled from "styled-components";
import * as CS from "../../../../styles/common"; // 공통 스타일 import

const S = {};

S.Container = styled.div`
  width: 800px;
  margin: 40px auto 0 auto;
  background: #FBFCFC;
  padding: 36px 48px 48px 48px;
  border-radius: 10px;

  min-height: 700px;
`;

S.CategoryText = styled.div`
  ${CS.H5}
  color: #333333;
  border-bottom: 1px solid #EE3333;
  margin-bottom: 60px;
`;

S.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 12px;
`;

S.Title = styled.h1`
  ${CS.H3}
  font-weight: 700;
`;

S.ApplyDate = styled.div`
  ${CS.H5}
  color: #333333;
`;

S.ContactTable = styled.table`
  width: 100%;
  background: #EE3333;
  color: #FBFCFC;
  font-size: 16px;
  margin: 20px 0 32px 0;
  border-radius: 2px;
  overflow: hidden;
  td, th {
    padding: 18px 10px;
    color: #FBFCFC;
  }
`;

S.TableHeadCell = styled.th`
  color: #333333;
  font-weight: 600;
`;

S.ContentFlex = styled.div`
  display: flex;
  gap: 44px;
  margin-bottom: 30px;
`;

S.ImageBox = styled.div`
  flex: 0 0 250px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

S.ArtImage = styled.img`
  min-width: 250px;
  max-width: 250px;
  min-height: 350px;
  background: #C0C5C7;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    max-height: 350px;
    object-fit: contain;
  }
`;

S.InfoBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 18px;
`;

S.InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3px;
  gap: 20px;
  margin-top: 14px;
`;

S.InfoLabel = styled.span`
  font-weight: 700;
  min-width: 110px;
  color: #333333;
`;

S.ArtDescription = styled.div`
  white-space: pre-line;
  font-size: 15px;
  color: #333333;
  padding-top: 2px;
`;

S.ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 18px;
  margin-top: 60px;
`;

const baseButton = `
  width: 125px;
  height: 50px;
  border: none;
  border-radius: 2px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.1s;
`;

S.ListButton = styled.button`
  ${baseButton}
  background: #EE3333;
  color: #FBFCFC;
  &:hover { background:rgb(255, 0, 0); }
`;

S.ApproveButton = styled.button`
  ${baseButton}
  background: #FBFCFC;
  color: #EE3333;
  border: 1px solid #EE3333;
  &:hover { background:rgb(255, 249, 249); }
`;

S.RejectButton = styled.button`
  ${baseButton}
  background: #EE3333;
  color: #FBFCFC;
  &:hover { background: rgb(255, 0, 0); }
`;

S.CancelButton = styled.button`
  ${baseButton}
  background: #FBFCFC;
  color: #EE3333;
  border: 1px solid #EE3333;
  &:hover { background:rgb(255, 249, 249); }
`;

export default S;
