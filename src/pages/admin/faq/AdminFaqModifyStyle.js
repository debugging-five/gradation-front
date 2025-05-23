import styled from "styled-components";
import * as CS from "../../../styles/common";

const S = {};

S.Container = styled.div`
  width: 800px;
  margin-top: 50px;
`;

S.FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

S.RadioSection = styled.div`
  width: 100%;
  border-bottom: 1px solid #C0C5C7;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

S.RadioLabel = styled.label`
  ${CS.H5};
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  white-space: nowrap;  
`;

S.RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

S.Radio = styled.label`
  ${CS.H8};
  color: #6E7476;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  white-space: nowrap;  
  cursor: pointer;
`;

S.HiddenRadioInput = styled.input`
  display: none;
`;

S.StyledRadio = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? "#ee3333" : "#D0D3D4")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
`;

S.CheckIcon = styled.span`
  font-size: 14px;
  color: white;
  pointer-events: none;
`;

S.RadioCheck = styled.label`
  ${CS.H6};
  color: ${({ checked }) => (checked ? "#222" : "#999")};
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  white-space: nowrap;  
`;


S.Required = styled.span`
  color: #ee3333;
  margin-left: 2px;
`;

S.RadioInput = styled.input``;

S.TitleSection = styled.div`
  width: 100%;
  border-bottom: 1px solid #C0C5C7;
  padding: 5px;
`;

S.TitleRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
`

S.TitleLabel = styled.label`
  ${CS.H5};
  white-space: nowrap;
  min-width: 70px;
`;

S.Input = styled.input`
  ${CS.H8};
  color: #6E7476;
  flex: 1;
  padding: 8px 4px;
  font-size: 15px;
  border: none;
  background: transparent;
  outline: none;
`;

S.ContentSection = styled.div`
  width: 100%;
  margin-top: 50px;
`;

S.ContentLabel = styled.label`
  ${CS.H5};
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  white-space: nowrap;
  margin-left: 5px;
`;

S.Textarea = styled.textarea`
  ${CS.H8};
  color: #6E7476;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  background-color: #FBFCFC;
`;

S.ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  margin-right: -20px;
`;

S.SubmitButton = styled.button`
  background-color: #ee3333;
  color: #FBFCFC;
  font-size: 16px;
  border: none;
  border-radius: 2px;
  width: 125px;
  height: 50px;
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
  background-color: #fff;
  border: 2px solid #ee3333;
  border-radius: 2px;
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
  color: #333;
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
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.cancel {
    background: #fff;
    color: #ee3333;
    border: 1.5px solid #ee3333;
  }

  &.confirm {
    background: #ee3333;
    color: #fff;
    border: none;
  }
`;

export default S;