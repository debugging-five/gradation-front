import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from '../../mypage/style';
import * as SF from '../faq/faqDetailStyle';
import * as SQ from './qnaDetailStyle';
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
    <SQ.MainWrapper>
      <SQ.Wrapper>
        <SF.Category>{qna.qnaCategory} 관련 문의</SF.Category>
        <SQ.Title>
          <SQ.QSize>Q</SQ.QSize>
          <SQ.QTitle>{qna.qnaTitle}</SQ.QTitle>
        </SQ.Title>
        <SQ.Line/>
        <SQ.QContent>{qna.qnaContent}</SQ.QContent>
      </SQ.Wrapper>
      
      <SQ.ImageDiv>
        {qna.qnaImgName && (<SQ.QnaImage src={`http://localhost:10000/files/api/get/${qna.qnaImgName}?filePath=images/qna`} alt="qnaImage"/>)}
      </SQ.ImageDiv>

      <S.ButtonDiv>
        <S.Button120x45W onClick={() => navigate(-1)}>목록</S.Button120x45W>
        <S.Button120x45R onClick={handleConfirm}>삭제</S.Button120x45R>
      </S.ButtonDiv>

      {/* 첫 번째 팝업: 문의 삭제 확인 */}
        {showConfirmation && (
          <S.PopUpOverlay>
            <S.PopUp>
              <S.PopUpContent>
                <S.PopUpIcon src="http://localhost:10000/files/api/get/question.png?filePath=images/mypage" alt="question" />
                <S.PopUpText>문의를 삭제하시겠습니까?</S.PopUpText>
                <S.PopUpButtonDiv>
                  <S.PopUpButtonW onClick={handleCancel}>취소</S.PopUpButtonW>
                  <S.PopUpButtonR onClick={handleSubmit}>확인</S.PopUpButtonR>
                </S.PopUpButtonDiv>
              </S.PopUpContent>
            </S.PopUp>
          </S.PopUpOverlay>
        )}
  
      {/* 두 번째 팝업: 문의 삭제 성공 */}
      {showSuccess && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="http://localhost:10000/files/api/get/attention.png?filePath=images/mypage" alt="attention" />
              <S.PopUpText>문의가 삭제되었습니다.</S.PopUpText>
              <S.PopUpButtonR onClick={() => {setShowSuccess(false); navigate(-1);}}>확인</S.PopUpButtonR>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}


    </SQ.MainWrapper>
  );
};

export default QnaDetail;