import BasicButton from './BasicButton'; 

// 인증 비활성화 버튼 (이메일 인증, 학교 검색 ..)
const UncheckedButton = (props) => {
  return (
    <BasicButton
      {...props}
      $variant="gray500"
      $color="gray100"
      $fontSize="h7"
      $fontWeight="h7"
      $borderColor="gray500"
      $size="medium"
      $shape="medium"
      >
      {props.children}
    </BasicButton>

  );
};

export default UncheckedButton;
