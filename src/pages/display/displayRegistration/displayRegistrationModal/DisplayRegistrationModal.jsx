import S from './style';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import { Link } from 'react-router-dom';

const DisplayRegistrationModal = ({onClose}) => {
  return (
    <S.Container>

      <S.Wrapper>
        <S.Line>
          <Link to={"/display/korean"}>
            <S.CloseIconWrapper>
            <S.CloseIcon onClick={onClose} src={'/assets/images/icon/close.png'}/>
            </S.CloseIconWrapper>
          </Link>
          <S.Content>
            <S.Notice>
              <S.Icon src={'/assets/images/icon/check.png'}/>
              <S.H2>제출 완료</S.H2>
            </S.Notice>

            <S.Info>
              <S.H6>작품은 관리자 승인을 받은 후 업로드 될 예정입니다.</S.H6>
              <S.H9>(승인까지 최대 2 ~ 3일 소요될 수 있습니다.)</S.H9>
            </S.Info>

            <S.ButtonWrapper>
              <Link to={"/display/korean"}>
                <PrimaryButton>확인</PrimaryButton>
              </Link>
            </S.ButtonWrapper>
          </S.Content>
        </S.Line>
      </S.Wrapper>
    </S.Container>
  );
};

export default DisplayRegistrationModal;