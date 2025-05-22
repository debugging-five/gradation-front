import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as S from "./style";

const AdminQnaWaitingList = () => {
  const [qnaList, setQnaList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return;

    fetch("http://localhost:10000/admin/api/qna/list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const waiting = data.filter(qna => qna.qnaAnswerTitle === null);
        setQnaList(waiting);
      })
      .catch((err) => console.error("답변 대기 QnA 조회 실패:", err));
  }, []);

  return (
    <S.Container>
      <S.QnaTableWrapper>
        <S.TabWrapper>
          <S.TabButton to="/mypage/admin/qna">답변대기</S.TabButton>
          <S.TabButton to="/mypage/admin/qna/complete">답변완료</S.TabButton>
        </S.TabWrapper>
        <S.QnaTableHeader>
          <S.QnaNumberHeader>번호</S.QnaNumberHeader>
          <S.QnaCategoryHeader>구분</S.QnaCategoryHeader>
          <S.QnaTitleHeader>제목</S.QnaTitleHeader>
        </S.QnaTableHeader>
    
        {qnaList.map((qna, index) => (
          <S.QnaTableRow key={qna.qnaId}>
            <S.QnaNumberCell>{index + 1}</S.QnaNumberCell>
            <S.QnaCategoryCell>{qna.qnaCategory}</S.QnaCategoryCell>
            <S.QnaTitleLinkCell
              as={NavLink}
              to={`/mypage/admin/qna/detail/${qna.qnaId}`}
            >
              <S.QnaTitleText>{qna.qnaTitle}</S.QnaTitleText>
            </S.QnaTitleLinkCell>
          </S.QnaTableRow>
        ))}
      </S.QnaTableWrapper>
    </S.Container>
  );
};

export default AdminQnaWaitingList;