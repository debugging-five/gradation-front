import BasicButton from './BasicButton'; 

// alert 확인 버튼
const AlertOkButton = (props) => {
  return (
    <BasicButton
      {...props}
      $variant="primary"
      $color="gray100"
      $fontSize="h9"
      $fontWeight="h9"
      $borderColor="gray100"
      $size="small"
      $shape="small"
      >
      {props.children}
    </BasicButton>

  );
};

export default AlertOkButton;
