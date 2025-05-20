import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from '../../style';

const ContactArtistReceivedDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mail, setMail] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchMail = async () => {
      try {
        const response = await fetch(`http://localhost:10000/mail/api/alert/${id}`);
        const data = await response.json();
        console.log('--------------'); 
        console.log('📩 Mail data:', data); 
        console.log('--------------'); 
        setMail(data);
      } catch (error) {
        console.error('메일 상세 조회 실패:', error);
      }
    };

    if (id) fetchMail();
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
      <S.MainTitle>내 활동 / 작가와 연락</S.MainTitle>
      
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
              <S.Button120x45W onClick={() => setShowConfirm(true)}>삭제</S.Button120x45W>
              <S.Button120x45R onClick={() => navigate(`/mypage/contact-artist/write/${mail.sendUserEmail}`)}>답장</S.Button120x45R>
            </S.ButtonDiv>
        </S.Wrapper>

        {/* 첫 번째 팝업: 삭제 확인 */}
        {showConfirm && (
          <S.PopUpOverlay>
            <S.PopUp>
              <S.PopUpContent>
                <S.PopUpIcon src="http://localhost:10000/files/api/get/question.png?filePath=images/mypage" alt="question" />
                <S.PopUpText>쪽지를 삭제하시겠습니까?</S.PopUpText>
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
                <S.PopUpIcon src="http://localhost:10000/files/api/get/attention.png?filePath=images/mypage" alt="attention" />
                <S.PopUpText>알림이 삭제되었습니다.</S.PopUpText>
                <S.PopUpButtonR onClick={() => { setShowSuccess(false); navigate(-1); }}>확인</S.PopUpButtonR>
              </S.PopUpContent>
            </S.PopUp>
          </S.PopUpOverlay>
        )}
    </S.MainWrapper>
  );
};

export default ContactArtistReceivedDetail;