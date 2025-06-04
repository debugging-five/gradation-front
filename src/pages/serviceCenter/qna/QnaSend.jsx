import React, { useRef, useState } from 'react';
import * as S from '../../mypage/style';
import * as SQ from '../qna/qnaSendStyle';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

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

  const categories = ['회원', '전시', '작품', '배송', '결제', '경매', '기타'];

  const checkedUrl = "/assets/images/icon/checked-on.png";
  const uncheckedUrl = "/assets/images/icon/checked-off.png";

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
      userId : currentUser.id,
      qnaImgName : selectedFile ? selectedFile.name : '',
      qnaImgPath : ''
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
    <S.MainWrapper>
      <SQ.Wrapper>
        {/* 카테고리 선택 */}
        <SQ.Box>
          <SQ.OneLine>
            <SQ.Title>구분<S.Important>*</S.Important></SQ.Title>
            <SQ.CategoryWrapper>
              {categories.map(category => (
                <SQ.Category
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
                </SQ.Category>
              ))}
            </SQ.CategoryWrapper>
          </SQ.OneLine>
          <SQ.Line />
          {errors.category && <SQ.ErrorMessege>{errors.category}</SQ.ErrorMessege>}
        </SQ.Box>

        {/* 제목 입력 */}
        <SQ.Box>
          <SQ.OneLine>
            <SQ.Title>제목<S.Important>*</S.Important></SQ.Title>
            <SQ.InputTitle
              placeholder="제목을 입력하세요."
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                setErrors(prev => ({ ...prev, title: '' }));
              }}
            />
          </SQ.OneLine>
          <SQ.Line />
          {errors.title && <SQ.ErrorMessege>{errors.title}</SQ.ErrorMessege>}
        </SQ.Box>

        {/* 내용 입력 */}
        <SQ.Box>
          <SQ.Title>내용<S.Important>*</S.Important></SQ.Title>
          <S.InputContent
            placeholder='내용을 입력하세요.'
            value={content}
            onChange={e => {
              setContent(e.target.value);
              setErrors(prev => ({ ...prev, content: '' }));
            }}
          />
          {errors.content && <SQ.ErrorMessege>{errors.content}</SQ.ErrorMessege>}
        </SQ.Box>

        {/* 첨부파일 선택 */}
        <SQ.Box>
          <SQ.OneLine>
            <SQ.Title>첨부파일</SQ.Title>
            <SQ.ButtonPhoto onClick={() => fileInputRef.current.click()}>첨부파일</SQ.ButtonPhoto>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            {selectedFile && (
              <SQ.DeleteDiv>
                <span>{selectedFile.name}</span>
                <SQ.DeleteButton onClick={handleDeleteFile}>삭제</SQ.DeleteButton>
              </SQ.DeleteDiv>
            )}
          </SQ.OneLine>
        </SQ.Box>

        {/* 등록 버튼 */}
        <SQ.ButtonDiv>
          <SQ.ButtonSend onClick={handleConfirm}>등록</SQ.ButtonSend>
        </SQ.ButtonDiv>
      </SQ.Wrapper>

      {/* 등록 확인 팝업 */}
      {showConfirmation && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="/assets/images/icon/quest.png" alt="question" />
              <S.PopUpText>문의를 등록하시겠습니까?</S.PopUpText>
              <S.PopUpButtonDiv>
                <S.PopUpButtonW onClick={handleCancel}>취소</S.PopUpButtonW>
                <S.PopUpButtonR onClick={handleSubmit}>확인</S.PopUpButtonR>
              </S.PopUpButtonDiv>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}

      {/* 등록 성공 팝업 */}
      {showSuccess && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="/assets/images/icon/check.png" alt="check" />
              <S.PopUpText>문의가 등록되었습니다.</S.PopUpText>
              <NavLink to="/service-center/qna" onClick = {() => window.scrollTo(0, 0)} ><S.PopUpButtonR onClick={() => setShowSuccess(false)}>확인</S.PopUpButtonR></NavLink>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}
    </S.MainWrapper>
  );
};

export default QnaSend;
