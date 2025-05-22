import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import S from "./AdminQnaDetailStyle";

const AdminQnaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qna, setQna] = useState(null);

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

  // 핸드폰 숫자 짤라버리기
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
  console.log("qnaAnswerTitle:", qna.qnaAnswerTitle); 
  console.log("isAnswered:", isAnswered);
  console.log("답변 상태 확인:", qna.qnaAnswerTitle, "isAnswered:", isAnswered);

  return (
    <S.Container>
      <S.HeaderSection>
        <S.Category>{qna.qnaCategory} 관련 문의</S.Category>
        {isAnswered && <S.Note>답변이 완료된 문의는 수정이 불가합니다.</S.Note>}
      </S.HeaderSection>
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
        {isAnswered && (
          <S.AnswerSection>
            <S.AnswerHeader>
              <S.AnswerTitle>답변완료</S.AnswerTitle>
              <S.AnswerDate>
                {formatDate(qna.qnaAnswerTime)}
              </S.AnswerDate>
            </S.AnswerHeader>
            <S.AnswerContent>{qna.qnaAnswerContent}</S.AnswerContent>
          </S.AnswerSection>
        )}
      <S.ButtonGroup>
        <S.CancelButton onClick={() => navigate(-1)}>목록</S.CancelButton>
        {!isAnswered && (
          <S.ConfirmButton onClick={() => navigate(`/mypage/admin/qna/answer/${qna.qnaId}`)}>
            답변하기
          </S.ConfirmButton>
        )}
      </S.ButtonGroup>


    </S.Container>
  );
};

export default AdminQnaDetail;
