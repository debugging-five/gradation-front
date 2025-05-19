import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Category, Content, ContentBox, Emptybox, ListHeader, MainWrapper, Number, RedText, Title, TitleNavigate, Wrapper} from '../style';

const MypageAlertList = () => {
  const [alerts, setAlerts] = useState([]);

  // Redux에서 현재 로그인한 사용자 정보 가져오기
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (currentUser?.id) {
      fetch(`http://localhost:10000/mail/api/alert-list?receiveUserId=${currentUser.id}`)
        .then(res => res.json())
        .then(data => setAlerts(data))
        .catch(err => console.error('알림 리스트 불러오기 실패:', err));
    }
  }, [currentUser]);

  if (!currentUser?.id) {
    return <div>사용자 정보를 불러오는 중입니다...</div>;
  }

  return (
    <MainWrapper>
      <Wrapper>
        <ListHeader>
          <Number>번호</Number>
          <Category>발신인</Category>
          <Emptybox></Emptybox>
          <Title>제목</Title>
          <Emptybox>작성일</Emptybox>
        </ListHeader>

      {Array.isArray(alerts) && alerts.length > 0 ? (
        alerts.map((alert, index) => (
          <ContentBox key={alert.id}>
            <Number>{index + 1}</Number>
            <RedText>{alert.sendUserName}</RedText>
            <Emptybox></Emptybox>
            <TitleNavigate as={NavLink} to={`/mypage/alert/detail/${alert.id}`} end>
              <Content>{alert.mailTitle}</Content>
            </TitleNavigate>
            <Emptybox>{new Date(alert.mailSendTime).toLocaleDateString('ko-KR')}</Emptybox>
          </ContentBox>
        ))
      ) : (
        <div style={{ padding: "1rem", textAlign: "center" }}>알림이 없습니다.</div>
      )}
      </Wrapper>
    </MainWrapper>
  );
};

export default MypageAlertList;
