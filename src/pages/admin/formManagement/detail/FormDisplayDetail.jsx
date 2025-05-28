import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import S from "./FormDisplayDetailStyle";

console.log("FormDisplayDetail 모듈 진입!");

const FormDisplayDetail = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token) return;
    fetch(`http://localhost:10000/admin/api/approval/display/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("상세 조회 실패:", err));
  }, [id, token]);

  if (!data) return <div>로딩 중...</div>;

  const isPending = data.artStatus === "미승인";
  const isComplteted = data.artStatus === "승인완료";

  const handleApprove = () => {
    // 승인 처리 로직
    console.log("승인!");
  };

  const handleReject = () => {
    // 기각 처리 로직
    console.log("기각!");
  };

  const handleCancelApprove = () => {
    // 승인 취소 로직
    console.log("승인 취소!");
  };

  return (
    <S.Container>
      <S.PageTop>
        <S.CategoryTitle>display</S.CategoryTitle>
        <S.RequestInfo>
          <S.RequestTitle>작품 전시 승인 요청</S.RequestTitle>
          <S.RequestDate>{data.artEndDate?.slice(2, 10).replace(/-/g, ".")}</S.RequestDate>
        </S.RequestInfo>
      </S.PageTop>

      <S.ContactTable>
        <thead>
          <tr>
            <S.TableHead>이름</S.TableHead>
            <S.TableHead>연락처</S.TableHead>
            <S.TableHead>이메일주소</S.TableHead>
          </tr>
        </thead>
        <tbody>
          <tr>
            <S.TableCell>{data.userName}</S.TableCell>
            <S.TableCell>010-1234-5678</S.TableCell>
            <S.TableCell>{data.userEmail}</S.TableCell>
          </tr>
        </tbody>
      </S.ContactTable>

      <S.DetailContent>
        <S.ImageBox>
          <S.Image src={`http://localhost:10000/files/api/get/${data.artImgPath}/${data.artImgName}`} alt="art" />
        </S.ImageBox>
        <S.InfoBox>
          <S.InfoItem>
            <S.InfoLabel>작가명</S.InfoLabel>
            <S.InfoValue>{data.userName}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>작품명</S.InfoLabel>
            <S.InfoValue>{data.artTitle}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>작품 분류</S.InfoLabel>
            <S.InfoValue>{data.artCategory}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>작품 재료</S.InfoLabel>
            <S.InfoValue>{data.artMaterial}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>작품 규격</S.InfoLabel>
            <S.InfoValue>{data.artSize}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>제작 완료일</S.InfoLabel>
            <S.InfoValue>{data.artEndDate?.slice(0, 10)}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <S.InfoLabel>작품 설명</S.InfoLabel>
            <S.Description>{data.artDescription}</S.Description>
          </S.InfoItem>
        </S.InfoBox>
      </S.DetailContent>

      <S.ButtonWrapper>
        <S.ActionButton onClick={() => navigate(-1)}>목록</S.ActionButton>
        {isPending ? (
          <>
            <S.ActionButton className="cancel" onClick={handleReject}>기각</S.ActionButton>
            <S.ActionButton className="approve" onClick={handleApprove}>승인</S.ActionButton>
          </>
        ) : (
          <S.ActionButton className="cancel" onClick={handleCancelApprove}>승인 취소</S.ActionButton>
        )}
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default FormDisplayDetail;
