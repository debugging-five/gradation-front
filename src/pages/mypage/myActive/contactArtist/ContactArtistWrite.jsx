import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, ButtonDiv, ButtonSend, Important, InputContent, InputTitle, Line, OneLine, Title, Wrapper
} from './contactArtistWriteStyle';
import { useSelector } from 'react-redux';
import { MainWrapper, PopUp, PopUpButtonDiv, PopUpButtonR, PopUpButtonW, PopUpContent, PopUpIcon, PopUpOverlay, PopUpText } from '../../style';
import { ErrorMessege } from '../../../serviceCenter/qna/qnaSendStyle';

const ContactArtistWrite = () => {
  const { email } = useParams();
  const currentUser = useSelector(state => state.user.currentUser);

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
    <MainWrapper>
      <Wrapper>
        {/* 이메일 출력 */}
        <Box>
          <OneLine>
            <Title>작가 이메일<Important>*</Important></Title>
            <p>{email}</p>
          </OneLine>
          <Line />
        </Box>

        {/* 제목 입력 */}
        <Box>
          <OneLine>
            <Title>제목<Important>*</Important></Title>
            <InputTitle
              placeholder="제목을 입력하세요."
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                setErrors(prev => ({ ...prev, title: '' }));
              }}
            />
          </OneLine>
          <Line />
          {errors.title && <ErrorMessege>{errors.title}</ErrorMessege>}
        </Box>

        {/* 내용 입력 */}
        <Box>
          <Title>내용<Important>*</Important></Title>
          <InputContent
            value={content}
            onChange={e => {
              setContent(e.target.value);
              setErrors(prev => ({ ...prev, content: '' }));
            }}
          />
          {errors.content && <ErrorMessege>{errors.content}</ErrorMessege>}
        </Box>
      </Wrapper>

      <ButtonDiv>
        <ButtonSend onClick={handleConfirm}>등록</ButtonSend>
      </ButtonDiv>

      {/* 확인 팝업 */}
      {showConfirmation && (
        <PopUpOverlay>
          <PopUp>
            <PopUpContent>
              <PopUpIcon src="http://localhost:10000/files/api/get/question.png?filePath=images/mypage" alt="question" />
              <PopUpText>쪽지를 보내시겠습니까?</PopUpText>
              <PopUpButtonDiv>
                <PopUpButtonW onClick={() => setShowConfirmation(false)}>취소</PopUpButtonW>
                <PopUpButtonR onClick={handleSubmit}>확인</PopUpButtonR>
              </PopUpButtonDiv>
            </PopUpContent>
          </PopUp>
        </PopUpOverlay>
      )}

      {/* 성공 팝업 */}
      {showSuccess && (
        <PopUpOverlay>
          <PopUp>
            <PopUpContent>
              <PopUpIcon src="http://localhost:10000/files/api/get/attention.png?filePath=images/mypage" alt="success" />
              <PopUpText>쪽지가 전송되었습니다.</PopUpText>
              <PopUpButtonR onClick={() => setShowSuccess(false)}>확인</PopUpButtonR>
            </PopUpContent>
          </PopUp>
        </PopUpOverlay>
      )}
    </MainWrapper>
  );
};

export default ContactArtistWrite;
