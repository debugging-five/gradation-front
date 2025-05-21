import React from 'react';
import * as S from '../../style';
import * as SC from './changePasswordStyle';

const ChangePassword = ({handleConfirm}) => {
  return (
    <SC.MainWrapper>

      <SC.EmptyBox/><SC.EmptyBox/><SC.EmptyBox/>
      <SC.Title>비밀번호 변경</SC.Title>
      <SC.EmptyBox/>

      <div>
        <SC.ChangePasswordBox>
            <SC.PasswordTitle>현재 비밀번호<S.Important>*</S.Important></SC.PasswordTitle>
            <SC.InputContent placeholder='비밀번호를 입력하세요.'/>
        </SC.ChangePasswordBox>
        <SC.EndBar/>
      </div>

      <SC.EmptyBox/>
      <SC.Button onClick={handleConfirm}>비밀번호 확인</SC.Button>
      <SC.EmptyBox/><SC.EmptyBox/><SC.EmptyBox/><SC.EmptyBox/>

    </SC.MainWrapper>
  );
};

export default ChangePassword;