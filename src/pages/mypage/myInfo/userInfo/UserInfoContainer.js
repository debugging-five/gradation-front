import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../style';
import * as SU from './userInfoContainerStyle';

const UserInfoContainer = () => {
  const currentUser = useSelector(state => state.user.currentUser);

  const [formData, setFormData] = useState(null);
  const [edit, setEdit] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [verificationSuccessMessage, setVerificationSuccessMessage] = useState('');


  
  const handleVerifyCode = () => {
    if (!verificationCode) {
      alert("인증번호를 입력해주세요.");
      return;
    }
    
    fetch("http://localhost:10000/auth/verifyCode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(verificationCode), // 코드도 문자열 그대로 전송
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          setIsVerified(true);
          setVerificationSuccessMessage(data.message || "인증에 성공하였습니다.");
        } else {
          setIsVerified(false);
          setVerificationSuccessMessage(data.message || "인증번호가 틀렸습니다.");
        }
      })
      .catch(() => {
        setIsVerified(false);
        setVerificationSuccessMessage("서버 오류가 발생했습니다.");
      });
  };

  
  // 인증번호 입력 시 메시지 제거
  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
    setVerificationSuccessMessage(''); // 입력 중에는 메시지 제거
  };

  const handleEmailVerify = () => {
    if (!formData?.userEmail) {
      alert("이메일을 입력해주세요.");
      return;
    }
    
    fetch("http://localhost:10000/auth/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.userEmail), // 문자열이라서 그대로 보내도 됨
    })
      .then(async (res) => {
        if (res.ok) {
          setEmailVerified(true);
        } else {
          const errorData = await res.json();
          alert(errorData.message || "인증번호 전송에 실패했습니다.");
        }
      })
      .catch(() => alert("서버 오류가 발생했습니다."));
  };


  const checkedUrl = "/assets/images/icon/checked_on.png";
  const uncheckedUrl = "/assets/images/icon/checked_off.png";

  const fetchUserInfo = (email) => {
    fetch(`http://localhost:10000/users/api/user/${email}`)
      .then(res => {
        if (!res.ok) throw new Error('회원 정보 불러오기 실패');
        return res.json();
      })
      .then(data => {
        const user = data.currentUser;
        setFormData(user);
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (!currentUser || !currentUser.userEmail) return;
    fetchUserInfo(currentUser.userEmail);
  }, [currentUser]);

  const handleEdit = () => setEdit(true);

  const handleCancelEdit = () => {
    if (formData && currentUser?.userEmail) {
      fetchUserInfo(currentUser.userEmail);
    }
    setEdit(false);
    window.scrollTo(0, 0);
  };

  // 입력값 수정 시 메시지 제거
  const handleChange = (field, value) => {
    setVerificationSuccessMessage(''); // 메시지 초기화
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const formatPhoneNumber = phone => {
    if (!phone) return '';
    const onlyNums = phone.replace(/[^\d]/g, '');
    if (onlyNums.length === 11) return onlyNums.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    if (onlyNums.length === 10) return onlyNums.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    return phone;
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        setFormData(prev => ({
          ...prev,
          userAddress: data.address,
        }));
      }
    }).open();
  };

  const handleSave = () => {
    if (!formData) return;

    fetch('http://localhost:10000/users/api/modify', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifyUser) {
          fetchUserInfo(data.modifyUser.userEmail);
          setEdit(false);
          setShowConfirmPopup(false);
          setShowSuccessPopup(true);
        } else {
          alert(data.message || '수정 실패');
        }
      })
      .catch(() => alert('서버 오류가 발생했습니다.'));
  };

  if (!formData) return <div>회원 정보를 불러오는 중입니다...</div>;

  return (
    <div>
      <SU.UserInfo>{edit ? "회원정보 수정" : "회원정보"}</SU.UserInfo>

      <SU.IdBox>
        <SU.IdTitle>아이디</SU.IdTitle>
        <SU.IdBar>|</SU.IdBar>
        <SU.IdContent>{formData.userIdentification}</SU.IdContent>
      </SU.IdBox>

      {/* 이름 */}
      <SU.Box>
        <SU.IdTitle>이름</SU.IdTitle>
        <SU.IdBar>|</SU.IdBar>
        <SU.PStyle>{formData.userName}</SU.PStyle>
      </SU.Box>

      {/* 닉네임 */}
      <SU.Box>
        <SU.Title><span>닉네임</span></SU.Title>
        {edit ? (
          <>
            <SU.LongInputStyle
              value={formData.userNickName || ''}
              onChange={e => handleChange('userNickName', e.target.value)}
            />
          </>
        ) : (
          <SU.PStyle>{formData.userNickName || '-'}</SU.PStyle>
        )}
      </SU.Box>
      <SU.EndBar />

      {/* 전화번호 */}
      <SU.Box>
        <SU.Title><span>전화번호 <S.Important>*</S.Important></span></SU.Title>
        {edit ? (
          <>
            <SU.InputStyle
              value={formData.userPhone || ''}
              onChange={e => handleChange('userPhone', e.target.value)}
            />
            <SU.CheckDiv onClick={() => handleChange('userSnsOk', !formData.userSnsOk)}>
              <img
                src={formData.userSnsOk ? checkedUrl : uncheckedUrl}
                alt="sms-agree"
                width={16}
                height={16}
                style={{ marginRight: '0.5rem' }}
              />
              문자수신동의
            </SU.CheckDiv>
            <SU.NumEmailSpace />
            <SU.InputButtonDiv>
              <SU.Button90x30R>휴대폰 인증</SU.Button90x30R>
            </SU.InputButtonDiv>
          </>
        ) : (
          <SU.PStyle>{formatPhoneNumber(formData.userPhone)}</SU.PStyle>
        )}
      </SU.Box>
      <SU.EndBar />

      {/* 이메일 */}
      <SU.Box>
        <SU.Title><span>이메일 <S.Important>*</S.Important></span></SU.Title>
        {edit ? (
          <>
            <SU.InputStyle
              value={formData.userEmail || ''}
              onChange={e => handleChange('userEmail', e.target.value)}
            />
            <SU.CheckDiv onClick={() => handleChange('userMailOk', !formData.userMailOk)}>
              <img
                src={formData.userMailOk ? checkedUrl : uncheckedUrl}
                alt="email-agree"
                width={16}
                height={16}
                style={{ marginRight: '0.5rem' }}
              />
              이메일 수신동의
            </SU.CheckDiv>
            <SU.NumEmailSpace />
            <SU.InputButtonDiv>
              <SU.Button90x30R onClick={handleEmailVerify}>이메일 인증</SU.Button90x30R>  
            </SU.InputButtonDiv>
          </>
        ) : (
          <SU.PStyle>{formData.userEmail || '-'}</SU.PStyle>
        )}
      </SU.Box>
      <SU.EndBar />

      {/* 인증번호 확인 */}
      {emailVerified && (
        <>
          <SU.Box>
            <SU.Title><span>인증번호</span></SU.Title>
            <SU.LongInputStyle
              value={verificationCode}
              onChange={handleVerificationCodeChange}
            />
            <SU.ApproveSpace />
            {isVerified ? (
              <SU.Button90x30R onClick={handleVerifyCode}>인증번호 확인</SU.Button90x30R>
            ) : (
              <SU.Button90x30G onClick={handleVerifyCode}>인증번호 확인</SU.Button90x30G>
            )}
          </SU.Box>
          <SU.EndBar />
          {verificationSuccessMessage && (
            <SU.MessageText isError={!isVerified}>
              {verificationSuccessMessage}
            </SU.MessageText>
          )}
        </>
      )}

      {/* 주소 */}
      <SU.Box>
        <SU.Title><span>주소</span></SU.Title>
        {edit ? (
          <>
            <SU.PStyle>{formData.userAddress || '-'}</SU.PStyle>
            <SU.AddressSpace />
            <SU.InputButtonDiv>
              <SU.Button90x30W onClick={() => handleChange('userAddress', '')}>주소 삭제</SU.Button90x30W>
              <SU.Button90x30R onClick={handleAddressSearch}>주소 검색</SU.Button90x30R>
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
          <SU.LongInputStyle
            value={formData.userDetailAddress || ''}
            onChange={e => handleChange('userDetailAddress', e.target.value)}
          />
        ) : (
          <SU.PStyle>{formData.userDetailAddress || '-'}</SU.PStyle>
        )}
      </SU.Box>
      <SU.EndBar />

      {/* 대학교 */}
      <SU.Box>
        <SU.Title><span>대학교</span></SU.Title>
        <SU.PStyle>{formData.userUniversityStatus === '승인완료' ? formData.userMyUniversity : '-'}</SU.PStyle>
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

      {/* 팝업 */}
      {showConfirmPopup && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon
                src="/assets/images/icon/quest.png"
                alt="question"
              />
              <S.PopUpText>회원정보를 수정하시겠습니까?</S.PopUpText>
              <S.PopUpButtonDiv>
                <S.PopUpButtonW onClick={() => setShowConfirmPopup(false)}>취소</S.PopUpButtonW>
                <S.PopUpButtonR onClick={handleSave}>확인</S.PopUpButtonR>
              </S.PopUpButtonDiv>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}

      {showSuccessPopup && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon
                src="/assets/images/icon/check.png"
                alt="success"
              />
              <S.PopUpText>회원정보가 수정되었습니다.</S.PopUpText>
              <S.PopUpButtonDiv>
                <S.PopUpButtonR onClick={() => { setShowSuccessPopup(false); window.location.reload();}}>확인</S.PopUpButtonR>
              </S.PopUpButtonDiv>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}
    </div>
  );
};

export default UserInfoContainer;
