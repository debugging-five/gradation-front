import React from 'react';
import S from './style';

const JoinCompleteModal = () => {
  return (
    <S.Container>
      <S.Line>
        <S.CloseIconWrapper>
        <S.CloseIcon src={'/assets/images/icon/close.png'}/>
        </S.CloseIconWrapper>
        <S.Notice>
          <S.Icon src={'/assets/images/icon/check.png'}/>
          <S.H5>회원가입이 완료되었습니다.</S.H5>
        </S.Notice>

      </S.Line>
    </S.Container>
  );
};

export default JoinCompleteModal;