import React, { useState } from 'react';
import { Box, Button, ButtonDiv, EndBar, IdBar, IdBox, IdContent, IdTitle, Title, UserInfo } from './userInfoContainerStyle';

const UserInfoContainer = () => {

  const [edit, setEdit] = useState(false);
  const handleEdit = () => setEdit(!edit)

  return (
    <div>
      <UserInfo>{edit ? "회원정보 수정" : "회원정보"}</UserInfo>

      <IdBox>
        <IdTitle>아이디</IdTitle>
        <IdBar>|</IdBar>
        <IdContent>test123</IdContent>
      </IdBox>  

      <Box>
      <Title>
        <span>닉네임</span>
      </Title>
        {edit ? (
          <input value={"홍길동무"}/>
        ) : (
          <p>홍길동무</p>
        )}
      </Box>
      <EndBar></EndBar>
      

      <Box>
      <Title>
        <span>이름</span>
      </Title>
        {edit ? (
          <input value={"홍길동무"}/>
        ) : (
          <p>홍길동</p>
        )}
      </Box>
      <EndBar></EndBar>

      <Box>
        <Title>
          <span>전화번호</span>
        </Title>
          {edit ? (
            <input value={"홍길동무"}/>
          ) : (
            <p>010-1234-1234</p>
          )}
      </Box>
      <EndBar></EndBar>

      <Box>
        <Title>
          <span>이메일</span>
        </Title>
          {edit ? (
            <input value={"홍길동무"}/>
          ) : (
            <p>test123@gmail.com</p>
          )}
      </Box>
      <EndBar></EndBar> 

      <Box>
        <Title>
          <span>주소</span>
        </Title>
          {edit ? (
            <input value={"홍길동무"}/>
          ) : (
            <p>서울시 인천구 논현1동 청담로 5길</p>
          )}
      </Box>
      <EndBar></EndBar> 

      <Box>
        <Title>
          <span>상세주소</span>
        </Title>
          {edit ? (
            <input value={"홍길동무"}/>
          ) : (
            <p>1145호</p>
          )}
      </Box>
      <EndBar></EndBar> 

      <Box>
        <Title>
          <span>대학교</span>
        </Title>
          {edit ? (
            <input value={"홍길동무"}/>
          ) : (
            <p>서울대학교</p>
          )}
      </Box>
      <EndBar></EndBar> 


      <ButtonDiv>
        {edit ? (
          <Button onClick={handleEdit}>저장</Button>
        ) : (
          <Button onClick={handleEdit}>수정</Button>
        )}
      </ButtonDiv>

    </div>
  );
};

export default UserInfoContainer;