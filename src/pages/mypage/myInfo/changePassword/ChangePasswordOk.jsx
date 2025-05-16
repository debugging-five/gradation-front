import React, { useState } from 'react';
import { BigPopUpButtonDiv, BigPopUpButtonR, BigPopUpButtonW, BigPopUpCloseBox, BigPopUpIcon, BigPopUpTextDiv, BigPopUpX, Button210R, Button210W, Important, PopUpOverlay } from '../../style';
import { BigPopUp, BigPopUpContent, BigPopUpText, ButtonDiv, ChangePasswordBox, EmptyBox, EndBar, InputContent, MainWrapper, OkBox, OkTitle1, OkTitle2, PasswordTitle, UserIcon } from './changePasswordStyle';
import { useNavigate } from 'react-router-dom';

const ChangePasswordOk = () => {
  const [popupStep, setPopupStep] = useState(0);
  const navigate = useNavigate();
  
  

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
        <Button210R onClick={() => setPopupStep(1)}>확인</Button210R>
      </ButtonDiv>

      <EmptyBox/><EmptyBox/><EmptyBox/><EmptyBox/>

      {popupStep === 1 && (
      <PopUpOverlay>
        <BigPopUp>
          <BigPopUpCloseBox>
            <BigPopUpX onClick={() => navigate('/login')}>⨉</BigPopUpX>
          </BigPopUpCloseBox>
          <BigPopUpContent>
            <BigPopUpIcon src="http://localhost:10000/files/api/get/check-circle.png?filePath=images/mypage" alt="check-circle" />
            <BigPopUpTextDiv>
              <BigPopUpText>새로운 비밀번호가 설정되었습니다.</BigPopUpText>
              <BigPopUpText>다시 로그인 해 주세요.</BigPopUpText>
            </BigPopUpTextDiv>
            <BigPopUpButtonDiv>
              <BigPopUpButtonW onClick={() => navigate('/')}>메인으로</BigPopUpButtonW>
              <BigPopUpButtonR onClick={() => navigate('/login')}>로그인</BigPopUpButtonR>
            </BigPopUpButtonDiv>
          </BigPopUpContent>
        </BigPopUp>
      </PopUpOverlay>
      )}


    </MainWrapper>
  );
};

export default ChangePasswordOk;