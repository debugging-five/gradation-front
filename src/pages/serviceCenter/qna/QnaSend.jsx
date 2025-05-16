import React, { useRef, useState } from 'react';
import {
  Box, Title, Line, OneLine, Wrapper, Category, InputTitle,
  ButtonDiv, CategoryWrapper, InputContent, ButtonSend, ButtonPhoto,
  DeleteButton,
  DeleteDiv,
  ErrorMessege
} from '../qna/qnaSendStyle';
import {
  Important, MainWrapper, PopUp, PopUpButtonDiv, PopUpButtonR, PopUpButtonW,
  PopUpContent, PopUpIcon, PopUpOverlay, PopUpText
} from '../../mypage/style';
import { useSelector } from 'react-redux';

const QnaSend = () => {
  // 상태 정의
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
    // Redux에서 currentUser 가져오기
  const currentUser = useSelector(state => state.user.currentUser);

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const categories = ['작품전시', '전시회', '경매', '업사이클', '마이페이지', '기타'];

  const checkedUrl = 'http://localhost:10000/files/api/get/checked.png?filePath=images/mypage';
  const uncheckedUrl = 'http://localhost:10000/files/api/get/uncheck.png?filePath=images/mypage';

  // 카테고리 선택 핸들러
  const handleSelect = (category) => {
    setSelectedCategory(prev => (prev === category ? '' : category));
    setErrors(prev => ({ ...prev, category: '' }));
  };

  // 파일 선택 핸들러
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  // 파일 삭제
  const handleDeleteFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // 유효성 검사 상태
  const [errors, setErrors] = useState({
    category: '',
    title: '',
    content: '',
  });

  // 유효성 검사 함수
  const validate = () => {
    const newErrors = { category: '', title: '', content: '' };
    let valid = true;

    if (!selectedCategory) {
      newErrors.category = '필수항목입니다.';
      valid = false;
    }
    if (!title.trim()) {
      newErrors.title = '필수항목입니다.';
      valid = false;
    }
    if (!content.trim()) {
      newErrors.content = '필수항목입니다.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // 등록 버튼 클릭 시 유효성 검사 후 확인 팝업 열기
  const handleConfirm = () => {
    if (validate()) {
      setShowConfirmation(true);
    }
  };

  // 서버에 데이터 전송
  const sendQna = async () => {
    const info = {
      qnaCategory: selectedCategory,
      qnaTitle: title,
      qnaContent: content,
      userId : currentUser
    };

    const formData = new FormData();
    formData.append('info', new Blob([JSON.stringify(info)], { type: 'application/json' }));
    if (selectedFile) {
      formData.append('file', selectedFile);
    } else {
      // 서버에서 파일 없음을 처리한다면 빈 Blob 보내도 무방
      formData.append('file', new Blob());
    }

    try {
      const response = await fetch('http://localhost:10000/qna/api/register', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('서버 오류가 발생했습니다.');
      }

      const result = await response.json();
      console.log('등록 성공:', result);

      // 성공 팝업 띄우기 및 입력 초기화
      setShowSuccess(true);
      setSelectedCategory('');
      setTitle('');
      setContent('');
      handleDeleteFile();
    } catch (error) {
      console.error('등록 실패:', error);
      alert('문의 등록에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // 확인 팝업에서 확인 클릭 시 처리
  const handleSubmit = () => {
    setShowConfirmation(false);
    sendQna();
  };

  // 확인 팝업에서 취소 클릭 시 처리
  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <MainWrapper>
      <Wrapper>
        {/* 카테고리 선택 */}
        <Box>
          <OneLine>
            <Title>구분<Important>*</Important></Title>
            <CategoryWrapper>
              {categories.map(category => (
                <Category
                  key={category}
                  onClick={() => handleSelect(category)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={selectedCategory === category ? checkedUrl : uncheckedUrl}
                    alt="check"
                    width={16}
                    height={16}
                    style={{ marginRight: '0.5rem' }}
                  />
                  {category}
                </Category>
              ))}
            </CategoryWrapper>
          </OneLine>
          <Line />
          {errors.category && <ErrorMessege>{errors.category}</ErrorMessege>}
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

        {/* 첨부파일 선택 */}
        <Box>
          <OneLine>
            <Title>첨부파일</Title>
            <ButtonPhoto onClick={() => fileInputRef.current.click()}>첨부파일</ButtonPhoto>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            {selectedFile && (
              <DeleteDiv>
                <span>{selectedFile.name}</span>
                <DeleteButton onClick={handleDeleteFile}>삭제</DeleteButton>
              </DeleteDiv>
            )}
          </OneLine>
        </Box>

        {/* 등록 버튼 */}
        <ButtonDiv>
          <ButtonSend onClick={handleConfirm}>등록</ButtonSend>
        </ButtonDiv>
      </Wrapper>

      {/* 등록 확인 팝업 */}
      {showConfirmation && (
        <PopUpOverlay>
          <PopUp>
            <PopUpContent>
              <PopUpIcon src="http://localhost:10000/files/api/get/question.png?filePath=images/mypage" alt="question" />
              <PopUpText>문의를 등록하시겠습니까?</PopUpText>
              <PopUpButtonDiv>
                <PopUpButtonW onClick={handleCancel}>취소</PopUpButtonW>
                <PopUpButtonR onClick={handleSubmit}>확인</PopUpButtonR>
              </PopUpButtonDiv>
            </PopUpContent>
          </PopUp>
        </PopUpOverlay>
      )}

      {/* 등록 성공 팝업 */}
      {showSuccess && (
        <PopUpOverlay>
          <PopUp>
            <PopUpContent>
              <PopUpIcon src="http://localhost:10000/files/api/get/attention.png?filePath=images/mypage" alt="attention" />
              <PopUpText>문의가 등록되었습니다.</PopUpText>
              <PopUpButtonR onClick={() => setShowSuccess(false)}>확인</PopUpButtonR>
            </PopUpContent>
          </PopUp>
        </PopUpOverlay>
      )}
    </MainWrapper>
  );
};

export default QnaSend;
