import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import S from "./style";

const AdminQnaCompletedList = () => {
  const [qnaList, setQnaList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentQnas = qnaList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(qnaList.length / itemsPerPage);

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
        const completed = data.filter(qna => qna.qnaAnswerTitle !== null);
        setQnaList(completed);
      })
      .catch((err) => console.error("답변 완료 QnA 조회 실패:", err));
  }, []);

  return (
    <S.Container>
      <S.QnaTableWrapper>
        <S.QnaTableHeader>
          <S.QnaNumberHeader>번호</S.QnaNumberHeader>
          <S.QnaCategoryHeader>구분</S.QnaCategoryHeader>
          <S.QnaTitleHeader>제목</S.QnaTitleHeader>
        </S.QnaTableHeader>

        {currentQnas.map((qna, index) => (
          <S.QnaTableRow key={qna.qnaId}>
            <S.QnaNumberCell>{indexOfFirstItem + index + 1}</S.QnaNumberCell>
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
      <S.Pagination>
      {Array.from({ length: totalPages }, (_, i) => (
        <span
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
          className={currentPage === i + 1 ? "active" : ""}
        >
          {i + 1}
        </span>
      ))}     
      </S.Pagination> 
    </S.Container>
  );
};

export default AdminQnaCompletedList;