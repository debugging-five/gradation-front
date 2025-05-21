import React, { useRef, useState } from 'react';
import * as S from '../../style';
import * as SU from './universityCheckStyle';

const UniversityCheck = () => {
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [popupStep, setPopupStep] = useState(0); // 0: 없음, 1: 첫 팝업, 2: 완료 팝업
  const fileInputRef = useRef(null);

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
    setPopupStep(1); // 첫 번째 팝업 열기
  };

  const closePopup = () => setPopupStep(0);

  const goToNextPopup = () => {
    // 실제로 인증 요청 API 등을 여기에 추가할 수 있음
    setPopupStep(2); // 두 번째 팝업으로 이동
  };

  return (
    <S.MainWrapper>
      <S.MainTitle>대학교 인증</S.MainTitle>

      <SU.Box>
        <S.OneLine>
          <S.TitleBox>학교</S.TitleBox>
          <S.InputBox placeholder="학교를 입력하세요." value={school} onChange={(e) => setSchool(e.target.value)} />
        </S.OneLine>
        <S.EndBar />
      </SU.Box>

      <SU.Box>
        <S.OneLine>
          <S.TitleBox>학과</S.TitleBox>
          <S.InputBox placeholder="학과를 입력하세요." value={major} onChange={(e) => setMajor(e.target.value)} />
        </S.OneLine>
        <S.EndBar />
      </SU.Box>

      <S.OneLine>
        <SU.AddBox>
          <S.TitleBox>첨부파일</S.TitleBox>
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
              <S.BigPopUpIcon src="http://localhost:10000/files/api/get/attention.png?filePath=images/mypage" alt="attention" />
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
              <S.BigPopUpIcon src="http://localhost:10000/files/api/get/check-circle.png?filePath=images/mypage" alt="check-circle" />
              <S.BigPopUpTextDiv>
                <S.BigPopUpTitle>대학교 인증 요청 완료</S.BigPopUpTitle>
                <S.BigPopUpText>요청이 완료되었습니다.</S.BigPopUpText>
                <S.BigPopUpText>공휴일을 제외한 최대 1~2 일의 시간이 소요될 수 있습니다.</S.BigPopUpText>
              </S.BigPopUpTextDiv>
              <S.BigPopUpButtonDiv>
                <S.BigPopUpButtonR onClick={closePopup}>확인</S.BigPopUpButtonR>
              </S.BigPopUpButtonDiv>
            </S.BigPopUpContent>
          </S.BigPopUp>
        </S.PopUpOverlay>
      )}
    </S.MainWrapper>
  );
};

export default UniversityCheck;
