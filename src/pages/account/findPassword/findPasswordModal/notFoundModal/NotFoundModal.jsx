import PrimaryButton from '../../../../../components/button/PrimaryButton';
import SubButton from '../../../../../components/button/SubButton';
import S from './style';
import { Link, useNavigate } from 'react-router-dom';

const NotFoundModal = () => {
  const navigate = useNavigate();
  return (
    <S.Container>

      <S.Wrapper>
        {/* <S.Line> */}
          {/* <S.CloseIconWrapper> */}
          {/* <S.CloseIcon onClick={onClose} src={'/assets/images/icon/close.png'}/> */}
          {/* </S.CloseIconWrapper> */}
          <S.Content>
            <S.Notice>
              <S.Icon src={'/assets/images/icon/user.png'}/>
              <S.H2>가입된 계정 정보</S.H2>
            </S.Notice>

            <S.Info>
              <S.H6>일치하는 비밀번호를 찾을 수 없습니다.</S.H6>
              <S.H6>입력하신 정보를 다시 확인해주세요.</S.H6>
            </S.Info>

            <S.ButtonWrapper>
              <Link to={"/find-password"}>
                <SubButton onClick={() => navigate(0)}>비밀번호 찾기</SubButton>
              </Link>
              <Link to={"/login"}>
                <PrimaryButton>로그인</PrimaryButton>
              </Link>
            </S.ButtonWrapper>
          </S.Content>
        {/* </S.Line> */}
      </S.Wrapper>
    </S.Container>
  );
};

export default NotFoundModal;