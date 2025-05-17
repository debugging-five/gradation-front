import S from './style';
import SubButton from '../../../../components/button/SubButton';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import { Link } from 'react-router-dom';

const FindIdModal = ({onClose, userId, userEmail}) => {
  return (
    <S.Container>

      <S.Wrapper>
        <S.Line>
          <S.CloseIconWrapper>
          <S.CloseIcon onClick={onClose} src={'/assets/images/icon/close.png'}/>
          </S.CloseIconWrapper>
          <S.Content>
            <S.Notice>
              <S.Icon src={'/assets/images/icon/user.png'}/>
              <S.H2>가입된 계정 정보</S.H2>
            </S.Notice>

            <S.Info>
              <S.Id>
                <S.H5>아이디</S.H5>
                <S.EnH7>{userId}</S.EnH7>
              </S.Id>
              <S.Email>
                <S.H5>이메일</S.H5>
                <S.EnH7>{userEmail}</S.EnH7>
              </S.Email>
            </S.Info>

            <S.Info>
              <S.H5>소셜 로그인 한 회원입니다.</S.H5>
            </S.Info>


            <S.ButtonWrapper>
              <Link to={"/find-password"}>
                <PrimaryButton>비밀번호 찾기</PrimaryButton>
              </Link>
              <Link to={"/login"}>
                <SubButton>로그인</SubButton>
              </Link>
            </S.ButtonWrapper>
          </S.Content>
        </S.Line>
      </S.Wrapper>
    </S.Container>
  );
};

export default FindIdModal;