import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../style';
import * as SU from './userInfoContainerStyle';

const UserInfoContainer = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  

  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [smsAgree, setSmsAgree] = useState(false);
  const [emailAgree, setEmailAgree] = useState(false);

  // 팝업 상태
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const checkedUrl = 'http://localhost:10000/files/api/get/checked.png?filePath=images/mypage';
  const uncheckedUrl = 'http://localhost:10000/files/api/get/uncheck.png?filePath=images/mypage';

  useEffect(() => {
    if (currentUser) {
      setFormData({ ...currentUser });
      setOriginalData({ ...currentUser });
      setSmsAgree(currentUser.userSmsAgree || false);
      setEmailAgree(currentUser.userEmailAgree || false);
    }
  }, [currentUser]);

  const handleEdit = () => {
    setEdit(true);
    setOriginalData({ ...formData });
  };

  const handleCancelEdit = () => {
    setFormData({ ...originalData });
    setSmsAgree(originalData.userSmsAgree || false);
    setEmailAgree(originalData.userEmailAgree || false);
    setEdit(false);
    window.scrollTo(0, 0);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
  const updatedData = {
      ...formData,
      userSmsAgree: smsAgree,
      userEmailAgree: emailAgree,
    };

    console.log(updatedData)
    console.log("-------------------------------")
    console.log(updatedData)
    console.log("-------------------------------")
    try {
      const response = await fetch('http://localhost:10000/users/api/modify', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.modifyUser) {
          setFormData(data.modifyUser);
          setOriginalData(data.modifyUser);
          setSmsAgree(data.modifyUser.userSmsAgree || false);
          setEmailAgree(data.modifyUser.userEmailAgree || false);
          setEdit(false);
          setShowSuccessPopup(true);
        } else {
          alert(data.message || '회원 정보 수정 실패');
        }
      } else {
        const errorData = await response.json();
        alert(errorData.message || '서버 오류 발생');
      }
    } catch (error) {
      alert('서버와 연결할 수 없습니다.');
      console.error(error);
    }

    window.scrollTo(0, 0);
  };

  const formatPhoneNumber = (phone) => {
    if (!phone) return '';
    const onlyNums = phone.replace(/[^\d]/g, '');
    if (onlyNums.length === 11) {
      return onlyNums.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    } else if (onlyNums.length === 10) {
      return onlyNums.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    } else {
      return phone;
    }
  };

  useEffect(() => {
    console.log('formData state:', formData);
    const script = document.createElement("script");
    script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        const fullAddress = data.address;
        setFormData(prev => ({
          ...prev,
          userAddress: fullAddress,
          // userDetailAddress: '',
        }));
      }
    }).open();
  };

  if (!formData) {
    return <div>회원 정보를 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <SU.UserInfo>{edit ? "회원정보 수정" : "회원정보"}</SU.UserInfo>

      {/* 아이디 */}
      <SU.IdBox>
        <SU.IdTitle>아이디</SU.IdTitle>
        <SU.IdBar>|</SU.IdBar>
        <SU.IdContent>{formData.userIdentification}</SU.IdContent>
      </SU.IdBox>

      {/* 닉네임 */}
      <SU.Box>
        <SU.Title><span>닉네임</span></SU.Title>
        {edit ? (
          <>
            <SU.InputStyle value={formData.userNickName || ''} onChange={e => handleChange('userNickName', e.target.value)} />
            <SU.NickNameSpace />
            <SU.Button120x35R>중복체크</SU.Button120x35R>
          </>
        ) : (
          <SU.PStyle>{formData.userNickName || '-'}</SU.PStyle>
        )}
      </SU.Box>
      <SU.EndBar />

      {/* 이름 */}
      <SU.Box>
        <SU.Title><span>이름</span><S.Important>*</S.Important></SU.Title>
        {edit ? (
          <SU.InputStyle value={formData.userName || ''} onChange={e => handleChange('userName', e.target.value)} />
        ) : (
          <SU.PStyle>{formData.userName || '-'}</SU.PStyle>
        )}
      </SU.Box>
      <SU.EndBar />

      {/* 전화번호 */}
      <SU.Box>
        <SU.Title><span>전화번호</span><S.Important>*</S.Important></SU.Title>
        {edit ? (
          <>
            <SU.InputStyle value={formData.userPhone || ''} onChange={e => handleChange('userPhone', e.target.value)} />
            <SU.CheckDiv onClick={() => setSmsAgree(!smsAgree)}>
              <img src={smsAgree ? checkedUrl : uncheckedUrl} alt="sms-agree" width={16} height={16} style={{ marginRight: '0.5rem' }} />
              문자수신동의
            </SU.CheckDiv>
            <SU.NumEmailSpace />
            <SU.InputButtonDiv>
              <SU.Button120x35R>휴대폰 인증</SU.Button120x35R>
            </SU.InputButtonDiv>
          </>
        ) : (
          <SU.PStyle>{formatPhoneNumber(formData.userPhone)}</SU.PStyle>
        )}
      </SU.Box>
      <SU.EndBar />

      {/* 이메일 */}
      <SU.Box>
        <SU.Title><span>이메일</span><S.Important>*</S.Important></SU.Title>
        {edit ? (
          <>
            <SU.InputStyle value={formData.userEmail || ''} onChange={e => handleChange('userEmail', e.target.value)} />
            <SU.CheckDiv onClick={() => setEmailAgree(!emailAgree)}>
              <img src={emailAgree ? checkedUrl : uncheckedUrl} alt="email-agree" width={16} height={16} style={{ marginRight: '0.5rem' }} />
              이메일 수신동의
            </SU.CheckDiv>
            <SU.NumEmailSpace />
            <SU.InputButtonDiv>
              <SU.Button120x35R>이메일 인증</SU.Button120x35R>
            </SU.InputButtonDiv>
          </>
        ) : (
          <SU.PStyle>{formData.userEmail || '-'}</SU.PStyle>
        )}
      </SU.Box>
      <SU.EndBar />

      {/* 주소 */}
      <SU.Box>
        <SU.Title><span>주소</span></SU.Title>
        {edit ? (
          <>
            <SU.PStyle>{formData.userAddress || '-'}</SU.PStyle>
            <SU.AddressSpace />
            <SU.InputButtonDiv>
              <SU.Button120x35W onClick={() => handleChange('userAddress', '')}>주소 삭제</SU.Button120x35W>
              <SU.Button120x35R onClick={handleAddressSearch}>주소 검색</SU.Button120x35R>
            </SU.InputButtonDiv>
          </>
        ) : (
          <SU.PStyle>{formData.userAddress || '-'}</SU.PStyle>
        )}
      </SU.Box>
      <SU.EndBar />

      {/* 상세주소 */}
      <SU.Box>
        <SU.Title><span>상세주소</span></SU.Title>
        {edit ? (
          <SU.InputStyle value={formData.userDetailAddress || ''} onChange={e => handleChange('userDetailAddress', e.target.value)} />
        ) : (
          <SU.PStyle>{formData.userDetailAddress || '-'}</SU.PStyle>
        )}
      </SU.Box>
      <SU.EndBar />

      {/* 대학교 */}
      <SU.Box>
        <SU.Title><span>대학교</span></SU.Title>
        <SU.PStyle>{formData.userProvider || '-'}</SU.PStyle>
      </SU.Box>
      <SU.EndBar />

      {/* 버튼 */}
      <S.ButtonDiv>
        {edit ? (
          <>
            <S.Button120x45W onClick={handleCancelEdit}>수정 취소</S.Button120x45W>
            <S.Button120x45R onClick={() => setShowConfirmPopup(true)}>저장</S.Button120x45R>
          </>
        ) : (
          <S.Button120x45R onClick={handleEdit}>수정</S.Button120x45R>
        )}
      </S.ButtonDiv>

      {/* 수정 확인 팝업 */}
      {showConfirmPopup && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="http://localhost:10000/files/api/get/question.png?filePath=images/mypage" alt="question" />
              <S.PopUpText>회원정보를 수정하시겠습니까?</S.PopUpText>
              <S.PopUpButtonDiv>
                <S.PopUpButtonW onClick={() => setShowConfirmPopup(false)}>취소</S.PopUpButtonW>
                <S.PopUpButtonR onClick={() => { setShowConfirmPopup(false); handleSave(); }}>확인</S.PopUpButtonR>
              </S.PopUpButtonDiv>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}

      {/* 수정 완료 팝업 */}
      {showSuccessPopup && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="http://localhost:10000/files/api/get/attention.png?filePath=images/mypage" alt="attention" />
              <S.PopUpText>회원정보 수정이 완료되었습니다.</S.PopUpText>
              <S.PopUpButtonR onClick={() => setShowSuccessPopup(false)}>확인</S.PopUpButtonR>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}
    </div>
  );
};

export default UserInfoContainer;
