import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import S from "./AdminQnaAnswerStyle";

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
      .then((data) => {
        console.log("🔍 QnA 응답 데이터:", data);
        setQna(data)
      })
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

    console.log("payload", payload);


    try {
      const response = await fetch("http://localhost:10000/admin/api/qna/answer", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);
      console.log("서버 응답 내용:", data);

      if (response.ok) {
        alert("답변 등록 완료!");
        navigate("/mypage/admin/qna");
      } else {
        console.error("등록 실패 응답:", data);
        alert("등록 실패!");
      }
    } catch (err) {
      console.error("답변 등록 에러:", err);
      alert("오류 발생");
    }
  };

  const formatPhoneNumber = (phone) => {
    if (!phone) return "";

    const part1 = phone.slice(0, 3); 
    const part2 = phone.slice(3, 7); 
    const part3 = phone.slice(7); 
// 하이픈!
    return `${part1}-${part2}-${part3}`;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = String(date.getFullYear()).slice(2); // 뒤 2자리
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 길이를 두자리로 맞추는 함수 0-based → +1
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  };

  if (!qna) return <div>로딩 중...</div>;

  const isAnswered = !!qna.qnaAnswerTitle && qna.qnaAnswerTitle !== "null";

  return (
    <S.Container>
      <S.HeaderSection>
        <S.Category>{qna.qnaCategory} 관련 문의</S.Category>
        {isAnswered && <S.Note>답변이 완료된 문의는 수정이 불가합니다.</S.Note>}
      </S.HeaderSection>
      <S.QuestionSection>
        <S.TitleRow>
          <S.QuestionTitle>{qna.qnaTitle}</S.QuestionTitle>
          <S.QuestionDate>{formatDate(qna.qnaTime)}</S.QuestionDate>
        </S.TitleRow>
        <S.UserInfoTable>
          <S.TableHead>
            <S.TableRow>
              <S.TableHeader>이름</S.TableHeader>
              <S.TableData>{qna.userName}</S.TableData>
              <S.TableHeader>연락처</S.TableHeader>
              <S.TableData>{formatPhoneNumber(qna.userPhone)}</S.TableData>
              <S.TableHeader>메일주소</S.TableHeader>
              <S.TableData>{qna.userEmail}</S.TableData>
            </S.TableRow>
          </S.TableHead>
        </S.UserInfoTable>
        <S.QuestionContent>{qna.qnaContent}</S.QuestionContent>
      </S.QuestionSection>
      <S.AnswerSection>
        <S.AnswerLabel>
          답변 내용<S.RequiredMark>*</S.RequiredMark>
        </S.AnswerLabel>
        <S.AnswerTextArea
          value={answerContent}
          onChange={(e) => setAnswerContent(e.target.value)}
          placeholder="내용을 입력하세요."
        />
        <S.ButtonRow>
          <S.CancelButton onClick={() => navigate(-1)}>취소</S.CancelButton>
          <S.SubmitButton onClick={handleSubmit}>등록</S.SubmitButton>
        </S.ButtonRow>
      </S.AnswerSection>
    </S.Container>

  );
};

export default AdminQnaAnswer;
