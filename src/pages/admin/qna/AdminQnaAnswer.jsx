import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./AdminQnaAnswerStyle";

const AdminQnaAnswer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qna, setQna] = useState(null);
  const [answerContent, setAnswerContent] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return;

    fetch(`http://localhost:10000/admin/api/qna/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setQna(data))
      .catch((err) => console.error("QnA 상세 조회 실패:", err));
  }, [id]);

  const handleSubmit = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return;

    const payload = {
      qnaId: qna.qnaId,
      qnaAnswerTitle: `RE: ${qna.qnaTitle}`,
      qnaAnswerContent: answerContent,
    };

    try {
      const response = await fetch("http://localhost:10000/admin/api/qna/answer", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("답변 등록 완료!");
        navigate("/mypage/admin/qna");
      } else {
        alert("등록 실패!");
      }
    } catch (err) {
      console.error("답변 등록 에러:", err);
      alert("오류 발생");
    }
  };

  if (!qna) return <div>로딩 중...</div>;

  return (
    <S.Container>
      <S.Title>{qna.qnaTitle}</S.Title>
      <S.TextArea
        value={answerContent}
        onChange={(e) => setAnswerContent(e.target.value)}
        placeholder="내용을 입력하세요."
      />
      <S.ButtonGroup>
        <S.CancelButton onClick={() => navigate(-1)}>취소</S.CancelButton>
        <S.ConfirmButton onClick={handleSubmit}>등록</S.ConfirmButton>
      </S.ButtonGroup>
    </S.Container>
  );
};

export default AdminQnaAnswer;
