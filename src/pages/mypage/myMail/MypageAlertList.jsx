import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from '../style';

const MypageAlertList = () => {
  const [alerts, setAlerts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentAlerts = alerts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(alerts.length / itemsPerPage);

  return (
    <S.MainWrapper>
      <S.Wrapper>
        <S.ListHeader>
          <S.Number>번호</S.Number>
          <S.Category>발신인</S.Category>
          <S.Emptybox></S.Emptybox>
          <S.Title>제목</S.Title>
          <S.Emptybox>작성일</S.Emptybox>
        </S.ListHeader>

        {Array.isArray(currentAlerts) && currentAlerts.length > 0 ? (
          currentAlerts.map((alert, index) => (
            <S.ContentBox key={alert.id}>
              <S.Number>{(currentPage - 1) * itemsPerPage + index + 1}</S.Number>
              <S.RedText>{alert.sendUserName}</S.RedText>
              <S.Emptybox></S.Emptybox>
              <S.TitleNavigate as={NavLink} to={`/mypage/alert/detail/${alert.id}`} end>
                <S.Content>{alert.mailTitle}</S.Content>
              </S.TitleNavigate>
              <S.Emptybox>{new Date(alert.mailSendTime).toLocaleDateString('ko-KR')}</S.Emptybox>
            </S.ContentBox>
          ))
        ) : (
          <div style={{ padding: "1rem", textAlign: "center" }}>알림이 없습니다.</div>
        )}
      </S.Wrapper>

      {/* 페이지네이션 버튼 */}
      {totalPages > 1 && (
        <S.Pagination>
          {Array.from({ length: totalPages }, (_, idx) => (
            <S.PageButton
              key={idx}
              onClick={() => {
                setCurrentPage(idx + 1);
                window.scrollTo(0, 0);
              }}
              $active={currentPage === idx + 1}
            >
              {idx + 1}
            </S.PageButton>
          ))}
        </S.Pagination>
      )}
    </S.MainWrapper>
  );
};

export default MypageAlertList;
