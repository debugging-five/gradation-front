import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./AdminFaqListStyle";

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
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:10000/users/api/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("user profile:", data);
        if (data.currentUser?.userAdminOk == true) {
          setIsAdmin(true);
        }
      })
      .catch((err) => console.error("관리자 확인 실패:", err));
  }, []);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await fetch("http://localhost:10000/faq/api/faq-list");
        const data = await response.json();
        setFaqList(data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFaqData();
  }, []);

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
    navigate("/mypage/admin/faq/register");
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
          <S.FaqTableRow key={faq.id}>
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
