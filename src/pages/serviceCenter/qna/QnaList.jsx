import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

import {
  Button120x45R, ButtonDiv, Category, Content, ContentBox, Emptybox,
  ListHeader, MainWrapper, Number, RedText, Title, TitleNavigate, Wrapper
} from '../../mypage/style';

const QnaList = () => {
  const [qnas, setQnas] = useState([]);

  // Redux에서 currentUser 가져오기
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (currentUser?.userEmail) {
      fetch(`http://localhost:10000/qna/api/qna-list?userEmail=${currentUser.userEmail}`)
        .then(res => res.json())
        .then(data => {
          // 내림차순 정렬 (최신이 위)
          const sortedData = data.sort((a, b) => new Date(b.qnaTime) - new Date(a.qnaTime));
          setQnas(sortedData);
        })
      .catch(err => console.error('QNA 리스트 가져오기 실패:', err));
    }
  }, [currentUser]);

  if (!currentUser?.userEmail) {
    return <div>사용자 정보를 불러오는 중입니다...</div>;
  }

  return (
    <MainWrapper>
      <Wrapper>
        <ListHeader>
          <Number>번호</Number>
          <Category>구분</Category>
          <Emptybox>처리현황</Emptybox>
          <Title>제목</Title>
          <Emptybox>작성일</Emptybox>
        </ListHeader>

        {qnas.map((qna, index) => (
          <ContentBox key={qna.qnaId}>
            <Number>{index + 1}</Number>
            <Category>{qna.qnaCategory}</Category>
            <RedText>{qna.qnaAnswerTitle ? '답변완료' : '답변대기'}</RedText>
            <TitleNavigate as={NavLink} to={`/service-center/qna/detail/${qna.qnaId}`} end>
              <Content>{qna.qnaTitle}</Content>
            </TitleNavigate>
            <Emptybox>{new Date(qna.qnaTime).toLocaleDateString('ko-KR')}</Emptybox>
          </ContentBox>
        ))}
      </Wrapper>

      <ButtonDiv>
        <Button120x45R as={NavLink} to="/service-center/registration">
          문의하기
        </Button120x45R>
      </ButtonDiv>
    </MainWrapper>
  );
};

export default QnaList;
