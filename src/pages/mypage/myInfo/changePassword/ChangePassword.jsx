import React from 'react';

const ChangePassword = ({handleConfirm}) => {
  return (
    <div>
      패스워드 검증하는 페이지
      <button onClick={handleConfirm}>비밀번호 확인</button>
    </div>
  );
};

export default ChangePassword;