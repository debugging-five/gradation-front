import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import S from "./style";

const FormManagementPendingList = () => {
  const { category } = useParams();
  const [isAdmin, setIsAdmin] = useState(false);
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const token = localStorage.getItem("jwtToken");

  // 관리자 인증
  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:10000/users/api/profile", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.currentUser?.userAdminOk === true) {
          setIsAdmin(true);
        }
      })
      .catch((err) => console.error("관리자 인증 실패:", err));
  }, []);

  // 관리자 인증된 경우 데이터 요청
  useEffect(() => {
    if (!isAdmin) return;

    fetch(`http://localhost:10000/admin/api/approval/${category}/pending`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.json())
    .then((data) => {
      if (!Array.isArray(data.data)) {
        console.error("❌ 응답 data가 배열이 아님:", data);
        return;
      }
      setList(data.data); // ✅ data.data로 설정
    })
      .catch((err) => console.error("데이터 로딩 실패:", err));
  }, [isAdmin, category, token]);

  // 관리자 아님
  if (!isAdmin) {
    return <div>관리자만 접근할 수 있습니다.</div>;
  }

  // 페이징 계산
  const totalPages = Math.ceil(list.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = list.slice(startIndex, startIndex + itemsPerPage);
  const pageGroup = Math.floor((currentPage - 1) / 5);
  const firstPage = pageGroup * 5 + 1;
  const lastPage = Math.min(firstPage + 4, totalPages);

  // 헤더 렌더링
  const renderHeader = () => {
    switch (category) {
      case "display":
        return (
          <>
            <S.HeaderCell>번호</S.HeaderCell>
            <S.HeaderCell>작품명</S.HeaderCell>
            <S.HeaderCell>요청일자</S.HeaderCell>
          </>
        );
      case "exhibition":
        return (
          <>
            <S.HeaderCell>번호</S.HeaderCell>
            <S.HeaderCell>학교명</S.HeaderCell>
            <S.HeaderCell>요청일자</S.HeaderCell>
          </>
        );
      case "upcycling":
        return (
          <>
            <S.HeaderCell>번호</S.HeaderCell>
            <S.HeaderCell>이메일</S.HeaderCell>
            <S.HeaderCell>요청일자</S.HeaderCell>
          </>
        );
      case "university":
        return (
          <>
            <S.HeaderCell>번호</S.HeaderCell>
            <S.HeaderCell>이름</S.HeaderCell>
            <S.HeaderCell>요청일자</S.HeaderCell>
          </>
        );
      default:
        return null;
    }
  };

  // 데이터 행 렌더링
  const renderRow = (item, index) => {
    const getTitle = () => {
      switch (category) {
        case "display": return item.artTitle;
        case "exhibition": return item.universityName;
        case "upcycling": return item.upcyclingEmail;
        case "university": return item.userName;
        default: return "";
      }
      
    };

    const getDate = () => {
  const rawDate =
    item.artEndDate ||
    item.universityExhibitionStartDate ||
    item.upcyclingDate ||
    item.userUniversityDate ||
    "";

    console.log("🟢 rawDate:", rawDate, typeof rawDate);

  if (!rawDate) return "";
  // 문자열 강제 변환 (Date 객체일 가능성까지 커버)
  const dateString = typeof rawDate === "string" ? rawDate : new Date(rawDate).toISOString();
    console.log("🔧 dateString:", dateString);
  const [year, month, day] = dateString.slice(0, 10).split("-");
  return `${year.slice(2)}.${month}.${day}`;
  
};

    return (
      <S.TableRow key={item.id}>
        <S.Cell>{startIndex + index + 1}</S.Cell>
        <S.Cell>{getTitle()}</S.Cell>
        <S.Cell>{getDate()}</S.Cell>
      </S.TableRow>
    );
  };

  return (
    <S.Container>
      <S.Table>
        <S.TableHeader>{renderHeader()}</S.TableHeader>
        {currentItems.map((item, i) => renderRow(item, i))}
      </S.Table>

      {totalPages > 1 && (
        <S.Pagination>
          {firstPage > 1 && (
            <button onClick={() => setCurrentPage(firstPage - 1)}>{`<`}</button>
          )}
          {Array.from({ length: lastPage - firstPage + 1 }, (_, i) => (
            <button
              key={firstPage + i}
              className={currentPage === firstPage + i ? "active" : ""}
              onClick={() => setCurrentPage(firstPage + i)}
            >
              {firstPage + i}
            </button>
          ))}
          {lastPage < totalPages && (
            <button onClick={() => setCurrentPage(lastPage + 1)}>{`>`}</button>
          )}
        </S.Pagination>
      )}
    </S.Container>
  );
};

export default FormManagementPendingList;
