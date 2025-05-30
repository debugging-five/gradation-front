import React, { useEffect, useState } from 'react';
import * as S from '../../style';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ReceivedList = () => {
  const [mails, setMails] = useState([]);
  const currentUser = useSelector(state => state.user.currentUser);

  // 페이징 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  // 페이징 계산
  const totalPages = Math.ceil(mails.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mails.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

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

        {currentItems.length > 0 ? (
          currentItems.map((mail, index) => (
            <S.ContentBox key={mail.id}>
              <S.Number>{indexOfFirstItem + index + 1}</S.Number>
              <S.Category>{mail.sendUserName}</S.Category>
              <S.Emptybox></S.Emptybox>
              <S.TitleNavigate as={NavLink} to={`detail/${mail.id}`} end>
                <S.Content>{mail.mailTitle}</S.Content>
              </S.TitleNavigate>
              <S.Emptybox>{new Date(mail.mailSendTime).toLocaleDateString('ko-KR')}</S.Emptybox>
            </S.ContentBox>
          ))
        ) : (
          <div style={{ padding: "1rem", textAlign: "center" }}>쪽지가 없습니다.</div>
        )}

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <S.Pagination>
            {pageNumbers.map(number => (
              <S.PageButton
                key={number}
                onClick={() => setCurrentPage(number)}
                className={number === currentPage ? 'active' : ''}
              >
                {number}
              </S.PageButton>
            ))}
          </S.Pagination>
        )}
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default ReceivedList;
