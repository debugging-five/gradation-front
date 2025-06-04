import React, { useRef, useState } from 'react';
import * as S from '../../style';
import * as SU from './universityCheckStyle';
import { useSelector } from 'react-redux';

const UniversityCheck = () => {
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [popupStep, setPopupStep] = useState(0); // 0: 없음, 1: 첫 팝업, 2: 완료 팝업
  const fileInputRef = useRef(null);
  const [errors, setErrors] = useState({ university: '', major: '' });
  // Redux에서 currentUser 가져오기
  const currentUser = useSelector(state => state.user.currentUser);
  

  const validate = () => {
    const newErrors = { university: '', major: '' };
    if (!university.trim()) newErrors.university = '필수항목입니다.';
    if (!major.trim()) newErrors.major = '필수항목입니다.';
    setErrors(newErrors);
    return !newErrors.university && !newErrors.major;
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

 const handleCertificationClick = () => {
    if (!validate()) return;
    setPopupStep(1); // 1단계 팝업 열기
  };
  const closePopup = () => setPopupStep(0);

  const goToNextPopup = async () => {
    if (!selectedFile) {
      alert('파일을 첨부해주세요.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('university', university);
      formData.append('major', major);
      formData.append('userId', currentUser.id);

      const response = await fetch(`http://localhost:10000/files/api/upload/certification/${currentUser.id}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('서버 오류');
      }

      const data = await response.json();
      console.log('파일 업로드 성공:', data);

      setPopupStep(2); // 업로드 성공 시 완료 팝업
    } catch (error) {
      console.error('업로드 실패:', error);
      alert('업로드에 실패했습니다.');
      setPopupStep(0); // 실패하면 팝업 닫기
    }
  };

  

  return (
    <S.MainWrapper>
      <S.MainTitle>대학교 인증</S.MainTitle>

      <SU.Box>
        <S.OneLine>
          <S.TitleBox>학교 <S.Important>*</S.Important></S.TitleBox>
          <S.InputBox 
            placeholder="학교를 입력하세요." 
            value={university} 
            onChange={(e) => {
            setUniversity(e.target.value);
            if (errors.university) setErrors((prev) => ({ ...prev, university: '' }));
          }} />
        </S.OneLine>
        <S.EndBar />
        {errors.university && <SU.ErrorMessege>{errors.university}</SU.ErrorMessege>}
      </SU.Box>

      <SU.Box>
        <S.OneLine>
          <S.TitleBox>학과 <S.Important>*</S.Important></S.TitleBox>
          <S.InputBox placeholder="학과를 입력하세요." 
            value={major} 
            onChange={(e) => {
            setMajor(e.target.value);
            if (errors.major) setErrors((prev) => ({ ...prev, major: '' }));
          }} />
        </S.OneLine>
        <S.EndBar />
        {errors.major && <SU.ErrorMessege>{errors.major}</SU.ErrorMessege>}
      </SU.Box>

      <S.OneLine>
        <SU.AddBox>
          <S.TitleBox>첨부파일 <S.Important>*</S.Important></S.TitleBox>
          <SU.AddButton onClick={() => fileInputRef.current.click()}>파일첨부</SU.AddButton>
          <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
          {selectedFile ? (
            <div style={{ marginTop: '0.5rem' }}>
              <span>{selectedFile.name}</span>
              <SU.DeleteButton onClick={handleDeleteFile}>삭제</SU.DeleteButton>
            </div>
          ) : (
            <SU.InfoText>현재 재학 중인 대학교의 학생증 사진을 첨부해주세요.</SU.InfoText>
          )}
        </SU.AddBox>
      </S.OneLine>

      <S.ButtonDiv>
        <SU.CheckButton onClick={handleCertificationClick}>인증</SU.CheckButton>
      </S.ButtonDiv>

      {/* 팝업 1: 인증 요청 확인 */}
      {popupStep === 1 && (
        <S.PopUpOverlay>
          <S.BigPopUp>
            <S.BigPopUpCloseBox>
              <S.BigPopUpX onClick={closePopup}>⨉</S.BigPopUpX>
            </S.BigPopUpCloseBox>
            <S.BigPopUpContent>
              <S.BigPopUpIcon src="/assets/images/icon/quest.png" alt="attention" />
              <S.BigPopUpTextDiv>
                <S.BigPopUpTitle>대학교 인증을 요청하시겠습니까?</S.BigPopUpTitle>
                <S.BigPopUpText>관리자가 확인 후 승인이 완료되면 쪽지를 통해 알려드리겠습니다.</S.BigPopUpText>
              </S.BigPopUpTextDiv>
              <S.BigPopUpButtonDiv>
                <S.BigPopUpButtonW onClick={closePopup}>돌아가기</S.BigPopUpButtonW>
                <S.BigPopUpButtonR onClick={goToNextPopup}>확인</S.BigPopUpButtonR>
              </S.BigPopUpButtonDiv>
            </S.BigPopUpContent>
          </S.BigPopUp>
        </S.PopUpOverlay>
      )}

      {/* 팝업 2: 요청 완료 */}
      {popupStep === 2 && (
        <S.PopUpOverlay>
          <S.BigPopUp>
            <S.BigPopUpCloseBox>
              <S.BigPopUpX onClick={closePopup}>⨉</S.BigPopUpX>
            </S.BigPopUpCloseBox>
            <S.BigPopUpContent>
              <S.BigPopUpIcon src="/assets/images/icon/check.png" alt="check" />
              <S.BigPopUpTextDiv>
                <S.BigPopUpTitle>대학교 인증 요청 완료</S.BigPopUpTitle>
                <S.BigPopUpText>요청이 완료되었습니다.</S.BigPopUpText>
                <S.BigPopUpText>공휴일을 제외한 최대 1~2 일의 시간이 소요될 수 있습니다.</S.BigPopUpText>
              </S.BigPopUpTextDiv>
              <S.BigPopUpButtonDiv>
                <S.BigPopUpButtonR onClick={() => {closePopup(); window.location.reload();}}>확인</S.BigPopUpButtonR>
              </S.BigPopUpButtonDiv>
            </S.BigPopUpContent>
          </S.BigPopUp>
        </S.PopUpOverlay>
      )}
    </S.MainWrapper>
  );
};

export default UniversityCheck;