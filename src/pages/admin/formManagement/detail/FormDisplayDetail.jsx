import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import S from "./FormDisplayDetailStyle"; // 스타일 분리

const FormDisplayDetail = ({ id: propId }) => {
  // props로 id 받거나, 없으면 useParams로
  const params = useParams();
  const id = propId || params.id;
  const navigate = useNavigate();
  const [data, setData] = useState(null);     // 작품 상세 정보
  const [status, setStatus] = useState("");   // 미승인/승인완료/반려 등
  const [isAdmin, setIsAdmin] = useState(false);

  // 1. 관리자 인증
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

  // 2. 작품 상세 데이터 호출
  useEffect(() => {
    if (!isAdmin) return;

    const fetchDetail = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        // 미승인/승인완료 모두 지원! (예: pending/{id} or completed/{id})
        const res = await fetch(
          `http://localhost:10000/admin/api/approval/display/pending/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const result = await res.json();
        if (!res.ok) {
          alert("상세정보 조회 실패!");
          return;
        }
        setData(result);
        setStatus(result.artStatus); // "미승인" or "승인완료"
      } catch (err) {
        alert("상세 호출 실패!");
      }
    };
    fetchDetail();
  }, [id, isAdmin]);

  // 3. 승인/기각/취소 처리
  const handleApprove = async () => {
    if (!window.confirm("정말 승인 처리할까요?")) return;
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch(`http://localhost:10000/admin/api/approval/display/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          id: Number(id),
          artStatus: "승인완료"
        })
      });
      if (res.ok) {
        setStatus("승인완료");
        alert("승인 처리되었습니다.");
      } else {
        alert("승인 실패!");
      }
    } catch (err) {
      alert("승인 처리 중 오류!");
    }
  };

  const handleReject = async () => {
    if (!window.confirm("정말 기각 처리할까요?")) return;
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch(`http://localhost:10000/admin/api/approval/display/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          id: Number(id),
          artStatus: "반려"
        })
      });
      if (res.ok) {
        setStatus("반려");
        alert("기각 처리되었습니다.");
      } else {
        alert("기각 실패!");
      }
    } catch (err) {
      alert("기각 처리 중 오류!");
    }
  };

  const handleCancel = async () => {
    if (!window.confirm("정말 승인 취소할까요?")) return;
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch(`http://localhost:10000/admin/api/approval/display/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          id: Number(id),
          artStatus: "미승인"
        })
      });
      if (res.ok) {
        setStatus("미승인");
        alert("승인 취소되었습니다.");
      } else {
        alert("취소 실패!");
      }
    } catch (err) {
      alert("승인 취소 중 오류!");
    }
  };

  // 4. 목록 버튼
  const handleList = () => navigate(-1);

  // 5. 로딩 처리
  if (!isAdmin) return null;
  if (!data) return <div>로딩 중...</div>;

  // 6. 화면 렌더링 (스타일은 예시! 실 레이아웃에 맞게 조정)
  return (
    <S.Container>
      <S.CategoryText>display</S.CategoryText>
      <S.Header>
        <S.Title>작품 전시 승인 요청</S.Title>
        <S.ApplyDate>{data.artEndDate?.slice(2, 10).replace("-", ".") || ""}</S.ApplyDate>
      </S.Header>
      <S.ContactTable>
        <tbody>
          <tr>
            <S.TableHeadCell>이름</S.TableHeadCell>
            <td>{data.userName}</td>
            <S.TableHeadCell>연락처</S.TableHeadCell>
            <td>{data.userPhone}</td>
            <S.TableHeadCell>메일주소</S.TableHeadCell>
            <td>{data.userEmail}</td>
          </tr>
        </tbody>
      </S.ContactTable>
      <S.ContentWrapper>
        <S.ImageBox>
          <img
            src={data.artImgPath || "/images/default-art.jpg"}
            alt="작품 이미지"
            style={{ width: "250px", objectFit: "cover" }}
          />
        </S.ImageBox>
        <S.InfoBox>
          <S.InfoRow><S.InfoLabel>작가명</S.InfoLabel> {data.artistName}</S.InfoRow>
          <S.InfoRow><S.InfoLabel>작품명</S.InfoLabel> {data.artTitle}</S.InfoRow>
          <S.InfoRow><S.InfoLabel>작품 분류</S.InfoLabel> {data.artCategory}</S.InfoRow>
          <S.InfoRow><S.InfoLabel>작품 재료</S.InfoLabel> {data.artMaterial}</S.InfoRow>
          <S.InfoRow><S.InfoLabel>작품 규격</S.InfoLabel> {data.artSize}</S.InfoRow>
          <S.InfoRow><S.InfoLabel>제작 완료일</S.InfoLabel> {data.artEndDate}</S.InfoRow>
          <S.InfoRow>
            <S.InfoLabel>작품 설명</S.InfoLabel>
            <div style={{ whiteSpace: "pre-line" }}>{data.artDescription}</div>
          </S.InfoRow>
        </S.InfoBox>
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <S.ListButton onClick={handleList}>목록</S.ListButton>
        {status === "미승인" && (
          <>
            <S.ApproveButton onClick={handleApprove}>승인</S.ApproveButton>
            <S.RejectButton onClick={handleReject}>기각</S.RejectButton>
          </>
        )}
        {status === "승인완료" && (
          <S.CancelButton onClick={handleCancel}>승인 취소</S.CancelButton>
        )}
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default FormDisplayDetail;
