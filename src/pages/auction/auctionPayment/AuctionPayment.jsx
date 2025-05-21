import React, { useEffect, useState } from 'react';
import S from './style';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const AuctionPayment = () => {

  let { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { register, handleSubmit, getValues, formState: { isSubmitting, isSubmitted, errors } } = useForm({ mode: "onChange" });

  const [userData, setUserData] = useState(currentUser)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:10000/auction/api/detail/${id}`)
      const auctionData = await response.json();
      setData(auctionData[0]);
    }
    fetchData()
  }, [id])
  
  
  if(data) {
    console.log(data);
    console.log(userData);
    
    return (
      <S.Wrapper>
        <S.Payment>
          <S.imgWrapper>
            <S.auctionImg id="auction-img" src="../assets/images/display/art/sculpture/img-sculpture-cat-2.jpeg" alt="경매 작품" />
          </S.imgWrapper>
          
          <S.StyledForm onSubmit={handleSubmit((paymentData) => {
            // alert("폼 제출");
            console.log(paymentData);
            
            // await fetch(데이터 보내기)
            //   .then(() => {
            //     if(데이터 받음) {
            //       사진 업로드 로직 실행
            //     } 
            //     리턴하고 처리
              
            //   }) 
            

          })}>
            <S.H3>낙찰을 축하드립니다!</S.H3>
            {/* <!-- 낙찰 금액 --> */}
            <S.Price>
              <S.H5>낙찰 금액 | {(String)(data?.auctionBidPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}   KRW</S.H5>
            </S.Price>
        
            {/* <!-- 이름 --> */}
            <S.InputWrapper>
              <S.InputText>
                <S.H5>이름<S.RedStar>*</S.RedStar></S.H5>
                <S.PaymentInput type="text" placeholder="이름을 입력하세요." 
                  value={currentUser.userName}
                  {...register("pay", {
                    required: true,
                  })}
                  onChange={(e) =>
                    setUserData(prev => ({ ...prev, userName: e.target.value }))
                  }
                  autoComplete="off"
                />
              </S.InputText>
            </S.InputWrapper>
            <S.WarningArea>
              <S.WarningText>필수 항목입니다</S.WarningText>
            </S.WarningArea>
            
            {/* <!-- 주소 --> */}
            <S.InputWrapper>
              <S.InputText>
                <S.H5>주소<S.RedStar>*</S.RedStar></S.H5>
                <S.PaymentInput type="text" placeholder="주소를 입력하세요." 
                {...register("address", {
                    required: true,
                })}
                autoComplete="off"/>
              </S.InputText>

            </S.InputWrapper>
            <S.WarningArea>
              <S.WarningText>필수 항목입니다</S.WarningText>
            </S.WarningArea>
            
            {/* <!-- 상세 주소 --> */}
            <S.InputWrapper>
              <S.InputText2>
                <S.H5>상세주소<S.RedStar>*</S.RedStar></S.H5>
                <S.PaymentInput type="text" placeholder="상세 주소를 입력하세요." 
                {...register("address", {
                    required: true,
                })}
                autoComplete="off"/>
              </S.InputText2>
            </S.InputWrapper>
            <S.WarningArea>
              <S.WarningText>필수 항목입니다</S.WarningText>
            </S.WarningArea>
            
            {/* <!-- 전화번호 --> */}
            <S.InputWrapper>
              <S.InputText3>
                <S.H5>전화번호<S.RedStar>*</S.RedStar></S.H5>
                <S.PaymentInput type="text" placeholder="전화번호를 입력하세요." 
                {...register("address", {
                    required: true,
                })}
                autoComplete="off"/>
              </S.InputText3>
            </S.InputWrapper>
            <S.WarningArea>
              <S.WarningText>필수 항목입니다</S.WarningText>
            </S.WarningArea>

            {/* <!-- 이메일 --> */}
            <S.InputWrapper>
              <S.InputText4>
                <S.H5>이메일<S.RedStar>*</S.RedStar></S.H5>
                <S.PaymentInput type="text" placeholder="이메일을 입력하세요." 
                {...register("address", {
                    required: true,
                })}
                autoComplete="off"/>
              </S.InputText4>
            </S.InputWrapper>
            <S.WarningArea>
              <S.WarningText>필수 항목입니다</S.WarningText>
            </S.WarningArea>

            <S.StyledLabel>
              <S.StyledInput type='checkbox'/>
              <S.CheckLabelSpan>주문자 본인이 맞습니까?</S.CheckLabelSpan>
            </S.StyledLabel>
            
            <S.CheckboxDiv>
              <S.StyledLabel>
                <S.StyledInput type='checkbox'/>
                <S.CheckLabelSpan>결제에 동의하십니까?</S.CheckLabelSpan>
              </S.StyledLabel>
            </S.CheckboxDiv>
            <S.WarningArea>
              <S.LastWarningText>필수 동의 항목입니다</S.LastWarningText>
            </S.WarningArea>

            <S.PaymentButtonWrap>
              <S.PaymentButton >결제하기</S.PaymentButton>
            </S.PaymentButtonWrap>
          </S.StyledForm>
      </S.Payment>
    </S.Wrapper>
    );
  }else {
    navigate("/auction")
  }
};

export default AuctionPayment;