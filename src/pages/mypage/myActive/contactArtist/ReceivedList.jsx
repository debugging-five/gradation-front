import React, { useEffect, useState } from 'react';
import { Category, Content, ContentBox, Emptybox, ListHeader, MainWrapper, Number, Title, TitleNavigate, Wrapper } from '../../style';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ReceivedList = () => {
  const [mails, setMails] = useState([]);

  const currentUser = useSelector(state => state.user.currentUser);
  
    useEffect(() => {
      if (currentUser?.id) {
        fetch(`http://localhost:10000/mail/api/received-list?receiveUserId=${currentUser.id}`)
          .then(res => res.json())
          .then(data => setMails(data))
          .catch(err => console.error('메일 리스트 불러오기 실패:', err));
      }
    }, [currentUser]);
  
    if (!currentUser?.id) {
      return <div>사용자 정보를 불러오는 중입니다...</div>;
    }

  return (
    <MainWrapper>
      <Wrapper>
        {/* 리스트 헤더 */}
        <ListHeader>
          <Number>번호</Number>
          <Category>이름</Category>
          <Emptybox></Emptybox>
          <Title>제목</Title>
          <Emptybox>작성일</Emptybox>
        </ListHeader>

      {Array.isArray(mails) && mails.length > 0 ? (
        mails.map((mail, index) => (
        <ContentBox key={mail.id}>
          <Number>{index + 1}</Number>
          <Category>{mail.sendUserName}</Category>
          <Emptybox></Emptybox>
          <TitleNavigate  as={NavLink} to={`detail/${mail.id}`} end>
            <Content>{mail.mailTitle}</Content>
          </TitleNavigate>
          <Emptybox>{new Date(mail.mailSendTime).toLocaleDateString('ko-KR')}</Emptybox>
        </ContentBox>
        ))
      ) : (
        <div style={{ padding: "1rem", textAlign: "center" }}>쪽지가 없습니다.</div>
      )}
      </Wrapper>
    </MainWrapper>
  );
};

export default ReceivedList;