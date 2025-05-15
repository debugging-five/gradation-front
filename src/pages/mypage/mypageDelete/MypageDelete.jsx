import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import {
  BigPopUp, BigPopUpButtonDiv, BigPopUpButtonR, BigPopUpButtonW,
  BigPopUpCloseBox, BigPopUpContent, BigPopUpIcon, BigPopUpText,
  BigPopUpTextDiv, BigPopUpTitle, BigPopUpX, EndBar, MainTitle, MainWrapper,
  PopUpOverlay
} from '../style';
import {
  Button1, Button2, ButtonDiv, CheckBoxDiv, CheckImage,
  Content, GoToQna, MainContent1, MainContent2,
  SubTitle, TextBox
} from './mypageDeleteStyle';

const MypageDelete = () => {
  const [isChecked, setChecked] = useState(false);
  const [popupStep, setPopupStep] = useState(0); // 0: 없음, 1: 첫팝업, 2: 두번째, 3: 완료
  const navigate = useNavigate();

  // 체크박스
  const toggleCheck = () => setChecked(!isChecked);
  const checkedUrl = 'http://localhost:10000/files/api/get/checked.png?filePath=images/mypage';
  const uncheckedUrl = 'http://localhost:10000/files/api/get/uncheck.png?filePath=images/mypage';

  const handleMainClick = () => {
    navigate('/');
  };

  const handleDeleteClick = () => {
    if (isChecked) {
      setPopupStep(1); // 첫 팝업 오픈
    } else {
      alert('탈퇴 동의에 체크해 주세요.');
    }
  };

  const closePopup = () => setPopupStep(0);
  const goToNextPopup = () => setPopupStep(prev => prev + 1);

  const handleWithdraw = () => {
  fetch('http://localhost:10000/api/user/withdraw/jihuni@hanmail.net', {
    method: 'DELETE',
  })
    .then((res) => {
      if (res.ok) {
        console.log('탈퇴 성공');
        setPopupStep(3); // 탈퇴 완료 팝업 표시
      } else {
        alert('탈퇴 실패');
      }
    })
    .catch((err) => {
      console.error('탈퇴 중 오류 발생:', err);
      alert('서버 오류');
    });
};

  return (
    <MainWrapper>
      <MainTitle>회원탈퇴</MainTitle>

      <MainContent1>
        회원탈퇴를 하신다니 너무 아쉬워요. 문의 및 건의 사항이 있으시면 
        <GoToQna as={NavLink} to="/service-center/registration"> 고객센터</GoToQna>
        로 문의해 주세요.
      </MainContent1>

      <MainContent2>
        회원탈퇴를 위한 사항을 숙지해주세요.
        <EndBar />
      </MainContent2>

      {/* 설명 섹션들 */}
      {[
        {
          title: '개인 정보 및 기록 삭제',
          content: '모든 개인정보와 개인 설정 기록이 삭제됩니다. 삭제된 정보는 복구할 수 없으니 필요한 데이터는 미리 백업해 두시기 바랍니다.'
        },
        {
          title: 'SNS 계정 연동 해제',
          content: '탈퇴 시 모든 SNS 계정 연동이 해제됩니다.'
        },
        {
          title: '게시물 관련',
          content: '등록한 게시물은 탈퇴 후에도 삭제되지 않습니다. 게시물 삭제를 원하시면 계정을 탈퇴하기 전 삭제를 원하는 게시물을 직접 삭제하실 수 있습니다.'
        },
        {
          title: '개인정보 보관',
          content: '개인정보 방침에 따라 일부 개인정보가 탈퇴 후 30일까지 보관될 수 있습니다. 30일 후에도 관련 법률 및 규정에 따라 보관될 수 있습니다.'
        },
        {
          title: '계정 제한 사항',
          content: '탈퇴한 이메일 주소는 탈퇴 후 24시간 후에 다시 가입할 수 있습니다.'
        }
      ].map(({ title, content }, index) => (
        <TextBox key={index}>
          <SubTitle>{title}</SubTitle>
          <Content>{content}</Content>
        </TextBox>
      ))}

      <CheckBoxDiv>
        <CheckImage onClick={toggleCheck} style={{ cursor: 'pointer', display: 'inline-block' }}>
          <img
            src={isChecked ? checkedUrl : uncheckedUrl}
            alt={isChecked ? 'Checked' : 'Unchecked'}
            width={16}
            height={16}
          />
        </CheckImage>
        <Content>
          해당 내용을 확인하였으며, Gradation 계정 탈퇴에 동의합니다. 이 작업은 취소할 수 없습니다.
        </Content>
      </CheckBoxDiv>

      <ButtonDiv>
        <Button1 onClick={handleMainClick}>메인으로 돌아가기</Button1>
        <Button2 onClick={handleDeleteClick} disabled={!isChecked} style={{ opacity: isChecked ? 1 : 0.5 }}>
          탈퇴하기
        </Button2>
      </ButtonDiv>

      {/* 팝업 1 */}
      {popupStep === 1 && (
        <PopUpOverlay>
          <BigPopUp>
            <BigPopUpCloseBox>
              <BigPopUpX onClick={closePopup}>⨉</BigPopUpX>
            </BigPopUpCloseBox>
            <BigPopUpContent>
              <BigPopUpIcon src="http://localhost:10000/files/api/get/attention.png?filePath=images/mypage" alt="attention" />
              <BigPopUpTextDiv>
                <BigPopUpTitle>회원탈퇴 하시겠습니까?</BigPopUpTitle>
                <BigPopUpText>회원탈퇴시 24시간동안</BigPopUpText>
                <BigPopUpText>회원가입이 불가합니다.</BigPopUpText>
              </BigPopUpTextDiv>
              <BigPopUpButtonDiv>
                <BigPopUpButtonW onClick={closePopup}>돌아가기</BigPopUpButtonW>
                <BigPopUpButtonR onClick={goToNextPopup}>계속</BigPopUpButtonR>
              </BigPopUpButtonDiv>
            </BigPopUpContent>
          </BigPopUp>
        </PopUpOverlay>
      )}

      {/* 팝업 2 */}
      {popupStep === 2 && (
        <PopUpOverlay>
          <BigPopUp>
            <BigPopUpCloseBox>
              <BigPopUpX onClick={closePopup}>⨉</BigPopUpX>
            </BigPopUpCloseBox>
            <BigPopUpContent>
              <BigPopUpIcon src="http://localhost:10000/files/api/get/attention.png?filePath=images/mypage" alt="attention" />
              <BigPopUpTextDiv>
                <BigPopUpTitle>정말로 탈퇴 하시겠습니까?</BigPopUpTitle>
                <BigPopUpText>회원탈퇴시 24시간동안</BigPopUpText>
                <BigPopUpText>회원가입이 불가합니다.</BigPopUpText>
              </BigPopUpTextDiv>
              <BigPopUpButtonDiv>
                <BigPopUpButtonW onClick={closePopup}>돌아가기</BigPopUpButtonW>
                <BigPopUpButtonR onClick={handleWithdraw}>계속</BigPopUpButtonR>
              </BigPopUpButtonDiv>
            </BigPopUpContent>
          </BigPopUp>
        </PopUpOverlay>
      )}

      {/* 팝업 3 */}
      {popupStep === 3 && (
        <PopUpOverlay>
          <BigPopUp>
            <BigPopUpCloseBox>
              <BigPopUpX onClick={closePopup}>⨉</BigPopUpX>
            </BigPopUpCloseBox>
            <BigPopUpContent>
              <BigPopUpIcon src="http://localhost:10000/files/api/get/check-circle.png?filePath=images/mypage" alt="check-circle" />
              <BigPopUpTextDiv>
                <BigPopUpTitle>회원탈퇴 완료</BigPopUpTitle>
                <BigPopUpText>탈퇴가 완료되었습니다.</BigPopUpText>
                <BigPopUpText>이용해주셔서 감사합니다.</BigPopUpText>
              </BigPopUpTextDiv>
              <BigPopUpButtonDiv>
                <BigPopUpButtonR onClick={handleMainClick}>확인</BigPopUpButtonR>
              </BigPopUpButtonDiv>
            </BigPopUpContent>
          </BigPopUp>
        </PopUpOverlay>
      )}
    </MainWrapper>
  );
};

export default MypageDelete;
