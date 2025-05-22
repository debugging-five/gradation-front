import React, { useEffect, useState } from 'react';
import S from './style';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import TossPayment from './TossPayment';
import AuctionPaymentSuccess from './auctionPaymentSuccess/AuctionPaymentSuccess';

const AuctionPayment = () => {

  let { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [userData, setUserData] = useState(() => structuredClone(currentUser));
  const [paymentData, setPaymentData] = useState({});
  const [postCode, setPostCode] = useState();
  const [searchParams] = useSearchParams();
  const [successModal, setSuccessModal] = useState(false);
  
  useEffect(() => {
    const verifyPayment = async () => {
      const paymentKey = searchParams.get("paymentKey");
      const orderId = searchParams.get("orderId");
      const amount = searchParams.get("amount");

      if (paymentKey || orderId || amount) {
        // const res = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({ paymentKey, orderId, amount }),
        // });
        // const result = await res.json();
        // console.log(result);
        // if(result.ok){
          // 결제 성공시 로직
        // }
        
        if (true) {
          console.log("결제 성공");
          setSuccessModal(true)
        } else {
          console.log("결제 실패");
        }
      };
    }
    verifyPayment();
  }, []);

  const { register, handleSubmit, getValues, formState: { isSubmitting, isSubmitted, errors } } = useForm({ mode: "onChange" });
  
  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    }
  }, [currentUser]);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:10000/auction/api/detail/${id}`)
      const auctionData = await response.json();
      setData(auctionData[0]);
    }
    fetchData()
  }, [id])
  
  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        console.log(data);
        
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
          if (data.bname) extraAddress += data.bname;
          if (data.buildingName) {
            extraAddress += (extraAddress ? ', ' + data.buildingName : data.buildingName);
          }
          if (extraAddress) {
            fullAddress += `(${extraAddress})`;
          }
        }

        setUserData(prev => ({ ...prev, userAddress: fullAddress}));
        setPostCode(data.zonecode);
      }
    }).open();
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setUserData({ ...userData, userAddress: value });
  };

  // 토스결제
  const [isTossPayment, setIsTossPayment] = useState(false);
  const toggleTossPayment = () => {
    setIsTossPayment(!isTossPayment)
  }
  
  useEffect(() => {
    const data = localStorage.getItem('paymentData')
  
    if (data) {
      setPaymentData(JSON.parse(data))
      // localStorage.removeItem('paymentData')
    }
  }, [])
  
  if(data) {
    console.log(data);
    
    if(userData !== null && userData.id !== 0){
      
      if(data.userId === null){
        navigate("/auction")
      }
      if(data.userId !== currentUser.id){
        navigate("/auction")
      }
      return (
        <S.Wrapper>
          <S.Payment>
          { isTossPayment && <TossPayment {...paymentData} /> }
          { successModal && 
          <S.PopupBody>
              <S.PopupPosition>
                <AuctionPaymentSuccess paymentData={paymentData} auction={data}/>
              </S.PopupPosition>
          </S.PopupBody>
          }
            <S.imgWrapper>
              <S.auctionImg src={`http://localhost:10000/files/api/get/${data.artImgName}?filePath=${data.artImgPath}`} alt="경매 작품" />
            </S.imgWrapper>
            
            <S.StyledForm onSubmit={handleSubmit((pay) => {
              // alert("폼 제출");
              const data1 = {...pay,
                auctionId: data.id,
                productPrice: data.auctionBidPrice , 
                orderName: data.artTitle, 
                customerName: userData.userName , 
                customerEmail: userData.userEmail,
                postCode: postCode
              }
              
              setPaymentData(data1)
              console.log(paymentData);
              toggleTossPayment()
            })}>
              <S.H3>낙찰을 축하드립니다!</S.H3>
              {/* <!-- 낙찰 금액 --> */}
              <S.Price>
                <S.H5>낙찰 금액 | {(String)(data?.auctionBidPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}   KRW</S.H5>
              </S.Price>
          
              {/* <!-- 이름 --> */}
              <S.InputWrapper>
                <S.InputText2>
                  <S.H5>이름<S.RedStar>*</S.RedStar></S.H5>
                  <S.PaymentInput type="text" placeholder="이름을 입력하세요." 
                    value={userData.userName}
                    {...register("userName", {
                      required: true,
                    })}
                    onChange={(e) =>
                      setUserData(prev => ({ ...prev, userName: e.target.value }))
                    }
                    autoComplete="off"
                  />
                </S.InputText2>
              </S.InputWrapper>
              <S.WarningArea>
              {errors.userName &&  <S.WarningText>필수 항목입니다</S.WarningText>}
              </S.WarningArea>
              
              {/* <!-- 주소 --> */}
              <S.InputWrapper>
                <S.InputText2>
                  <div style={{display : "flex", width: "40px"}}>
                    <S.H5>주소</S.H5><S.RedStar>*</S.RedStar>
                  </div>
                  <S.PaymentInputA type="text" placeholder="주소를 입력하세요." onClick={handleAddressSearch}
                  value={userData.userAddress !== null? userData.userAddress : ""}
                  {...register("userAddress", {
                      required: true,
                  })}
                  onChange={handleInputChange}
                  readOnly
                  />
                </S.InputText2>
                <S.SearchAddress type='button' onClick={handleAddressSearch}>
                  주소검색
                </S.SearchAddress>

              </S.InputWrapper>
              <S.WarningArea>
              {errors.userAddress && <S.WarningText>필수 항목입니다</S.WarningText>}
              </S.WarningArea>
              
              {/* <!-- 상세 주소 --> */}
              <S.InputWrapper>
                <S.InputText4>
                  <S.H5>상세주소<S.RedStar>*</S.RedStar></S.H5>
                  <S.PaymentInput type="text" placeholder="상세 주소를 입력하세요." 
                  value={userData.userDetailAddress !== null? userData.userDetailAddress : ""}
                  {...register("userDetailAddress", {
                    required: true,
                  })}
                  onChange={(e) =>
                    setUserData(prev => ({ ...prev, userDetailAddress: e.target.value }))
                  }
                  autoComplete="off"/>
                </S.InputText4>
              </S.InputWrapper>
              <S.WarningArea>
              {errors.userDetailAddress &&  <S.WarningText>필수 항목입니다</S.WarningText>}
              </S.WarningArea>
              
              <S.InputWrapper>
                <S.InputText6>
                  <S.H5>배송요청사항<S.RedStar>*</S.RedStar></S.H5>
                  <S.PaymentInput type="text" placeholder="요청사항을 입력하세요."
                  {...register("deliveryMessage", {
                    required: false,
                  })}
                  autoComplete="off"/>
                </S.InputText6>
              </S.InputWrapper>
              <S.WarningArea>
              </S.WarningArea>
              {/* <!-- 전화번호 --> */}
              <S.InputWrapper>
                <S.InputText4>
                  <S.H5>전화번호<S.RedStar>*</S.RedStar></S.H5>
                  <S.PaymentInput type="text" placeholder="전화번호를 입력하세요."
                  value={userData.userPhone}
                  {...register("userPhone", {
                    required: true,
                  })}
                  onChange={(e) =>
                    setUserData(prev => ({ ...prev, userPhone: e.target.value }))
                  }
                  autoComplete="off"/>
                </S.InputText4>
              </S.InputWrapper>
              <S.WarningArea>
              {errors.userPhone &&  <S.WarningText>필수 항목입니다</S.WarningText>}
              </S.WarningArea>

              {/* <!-- 이메일 --> */}
              <S.InputWrapper>
                <S.InputText3>
                  <S.H5>이메일<S.RedStar>*</S.RedStar></S.H5>
                  <S.PaymentInput type="text" placeholder="이메일을 입력하세요."
                  value={userData.userEmail}
                  {...register("userEmail", {
                    required: true,
                  })}
                  onChange={(e) =>
                    setUserData(prev => ({ ...prev, userEmail: e.target.value }))
                  }
                  autoComplete="off"/>
                </S.InputText3>
              </S.InputWrapper>
              <S.WarningArea>
              {errors.userEmail &&  <S.WarningText>필수 항목입니다</S.WarningText>}
              </S.WarningArea>

              <S.StyledLabel>
                <S.StyledInput type='checkbox' {...register("verification", { required: true, })}/>
                <S.CheckLabelSpan>주문자 본인이 맞습니까?</S.CheckLabelSpan>
              </S.StyledLabel>
              
              <S.CheckboxDiv>
                <S.StyledLabel>
                  <S.StyledInput type='checkbox' {...register("agree", { required: true, })}/>
                  <S.CheckLabelSpan>결제에 동의하십니까?</S.CheckLabelSpan>
                </S.StyledLabel>
              </S.CheckboxDiv>
              <S.WarningArea>
              {(errors.agree || errors.verification) && <S.LastWarningText>필수 동의 항목입니다</S.LastWarningText>}
              </S.WarningArea>

              <S.PaymentButtonWrap>
                <S.PaymentButton >결제하기</S.PaymentButton>
              </S.PaymentButtonWrap>
            </S.StyledForm>
        </S.Payment>
      </S.Wrapper>
      );
    }else {
      // navigate("/login")
    }
  }else {
    navigate("/auction")
  }
};

export default AuctionPayment;