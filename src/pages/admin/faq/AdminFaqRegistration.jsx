import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./AdminFaqRegistrationStyle";

const AdminFaqRegistration = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState(""); 
  const [content, setContent] = useState("");
  const categories = ["회원", "전시", "작품", "배송", "결제", "경매", "기타"];
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);

  useEffect(() => {
  const token = localStorage.getItem("jwtToken");
  if (!token) {
    alert("접근 권한이 없습니다.");
    setCheckingAdmin(false); // 꼭 먼저 처리
    navigate("/");
    return;
  }

  fetch("http://localhost:10000/users/api/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.currentUser?.userAdminOk !== true) {
        alert("관리자만 접근 가능합니다.");
        setCheckingAdmin(false);
        navigate("/");
        return;
      }
      setIsAdmin(true);
    })
    .catch(() => {
      alert("오류가 발생했습니다.");
      setCheckingAdmin(false);
      navigate("/");
    })
    .finally(() => {
      setCheckingAdmin(false);
    });
}, []);


  const requestRegister = async () => {
    if (!category || !title.trim() || !content.trim()) {
      alert("모든 항목을 입력해 주세요.");
      return;
    }
    const token = localStorage.getItem("jwtToken");
    console.log("token 확인:", token);
    const newFaq = {
      faqCategory: category,
      faqTitle: title,
      faqContent: content,
    };

    try {
      const res = await fetch(`http://localhost:10000/admin/api/faq/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newFaq),
      });

      if (res.ok) {
        setShowSuccessPopup(true);
        setTimeout(() => {
          navigate("/mypage/admin/faq");
        }, 1500);
      } else {
        const errMsg = await res.text();
        console.error("서버 응답 내용:", errMsg);
        alert(`등록 실패! 상태 코드: ${res.status}`);
      }
    } catch (err) {
      console.error("FAQ 등록 실패:", err);
      alert("등록 중 오류 발생!");
    }
  };

  if (checkingAdmin) return <div>로딩 중...</div>;


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
                <S.RadioCheck htmlFor={c} checked={category === c}>{c}</S.RadioCheck>
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
        <S.SubmitButton onClick={() => setShowConfirmPopup(true)}>등록 완료</S.SubmitButton>
      </S.ButtonSection>

      {showConfirmPopup && (
        <S.PopupOverlay>
          <S.PopupBox>
            <S.PopupIcon as="img" src="http://localhost:10000/files/api/get/question.png?filePath=images/icons" alt="question-icon" />
            <S.PopupMessage>등록하시겠습니까?</S.PopupMessage>
            <S.PopupButtonGroup>
              <S.PopupButton className="cancel" onClick={() => setShowConfirmPopup(false)}>취소</S.PopupButton>
              <S.PopupButton className="confirm" onClick={() => {
                setShowConfirmPopup(false);
                requestRegister();
              }}>확인</S.PopupButton>
            </S.PopupButtonGroup>
          </S.PopupBox>
        </S.PopupOverlay>
      )}

      {showSuccessPopup && (
        <S.PopupOverlay>
          <S.PopupBox>
            <S.PopupIcon as="img" src="http://localhost:10000/files/api/get/ok.png?filePath=images/icons" alt="check-icon" />
            <S.PopupMessage>등록이 완료되었습니다.</S.PopupMessage>
          </S.PopupBox>
        </S.PopupOverlay>
      )}
    </S.Container>
  );
};

export default AdminFaqRegistration;
