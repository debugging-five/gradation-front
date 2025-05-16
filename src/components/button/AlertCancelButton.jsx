import BasicButton from './BasicButton'; 

// alert 취소 버튼
const AlertCancelButton = (props) => {
  return (
    <BasicButton
      {...props}
      $variant="gray100"
      $color="primary"
      $fontSize="h9"
      $fontWeight="h9"
      $borderColor="primary"
      $size="small"
      $shape="small"
      >
      {props.children}
    </BasicButton>

  );
};

export default AlertCancelButton;
