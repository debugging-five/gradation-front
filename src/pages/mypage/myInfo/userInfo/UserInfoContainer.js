import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box, ButtonDiv, EndBar, IdBar,
  IdBox, IdContent, IdTitle, Title, UserInfo
} from './userInfoContainerStyle';
import { Button120x45R } from '../../style';

const UserInfoContainer = () => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => setEdit(!edit);

  // Redux에서 로그인한 사용자 정보 가져오기
  const currentUser = useSelector(state => state.user.currentUser);

  const formatPhoneNumber = (phone) => {
    if (!phone) return '';
    const onlyNums = phone.replace(/[^\d]/g, '');
  
    if (onlyNums.length === 11) {
      return onlyNums.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    } else if (onlyNums.length === 10) {
      return onlyNums.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    } else {
      return phone; // 하이픈 없는 원본 그대로 반환
    }
  };

  if (!currentUser) {
    return <div>회원 정보를 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <UserInfo>{edit ? "회원정보 수정" : "회원정보"}</UserInfo>

      <IdBox>
        <IdTitle>아이디</IdTitle>
        <IdBar>|</IdBar>
        <IdContent>{currentUser.userIdentification}</IdContent>
      </IdBox>  

      <Box>
        <Title><span>닉네임</span></Title>
        {edit ? (
          <input value={currentUser.userNickName || ''} />
        ) : (
          <p>{currentUser.userNickName || '-'}</p>
        )}
      </Box>
      <EndBar />

      <Box>
        <Title><span>이름</span></Title>
        {edit ? (
          <input value={currentUser.userName || ''} />
        ) : (
          <p>{currentUser.userName || '-'}</p>
        )}
      </Box>
      <EndBar />

      <Box>
        <Title><span>전화번호</span></Title>
        {edit ? (
          <input value={currentUser.userPhone || ''} />
        ) : (
          <p>{formatPhoneNumber(currentUser.userPhone)}</p>
        )}
      </Box>
      <EndBar />

      <Box>
        <Title><span>이메일</span></Title>
        {edit ? (
          <input value={currentUser.userEmail || ''} />
        ) : (
          <p>{currentUser.userEmail || '-'}</p>
        )}
      </Box>
      <EndBar />

      <Box>
        <Title><span>주소</span></Title>
        {edit ? (
          <input value={currentUser.userAddress || ''} />
        ) : (
          <p>{currentUser.userAddress || '-'}</p>
        )}
      </Box>
      <EndBar />

      <Box>
        <Title><span>상세주소</span></Title>
        {edit ? (
          <input value={currentUser.userDetailAddress || ''} />
        ) : (
          <p>{currentUser.userDetailAddress || '-'}</p>
        )}
      </Box>
      <EndBar />

      <Box>
        <Title><span>대학교</span></Title>
        {edit ? (
          <input value={currentUser.userProvider || ''} />
        ) : (
          <p>{currentUser.userProvider || '-'}</p>
        )}
      </Box>
      <EndBar />

      <ButtonDiv>
        {edit ? (
          <Button120x45R onClick={() => { handleEdit(); window.scrollTo(0, 0);}}>저장</Button120x45R>
        ) : (
          <Button120x45R onClick={() => { handleEdit(); window.scrollTo(0, 0);}}>수정</Button120x45R>
        )}
      </ButtonDiv>
    </div>
  );
};

export default UserInfoContainer;
