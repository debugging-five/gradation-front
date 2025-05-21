import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../style';
import * as SP from './myPaymentListStyle';

const MyPaymentList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [payments, setPayments] = useState([]);

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

  return (
    <S.MainWrapper>
      {payments.length > 0 ? (
        payments.map((payment, index) => (
          <SP.Wrapper key={index}>
            <SP.ProductImage>
              <img src={`http://localhost:10000/files/api/get/${payment.artImgName}?filePath=${payment.artImgPath}`} alt={payment.artTitle} />
            </SP.ProductImage>

            <div>
              <div>
                <SP.StatusDiv>
                  <SP.Status>{payment.deliveryStatus || '배송중'}</SP.Status>
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
                <S.Button120x45R>주문상세</S.Button120x45R>
              </SP.ButtonDiv>
            </div>
          </SP.Wrapper>
        ))
      ) : (
        <S.Wrapper>결제 내역이 없습니다.</S.Wrapper>
      )}
    </S.MainWrapper>
  );
};

export default MyPaymentList;
