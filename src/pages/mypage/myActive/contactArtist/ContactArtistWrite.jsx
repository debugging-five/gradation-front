import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from '../../style';
import * as SM from './contactArtistWriteStyle';
import * as SQ from '../../../serviceCenter/qna/qnaSendStyle';
import { useSelector } from 'react-redux';

const ContactArtistWrite = () => {
  const { email } = useParams();
  const currentUser = useSelector(state => state.user.currentUser);
  const navigate = useNavigate(); 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({ title: '', content: '' });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors = { title: '', content: '' };
    let isValid = true;

    if (!title.trim()) {
      newErrors.title = '필수항목입니다.';
      isValid = false;
    }
    if (!content.trim()) {
      newErrors.content = '필수항목입니다.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleConfirm = () => {
    if (validate()) {
      setShowConfirmation(true);
    }
  };

  const handleSubmit = async () => {
    setShowConfirmation(false);

    const mailDTO = {
      sendUserId: currentUser?.id,
      receiveUserEmail: email,
      mailTitle: title,
      mailContent: content
    };

    try {
      const response = await fetch('http://localhost:10000/mail/api/registraction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailDTO),
      });

      if (!response.ok) throw new Error('쪽지 전송 실패');

      setShowSuccess(true);
      setTitle('');
      setContent('');
    } catch (error) {
      alert('쪽지 전송 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  return (
    <S.MainWrapper>
      <SM.Wrapper>
        {/* 이메일 출력 */}
        <SM.Box>
          <SM.OneLine>
            <SM.Title>작가 이메일<SM.Important>*</SM.Important></SM.Title>
            <p>{email}</p>
          </SM.OneLine>
          <SM.Line />
        </SM.Box>

        {/* 제목 입력 */}
        <SM.Box>
          <SM.OneLine>
            <SM.Title>제목<SM.Important>*</SM.Important></SM.Title>
            <SM.InputTitle
              placeholder="제목을 입력하세요."
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                setErrors(prev => ({ ...prev, title: '' }));
              }}
            />
          </SM.OneLine>
          <SM.Line />
          {errors.title && <SQ.ErrorMessege>{errors.title}</SQ.ErrorMessege>}
        </SM.Box>

        {/* 내용 입력 */}
        <SM.Box>
          <SM.Title>내용<SM.Important>*</SM.Important></SM.Title>
          <S.InputContent
            placeholder='내용을 입력하세요.'
            value={content}
            onChange={e => {
              setContent(e.target.value);
              setErrors(prev => ({ ...prev, content: '' }));
            }}
          />
          {errors.content && <SQ.ErrorMessege>{errors.content}</SQ.ErrorMessege>}
        </SM.Box>
      </SM.Wrapper>

      <SM.ButtonDiv>
        <SM.ButtonSend onClick={handleConfirm}>등록</SM.ButtonSend>
      </SM.ButtonDiv>

      {/* 확인 팝업 */}
      {showConfirmation && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="/assets/images/icon/quest.png" alt="question" />
              <S.PopUpText>쪽지를 보내시겠습니까?</S.PopUpText>
              <S.PopUpButtonDiv>
                <S.PopUpButtonW onClick={() => setShowConfirmation(false)}>취소</S.PopUpButtonW>
                <S.PopUpButtonR onClick={handleSubmit}>확인</S.PopUpButtonR>
              </S.PopUpButtonDiv>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}

      {/* 성공 팝업 */}
      {showSuccess && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="/assets/images/icon/check.png" alt="success" />
              <S.PopUpText>쪽지가 전송되었습니다.</S.PopUpText>
              <S.PopUpButtonR onClick={() => {
                setShowSuccess(false);
                navigate('/mypage/contact-artist/sended');
              }}>확인</S.PopUpButtonR>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}
    </S.MainWrapper>
  );
};

export default ContactArtistWrite;
