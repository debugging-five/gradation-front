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

S.InfoRowTable = styled.table`
  width: 100%;
  margin-bottom: 16px;
`;

S.TableLabel = styled.td`
  font-weight: 700;
  color: #333333;
`;

S.TableSizeLabel = styled.td`
  color: #333;
  padding-bottom: 4px;
`;

S.ArtDescription = styled.div`
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

S.PopupOverlay = styled.div`
  position: fixed;
  top: 0; 
  left: 0; 
  width: 100vw; height: 100vh;
  background-color: rgba(30, 30, 30, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

S.PopupBox = styled.div`
  width: 390px;
  background-color: #FBFCFC;
  border: 2px solid #ee3333;
  border-radius: 8px;
  padding: 30px 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

S.PopupIcon = styled.img`
  width: 48px;
  height: 48px;
  font-size: 32px;
  margin-bottom: 15px;
`;

S.PopupMessage = styled.div`
  font-size: 16px;
  color: #333333;
  margin-bottom: 35px;
`;

S.PopupButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

S.PopupButton = styled.button`
  width: 80px;
  height: 32px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.cancel {
    background: #FBFCFC;
    color: #ee3333;
    border: 1.5px solid #ee3333;
  }

  &.confirm {
    background: #ee3333;
    color: #FBFCFC;
    border: none;
  }
`;


S.RejectPopupOverlay = styled.div`
  position: fixed;
  z-index: 1100;
  inset: 0;
  background: rgba(51, 51, 51, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.RejectPopupBox = styled.div`
  width: 400px;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 4px 18px rgba(51,51,51,0.13);
  padding: 24px 24px 18px 24px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

S.RejectPopupHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  color: #222;
  margin-bottom: 14px;
  justify-content: space-between;
`;

S.RejectPopupClose = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  color: #888;
  cursor: pointer;
  margin-left: 8px;
  line-height: 1;
  padding: 0;
`;

S.RejectTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  resize: none;
  font-size: 15px;
  padding: 12px;
  border: 1.5px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-bottom: 18px;
  box-sizing: border-box;
  background: #fafbfc;
  color: #333;
`;

S.RejectPopupFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: -8px;
`;

S.RejectCharCount = styled.span`
  color: #888;
  font-size: 13px;
  margin-right: 10px;
`;

S.RejectSubmitButton = styled.button`
  background: #ee3333;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 7px 18px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.12s;
  &:hover { background: #ce2323; }
`;


export default S;
