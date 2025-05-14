import React from 'react';
import { Button210R, Button210W, Important } from '../../style';
import { ButtonDiv, ChangePasswordBox, EmptyBox, EndBar, InputContent, MainWrapper, OkBox, OkTitle1, OkTitle2, PasswordTitle, UserIcon } from './changePasswordStyle';

const ChangePasswordOk = () => {

  return (
    <MainWrapper>
      <EmptyBox/><EmptyBox/><EmptyBox/>

      <OkBox>
        <UserIcon src="http://localhost:10000/files/api/get/user.png?filePath=images/mypage" alt="default profile" />
        <OkTitle1>인증되었습니다.</OkTitle1>
        <OkTitle2>새로운 비밀번호를 설정해 주세요.</OkTitle2>
      </OkBox>
      <EmptyBox/>
      <div>
        <ChangePasswordBox>
            <PasswordTitle>새 비밀번호<Important>*</Important></PasswordTitle>
            <InputContent placeholder='8~12자 영문, 숫자, 특수문자'/>
        </ChangePasswordBox>
        <EndBar/>
      </div>
      <EmptyBox/>
      <div>
        <ChangePasswordBox>
            <PasswordTitle>새 비밀번호 확인<Important>*</Important></PasswordTitle>
            <InputContent placeholder='새 비밀번호를 입력하세요.'/>
        </ChangePasswordBox>
        <EndBar/>
      </div>
      <EmptyBox/>
      <ButtonDiv>
        <Button210W>이전</Button210W>
        <Button210R>확인</Button210R>
      </ButtonDiv>

      <EmptyBox/><EmptyBox/><EmptyBox/><EmptyBox/>
    </MainWrapper>
  );
};

export default ChangePasswordOk;