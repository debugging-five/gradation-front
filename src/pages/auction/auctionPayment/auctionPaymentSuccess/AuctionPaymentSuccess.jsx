import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import S from './style';

const AuctionPaymentSuccess = (data) => {
  const [searchParams] = useSearchParams();
  const [responseData, setResponsetData] = useState(null);
  const [isReqeustSent, setIsRequestSent] = useState(false);
  const navigate = useNavigate()
  const [body, setbody] = useState({});
  
  useEffect(() => {
    const confirm = async () => {
      const requestData = {
        auctionId : data.paymentData.auctionId,
        orderId : searchParams.get("orderId"),
        amount : searchParams.get("amount"),
        paymentKey : searchParams.get("paymentKey"),
        deliveryAddress : data.paymentData.userAddress,
        deliveryDetailAddress : data.paymentData.userDetailAddress,
        deliveryPostalCode : data.paymentData.postCode,
        deliveryMessage : data.paymentData.deliveryMessage,
        deliveryReceiver : data.paymentData.userName,
        deliveryPhone : data.paymentData.userPhone
      }

      console.log(requestData);
      
      const response = await fetch("http://localhost:10000/payments/api/payment", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(requestData)
      })
      return response.json()
    }

    confirm()
      .then((body) => {
        setbody(body)
      })
      .catch(console.error)

  }, [navigate, isReqeustSent, searchParams])

  const goToList = () => {
    navigate("/auction", {replace : true})
  }
  const goToMyPayment = () => {
    navigate("/mypage/my-payment/payment-list", {replace : true})
  }
  
  
  
  return (
    <S.Wrapper>
      <S.Popup>
        <S.Bar>
        </S.Bar>
        
        <S.IconWrapper2>
          <S.CheckIcon src="/assets/images/icon/check.png" alt="체크"/>
        </S.IconWrapper2>
        
        <S.PaymentSuccess>
          <S.H2>결제가 완료되었습니다</S.H2>
          <S.PaymentSuccessH3>감사합니다</S.PaymentSuccessH3>
        </S.PaymentSuccess>
        
        <S.Info>
          <div id="info-left">
            <S.InfoLeftImg src={`http://localhost:10000/files/api/get/${data.auction.argImgList[0].artImgName}?filePath=${data.auction.argImgList[0].artImgPath}`} alt="경매 작품" />
          </div>
          
          {body.status? 
            <S.InfoRight>
              <S.PaymentInfo>
                <S.H8Black>주문 작품</S.H8Black>
                <S.H8Gray>{data.auction.artTitle}</S.H8Gray>
              </S.PaymentInfo>
              
              <S.PaymentMethod>
                <S.H8Black>결제수단</S.H8Black>
                <S.H8Gray>간편결제</S.H8Gray>
              </S.PaymentMethod>
              
              <S.PaymentMethod2>
                <S.H8Gray>{body.status.paymentMethod}</S.H8Gray>
              </S.PaymentMethod2>
              
              <S.PaymentPrice>
                <S.H8Black>결제 금액</S.H8Black>
                <S.H8Gray>{(String)(body.status.paymentAmount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H8Gray>
              </S.PaymentPrice>
              
              <S.PaymentCode>
                <S.H8Black>주문번호</S.H8Black>
                <S.H8Gray>{body.status.paymentCode}</S.H8Gray>
              </S.PaymentCode>
              
              <S.PaymentCode>
                <S.H8Black>주문일자</S.H8Black>
                <S.H8Gray>{body.status.paymentDate}</S.H8Gray>
              </S.PaymentCode>
            </S.InfoRight>
          :<S.loading>로딩중</S.loading>}
            
        </S.Info>
        <S.ButtonWrapper>
          <S.BackToListButton onClick={goToList}>목록으로</S.BackToListButton>
          <S.PaymentListButton onClick={goToMyPayment}>결제내역</S.PaymentListButton>
        </S.ButtonWrapper>
      </S.Popup>
    </S.Wrapper>
  );
};

export default AuctionPaymentSuccess;