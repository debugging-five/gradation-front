import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from '../../style';
import * as SC from './changePasswordStyle';

const ChangePasswordOk = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser);

  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [popupStep, setPopupStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordCheckVisible, setPasswordCheckVisible] = useState(false);

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,12}$/;

  const handleSubmit = async () => {
    if (popupStep === 1 || isSubmitting) return;
    setIsSubmitting(true);

    let hasError = false;

    if (!password) {
      setPasswordError('필수 항목입니다.');
      hasError = true;
    } else if (!passwordRegex.test(password)) {
      setPasswordError('8~12자 영문, 숫자, 특수문자를 포함해야 합니다.');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!passwordCheck) {
      setPasswordCheckError('필수 항목입니다.');
      hasError = true;
    } else if (password !== passwordCheck) {
      setPasswordCheckError('비밀번호가 서로 일치하지 않습니다.');
      hasError = true;
    } else {
      setPasswordCheckError('');
    }

    if (hasError) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:10000/users/api/modify-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userIdentification: currentUser.userIdentification,
          userPassword: password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        setPopupStep(1);
      } else if (data.message === '기존 비밀번호와 동일합니다.') {
        setPasswordError('기존 비밀번호와 동일한 비밀번호는 사용할 수 없습니다.');
      } else {
        setPasswordError('기존 비밀번호와 동일한 비밀번호는 사용할 수 없습니다.');
      }

    } catch (error) {
      console.error('비밀번호 수정 실패:', error);
      alert('서버 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SC.MainWrapper>
      <SC.EmptyBox /><SC.EmptyBox /><SC.EmptyBox />

      <SC.OkBox>
        <SC.UserIcon
          src="http://localhost:10000/files/api/get/user.png?filePath=images/mypage"
          alt="default profile"
        />
        <SC.OkTitle1>인증되었습니다.</SC.OkTitle1>
        <SC.OkTitle2>새로운 비밀번호를 설정해 주세요.</SC.OkTitle2>
      </SC.OkBox>

      <SC.EmptyBox />
      <div>
        <SC.ChangePasswordBox>
          <SC.PasswordTitle>
            새 비밀번호<S.Important>*</S.Important>
          </SC.PasswordTitle>
          <SC.InputWrapper>
            <SC.InputContent
              type={passwordVisible ? 'text' : 'password'}
              placeholder="8~12자 영문, 숫자, 특수문자"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  if (popupStep !== 1) {
                    handleSubmit();
                  }
                }
              }}
            />
            <SC.Eye
              src={`/assets/images/icon/${passwordVisible ? 'open-eye' : 'close-eye'}.png`}
              alt="toggle-eye"
              onClick={() => setPasswordVisible(!passwordVisible)}
              style={{ cursor: 'pointer' }}
            />
          </SC.InputWrapper>
        </SC.ChangePasswordBox>
        <SC.EndBar />
        {passwordError && <SC.Error><p>{passwordError}</p></SC.Error>}
      </div>

      <SC.EmptyBox />
      <div>
        <SC.ChangePasswordBox>
          <SC.PasswordTitle>
            새 비밀번호 확인<S.Important>*</S.Important>
          </SC.PasswordTitle>
          <SC.InputWrapper>
            <SC.InputContent
              type={passwordCheckVisible ? 'text' : 'password'}
              placeholder="새 비밀번호를 입력하세요."
              value={passwordCheck}
              onChange={(e) => {
                setPasswordCheck(e.target.value);
                setPasswordCheckError('');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  if (popupStep !== 1) {
                    handleSubmit();
                  }
                }
              }}
            />
            <SC.Eye
              src={`/assets/images/icon/${passwordCheckVisible ? 'open-eye' : 'close-eye'}.png`}
              alt="toggle-eye"
              onClick={() => setPasswordCheckVisible(!passwordCheckVisible)}
              style={{ cursor: 'pointer' }}
            />
          </SC.InputWrapper>
        </SC.ChangePasswordBox>
        <SC.EndBar />
        {passwordCheckError && <SC.Error><p>{passwordCheckError}</p></SC.Error>}
      </div>

      <SC.EmptyBox />
      <SC.ButtonDiv>
        <S.Button210W onClick={() => navigate(-1)}>이전</S.Button210W>
        <S.Button210R onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? '처리 중...' : '확인'}
        </S.Button210R>
      </SC.ButtonDiv>

      <SC.EmptyBox /><SC.EmptyBox /><SC.EmptyBox /><SC.EmptyBox />

      {popupStep === 1 && (
        <S.PopUpOverlay>
          <SC.BigPopUp>
            <S.BigPopUpCloseBox>
              <S.BigPopUpX onClick={() => navigate('/login')}>⨉</S.BigPopUpX>
            </S.BigPopUpCloseBox>
            <SC.BigPopUpContent>
              <S.BigPopUpIcon
                src="/assets/images/icon/check.png"
                alt="check-circle"
              />
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
