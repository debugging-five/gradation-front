import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./AdminFaqModifyStyle";

const AdminFaqModify = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [faq, setFaq] = useState(null);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState(""); 
  const [content, setContent] = useState("");
  const categories = ["회원", "전시", "작품", "배송", "결제", "경매", "기타"];
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const res = await fetch(`http://localhost:10000/faq/api/faq/${id}`);
        const data = await res.json();
        setFaq(data);
        setCategory(data.faqCategory);
        setTitle(data.faqTitle);
        setContent(data.faqContent);
      } catch (err) {
        console.error("FAQ 불러오기 실패:", err);
      }
    };

    fetchFaq();
  }, [id]);

  const requestUpdate = async () => {
    const token = localStorage.getItem("token");

    const updatedFaq = {
      faqCategory: category,
      faqTitle: title,
      faqContent: content,
    };

    try {
      const res = await fetch(`http://localhost:10000/faq/api/faq/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFaq),
      });

      if (res.ok) {
        setShowSuccessPopup(true);
        setTimeout(() => {
          navigate(`/mypage/admin/faq/${id}`);
        }, 1500);
      } else {
        alert("수정 실패! 권한이나 데이터를 확인해주세요.");
      }
    } catch (err) {
      console.error("FAQ 수정 실패:", err);
      alert("수정 중 오류 발생!");
    }
  };


  if (!faq) return <div>로딩 중...</div>;

  return (
    <S.Container>
      <S.FormSection>
        <S.RadioSection>
          <S.RadioLabel>구분<S.Required>*</S.Required></S.RadioLabel>
          <S.RadioGroup>
            {categories.map((c) => (
              <S.Radio key={c}>
                <S.HiddenRadioInput
                  type="radio"
                  name="category"
                  value={c}
                  checked={category === c}
                  onChange={(e) => setCategory(e.target.value)}
                  id={c}
                />
                <S.StyledRadio checked={category === c}>
                  <S.CheckIcon className="check-icon">✔</S.CheckIcon>
                </S.StyledRadio>
                <S.RadioLabel htmlFor={c} checked={category === c}>{c}</S.RadioLabel>
              </S.Radio>
            ))}

          </S.RadioGroup>
        </S.RadioSection>
        <S.TitleSection>
          <S.TitleRow>
            <S.TitleLabel>제목<S.Required>*</S.Required></S.TitleLabel>
            <S.Input
              type="text"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </S.TitleRow>
        </S.TitleSection>
        <S.ContentSection>
          <S.ContentLabel>내용<S.Required>*</S.Required></S.ContentLabel>
          <S.Textarea
            rows="8"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </S.ContentSection>
      </S.FormSection>
      <S.ButtonSection>
        <S.SubmitButton onClick={() => setShowConfirmPopup(true)}>수정 완료</S.SubmitButton>
      </S.ButtonSection>
      {showConfirmPopup && (
        <S.PopupOverlay>
          <S.PopupBox>
            <S.PopupIcon as="img" src="http://localhost:10000/files/api/get/question.png?filePath=images/icons" alt="question-icon" />
            <S.PopupMessage>수정하시겠습니까?</S.PopupMessage>
            <S.PopupButtonGroup>
              <S.PopupButton className="cancel" onClick={() => setShowConfirmPopup(false)}>취소</S.PopupButton>
              <S.PopupButton className="confirm" onClick={() => {
                setShowConfirmPopup(false);
                requestUpdate();
              }}>확인</S.PopupButton>
            </S.PopupButtonGroup>
          </S.PopupBox>
        </S.PopupOverlay>
      )}
      {showSuccessPopup && (
        <S.PopupOverlay>
          <S.PopupBox>
            <S.PopupIcon as="img" src="http://localhost:10000/files/api/get/check.png?filePath=images/icons" alt="check-icon" />
            <S.PopupMessage>수정이 완료되었습니다.</S.PopupMessage>
          </S.PopupBox>
        </S.PopupOverlay>
      )} 
    </S.Container>

    
  );
};

export default AdminFaqModify;
