import styled from 'styled-components';
import { H5, EN_H4, H7, H8, H10 } from '../../../styles/common'
import PrimaryButton from '../../../components/button/PrimaryButton';
import Flatpickr from "react-flatpickr";

const S = {};

S.FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.Title = styled.div`
  margin-top: 142px;
`;

S.Title = styled.h1`
	${EN_H4};
	color : ${({ theme }) => theme.PALLETE.primary.main};
	margin-bottom :7px;
`	

S.TitleWrap = styled.div`
	width : 760px;
	border-bottom : solid 2px ${({ theme }) => theme.PALLETE.primary.main};
	display: flex;
	margin-top: 82px; 
`

S.InputForm = styled.div`
  margin : 0 0 120px 0;
`

S.InputButtonWrap = styled.div`
	margin : 48px 0 0 0;
	display : flex;
	align-items : center;
	justify-content : space-between;
	border-bottom: 1px solid ${({ theme }) => theme.PALLETE.gray[900]};
`

S.InputText = styled.div`
	display : flex;
`;

S.Label = styled.label`
	${H7};
	width : 82px;
  margin-bottom: 7px;

  span {
    color : ${({ theme }) => theme.PALLETE.primary.main};
  }
`

S.Button = styled.button`
	transform: translateY(-7px);
	width : 125px;
	height : 35px;
	background-color : ${({ theme }) => theme.PALLETE.primary.main};
	border : 1.2px solid ${({ theme }) => theme.PALLETE.primary.main};
	border-radius : 2px;
	color : ${({ theme }) => theme.PALLETE.gray[100]};
`

S.Input = styled.input`
	${H8};
	border : none;
	outline: none;
	width : 440px;
	margin-left : 76px;
	background: none;
`

S.SubmitButton = styled.button`
	${H5};
	width	: 120px;
	height	: 45px;
	background-color : ${({ theme }) => theme.PALLETE.primary.main};
	border : 1.2px solid ${({ theme }) => theme.PALLETE.primary.main};
	border-radius : 2px;
	color : ${({ theme }) => theme.PALLETE.white};
`

S.InputWrap = styled.div`
	width : 760px;
	margin : 48px 0 0 0;
	display : flex;
	align-items : center;
	border-bottom : solid 1px ${({ theme }) => theme.PALLETE.gray[900]};
`

S.calendar = styled.img`
	width: 20px;
	height: 20px;
`

S.Datewrap = styled.div`
	display: flex;
	align-items: center;
	margin-left : 76px;
`

S.Datewrap2 = styled.div`
	display: flex;
	align-items: center;
	margin-left : 32px;
`

S.StyledFlatpickr = styled(Flatpickr)`
  border: none !important;
  outline: none !important;
  background-color: transparent;
  width: 100px;
  &::placeholder {
    color: ${({ theme }) => theme.PALLETE.gray[500]};
  }
`;


S.InputFileWrap = styled.div`
	margin-top: 48px;
	display: flex;
	align-items: center;
	position: relative;
`

S.File = styled.div`
	${H7};
  margin-bottom: 7px;

  span {
    color : ${({ theme }) => theme.PALLETE.primary.main};
  }
`

S.question = styled.img`
  cursor: pointer;
	width: 16px;
	height: 16px;
	margin-left: 4px;

	&:hover + div{
		display: block;
	}
`

S.Tip = styled.div`
	${H10};
	display: none;
	position: absolute;
	top: -20px;
	left: 66px;
	color: ${({ theme }) => theme.PALLETE.gray[900]};
`

S.FileInput = styled.input`
  display: none;
`;

S.FileLabel = styled.label`
	${H8};
	display: flex;
	align-items: center;
	justify-content: center;
	width: 75px;
	height: 35px;
	margin-left: 76px;
	border-radius: 2px;
	border: 1.2px solid ${({ theme }) => theme.PALLETE.primary.main};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  cursor: pointer;
`;

S.PrimaryButton = styled(PrimaryButton)`
	margin: 0 0 200px auto;
`;


S.UploadedFileList = styled.div`
  margin-left: 158px;
  margin-top: 8px;
`;

S.UploadedFileItem = styled.li`
	${H10};
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

S.DeleteButton = styled.button`
	${H10};
  background: none;
  border: none;
  color: ${({ theme }) => theme.PALLETE.primary.main};
  cursor: pointer;
`;


export default S;
