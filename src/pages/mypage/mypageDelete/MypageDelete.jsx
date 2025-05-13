import React, { useState } from 'react';
import { EndBar, MainTitle, MainWrapper } from '../style';
import { Button1, Button2, ButtonDiv, CheckBoxDiv, CheckImage, Content, GoToQna, MainContent1, MainContent2, SubTitle, TextBox } from './mypageDeleteStyle';
import { NavLink } from 'react-router-dom';

const MypageDelete = () => {

  const [isChecked, setChecked] = useState(false);
  const toggleCheck = () => setChecked(!isChecked)
  const checkedUrl = 'http://localhost:10000/files/api/get/checked.png?filePath=images/mypage';
  const uncheckedUrl = 'http://localhost:10000/files/api/get/uncheck.png?filePath=images/mypage';

  return (
    <MainWrapper>
      <MainTitle>회원탈퇴</MainTitle>
      <MainContent1>회원탈퇴를 하신다니 너무 아쉬워요. 문의 및 건의 사항이 있으시면 
        <GoToQna as={NavLink} to="/service-center/qna/registration" > 고객센터</GoToQna>
        로 문의해 주세요.
      </MainContent1>
      <MainContent2>
        회원탈퇴를 위한 사항을 숙지해주세요.
        <EndBar></EndBar>
      </MainContent2>
      

      <TextBox>
        <SubTitle>개인 정보 및 기록 삭제</SubTitle>
        <Content>모든 개인정보와 개인 설정 기록이 삭제됩니다. 삭제된 정보는 복구할 수 없으니 필요한 데이터는 미리 백업해 두시기 바랍니다.</Content>
      </TextBox>
      

      <TextBox>
        <SubTitle>SNS 계정 연동 해제</SubTitle>
        <Content>탈퇴 시 모든 SNS 계정 연동이 해제됩니다.</Content>
      </TextBox>


      <TextBox>
        <SubTitle>게시물 관련</SubTitle>
        <Content>등록한 게시물은 탈퇴 후에도 삭제되지 않습니다. 게시물 삭제를 원하신다면 계정을 탈퇴하기 전 삭제를 원하는 게시물을 직접 삭제하실 수 있습니다.</Content>
      </TextBox>
      

      <TextBox>
        <SubTitle>개인정보 보관</SubTitle>
        <Content>개인정보 방침에 따라 일부 개인정보가 탈퇴 후 30일까지 보관될 수 있습니다. 30일 후에도 관련 법률 및 규정에 따라 보관될 수 있습니다. </Content>
      </TextBox>
      

      <TextBox>
        <SubTitle>계정 제한 사항</SubTitle>
        <Content>탈퇴한 이메일 주소는 탈퇴 후 24시간 후에 다시 가입할 수 있습니다.</Content>
      </TextBox>
      
      
      <CheckBoxDiv>
        <CheckImage onClick={toggleCheck} style={{ cursor: 'pointer', display: 'inline-block' }}>
          <img
            src={isChecked ? checkedUrl : uncheckedUrl}
            alt={isChecked ? 'Checked' : 'Unchecked'}
            width={16}
            height={16}
          />
        </CheckImage>
        <Content>해당 내용을 확인하였으며, Gradation 계정 탈퇴에 동의합니다. 이 작업은 취소할 수 없습니다.</Content>
      </CheckBoxDiv>

      <ButtonDiv>
        <Button1>비동의</Button1>
        <Button2>동의</Button2>
      </ButtonDiv>


    </MainWrapper>
  );
};

export default MypageDelete;