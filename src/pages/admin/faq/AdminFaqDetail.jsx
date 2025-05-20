import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from "./AdminFaqListStyle";

const AdminFaqDetail = () => {
  const { id } = useParams(); // URL에서 id 꺼냄
  const navigate = useNavigate();
  const [faq, setFaq] = useState(null); // 상세 데이터 상태
  const [isAdmin, setIsAdmin] = useState(false);

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
      .catch((err) => {
        console.error("관리자 확인 실패:", err);
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
  if (!window.confirm("정말 삭제하시겠습니까?")) return;

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:10000/faq/api/faq/${faq.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      alert("삭제되었습니다.");
      navigate("/mypage/admin/faq");
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
        <S.FaqDetailButton onClick={() => navigate(-1)}>목록</S.FaqDetailButton>
        <S.FaqDetailButton onClick={() => navigate(`/mypage/admin/faq/modify/${faq.id}`)}>수정</S.FaqDetailButton>
        <S.FaqDetailButton onClick={handleDelete}>삭제</S.FaqDetailButton>
      </S.FaqDetailButtonContainer>
    </S.FaqDetailPageContainer>
  );
};

export default AdminFaqDetail;