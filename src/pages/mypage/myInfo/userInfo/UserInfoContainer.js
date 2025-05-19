import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  AddressSpace,
  Box, Button120x35R, Button120x35W, CheckDiv, EndBar, IdBar,
  IdBox, IdContent, IdTitle, InputButtonDiv, InputStyle, NickNameSpace, NumEmailSpace, PStyle, Title, UserInfo
} from './userInfoContainerStyle';
import { Button120x45R, Button120x45W, ButtonDiv, Important } from '../../style';

const UserInfoContainer = () => {
  const currentUser = useSelector(state => state.user.currentUser);

  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState(null);         // 수정 가능한 상태
  const [originalData, setOriginalData] = useState(null); // 원본 데이터 백업

  // 체크박스 이미지 URL
  const checkedUrl = 'http://localhost:10000/files/api/get/checked.png?filePath=images/mypage';
  const uncheckedUrl = 'http://localhost:10000/files/api/get/uncheck.png?filePath=images/mypage';

  // 문자/이메일 수신 동의 상태
  const [smsAgree, setSmsAgree] = useState(false);
  const [emailAgree, setEmailAgree] = useState(false);

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
    setOriginalData({ ...formData }); // 수정 전 데이터 백업
  };

  const handleCancelEdit = () => {
    setFormData({ ...originalData }); // 복원
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

  const handleSave = () => {
    const updatedData = {
      ...formData,
      userSmsAgree: smsAgree,
      userEmailAgree: emailAgree,
    };

    // TODO: updatedData를 서버에 저장하는 API 호출

    setFormData(updatedData);
    setEdit(false);
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

  if (!formData) {
    return <div>회원 정보를 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <UserInfo>{edit ? "회원정보 수정" : "회원정보"}</UserInfo>

      <IdBox>
        <IdTitle>아이디</IdTitle>
        <IdBar>|</IdBar>
        <IdContent>{formData.userIdentification}</IdContent>
      </IdBox>  

      <Box>
        <Title><span>닉네임</span></Title>
        {edit ? (
          <>
            <InputStyle
              value={formData.userNickName || ''}
              onChange={e => handleChange('userNickName', e.target.value)}
            />
            <NickNameSpace/>
            <Button120x35R>중복체크</Button120x35R>
          </>
        ) : (
          <PStyle>{formData.userNickName || '-'}</PStyle>
        )}
      </Box>
      <EndBar />

      <Box>
        {edit ? (
        <Title><span>이름</span><Important>*</Important></Title>
        ) : (
        <Title><span>이름</span></Title>
        )}
        {edit ? (
          <InputStyle
            value={formData.userName || ''}
            onChange={e => handleChange('userName', e.target.value)}
          />
        ) : (
          <PStyle>{formData.userName || '-'}</PStyle>
        )}
      </Box>
      <EndBar />

      <Box>
        {edit ? (
        <Title><span>전화번호</span><Important>*</Important></Title>
        ) : (
        <Title><span>전화번호</span></Title>
        )}
        {edit ? (
          <>
            <InputStyle
              value={formData.userPhone || ''}
              onChange={e => handleChange('userPhone', e.target.value)}
            />
            <CheckDiv
              onClick={() => setSmsAgree(!smsAgree)}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <img
                src={smsAgree ? checkedUrl : uncheckedUrl}
                alt="sms-agree"
                width={16}
                height={16}
                style={{ marginRight: '0.5rem' }}
              />
              문자수신동의
            </CheckDiv>
            <NumEmailSpace/>
            <InputButtonDiv>
              <Button120x35R>휴대폰 인증</Button120x35R>
            </InputButtonDiv>
          </>
        ) : (
          <PStyle>{formatPhoneNumber(formData.userPhone)}</PStyle>
        )}
      </Box>
      <EndBar />

      <Box>
        {edit ? (
        <Title><span>이메일</span><Important>*</Important></Title>
        ) : (
        <Title><span>이메일</span></Title>
        )}
        {edit ? (
          <>
            <InputStyle
              value={formData.userEmail || ''}
              onChange={e => handleChange('userEmail', e.target.value)}
            />
            <CheckDiv
              onClick={() => setEmailAgree(!emailAgree)}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <img
                src={emailAgree ? checkedUrl : uncheckedUrl}
                alt="email-agree"
                width={16}
                height={16}
                style={{ marginRight: '0.5rem' }}
              />
              이메일 수신동의
            </CheckDiv>
            <NumEmailSpace/>
            <InputButtonDiv>
              <Button120x35R>이메일 인증</Button120x35R>
            </InputButtonDiv>
          </>
        ) : (
          <PStyle>{formData.userEmail || '-'}</PStyle>
        )}
      </Box>
      <EndBar />

      <Box>
        <Title><span>주소</span></Title>
        {edit ? (
          <>
            <PStyle>{formData.userAddress || '-'}</PStyle>
            <AddressSpace/>
            <InputButtonDiv>
              <Button120x35W>주소 삭제</Button120x35W>
              <Button120x35R>주소 검색</Button120x35R>
            </InputButtonDiv>
          </>
        ) : (
          <PStyle>{formData.userAddress || '-'}</PStyle>
        )}
      </Box>
      <EndBar />

      <Box>
        <Title><span>상세주소</span></Title>
        {edit ? (
          <InputStyle
            value={formData.userDetailAddress || ''}
            onChange={e => handleChange('userDetailAddress', e.target.value)}
          />
        ) : (
          <PStyle>{formData.userDetailAddress || '-'}</PStyle>
        )}
      </Box>
      <EndBar />

      <Box>
        <Title><span>대학교</span></Title>
        {edit ? (
          <PStyle>{formData.userProvider || '-'}</PStyle>
        ) : (
          <PStyle>{formData.userProvider || '-'}</PStyle>
        )}
      </Box>
      <EndBar />

      <ButtonDiv>
        {edit ? (
          <>
            <Button120x45W onClick={handleCancelEdit}>수정 취소</Button120x45W>
            <Button120x45R onClick={handleSave}>저장</Button120x45R>
          </>
        ) : (
          <Button120x45R onClick={handleEdit}>수정</Button120x45R>
        )}
      </ButtonDiv>
    </div>
  );
};

export default UserInfoContainer;
