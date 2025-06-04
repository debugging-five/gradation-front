import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../style';
import * as SP from './myPaymentListStyle';
import { NavLink } from 'react-router-dom';

const MyPaymentList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [payments, setPayments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const categoryMap = {
    '한국화': 'korean',
    '건축': 'architecture',
    '조각': 'sculpture',
    '공예': 'craft',
    '회화': 'painting',
    '서예': 'calligraphy',
  };

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
        setCurrentPage(1);
      } catch (error) {
        console.error('결제 내역 불러오기 실패:', error);
      }
    };

    fetchPayments();
  }, [currentUser]);

  // 주문상세 버튼 클릭
  const handleShowDetail = (payment) => {
    setSelectedPayment(payment);
    setShowPopup(true);
  };

  // 최신순 정렬
  const sortedPayments = [...payments].sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate));

  // 페이지네이션 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPayments = sortedPayments.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(payments.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <S.MainWrapper>
      {currentPayments.length > 0 ? (
        currentPayments.map((payment, index) => (
          <SP.Wrapper key={index}>
            <SP.ProductImage>
              <NavLink to={`/display/${categoryMap[payment.artCategory]}/detail/${payment.artId}`}>
                <SP.ArtImage
                  src={`http://localhost:10000/files/api/get/${payment.artImgName}?filePath=${payment.artImgPath}`}
                  alt={payment.artTitle}
                />
              </NavLink>
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
                <S.Button120x45W as={NavLink} to="delivery-info/1">
                  배송조회
                </S.Button120x45W>
                <S.Button120x45R onClick={() => handleShowDetail(payment)}>주문상세</S.Button120x45R>
              </SP.ButtonDiv>
            </div>
          </SP.Wrapper>
        ))
      ) : (
        <div style={{ padding: '1rem', textAlign: 'center' }}>결제 내역이 없습니다.</div>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <S.Pagination>
          {pageNumbers.map((number) => (
            <S.PageButton
              key={number}
              onClick={() => setCurrentPage(number)}
              className={number === currentPage ? 'active' : ''}
            >
              {number}
            </S.PageButton>
          ))}
        </S.Pagination>
      )}

      {/* 주문상세 팝업 */}
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
                <SP.BigPopUpText>{selectedPayment.userPhone || ''}</SP.BigPopUpText>
              </S.OneLine>
              <S.OneLine>
                <SP.BigPopUpSub>받는 주소</SP.BigPopUpSub>
                <SP.BigPopUpText>
                  {selectedPayment.userAddress} {selectedPayment.userDetailAddress}
                </SP.BigPopUpText>
              </S.OneLine>
              <S.OneLine>
                <SP.BigPopUpSub>배송 메세지</SP.BigPopUpSub>
                <SP.BigPopUpText>{selectedPayment.deliveryMessage || ''}</SP.BigPopUpText>
              </S.OneLine>

              <SP.EndBar />

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
                <SP.BigPopUpCost>{selectedPayment.paymentAmount?.toLocaleString() || '0'} 원</SP.BigPopUpCost>
              </SP.OneLine>
            </SP.BigPopUpTextDiv>
          </SP.BigPopUp>
        </S.PopUpOverlay>
      )}
    </S.MainWrapper>
  );
};

export default MyPaymentList;
