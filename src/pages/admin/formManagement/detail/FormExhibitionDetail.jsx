import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import S from "./FormDisplayDetailStyle"; // 스타일 분리

const FormExhibitionDetail = ({ id: propId }) => {
  // props로 id 받거나, 없으면 useParams로
  const params = useParams();
  const id = propId || params.id;
  const navigate = useNavigate();
  const [data, setData] = useState(null);     // 작품 상세 정보
  const [status, setStatus] = useState("");   // 미승인/승인완료/반려 등
  const [isAdmin, setIsAdmin] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showRejectPopup, setShowRejectPopup] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // 관리자 인증
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return;

    fetch("http://localhost:10000/users/api/profile", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.currentUser?.userAdminOk === true) {
          setIsAdmin(true);
        } else {
          alert("관리자만 접근 가능합니다.");
          navigate("/");
        }
      })
      .catch(err => {
        alert("인증 오류가 발생했습니다.");
        navigate("/");
      });
  }, [navigate]);

  // 상세 데이터 호출
  useEffect(() => {
    if (!isAdmin) return;

    const fetchDetail = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        // 미승인/승인완료 모두 지원! (예: pending/{id} or completed/{id})
        const res = await fetch(
          `http://localhost:10000/admin/api/approval/exhibition/pending/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const result = await res.json();
        if (!res.ok) {
          alert("상세정보 조회 실패!");
          return;
        }
        setData(result);
        setStatus(result.universityExhibitionStatus); // "미승인" or "승인완료"
      } catch (err) {
        alert("상세 호출 실패!");
      }
    };
    fetchDetail();
  }, [id, isAdmin]);

  // 승인/기각/취소 처리
  const handleApprove = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch(`http://localhost:10000/admin/api/approval/exhibition/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          id,
          universityExhibitionStatus: "승인완료"
        })
      });
      if (res.ok) {
        setShowSuccessPopup(true); //성공 알림용 팝업을 보여주기
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      } else {
        alert("승인 실패!");
      }
    } catch (err) {
      alert("승인 처리 중 오류!");
    }
  };

  const handleReject = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch(`http://localhost:10000/admin/api/approval/exhibition/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          id,
          universityExhibitionStatus: "반려"
        })
      });
      if (res.ok) {
        setShowRejectPopup(true); //성공 알림용 팝업을 보여주기
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      } else {
        alert("기각 실패!");
      }
    } catch (err) {
      alert("기각 처리 중 오류!");
    }
  };

  const handleCancel = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch(`http://localhost:10000/admin/api/approval/exhibition/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          id: Number(id),
          universityExhibitionStatus: "미승인"
        })
      });
      if (res.ok) {
        setShowCancelPopup(true);
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      } else {
        alert("취소 실패!");
      }
    } catch (err) {
      alert("승인 취소 중 오류!");
    }
  };

  const getUniversityExhibitionImgUrl = (universityExhibitionImgName, universityExhibitionImgPath) => {
    if (!universityExhibitionImgName) return "/images/default-art.jpg";
    return `http://localhost:10000/files/api/get/${universityExhibitionImgName}?filePath=${universityExhibitionImgPath}`;
  };

    const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = String(date.getFullYear()).slice(2);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  const formatPhoneNumber = (phone) => {
    if (!phone) return "";

    const part1 = phone.slice(0, 3); 
    const part2 = phone.slice(3, 7); 
    const part3 = phone.slice(7); 
// 하이픈!
    return `${part1}-${part2}-${part3}`;
  };

  // 목록 버튼
  const handleList = () => navigate(-1);


  // 로딩 처리
  if (!isAdmin) return null;
  if (!data) return <div>로딩 중...</div>;

  return (
    <S.Container>
      <S.CategoryText>exhibition</S.CategoryText>
      
      <S.Header>
        <S.Title>대학교 전시회 승인 요청</S.Title>
        <S.ApplyDate>{formatDate(data.artEndDate)}</S.ApplyDate>
      </S.Header>
      
      <S.ContactTable>
        <tbody>
          <tr>
            <S.TableHeadCell>이름</S.TableHeadCell>
            <td>{data.userName}</td>
            <S.TableHeadCell>연락처</S.TableHeadCell>
            <td>{formatPhoneNumber(data.userPhone)}</td>
            <S.TableHeadCell>메일주소</S.TableHeadCell>
            <td>{data.userEmail}</td>
          </tr>
        </tbody>
      </S.ContactTable>
      
      <S.ContentFlex>
        <S.ImageBox>
          <S.ArtImage
            src={getUniversityExhibitionImgUrl(data.universityExhibitionImgName, data.universityExhibitionImgPath)}
            alt="전시회 이미지"
          />
        </S.ImageBox>
        <S.InfoBox>
          <S.InfoRow><S.InfoLabel>전시명</S.InfoLabel>{data.universityExhibitionTitle}</S.InfoRow>
          <S.InfoRow><S.InfoLabel>전시회 일정</S.InfoLabel>
            {formatDate(data.universityExhibitionStartDate)} ~ {formatDate(data.universityExhibitionEndDate)}
          </S.InfoRow>
          <S.InfoRow><S.InfoLabel>대학명</S.InfoLabel>{data.universityName}</S.InfoRow>
          <S.InfoRow><S.InfoLabel>학과명</S.InfoLabel>{data.majorName}</S.InfoRow>
          <S.InfoRow><S.InfoLabel>상세주소</S.InfoLabel>{data.universityExhibitionLocation}</S.InfoRow>
          <S.InfoRow><S.InfoLabel>홈페이지</S.InfoLabel>{data.universityHomepage}</S.InfoRow>
          <S.InfoRow><S.InfoLabel>첨부파일</S.InfoLabel>{data.universityExhibitionImgName}</S.InfoRow>
        </S.InfoBox>
      </S.ContentFlex>
      
      <S.ButtonWrapper>
        <S.ListButton onClick={handleList}>목록</S.ListButton>
        {status === "대기" && (
          <>
            <S.ApproveButton onClick={() => setShowConfirmPopup(true)}>승인</S.ApproveButton>
            <S.RejectButton onClick={() => setShowRejectPopup(true)}>기각</S.RejectButton>
          </>
        )}
        {status === "승인완료" && (
          <S.CancelButton onClick={() => setShowCancelPopup(true)}>승인 취소</S.CancelButton>
        )}
      </S.ButtonWrapper>

      {showConfirmPopup && (
        <S.PopupOverlay>
          <S.PopupBox>
            <S.PopupIcon src="/assets/images/icon/quest.png" alt="question-icon" />
            <S.PopupMessage>정말 승인하시겠습니까?</S.PopupMessage>
            <S.PopupButtonGroup>
              <S.PopupButton className="cancel" onClick={() => setShowConfirmPopup(false)}>취소</S.PopupButton>
              <S.PopupButton className="confirm" onClick={() => {
                setShowConfirmPopup(false);
                handleApprove();
              }}>확인</S.PopupButton>
            </S.PopupButtonGroup>
          </S.PopupBox>
        </S.PopupOverlay>
      )}
      {showRejectPopup && (
        <S.PopupOverlay>
          <S.PopupBox>
            <S.PopupIcon src="/assets/images/icon/quest.png" alt="question-icon" />
            <S.PopupMessage>정말 기각하시겠습니까?</S.PopupMessage>
            <S.PopupButtonGroup>
              <S.PopupButton className="cancel" onClick={() => setShowRejectPopup(false)}>취소</S.PopupButton>
              <S.PopupButton className="confirm" onClick={() => {
                setShowRejectPopup(false);
                handleReject();
              }}>확인</S.PopupButton>
            </S.PopupButtonGroup>
          </S.PopupBox>
        </S.PopupOverlay>
      )}
      {showCancelPopup && (
        <S.PopupOverlay>
          <S.PopupBox>
            <S.PopupIcon src="/assets/images/icon/quest.png" alt="question-icon" />
            <S.PopupMessage>정말 승인 취소하시겠습니까?</S.PopupMessage>
            <S.PopupButtonGroup>
              <S.PopupButton className="cancel" onClick={() => setShowCancelPopup(false)}>취소</S.PopupButton>
              <S.PopupButton className="confirm" onClick={() => {
                setShowCancelPopup(false);
                handleCancel();
              }}>확인</S.PopupButton>
            </S.PopupButtonGroup>
          </S.PopupBox>
        </S.PopupOverlay>
      )}
      {showSuccessPopup && (
        <S.PopupOverlay>
          <S.PopupBox>
            <S.PopupIcon src="/assets/images/icon/ok.png" alt="ok-icon" />
            <S.PopupMessage>처리가 완료되었습니다.</S.PopupMessage>
          </S.PopupBox>
        </S.PopupOverlay>
      )}
    </S.Container>

  );
};

export default FormExhibitionDetail;
