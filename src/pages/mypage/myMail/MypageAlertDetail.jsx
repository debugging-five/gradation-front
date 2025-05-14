import React from 'react';
import { Button120x45R, Button120x45W, ButtonDiv, MailContentBox, MailTitle, MailTitleBox, MainWrapper, Wrapper } from '../style';
import { Link} from 'react-router-dom';

const MypageAlertDetail = () => {
  return (
    <MainWrapper>
      <Wrapper>
          <MailTitleBox>
            <MailTitle>홍길동님 작품에 댓글이 달렸습니다.</MailTitle>
            <p>25.01.15</p>
          </MailTitleBox>

          <MailContentBox>
            빌라모형에서 파리가 나왔습니다 게시물에 댓글이 달렸습니다.
          </MailContentBox>

          <ButtonDiv>
            <Button120x45W><Link to="/mypage/alert"style={{ color: 'inherit', textDecoration: 'none' }}>목록</Link></Button120x45W>
            <Button120x45R>삭제</Button120x45R>
          </ButtonDiv>
      </Wrapper>
    </MainWrapper>
  );
};

export default MypageAlertDetail;