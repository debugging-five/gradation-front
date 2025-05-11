import React from 'react';
import BasicButton from './BasicButton'; 

// 인증 활성화 버튼 (이메일 인증, 학교 검색 ..)
const CheckedButton = (props) => {
  return (
    <BasicButton
      {...props}
      variant="primary"
      color="gray100"
      fontSize="h7"
      fontWeight="h7"
      borderColor="primary"
      size="medium"
      shape="medium">
      {props.children}
    </BasicButton>

  );
};

export default CheckedButton;
