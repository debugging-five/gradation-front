import S from './style';
import SubButton from '../../../../../components/button/SubButton';
import PrimaryButton from '../../../../../components/button/PrimaryButton'
import { Link } from 'react-router-dom';

const SocialModal = () => {
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
              <S.H6>해당 이메일은 소셜 로그인으로 가입된 계정입니다.</S.H6>
            </S.Info>

            <S.ButtonWrapper>
              <Link to={"/"}>
                <SubButton>메인으로</SubButton>
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

export default SocialModal;