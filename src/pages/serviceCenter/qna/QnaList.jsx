import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

import * as S from '../../mypage/style';

const QnaList = () => {
  const [qnas, setQnas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (currentUser?.userEmail) {
      fetch(`http://localhost:10000/qna/api/qna-list?userEmail=${currentUser.userEmail}`)
        .then(res => res.json())
        .then(data => {
          const sortedData = data.sort((a, b) => new Date(b.qnaTime) - new Date(a.qnaTime));
          setQnas(sortedData);
        })
      .catch(err => console.error('QNA 리스트 가져오기 실패:', err));
    }
  }, [currentUser]);

  if (!currentUser?.userEmail) {
    return <div>사용자 정보를 불러오는 중입니다...</div>;
  }

  // 페이지 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentQnas = qnas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(qnas.length / itemsPerPage);

  return (
    <S.MainWrapper>
      <S.Wrapper>
        <S.ListHeader>
          <S.Number>번호</S.Number>
          <S.Category>구분</S.Category>
          <S.Emptybox>처리현황</S.Emptybox>
          <S.Title>제목</S.Title>
          <S.Emptybox>작성일</S.Emptybox>
        </S.ListHeader>

        {currentQnas.map((qna, index) => (
          <S.ContentBox key={qna.qnaId}>
            <S.Number>{(currentPage - 1) * itemsPerPage + index + 1}</S.Number>
            <S.Category>{qna.qnaCategory}</S.Category>
            <S.QnaText status={qna.qnaAnswerTitle ? '답변완료' : '답변대기'}>
              {qna.qnaAnswerTitle ? '답변완료' : '답변대기'}
            </S.QnaText>
            <S.TitleNavigate as={NavLink} to={`/service-center/qna/detail/${qna.qnaId}`} end>
              <S.Content>{qna.qnaTitle}</S.Content>
            </S.TitleNavigate>
            <S.Emptybox>{new Date(qna.qnaTime).toLocaleDateString('ko-KR')}</S.Emptybox>
          </S.ContentBox>
        ))}
      </S.Wrapper>

      {/* 페이지네이션 */}
      <S.Pagination>
        {[...Array(totalPages)].map((_, idx) => (
          <S.PageButton
            key={idx + 1}
            onClick={() => {
              setCurrentPage(idx + 1);
              window.scrollTo(0, 0);
            }}
            className={currentPage === idx + 1 ? 'active' : ''}
          >
            {idx + 1}
          </S.PageButton>
        ))}
      </S.Pagination>

      <S.ButtonDiv>
        <S.Button120x45R as={NavLink} to="/service-center/registration" onClick={() => window.scrollTo(0, 0)}>
          문의하기
        </S.Button120x45R>
      </S.ButtonDiv>
    </S.MainWrapper>
  );
};

export default QnaList;
