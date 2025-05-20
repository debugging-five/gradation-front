import S from './style';
import SubButton from '../../../../components/button/SubButton';
import PrimaryButton from '../../../../components/button/PrimaryButton'
import { Link } from 'react-router-dom';

const NewPasswordSuccessModal = ({userId, userEmail}) => {
  return (
    <S.Container>

      <S.Wrapper>
          <S.Content>
            <S.Notice>
              <S.Icon src={'/assets/images/icon/check.png'}/>
              <S.H2>비밀번호 재설정 완료</S.H2>
            </S.Notice>
            
            <S.Info>
                <S.H6>비밀번호 변경이 완료되었습니다.</S.H6>
                <S.H6>새로운 비밀번호로 로그인해주세요.</S.H6>
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
      </S.Wrapper>
    </S.Container>
  );
};

export default NewPasswordSuccessModal;