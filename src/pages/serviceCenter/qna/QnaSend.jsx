import React, { useRef, useState } from 'react';
import {
  Box, Title, Line, OneLine, Wrapper, Category, InputTitle,
  ButtonDiv, CategoryWrapper, InputContent, ButtonSend, ButtonPhoto,
  DeleteButton,
  DeleteDiv,
  ErrorMessege
} from '../qna/qnaSendStyle';
import { Important, MainWrapper, PopUp, PopUpButtonDiv, PopUpButtonR, PopUpButtonW, PopUpContent, PopUpIcon, PopUpOverlay, PopUpText} from '../../mypage/style';

const QnaSend = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false); // 첫 번째 팝업 상태
  const [showSuccess, setShowSuccess] = useState(false); // 두 번째 팝업 상태

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // 카테고리
  const categories = ['작품전시', '전시회', '경매', '업사이클', '마이페이지', '기타'];

  // 체크박스처리
  const checkedUrl = 'http://localhost:10000/files/api/get/checked.png?filePath=images/mypage';
  const uncheckedUrl = 'http://localhost:10000/files/api/get/uncheck.png?filePath=images/mypage';
  const handleSelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(''); // 이미 선택된 항목을 클릭하면 해제
    } else {
      setSelectedCategory(category); // 새로운 항목 선택
    }
  };

  // 첨부파일
    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const handleDeleteFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // input 초기화
    }
  };

  // 유효성 검사
  const [errors, setErrors] = useState({
    category: '',
    title: '',
    content: '',
  });
  const validate = () => {
    let valid = true;
    let newErrors = { category: '', title: '', content: '' };

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

  // 등록 버튼 클릭 시 첫 번째 팝업 띄우기
  const handleConfirm = () => {
    if (validate()) {
      setShowConfirmation(true); 
    } // 첫 번째 팝업 열기
  };

  // 첫 번째 팝업에서 "확인" 클릭 시 두 번째 팝업 띄우기
  const handleSubmit = () => {
    setShowConfirmation(false); // 첫 번째 팝업 닫기
    setShowSuccess(true); // 두 번째 팝업 열기
  };

  // 첫 번째 팝업에서 "취소" 클릭 시 팝업 닫기
  const handleCancel = () => {
    setShowConfirmation(false); // 첫 번째 팝업 닫기
  };

  return (
    <MainWrapper>
      <Wrapper>
        <Box>
          <OneLine>
            <Title>구분<Important>*</Important></Title>
            <CategoryWrapper>
              {categories.map((status) => (
                <Category
                  key={status}
                  onClick={() => {
                    handleSelect(status); // 여기서 handleSelect 호출
                    setErrors(prev => ({ ...prev, category: '' })); // 선택하면 에러 지우기
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={selectedCategory === status ? checkedUrl : uncheckedUrl}
                    alt="check"
                    width={16}
                    height={16}
                    style={{ marginRight: '0.5rem' }}
                  />
                  {status}
                </Category>
              ))}
            </CategoryWrapper>
          </OneLine>
          <Line />
            {errors.category && <ErrorMessege>{errors.category}</ErrorMessege>}
        </Box>

        <Box>
          <OneLine>
            <Title>제목<Important>*</Important></Title>
            <InputTitle
              placeholder="제목을 입력하세요."
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                setErrors(prev => ({ ...prev, title: '' })); // 입력하면 에러 지우기
              }}
            />
          </OneLine>
          <Line />
            {errors.title && <ErrorMessege>{errors.title}</ErrorMessege>}
        </Box>

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

        <Box>
          <OneLine>
            <Title>첨부파일</Title>
            <ButtonPhoto onClick={() => fileInputRef.current.click()}>첨부파일</ButtonPhoto>
            <input type="file" accept="image/*" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange}/>
          {selectedFile && (
            <DeleteDiv>
              <span>{selectedFile.name}</span>
              <DeleteButton onClick={handleDeleteFile}>삭제</DeleteButton>
            </DeleteDiv>
          )}
          </OneLine>

        </Box>

        <ButtonDiv>
          <ButtonSend onClick={handleConfirm}>등록</ButtonSend>
        </ButtonDiv>
      </Wrapper>

      {/* 첫 번째 팝업: 문의 등록 확인 */}
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

      {/* 두 번째 팝업: 문의 등록 성공 */}
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
