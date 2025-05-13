import React from 'react';
import { Important} from '../../style';
import { Button, ChangePasswordBox, EmptyBox, EndBar, InputContent, MainWrapper, PasswordTitle, Title } from './changePasswordStyle';

const ChangePassword = ({handleConfirm}) => {
  return (
    <MainWrapper>

      <EmptyBox/><EmptyBox/><EmptyBox/>
      <Title>비밀번호 변경</Title>
      <EmptyBox/>

      <div>
        <ChangePasswordBox>
            <PasswordTitle>현재 비밀번호<Important>*</Important></PasswordTitle>
            <InputContent placeholder='비밀번호를 입력하세요.'/>
        </ChangePasswordBox>
        <EndBar/>
      </div>

      <EmptyBox/>
      <Button onClick={handleConfirm}>비밀번호 확인</Button>
      <EmptyBox/><EmptyBox/><EmptyBox/><EmptyBox/>

    </MainWrapper>
  );
};

export default ChangePassword;