import React from 'react';
import BasicButton from './BasicButton'; 

// 저장, 수정, 목록 버튼
const PrimaryButton = (props) => {
  return (
    <BasicButton
      variant="primary"
      color="gray100"
      fontSize="h5"
      fontWeight="h5"
      borderColor="primary"
      size="large"
      shape="large">
      {props.children}
    </BasicButton>

  );
};

export default PrimaryButton;
