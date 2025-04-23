import React from 'react';
import BasicButton from './BasicButton'; 

const BasicButton2 = (props) => {
  return (
    <BasicButton variant="primary" color="gray100" fontSize="h9" fontWeight="h9" borderColor="primary" size="medium" shape="small" {...props}>
      {props.children}
    </BasicButton>

  );
};

export default BasicButton2;
