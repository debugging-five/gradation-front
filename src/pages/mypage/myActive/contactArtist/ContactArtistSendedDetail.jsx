import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button120x45R, Button120x45W, ButtonDiv, MailContentBox, MailTitle, MailTitleBox, MainTitle, MainWrapper, Wrapper} from '../../style';
import { UserInfo, UserInfoBox } from './contactArtistDetailStyle';

const ContactArtistSendedDetail = () => {
  return (
    <MainWrapper>
      <MainTitle>내 활동 / 작가와 연락</MainTitle>
      
        <Wrapper>
            <MailTitleBox>
              <MailTitle>홍길동님 작품에 댓글이 달렸습니다.</MailTitle>
              <p>25.01.15</p>
            </MailTitleBox>

            <UserInfoBox>
              <UserInfo>
                <p>이름</p>
                <p>고작가 </p>
              </UserInfo>
              <UserInfo>
                <p>연락처</p>
                <p>010-1234-5678</p>
              </UserInfo>
              <UserInfo>
                <p>메일주소</p>
                <p>test123@next.jretet</p>
              </UserInfo>
            </UserInfoBox>
  
            <MailContentBox>
              빌라모형에서 파리가 나왔습니다 게시물에 댓글이 달렸습니다.
            </MailContentBox>
  
            <ButtonDiv>
              <Button120x45W><NavLink to="/mypage/contact-artist/received"style={{ color: 'inherit', textDecoration: 'none' }}>목록</NavLink></Button120x45W>
              <Button120x45W>삭제</Button120x45W>
              <Button120x45R>답장</Button120x45R>
            </ButtonDiv>
        </Wrapper>
    </MainWrapper>
  );
};

export default ContactArtistSendedDetail;