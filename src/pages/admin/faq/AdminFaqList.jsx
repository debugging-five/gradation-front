<<<<<<< Updated upstream
import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as S from './style';

const FaqList = () => {
  const [faqList, setFaqList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
=======
import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./style";

const FaqList = () => {
  const [faqList, setFaqList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
>>>>>>> Stashed changes
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

  const categories = ['전체', '전시', '전시회', '경매', '업사이클', '마이페이지', '기타'];

  useEffect(() => {
    // 관리자 여부 확인
<<<<<<< Updated upstream
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch('http://localhost:10000/users/api/profile', {
      method: 'POST',
=======
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:10000/users/api/profile", {
      method: "POST",
>>>>>>> Stashed changes
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
<<<<<<< Updated upstream
      .then(res => res.json())
      .then(data => {
        if (data.currentUser?.userAdminOk === true) {
          setIsAdmin(true);
        }
      })
      .catch(err => console.error('관리자 확인 실패:', err));
=======
      .then((res) => res.json())
      .then((data) => {
        console.log("user profile:", data);
        if (data.currentUser?.userAdminOk == true) {
          setIsAdmin(true);
        }
      })
      .catch((err) => console.error("관리자 확인 실패:", err));
>>>>>>> Stashed changes
  }, []);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
<<<<<<< Updated upstream
        const response = await fetch('http://localhost:10000/faq/api/faq-list');
        const data = await response.json();
        setFaqList(data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
=======
        const response = await fetch("http://localhost:10000/faq/api/faq-list");
        const data = await response.json();
        setFaqList(data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredFaqs = selectedCategory === ''
    ? faqList
    : faqList.filter(faq => faq.faqCategory === selectedCategory);

  const handleRegister = () => {
    navigate('/mypage/admin/faq/register');
=======
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredFaqs =
    selectedCategory === ""
      ? faqList
      : faqList.filter((faq) => faq.faqCategory === selectedCategory);

  const handleRegister = () => {
    navigate("/mypage/admin/faq/register");
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <S.DropdownToggleButton onClick={() => setIsDropdownOpen(prev => !prev)}>
          {selectedCategory === '' ? '구분 ▾' : `${selectedCategory} ▾`}
=======
        <S.DropdownToggleButton
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          {selectedCategory === "" ? "구분 ▾" : `${selectedCategory} ▾`}
>>>>>>> Stashed changes
        </S.DropdownToggleButton>

        {isDropdownOpen && (
          <S.DropdownList>
<<<<<<< Updated upstream
            {categories.map(status => (
              <S.DropdownItem key={status} onClick={() => {
                setSelectedCategory(status === '전체' ? '' : status);
                setIsDropdownOpen(false);
              }}>
=======
            {categories.map((status) => (
              <S.DropdownItem
                key={status}
                onClick={() => {
                  setSelectedCategory(status === "전체" ? "" : status);
                  setIsDropdownOpen(false);
                }}
              >
>>>>>>> Stashed changes
                {status}
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        )}
      </S.DropdownContainer>
<<<<<<< Updated upstream

      {isAdmin && (
        <S.RegisterButtonContainer>
          <S.RegisterButton onClick={handleRegister}>등록</S.RegisterButton>
        </S.RegisterButtonContainer>
      )}

=======
>>>>>>> Stashed changes
      <S.FaqTableWrapper>
        <S.FaqTableHeader>
          <S.FaqNumberHeader>번호</S.FaqNumberHeader>
          <S.FaqCategoryHeader>구분</S.FaqCategoryHeader>
<<<<<<< Updated upstream
          <S.Emptybox />
          <S.FaqTitleHeader>제목</S.FaqTitleHeader>
          <S.Emptybox />
        </S.FaqTableHeader>

        {filteredFaqs.map((faq, index) => (
          <S.FaqTableRow key={faq.id}>
            <S.FaqNumber>{index + 1}</S.FaqNumber>
            <S.FaqCategory>{faq.faqCategory}</S.FaqCategory>
            <S.TableSpacer />
            <S.FaqTitleLink as={NavLink} to={`/admin/faq/detail/${faq.id}`}>
              <S.FaqTitleText>{faq.faqTitle}</S.FaqTitleText>
            </S.FaqTitleLink>
            <S.Emptybox />
          </S.FaqTableRow>
        ))}
      </S.FaqTableWrapper>
=======
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
>>>>>>> Stashed changes
    </S.FaqPageContainer>
  );
};

export default FaqList;
