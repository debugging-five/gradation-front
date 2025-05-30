import React, { useEffect, useState } from 'react';
import * as S from '../style';
import * as SP from './myPaymentDeliveryInfoStyle';
import { useSelector } from 'react-redux';

const MyPaymentDeliveryInfo = () => {
  const deliveryInfo = {
    company: '한진택배',
    phone: '1699-5588',
    trackingNumber: '458528916333'
  };

  const deliveryEvents = [
    { time: '2월 14, 2025 12:05', location: '역삼(집)', status: '배달완료' },
    { time: '2월 14, 2025 09:30', location: '강남터미널', status: '배송출발' },
    { time: '2월 13, 2025 22:00', location: '서울허브', status: '간선하차' },
    { time: '2월 13, 2025 15:10', location: '인천터미널', status: '집하완료' },
    { time: '2월 12, 2025 18:45', location: '물류센터', status: '배송준비중' },
  ];

  const currentUser = useSelector(state => state.user.currentUser);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    if (!currentUser?.id) return;

    const fetchPayments = async () => {
      try {
        const response = await fetch(`http://localhost:10000/payments/api/payment/all/${currentUser.id}`);
        if (!response.ok) throw new Error('결제 내역을 불러오는 데 실패했습니다.');
        const data = await response.json();
        setPayments(data);
      } catch (error) {
        console.error('결제 내역 불러오기 실패:', error);
      }
    };

    fetchPayments();
  }, [currentUser]);

  // 첫 번째 결제 내역만 사용
  const selectedPayment = payments.length > 0 ? payments[0] : null;

  return (
    <S.MainWrapper>
      <S.Wrapper>
        <SP.OneLine>
          <SP.SendedWrapper>
            <SP.ProductImg src="http://localhost:10000/files/api/get/product.png?filePath=images/mypage" alt="product"/>
            <div>
              <SP.TextOneLine>
                <SP.Title>택배사</SP.Title>
                <SP.Content>{deliveryInfo.company}</SP.Content>
              </SP.TextOneLine>
              <SP.TextOneLine>
                <SP.Title>전화번호</SP.Title>
                <SP.Content>{deliveryInfo.phone}</SP.Content>
              </SP.TextOneLine>
              <SP.TextOneLine>
                <SP.Title>송장번호</SP.Title>
                <SP.Content>{deliveryInfo.trackingNumber}</SP.Content>
              </SP.TextOneLine>
            </div>
          </SP.SendedWrapper>
          <SP.Line/>
          <SP.SendedWrapper>
            <div>
              {selectedPayment && (
                <>
                  <SP.TextOneLine>
                    <SP.RTitle>받는 사람</SP.RTitle>
                    <SP.Content>{selectedPayment.userName}</SP.Content>
                  </SP.TextOneLine>
                  <SP.TextOneLine>
                    <SP.RTitle>받는 주소</SP.RTitle>
                    <SP.RContent>{selectedPayment.userAddress} {selectedPayment.userDetailAddress}</SP.RContent>
                  </SP.TextOneLine>
                  <SP.TextOneLine>
                    <SP.RTitle>배송 요청사항</SP.RTitle>
                    <SP.Content>{selectedPayment.deliveryMessage}</SP.Content>
                  </SP.TextOneLine>
                </>
              )}
            </div>
          </SP.SendedWrapper>
        </SP.OneLine>

        <S.Wrapper>
          <SP.RedBox>
            <SP.RedText1>시간</SP.RedText1>
            <SP.RedText2>현재위치</SP.RedText2> 
            <SP.RedText3>배송상태</SP.RedText3> 
          </SP.RedBox>
          {deliveryEvents.map((event, idx) => (
            <SP.TextOneLine key={idx}>
              <SP.Text1>{event.time}</SP.Text1>
              <SP.Text2>{event.location}</SP.Text2>
              <SP.Text3>{event.status}</SP.Text3>
            </SP.TextOneLine>
          ))}
          <S.EndBar/>
        </S.Wrapper>
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default MyPaymentDeliveryInfo;
