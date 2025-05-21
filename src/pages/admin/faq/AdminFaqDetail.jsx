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
    const token = localStorage.getItem("jwtToken"); // 로컬스토리지에서 토큰 겟
    if (!token) return; // 없으면 중단

    fetch("http://localhost:10000/users/api/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, //인증된 사용자
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.currentUser?.userAdminOk == true) { //관리자 userAdminOk 맞으면 트루로 변경
          setIsAdmin(true);
        } else {
          alert("관리자만 접근 가능합니다.");
          navigate("/"); // 또는 로그인 페이지로
        }
      })
      .catch((error) => {
        console.error("아.....관리자....:", error);
        alert("오류가 발생했습니다.");
        navigate("/");
      });
  }, []);// 배열 비워놨으니 한번만 실행

  useEffect(() => {
    const fetchFaqDetail = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await fetch(`http://localhost:10000/admin/api/faq/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      
        const data = await response.json();
      
        if (!response.ok) {
          console.error("FAQ 상세 요청 실패 응답:", data);
          return;
        }
      
        setFaq(data);
      } catch (error) {
        console.error('FAQ 상세 호출 실패:', error);
      }
    };
  
    fetchFaqDetail();
  }, [id]);


  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await fetch(`http://localhost:10000/admin/api/faq/${faq.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    if (response.ok) {
          setShowSuccessPopup(true); //성공 알림용 팝업을 보여주기
          setTimeout(() => {
            navigate("/mypage/admin/faq");
          }, 1000); // 팝업 보여주고나서 1초 딜레이 시간 넣어주기 (바로 이동 될수 있어서)
        } else {
          alert("삭제 실패! 권한이나 서버 상태를 확인해주세요.");
        }
    } catch (error) {
        console.error("FAQ 삭제 실패다:", error);
        alert("삭제 중 오류가 발생했습니다.");
    }
  };

  // 페이지 진입 시 유즈이펙트로 데이터 받아오기 전에 로딩 중 보여줌
  // 데이터 null > api 응답 전
  if (!faq) {return <div>로딩 중...</div>;}

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
            <S.PopupIcon src="http://localhost:10000/files/api/get/question.png?filePath=images/icons" alt="question-icon" />
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
            <S.PopupIcon src="http://localhost:10000/files/api/get/ok.png?filePath=images/icons" alt="ok-icon" />
            <S.PopupMessage>삭제가 완료되었습니다.</S.PopupMessage>
          </S.PopupBox>
        </S.PopupOverlay>
      )}
    </S.FaqDetailPageContainer>
  );
};

export default AdminFaqDetail;