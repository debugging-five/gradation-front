import styled from 'styled-components';
import { H5, EN_H4 } from '../../../styles/common'

const S = {};

S.FormWrapper = styled.div`
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
	border-bottom : solid 1px ${({ theme }) => theme.PALLETE.gray[900]};
	width : 760px;
	margin : 50px 0 0 0;
	display : flex;
	align-items : center;
	justify-content : space-between;
`;

S.InputText = styled.div`
	display : flex;
	gap : 104px;
	margin : 0 0 7px 0;
	height : 31px;

  span {
    color : ${({ theme }) => theme.PALLETE.primary.main};
  }
`;

S.Label = styled.label`
	${H5};
`

S.Button = styled.button`
	width : 125px;
	height : 35px;
	background-color : ${({ theme }) => theme.PALLETE.primary.main};
	border : 1.2px solid ${({ theme }) => theme.PALLETE.primary.main};
	border-radius : 2px;
	color : ${({ theme }) => theme.PALLETE.gray[100]};

`

S.Input = styled.input`
	border : none;
	outline : none;
	font-family: var(--font-family-Pretendard-Regular);
	width : 440px;
	background-color : ${({ theme }) => theme.PALLETE.gray[100]};
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

export default S;
