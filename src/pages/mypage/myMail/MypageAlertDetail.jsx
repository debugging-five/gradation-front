import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from '../style';

const MypageAlertDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mail, setMail] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchAlert = async () => {
      try {
        const response = await fetch(`http://localhost:10000/mail/api/alert/${id}`);
        const data = await response.json();
        setMail(data);
      } catch (error) {
        console.error('알림 상세 조회 실패:', error);
      }
    };

    if (id) fetchAlert();
  }, [id]);

  const handleDelete = async () => {
    try {
      setShowConfirm(false);
      const response = await fetch(`http://localhost:10000/mail/api/mail/${id}/delete-received`, {
        method: 'PATCH',
      });

      if (!response.ok) throw new Error('삭제 실패');

      setShowSuccess(true);
    } catch (error) {
      alert('삭제 중 오류 발생');
      console.error(error);
    }
  };

  if (!mail) return <div>로딩 중...</div>;

  return (
    <S.MainWrapper>
      <S.Wrapper>
        <S.MailTitleBox>
          <S.MailTitle>{mail.mailTitle}</S.MailTitle>
          <p>{new Date(mail.mailSendTime).toLocaleDateString('ko-KR')}</p>
        </S.MailTitleBox>

        <S.MailContentBox>
          {mail.mailContent}
        </S.MailContentBox>

        <S.ButtonDiv>
          <S.Button120x45W onClick={() => navigate(-1)}>목록</S.Button120x45W>
          <S.Button120x45R onClick={() => setShowConfirm(true)}>삭제</S.Button120x45R>
        </S.ButtonDiv>
      </S.Wrapper>

      {/* 첫 번째 팝업: 삭제 확인 */}
      {showConfirm && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="/assets/images/icon/quest.png" alt="question" />
              <S.PopUpText>알림을 삭제하시겠습니까?</S.PopUpText>
              <S.PopUpButtonDiv>
                <S.PopUpButtonW onClick={() => setShowConfirm(false)}>취소</S.PopUpButtonW>
                <S.PopUpButtonR onClick={handleDelete}>확인</S.PopUpButtonR>
              </S.PopUpButtonDiv>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}

      {/* 두 번째 팝업: 삭제 성공 */}
      {showSuccess && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="/assets/images/icon/attention-popup.png" alt="attention" />
              <S.PopUpText>알림이 삭제되었습니다.</S.PopUpText>
              <S.PopUpButtonR onClick={() => { setShowSuccess(false); navigate(-1); }}>확인</S.PopUpButtonR>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}
    </S.MainWrapper>
  );
};

export default MypageAlertDetail;
