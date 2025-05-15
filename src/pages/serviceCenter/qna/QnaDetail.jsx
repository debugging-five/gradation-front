import React, { useEffect, useState } from 'react';
import { Line, MainWrapper, QContent, QSize, QTitle, Title, Wrapper } from './qnaDetailStyle';
import { useNavigate, useParams } from 'react-router-dom';
import { Category } from '../faq/faqDetailStyle';
import { Button120x45R, Button120x45W, ButtonDiv, PopUp, PopUpButtonDiv, PopUpButtonR, PopUpButtonW, PopUpContent, PopUpIcon, PopUpOverlay, PopUpText } from '../../mypage/style';

const QnaDetail = () => {
  const { id } = useParams(); // URL에서 id 꺼냄
  const navigate = useNavigate();
  const [qna, setQna] = useState(null); // 상세 데이터 상태
  const [showConfirmation, setShowConfirmation] = useState(false); // 첫 번째 팝업 상태
  const [showSuccess, setShowSuccess] = useState(false); // 두 번째 팝업 상태

  useEffect(() => {
    const fetchQnaDetail = async () => {
      try {
        const response = await fetch(`http://localhost:10000/qna/api/qna/${id}`);
        const data = await response.json();
        setQna(data);
      } catch (error) {
        console.error('QNA 상세 호출 실패:', error);
      }
    };
        fetchQnaDetail();
  }, [id]);

  // 등록 버튼 클릭 시 첫 번째 팝업 띄우기
  const handleConfirm = () => {
    setShowConfirmation(true); // 바로 팝업 열기
  };

  // 첫 번째 팝업에서 "확인" 클릭 시 두 번째 팝업 띄우기
  const handleSubmit = async () => {
    try {
      setShowConfirmation(false); // 첫 번째 팝업 닫기

      const response = await fetch(`http://localhost:10000/qna/api/qna/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('삭제에 실패했습니다.');
      }

      setShowSuccess(true); // 두 번째 팝업 열기
    } catch (error) {
      setShowConfirmation(false);
      alert('삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(error);
    }
  };

  // 첫 번째 팝업에서 "취소" 클릭 시 팝업 닫기
  const handleCancel = () => {
    setShowConfirmation(false); // 첫 번째 팝업 닫기
  };

  if (!qna) {
    return <div>로딩 중...</div>;
  }

  return (
    <MainWrapper>
      <Wrapper>
        <Category>{qna.qnaCategory}경매 관련 문의</Category>
        <Title>
          <QSize>Q</QSize>
          <QTitle>{qna.qnaTitle}</QTitle>
        </Title>
        <Line/>
        <QContent>{qna.qnaContent}</QContent>
      </Wrapper>

      <ButtonDiv>
        <Button120x45W onClick={() => navigate(-1)}>목록</Button120x45W>
        <Button120x45R onClick={handleConfirm}>삭제</Button120x45R>
      </ButtonDiv>

      {/* 첫 번째 팝업: 문의 삭제 확인 */}
        {showConfirmation && (
          <PopUpOverlay>
            <PopUp>
              <PopUpContent>
                <PopUpIcon src="http://localhost:10000/files/api/get/question.png?filePath=images/mypage" alt="question" />
                <PopUpText>문의를 삭제하시겠습니까?</PopUpText>
                <PopUpButtonDiv>
                  <PopUpButtonW onClick={handleCancel}>취소</PopUpButtonW>
                  <PopUpButtonR onClick={handleSubmit}>확인</PopUpButtonR>
                </PopUpButtonDiv>
              </PopUpContent>
            </PopUp>
          </PopUpOverlay>
        )}
  
      {/* 두 번째 팝업: 문의 삭제 성공 */}
      {showSuccess && (
        <PopUpOverlay>
          <PopUp>
            <PopUpContent>
              <PopUpIcon src="http://localhost:10000/files/api/get/attention.png?filePath=images/mypage" alt="attention" />
              <PopUpText>문의가 삭제되었습니다.</PopUpText>
              <PopUpButtonR onClick={() => {setShowSuccess(false); navigate(-1);}}>확인</PopUpButtonR>
            </PopUpContent>
          </PopUp>
        </PopUpOverlay>
      )}


    </MainWrapper>
  );
};

export default QnaDetail;