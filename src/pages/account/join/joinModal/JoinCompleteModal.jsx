import React from 'react';
import S from './style';
import SubButton from '../../../../components/button/SubButton';
import PrimaryButton from '../../../../components/button/PrimaryButton';

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

        <S.ButtonWwrapper>
          <PrimaryButton>메인으로</PrimaryButton>
          <SubButton>로그인</SubButton>
        </S.ButtonWwrapper>

      </S.Line>
    </S.Container>
  );
};

export default JoinCompleteModal;