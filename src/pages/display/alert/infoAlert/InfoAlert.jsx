import AlertOkButton from '../../../../components/button/AlertOkButton';
import S from './style';

const InfoAlert = ({src, message, handleOk}) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Icon src={src} alt="alert 아이콘"/>
          <S.Message>{message}</S.Message>
          <AlertOkButton onClick={handleOk}>확인</AlertOkButton>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default InfoAlert;