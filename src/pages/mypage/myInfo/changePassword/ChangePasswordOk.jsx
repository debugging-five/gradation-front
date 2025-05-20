import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../style';
import * as SC from './changePasswordStyle';
const ChangePasswordOk = () => {
  const [popupStep, setPopupStep] = useState(0);
  const navigate = useNavigate();
  
  

  return (
    <SC.MainWrapper>
      <SC.EmptyBox/><SC.EmptyBox/><SC.EmptyBox/>

      <SC.OkBox>
        <SC.UserIcon src="http://localhost:10000/files/api/get/user.png?filePath=images/mypage" alt="default profile" />
        <SC.OkTitle1>인증되었습니다.</SC.OkTitle1>
        <SC.OkTitle2>새로운 비밀번호를 설정해 주세요.</SC.OkTitle2>
      </SC.OkBox>
      <SC.EmptyBox/>
      <div>
        <SC.ChangePasswordBox>
            <SC.PasswordTitle>새 비밀번호<S.Important>*</S.Important></SC.PasswordTitle>
            <SC.InputContent placeholder='8~12자 영문, 숫자, 특수문자'/>
        </SC.ChangePasswordBox>
        <SC.EndBar/>
      </div>
      <SC.EmptyBox/>
      <div>
        <SC.ChangePasswordBox>
            <SC.PasswordTitle>새 비밀번호 확인<S.Important>*</S.Important></SC.PasswordTitle>
            <SC.InputContent placeholder='새 비밀번호를 입력하세요.'/>
        </SC.ChangePasswordBox>
        <SC.EndBar/>
      </div>
      <SC.EmptyBox/>
      <SC.ButtonDiv>
        <S.Button210W>이전</S.Button210W>
        <S.Button210R onClick={() => setPopupStep(1)}>확인</S.Button210R>
      </SC.ButtonDiv>

      <SC.EmptyBox/><SC.EmptyBox/><SC.EmptyBox/><SC.EmptyBox/>

      {popupStep === 1 && (
      <S.PopUpOverlay>
        <SC.BigPopUp>
          <S.BigPopUpCloseBox>
            <S.BigPopUpX onClick={() => navigate('/login')}>⨉</S.BigPopUpX>
          </S.BigPopUpCloseBox>
          <SC.BigPopUpContent>
            <S.BigPopUpIcon src="http://localhost:10000/files/api/get/check-circle.png?filePath=images/mypage" alt="check-circle" />
            <S.BigPopUpTextDiv>
              <SC.BigPopUpText>새로운 비밀번호가 설정되었습니다.</SC.BigPopUpText>
              <SC.BigPopUpText>다시 로그인 해 주세요.</SC.BigPopUpText>
            </S.BigPopUpTextDiv>
            <S.BigPopUpButtonDiv>
              <S.BigPopUpButtonW onClick={() => navigate('/')}>메인으로</S.BigPopUpButtonW>
              <S.BigPopUpButtonR onClick={() => navigate('/login')}>로그인</S.BigPopUpButtonR>
            </S.BigPopUpButtonDiv>
          </SC.BigPopUpContent>
        </SC.BigPopUp>
      </S.PopUpOverlay>
      )}


    </SC.MainWrapper>
  );
};

export default ChangePasswordOk;