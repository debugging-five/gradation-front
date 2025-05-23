import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import S from "./AdminFaqListStyle";

const AdminFaqList = () => {
  const [faqList, setFaqList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const categories = [
    "전체",
    "회원",
    "전시",
    "작품",
    "배송",
    "결제",
    "경매",
    "기타",
  ];

  useEffect(() => {
    // 관리자 여부 확인
    // 로컬스토리지에서 토큰 겟
    const token = localStorage.getItem("jwtToken");
    console.log("FAQ 요청 시 토큰:", token);
    // 없으면 중단
    if (!token) {
      console.warn("토큰이 없습니다. 요청 중단");
      return;
    }
    // 백엔드에서 사용자 정보 요청
    fetch("http://localhost:10000/users/api/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, //인증된 사용자
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("user profile:", data);
        if (data.currentUser?.userAdminOk == true) { //관리자 userAdminOk 맞으면 트루로 변경
          setIsAdmin(true);
        }
      })
      .catch((error) => console.error("관리자 확인 실패다:", error));
  }, []); // 배열 비워놨으니 한번만 실행

  useEffect(() => {
    if (!isAdmin) return; // 관리자일 때만 FAQ 요청
  
    const fetchFaqData = async () => {
    try {
      const response = await fetch("http://localhost:10000/admin/api/faq/list", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });

      const data = await response.json();
      if (!Array.isArray(data)) {
        console.error("FAQ API 응답이 배열이 아님:", data);
        return;
      }
      console.log("불러온 FAQ data:", data);
      setFaqList(data); // 배열일 때만
    } catch (error) {
      console.error("FAQ 데이터 에러다  :", error);
    }
  };

  
    fetchFaqData();
  }, [isAdmin]); // isAdmin 일 때 실행

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredFaqs =
    selectedCategory === ""
      ? faqList
      : faqList.filter((faq) => faq.faqCategory === selectedCategory);

  const handleRegister = () => {
    navigate("/mypage/admin/faq/registration");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFaqs = filteredFaqs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <S.FaqPageContainer>
      <S.DropdownContainer ref={dropdownRef}>
        <S.DropdownToggleButton
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          {selectedCategory === "" ? "구분 ▾" : `${selectedCategory} ▾`}
        </S.DropdownToggleButton>

        {isDropdownOpen && (
          <S.DropdownList>
            {categories.map((status) => (
              <S.DropdownItem
                key={status}
                onClick={() => {
                  setSelectedCategory(status === "전체" ? "" : status);
                  setIsDropdownOpen(false);
                }}
              >
                {status}
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        )}
      </S.DropdownContainer>
      <S.FaqTableWrapper>
        {/* <S.PageTitle>관리자 / 자주 묻는 질문</S.PageTitle> */}
        <S.FaqTableHeader>
          <S.FaqNumberHeader>번호</S.FaqNumberHeader>
          <S.FaqCategoryHeader>구분</S.FaqCategoryHeader>
          <S.FaqTitleHeader>제목</S.FaqTitleHeader>
        </S.FaqTableHeader>

        {currentFaqs.map((faq, index) => (
          // FAQ 행 그리기 (리스트 랜더링할 때 구분하기 쉽게)
          <S.FaqTableRow key={faq.id}> 
          {/* 인덱스 0번 부터 시작이니까 +1 */}
            <S.FaqNumberCell>{index + 1}</S.FaqNumberCell>
            <S.FaqCategoryCell>{faq.faqCategory}</S.FaqCategoryCell>
            <S.FaqTitleLinkCell
              as={NavLink}
              to={`/mypage/admin/faq/detail/${faq.id}`}
            >
              <S.FaqTitleText>{faq.faqTitle}</S.FaqTitleText>
            </S.FaqTitleLinkCell>
          </S.FaqTableRow>
        ))}
      </S.FaqTableWrapper>
      <S.RegisterButtonContainer>
        <S.RegisterButton onClick={handleRegister}>등록</S.RegisterButton>
      </S.RegisterButtonContainer>
      <S.Pagination>
        {pageNumbers.map((number) => (
          <span
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </span>
        ))}
      </S.Pagination>
    </S.FaqPageContainer>
  );
};

export default AdminFaqList;
