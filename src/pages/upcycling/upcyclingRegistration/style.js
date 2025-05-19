import * as CS from "../../../styles/common";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%; 
  min-height: 100vh;
  background-color: #fbfcfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  box-sizing: border-box;
`;

export const TitleWrapper = styled.div`
  width: 1160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const PageTitle = styled.h1`
  ${CS.EN_H2}
  color: #000000;
  margin-bottom: 70px;
`;

export const RegistrationLabel = styled.div`
  ${CS.EN_H3}
  color: #ee3333;
  border-bottom: 2px solid #ee3333;
  padding-bottom: 4px;
  width: 100%;
  text-align: left;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 1160px;
`;

export const ImageUploadWrapper = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const ImageBox = styled.div`
  width: 480px;
  height: 480px;
  border: 2px dashed #cccccc;
  background-color: #d9d9d9;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    ${CS.H6}
    color: #000000;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  
`;

export const UploadIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-bottom: 26px;
`;

export const UploadDescription = styled.p`
  margin-top: 12px;
  ${CS.H8}
  color: #666666;
  text-align: center;
`;

export const InputSection = styled.div`
  width: 450px;
  margin-top: 90px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #000000;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  ${CS.H5}
  width: 80px;
  color: #000000;
  text-align: left;
  white-space: nowrap;
`;

export const Required = styled.span`
  color: #ee3333;
  margin-left: 2px;
`;

export const SchoolSearchRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 10px;
`;

export const Input = styled.input`
  ${CS.H8}
  flex: 1;
  padding: 10px;
  border: none;
  background: transparent;
  &:focus {
    outline: none;
  }
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #fff inset !important;
    -webkit-box-shadow: 0 0 0px 1000px #fbfcfc inset !important;
    -webkit-text-fill-color: #000 !important;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 16px;
  background-color: #ee3333;
  color: #fbfcfc;
  font-size: 16px;
  border: none;
  border-left: 1px solid #cccccc;
  margin-bottom: 3px;
  cursor: pointer;
`;

export const InputGroupRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 50px;
  border-bottom: 2px solid #000000;
`;

export const DateWrapper = styled.div`
  flex: 1;
  position: relative;
  height: 36px;
`;

export const CalendarInput = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  color: #666666;
  padding: 0 4px;

  span {
    margin-left: 8px;
  }

  input.flatpickr-input {
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    cursor: pointer;
  }
`;

export const CalendarIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 10px;
`;

export const SizeSection = styled.div`
  margin-bottom: 50px;
`;

export const SizeInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 10px;
`;

export const SizeInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    font-size: 14px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 2px solid #000;
  input {
    width: 30px;
    padding: 6px;
    border: none;
    background: transparent;
    font-size: 14px;
    text-align: right;
    &:focus {
      outline: none;
    }
  }
  span {
    font-size: 14px;
    color: #000;
  }
`;

export const InputSizeGroupRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const SizeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
`;

export const MaterialSection = styled.div`
  margin-bottom: 50px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 14px;
  margin-top: 15px;
  label {
    display: flex;
    align-items: center;
    gap: 6px;
    line-height: 1.5;
    font-family: "Pretendard-Regular";
    cursor: pointer;
  }

  input[type="checkbox"] {
    margin: 0;
    width: 12px;
    height: 12px;
    accent-color: #ee3333;
  }
`;

export const Textarea = styled.textarea`
  width: 428px;
  height: 100px;
  padding: 10px;
  font-size: 14px;
  border: 2px solid #cccccc;
  border-radius: 2px;
  resize: none;
  margin-top: 15px;
  color: #cccccc;
  background-color: #fbfcfc;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 32px;
`;

export const CancelButton = styled.button`
  width: 125px;
  height: 50px;
  padding: 10px 28px;
  border: 2px solid #ee3333;
  color: #ee3333;
  background: none;
  font-size: 18px;
  border-radius: 2px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 125px;
  height: 50px;
  padding: 10px 28px;
  border: none;
  background-color: #ee3333;
  color: white;
  font-size: 18px;
  border-radius: 2px;
  cursor: pointer;
`;

export const PopupOverlay = styled.div`
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

export const PopupBox = styled.div`
  width: 390px;
  height: 190px;
  background-color: #fff;
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

export const PopupIcon = styled.div`
  width: 48px;
  height: 48px;
  font-size: 32px;
  margin-bottom: 15px;
`;

export const PopupMessage = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 35px;
`;

export const PopupButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const PopupButton = styled.button`
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