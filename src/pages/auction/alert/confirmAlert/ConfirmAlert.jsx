import AlertCancelButton from "../../../../components/button/AlertCancelButton.jsx";
import AlertOkButton from "../../../../components/button/AlertOkButton.jsx";
import S from "./style.js";


const ConfirmAlert = ({src, message, message1, handleOk, handleCancel}) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Icon src={src} alt="alert 아이콘"/>
          <S.Message>{message}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{message1}</S.Message>
          <S.ButtonWrapper>
            <AlertCancelButton onClick={handleCancel}>취소</AlertCancelButton>
            <AlertOkButton onClick={handleOk}>확인</AlertOkButton>
          </S.ButtonWrapper>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default ConfirmAlert;