import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../style';
import * as SC from './changePasswordStyle';

const ChangePassword = ({ handleConfirm }) => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordCheck = async () => {
    if (!password) {
      setMessage('필수 항목입니다.');
      return;
    }

    try {
      const response = await fetch('http://localhost:10000/users/api/check-password', {
        method: 'POST', // 이 부분은 API가 POST이므로 그대로 유지
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userIdentification: currentUser.userIdentification,
          userPassword: password
        })
      });

      const data = await response.json();

      if (response.ok && data.match) {
        setMessage('비밀번호가 일치합니다.');
        handleConfirm();
      } else {
        setMessage(data.message || '비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      setMessage('서버 오류가 발생했습니다.');
    }
  };

  return (
    <SC.MainWrapper>
      <SC.EmptyBox /><SC.EmptyBox /><SC.EmptyBox />
      <SC.Title>비밀번호 변경</SC.Title>
      <SC.EmptyBox />

      <div>
        <SC.ChangePasswordBox>
          <SC.PasswordTitle>
            현재 비밀번호<S.Important>*</S.Important>
          </SC.PasswordTitle>
          <SC.InputContent
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault(); // 기본 엔터 동작 방지
                handlePasswordCheck();
              }
            }}
          />
        </SC.ChangePasswordBox>
        <SC.EndBar />
      <SC.Error>{message && <p>{message}</p>}</SC.Error>
      </div>


      <SC.EmptyBox />
      <SC.Button onClick={handlePasswordCheck}>비밀번호 확인</SC.Button>
      <SC.EmptyBox /><SC.EmptyBox /><SC.EmptyBox /><SC.EmptyBox />
    </SC.MainWrapper>
  );
};

export default ChangePassword;
