import React, { useState } from 'react';
import ChangePasswordOk from './ChangePasswordOk';
import ChangePassword from './ChangePassword';

const ChangePasswordContainer = () => {

  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const handleConfirm = () => {
    // DB에서 비밀번호 맞는지 Fetch로 검사해서 결과 값을 받고, 
    // 만약에 비밀번호가 맞는다면
    setPasswordConfirm(true)
  } 

  return (
    <>
      {passwordConfirm ? (
        <ChangePasswordOk />
      ) : (
        <ChangePassword 
          handleConfirm={handleConfirm}
        />
      )}
    </>
  );
};

export default ChangePasswordContainer;