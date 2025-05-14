import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbfcfc;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  font-family: "SUIT-Bold";
  color: #333;
`;

export const RegistrationLabel = styled.div`
  font-size: 24px;
  font-family: "SUIT-Bold";
  color: ${({ theme }) => theme.PALLETE.primary.main};
  border-bottom: 2px solid ${({ theme }) => theme.PALLETE.primary.main};
  padding-bottom: 4px;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1160px;
`;

export const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const ImageBox = styled.div`
  width: 500px;
  height: 500px;
  border: 2px dashed #ccc;
  background-color: #f5f5f5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
  span {
    position: absolute;
    bottom: 40%;
    font-size: 14px;
    color: #888;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const UploadDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 12px;
`;

export const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SchoolSearchRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.PALLETE.primary.main};
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SizeSection = styled.div`
  margin-bottom: 30px;
`;

export const SizeInputGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const SizeInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-top: 6px;
    font-size: 14px;
  }
`;

export const MaterialSection = styled.div`
  margin-bottom: 30px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  height: 100px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 40px;
`;

export const CancelButton = styled.button`
  background-color: #fff;
  color: ${({ theme }) => theme.PALLETE.primary.main};
  border: 1px solid ${({ theme }) => theme.PALLETE.primary.main};
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.PALLETE.primary.main};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
`
