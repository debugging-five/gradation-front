import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../style';
import * as SP from './myPaymentListStyle';

const MyPaymentList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [payments, setPayments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // 팝업에 보여줄 선택된 payment
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    if (!currentUser?.id) return;

    const fetchPayments = async () => {
      try {
        const response = await fetch(`http://localhost:10000/payments/api/payment/all/${currentUser.id}`);
        if (!response.ok) {
          throw new Error('결제 내역을 불러오는 데 실패했습니다.');
        }
        const data = await response.json();
        setPayments(data);
      } catch (error) {
        console.error('결제 내역 불러오기 실패:', error);
      }
    };

    fetchPayments();
  }, [currentUser]);

  // 주문상세 버튼 클릭 시 호출
  const handleShowDetail = (payment) => {
    setSelectedPayment(payment);
    setShowPopup(true);
  };

  return (
    <S.MainWrapper>
      {payments.length > 0 ? (
        payments.map((payment, index) => (
          <SP.Wrapper key={index}>
            <SP.ProductImage>
              <SP.ArtImage src={`http://localhost:10000/files/api/get/${payment.artImgName}?filePath=${payment.artImgPath}`} alt={payment.artTitle} />
            </SP.ProductImage>

            <div>
              <div>
                <SP.StatusDiv>
                  <SP.Status>{payment.deliveryStatus || '배송준비'}</SP.Status>
                  <SP.Day>{payment.estimatedArrival || '배송일 미정'}</SP.Day>
                </SP.StatusDiv>
              </div>

              <SP.MenuBox>
                <SP.OneLine>
                  <SP.Menu>주문 작품</SP.Menu>
                  <SP.Content>{payment.artTitle}</SP.Content>
                </SP.OneLine>
                <SP.Emptybox />
                <SP.OneLine>
                  <SP.Menu>결제수단</SP.Menu>
                  <div>
                    <SP.Content>{payment.paymentMethod}</SP.Content>
                    <SP.Content>{payment.cardName}</SP.Content>
                  </div>
                </SP.OneLine>
                <SP.Emptybox />
                <SP.OneLine>
                  <SP.Menu>결제 금액</SP.Menu>
                  <SP.Price>{payment.paymentAmount.toLocaleString()} KRW</SP.Price>
                </SP.OneLine>
              </SP.MenuBox>

              <SP.ButtonDiv>
                <S.Button120x45W onClick={() => window.open(payment.trackingUrl || '#')}>배송조회</S.Button120x45W>
                <S.Button120x45R onClick={() => handleShowDetail(payment)}>주문상세</S.Button120x45R>
              </SP.ButtonDiv>
            </div>
          </SP.Wrapper>
        ))
      ) : (
        <S.Wrapper>결제 내역이 없습니다.</S.Wrapper>
      )}

      {showPopup && selectedPayment && (
        <S.PopUpOverlay>
          <SP.BigPopUp>
            <SP.BigPopUpCloseBox>
              <SP.BigPopUpX onClick={() => setShowPopup(false)}>⨉</SP.BigPopUpX>
            </SP.BigPopUpCloseBox>

            <SP.BigPopUpTextDiv>
              <SP.BigPopUpTitle>받는 사람</SP.BigPopUpTitle>
              <S.OneLine>
                <SP.BigPopUpSub>받는 사람</SP.BigPopUpSub>
                <SP.BigPopUpText>{selectedPayment.userName || ''}</SP.BigPopUpText>
              </S.OneLine>
              <S.OneLine>
                <SP.BigPopUpSub>연락처</SP.BigPopUpSub>
                <SP.BigPopUpText>{selectedPayment.deliveryPhone || ''}</SP.BigPopUpText>
              </S.OneLine>
              <S.OneLine>
                <SP.BigPopUpSub>받는 주소</SP.BigPopUpSub>
                <SP.BigPopUpText>{selectedPayment.deliveryAddress} {selectedPayment.deliveryDetailAddress}</SP.BigPopUpText>
              </S.OneLine>
              <S.OneLine>
                <SP.BigPopUpSub>배송 메세지</SP.BigPopUpSub>
                <SP.BigPopUpText>{selectedPayment.deliveryMessage || ''}</SP.BigPopUpText>
              </S.OneLine>

              <SP.EndBar/>

              <SP.BigPopUpTitle>결제 정보</SP.BigPopUpTitle>
              <SP.OneLine>
                <SP.BigPopUpSub>결제 일시</SP.BigPopUpSub>
                <SP.BigPopUpText>{selectedPayment.paymentDate || ''}</SP.BigPopUpText>
              </SP.OneLine>
              <SP.OneLine>
                <SP.BigPopUpSub>결제 수단</SP.BigPopUpSub>
                <SP.BigPopUpText>{selectedPayment.paymentMethod || ''}</SP.BigPopUpText>
              </SP.OneLine>
              <SP.OneLine>
                <SP.BigPopUpCost>총 상품가격</SP.BigPopUpCost>
                <SP.BigPopUpCost>{selectedPayment.paymentAmount?.toLocaleString() || ''} 원</SP.BigPopUpCost>
              </SP.OneLine>
            </SP.BigPopUpTextDiv>
          </SP.BigPopUp>
        </S.PopUpOverlay>
      )}
    </S.MainWrapper>
  );
};

export default MyPaymentList;
