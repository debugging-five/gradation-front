import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button120x45R, Button120x45W, ButtonDiv, MailContentBox, MailTitle, MailTitleBox, MainTitle, MainWrapper, PopUp, PopUpButtonDiv, PopUpButtonR, PopUpButtonW, PopUpContent, PopUpIcon, PopUpOverlay, PopUpText, Wrapper} from '../../style';

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
    <MainWrapper>
      <MainTitle>내 활동 / 작가와 연락</MainTitle>
      
        <Wrapper>
            <MailTitleBox>
              <MailTitle>{mail.mailTitle}</MailTitle>
              <p>{new Date(mail.mailSendTime).toLocaleDateString('ko-KR')}</p>
            </MailTitleBox>
  
            <MailContentBox>
              {mail.mailContent}
            </MailContentBox>
  
            <ButtonDiv>
              <Button120x45W onClick={() => navigate(-1)}>목록</Button120x45W>
              <Button120x45R onClick={() => setShowConfirm(true)}>삭제</Button120x45R>
            </ButtonDiv>
        </Wrapper>

        {/* 첫 번째 팝업: 삭제 확인 */}
        {showConfirm && (
          <PopUpOverlay>
            <PopUp>
              <PopUpContent>
                <PopUpIcon src="http://localhost:10000/files/api/get/question.png?filePath=images/mypage" alt="question" />
                <PopUpText>쪽지를 삭제하시겠습니까?</PopUpText>
                <PopUpButtonDiv>
                  <PopUpButtonW onClick={() => setShowConfirm(false)}>취소</PopUpButtonW>
                  <PopUpButtonR onClick={handleDelete}>확인</PopUpButtonR>
                </PopUpButtonDiv>
              </PopUpContent>
            </PopUp>
          </PopUpOverlay>
        )}
  
        {/* 두 번째 팝업: 삭제 성공 */}
        {showSuccess && (
          <PopUpOverlay>
            <PopUp>
              <PopUpContent>
                <PopUpIcon src="http://localhost:10000/files/api/get/attention.png?filePath=images/mypage" alt="attention" />
                <PopUpText>알림이 삭제되었습니다.</PopUpText>
                <PopUpButtonR onClick={() => { setShowSuccess(false); navigate(-1); }}>확인</PopUpButtonR>
              </PopUpContent>
            </PopUp>
          </PopUpOverlay>
        )}
    </MainWrapper>
  );
};

export default ContactArtistReceivedDetail;