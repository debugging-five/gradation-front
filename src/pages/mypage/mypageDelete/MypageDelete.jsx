import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import * as S from '../style';
import * as SD from './mypageDeleteStyle';
import { useSelector } from 'react-redux';

const MypageDelete = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [isChecked, setChecked] = useState(false);
  const [popupStep, setPopupStep] = useState(0); // 0: 없음, 1: 첫팝업, 2: 두번째, 3: 완료
  const navigate = useNavigate();

  // 체크박스
  const toggleCheck = () => setChecked(!isChecked);
  const checkedUrl = "/assets/images/icon/checked-on.png";
  const uncheckedUrl = "/assets/images/icon/checked-off.png";

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
  fetch(`http://localhost:10000/mypage/api/withdraw?userId=${currentUser.id}`, {
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
    <S.MainWrapper>
      <S.MainTitle>회원탈퇴</S.MainTitle>

      <SD.MainContent1>
        회원탈퇴를 하신다니 너무 아쉬워요. 문의 및 건의 사항이 있으시면 
        <SD.GoToQna as={NavLink} to="/service-center/registration"> 고객센터</SD.GoToQna>
        로 문의해 주세요.
      </SD.MainContent1>

      <SD.MainContent2>
        회원탈퇴를 위한 사항을 숙지해주세요.
        <S.EndBar />
      </SD.MainContent2>

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
        <SD.TextBox key={index}>
          <SD.SubTitle>{title}</SD.SubTitle>
          <SD.Content>{content}</SD.Content>
        </SD.TextBox>
      ))}

      <SD.CheckBoxDiv>
        <SD.CheckImage onClick={toggleCheck} style={{ cursor: 'pointer', display: 'inline-block' }}>
          <img
            src={isChecked ? checkedUrl : uncheckedUrl}
            alt={isChecked ? 'Checked' : 'Unchecked'}
            width={16}
            height={16}
          />
        </SD.CheckImage>
        <SD.Content>
          해당 내용을 확인하였으며, Gradation 계정 탈퇴에 동의합니다. 이 작업은 취소할 수 없습니다.
        </SD.Content>
      </SD.CheckBoxDiv>

      <SD.ButtonDiv>
        <SD.Button1 onClick={handleMainClick}>메인으로 돌아가기</SD.Button1>
        <SD.Button2 onClick={handleDeleteClick} disabled={!isChecked} style={{ opacity: isChecked ? 1 : 0.5 }}>
          탈퇴하기
        </SD.Button2>
      </SD.ButtonDiv>

      {/* 팝업 1 */}
      {popupStep === 1 && (
        <S.PopUpOverlay>
          <S.BigPopUp>
            <S.BigPopUpCloseBox>
              <S.BigPopUpX onClick={closePopup}>⨉</S.BigPopUpX>
            </S.BigPopUpCloseBox>
            <S.BigPopUpContent>
              <S.BigPopUpIcon src="/assets/images/icon/attention-popup.png" alt="attention" />
              <S.BigPopUpTextDiv>
                <S.BigPopUpTitle>회원탈퇴 하시겠습니까?</S.BigPopUpTitle>
                <S.BigPopUpText>회원탈퇴시 24시간동안</S.BigPopUpText>
                <S.BigPopUpText>회원가입이 불가합니다.</S.BigPopUpText>
              </S.BigPopUpTextDiv>
              <S.BigPopUpButtonDiv>
                <S.BigPopUpButtonW onClick={closePopup}>돌아가기</S.BigPopUpButtonW>
                <S.BigPopUpButtonR onClick={goToNextPopup}>계속</S.BigPopUpButtonR>
              </S.BigPopUpButtonDiv>
            </S.BigPopUpContent>
          </S.BigPopUp>
        </S.PopUpOverlay>
      )}

      {/* 팝업 2 */}
      {popupStep === 2 && (
        <S.PopUpOverlay>
          <S.BigPopUp>
            <S.BigPopUpCloseBox>
              <S.BigPopUpX onClick={closePopup}>⨉</S.BigPopUpX>
            </S.BigPopUpCloseBox>
            <S.BigPopUpContent>
              <S.BigPopUpIcon src="/assets/images/icon/attention-popup.png" alt="attention" />
              <S.BigPopUpTextDiv>
                <S.BigPopUpTitle>정말로 탈퇴 하시겠습니까?</S.BigPopUpTitle>
                <S.BigPopUpText>회원탈퇴시 24시간동안</S.BigPopUpText>
                <S.BigPopUpText>회원가입이 불가합니다.</S.BigPopUpText>
              </S.BigPopUpTextDiv>
              <S.BigPopUpButtonDiv>
                <S.BigPopUpButtonW onClick={closePopup}>돌아가기</S.BigPopUpButtonW>
                <S.BigPopUpButtonR onClick={handleWithdraw}>계속</S.BigPopUpButtonR>
              </S.BigPopUpButtonDiv>
            </S.BigPopUpContent>
          </S.BigPopUp>
        </S.PopUpOverlay>
      )}

      {/* 팝업 3 */}
      {popupStep === 3 && (
        <S.PopUpOverlay>
          <S.BigPopUp>
            <S.BigPopUpCloseBox>
              <S.BigPopUpX onClick={closePopup}>⨉</S.BigPopUpX>
            </S.BigPopUpCloseBox>
            <S.BigPopUpContent>
              <S.BigPopUpIcon src="/assets/images/icon/check.png" alt="check" />
              <S.BigPopUpTextDiv>
                <S.BigPopUpTitle>회원탈퇴 완료</S.BigPopUpTitle>
                <S.BigPopUpText>탈퇴가 완료되었습니다.</S.BigPopUpText>
                <S.BigPopUpText>이용해주셔서 감사합니다.</S.BigPopUpText>
              </S.BigPopUpTextDiv>
              <S.BigPopUpButtonDiv>
                <S.BigPopUpButtonR onClick={handleMainClick}>확인</S.BigPopUpButtonR>
              </S.BigPopUpButtonDiv>
            </S.BigPopUpContent>
          </S.BigPopUp>
        </S.PopUpOverlay>
      )}
    </S.MainWrapper>
  );
};

export default MypageDelete;
