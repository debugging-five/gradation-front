import styled from 'styled-components';
import * as CS from "../../../styles/common";

const S = {};

S.FaqDetailPageContainer = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 60px;
`;

S.FaqDetailWrapper = styled.div`
  width: 800px;
  margin-bottom: 60px;
`;

S.FaqDivider = styled.div`
  margin-top: 7px;
  width: 800px;
  border-bottom: solid 1px;
`;


S.FaqTitleWrapper = styled.div`
  margin-top: 32px;
  width: 800px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  `;

S.FaqQ = styled.p`
  ${CS.H2}
  font-weight: bold;
  `;

S.FaqTitleText = styled.p`
  ${CS.H6}
  margin-bottom: 6px;
  `;

S.FaqContentText = styled.p`
  margin-top: 24px;
  ${CS.H6}
  `;

S.FaqCategoryText = styled.p`
  ${CS.H6}
  `;

S.FaqDetailButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  `;

S.FaqRedButton = styled.button`
  color: #FBFCFC;
  border: solid 1px #EE3333;;
  background-color: #EE3333;
  width: 125px;
  height: 50px;
  ${CS.H5}
  cursor: pointer;
`;

S.FaqWhiteButton = styled.button`
  color: #EE3333;
  border: solid 1px #EE3333;;
  background-color: #FBFCFC;
  width: 125px;
  height: 50px;
  ${CS.H5}
  cursor: pointer;
`;

S.PopupOverlay = styled.div`
  position: fixed;
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

S.PopupBox = styled.div`
  width: 390px;
  height: 190px;
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

S.PopupIcon = styled.div`
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


export default S;