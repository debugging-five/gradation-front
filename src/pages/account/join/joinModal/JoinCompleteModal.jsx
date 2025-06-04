import S from './style';
import SubButton from '../../../../components/button/SubButton';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import { Link } from 'react-router-dom';

const JoinCompleteModal = ({onClose}) => {
  return (
    <S.Container>

      <S.Wrapper>
        <S.Line>
          <S.CloseIconWrapper>
          <S.CloseIcon onClick={onClose} src={'/assets/images/icon/close.png'}/>
          </S.CloseIconWrapper>
          <S.Content>
            <S.Notice>
              <S.Icon src={'/assets/images/icon/check.png'}/>
              <S.H5>회원가입이 완료되었습니다.</S.H5>
            </S.Notice>

            <S.ButtonWrapper>
              <S.Link to={"/"}>
                <PrimaryButton>메인으로</PrimaryButton>
              </S.Link>
              <S.Link to={"/login"}>
                <SubButton>로그인</SubButton>
              </S.Link>
            </S.ButtonWrapper>
          </S.Content>
        </S.Line>
      </S.Wrapper>
    </S.Container>
  );
};

export default JoinCompleteModal;