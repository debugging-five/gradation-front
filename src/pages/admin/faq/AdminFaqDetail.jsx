import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from "./AdminFaqDetailStyle";

const AdminFaqDetail = () => {
  const { id } = useParams(); // URL에서 id 꺼냄
  const navigate = useNavigate();
  const [faq, setFaq] = useState(null); // 상세 데이터 상태
  const [isAdmin, setIsAdmin] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // alert("접근 권한이 없습니다.");
      // navigate("/"); // 또는 로그인 페이지로 이동
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
        if (data.currentUser?.userAdminOk == true) {
          setIsAdmin(true);
        } else {
          alert("관리자만 접근 가능합니다.");
          navigate("/"); // 또는 로그인 페이지로
        }
      })
      .catch((error) => {
        console.error("관리자 확인 실패:", error);
        alert("오류가 발생했습니다.");
        navigate("/");
      });
  }, []);

  useEffect(() => {
    const fetchFaqDetail = async () => {
      try {
        const response = await fetch(`http://localhost:10000/faq/api/faq/${id}`);
        const data = await response.json();
        setFaq(data);
      } catch (error) {
        console.error('FAQ 상세 호출 실패:', error);
      }
    };

    fetchFaqDetail();
  }, [id]);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:10000/faq/api/faq/${faq.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    if (response.ok) {
          setShowSuccessPopup(true);
          setTimeout(() => {
            navigate("/mypage/admin/faq");
          }, 1500);
        } else {
          alert("삭제 실패! 권한이나 서버 상태를 확인해주세요.");
        }
    } catch (error) {
        console.error("FAQ 삭제 실패:", error);
        alert("삭제 중 오류가 발생했습니다.");
    }
  };

  if (!faq) {
  return <div>로딩 중...</div>;
  }

  return (
    <S.FaqDetailPageContainer>
      <S.FaqDetailWrapper>
        <S.FaqCategoryText>{faq.faqCategory} 관련 문의</S.FaqCategoryText>
        <S.FaqTitleWrapper>
          <S.FaqQ>Q</S.FaqQ>
          <S.FaqTitleText>{faq.faqTitle}</S.FaqTitleText>
        </S.FaqTitleWrapper>
        <S.FaqDivider />
        <S.FaqContentText>{faq.faqContent}</S.FaqContentText>
      </S.FaqDetailWrapper>

      <S.FaqDetailButtonContainer>
        <S.FaqRedButton onClick={() => navigate(-1)}>목록</S.FaqRedButton>
        <S.FaqWhiteButton onClick={() => navigate(`/mypage/admin/faq/modify/${faq.id}`)}>수정</S.FaqWhiteButton>
        <S.FaqRedButton onClick={() => setShowConfirmPopup(true)}>삭제</S.FaqRedButton>
      </S.FaqDetailButtonContainer>

      {showConfirmPopup && (
        <S.PopupOverlay>
          <S.PopupBox>
            <S.PopupIcon as="img" src="http://localhost:10000/files/api/get/question.png?filePath=images/icons" alt="question-icon" />
            <S.PopupMessage>정말 삭제하시겠습니까?</S.PopupMessage>
            <S.PopupButtonGroup>
              <S.PopupButton className="cancel" onClick={() => setShowConfirmPopup(false)}>취소</S.PopupButton>
              <S.PopupButton className="confirm" onClick={() => {
                setShowConfirmPopup(false);
                handleDelete();
              }}>확인</S.PopupButton>
            </S.PopupButtonGroup>
          </S.PopupBox>
        </S.PopupOverlay>
      )}
      {showSuccessPopup && (
        <S.PopupOverlay>
          <S.PopupBox>
            <S.PopupIcon as="img" src="http://localhost:10000/files/api/get/check.png?filePath=images/icons" alt="check-icon" />
            <S.PopupMessage>삭제가 완료되었습니다.</S.PopupMessage>
          </S.PopupBox>
        </S.PopupOverlay>
      )}
    </S.FaqDetailPageContainer>
  );
};

export default AdminFaqDetail;