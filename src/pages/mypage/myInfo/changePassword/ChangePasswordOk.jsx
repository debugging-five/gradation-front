import React from 'react';
import { BigPopUpButtonDiv, BigPopUpButtonR, BigPopUpButtonW, BigPopUpCloseBox, BigPopUpContent, BigPopUpIcon, BigPopUpTextDiv, BigPopUpTitle, BigPopUpX, Button210R, Button210W, Important, PopUpOverlay } from '../../style';
import { BigPopUp, BigPopUpText, ButtonDiv, ChangePasswordBox, EmptyBox, EndBar, InputContent, MainWrapper, OkBox, OkTitle1, OkTitle2, PasswordTitle, UserIcon } from './changePasswordStyle';

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

      <PopUpOverlay>
        <BigPopUp>
          <BigPopUpCloseBox>
            <BigPopUpX>⨉</BigPopUpX>
          </BigPopUpCloseBox>
          <BigPopUpContent>
            <BigPopUpIcon src="http://localhost:10000/files/api/get/check-circle.png?filePath=images/mypage" alt="check-circle" />
            <BigPopUpTextDiv>
              <BigPopUpText>새로운 비밀번호가 설정되었습니다.</BigPopUpText>
              <BigPopUpText>다시 로그인 해 주세요.</BigPopUpText>
            </BigPopUpTextDiv>
            <BigPopUpButtonDiv>
              <BigPopUpButtonW>메인으로</BigPopUpButtonW>
              <BigPopUpButtonR>로그인</BigPopUpButtonR>
            </BigPopUpButtonDiv>
          </BigPopUpContent>
        </BigPopUp>
      </PopUpOverlay>


    </MainWrapper>
  );
};

export default ChangePasswordOk;