import React, { useEffect, useState } from 'react';
import * as S from '../../style';
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
    <S.MainWrapper>
      <S.Wrapper>
        {/* 리스트 헤더 */}
        <S.ListHeader>
          <S.Number>번호</S.Number>
          <S.Category>이름</S.Category>
          <S.Emptybox></S.Emptybox>
          <S.Title>제목</S.Title>
          <S.Emptybox>작성일</S.Emptybox>
        </S.ListHeader>

      {Array.isArray(mails) && mails.length > 0 ? (
        mails.map((mail, index) => (
        <S.ContentBox key={mail.id}>
          <S.Number>{index + 1}</S.Number>
          <S.Category>{mail.sendUserName}</S.Category>
          <S.Emptybox></S.Emptybox>
          <S.TitleNavigate  as={NavLink} to={`detail/${mail.id}`} end>
            <S.Content>{mail.mailTitle}</S.Content>
          </S.TitleNavigate>
          <S.Emptybox>{new Date(mail.mailSendTime).toLocaleDateString('ko-KR')}</S.Emptybox>
        </S.ContentBox>
        ))
      ) : (
        <div style={{ padding: "1rem", textAlign: "center" }}>쪽지가 없습니다.</div>
      )}
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default ReceivedList;