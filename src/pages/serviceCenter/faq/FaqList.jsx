import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from '../../mypage/style';
import * as SF from './faqListStyle';

const FaqList = () => {
  const [faqList, setFaqList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const dropdownRef = useRef(null);

  const categories = ['전체', '회원', '전시', '작품', '배송', '결제', '경매', '기타'];

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await fetch('http://localhost:10000/faq/api/faq-list');
        const data = await response.json();
        setFaqList(data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
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
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredFaqs = selectedCategory === ''
    ? faqList
    : faqList.filter(faq => faq.faqCategory === selectedCategory);

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFaqs = filteredFaqs.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // 페이지 이동 시 스크롤 상단으로
  };

  return (
    <S.MainWrapper>

      {/* 구분 드롭다운 */}
      <SF.CategoryBox ref={dropdownRef}>
        <SF.CategoryButton onClick={() => setIsDropdownOpen(prev => !prev)}>
          {selectedCategory === '' ? '구분 ▾' : `${selectedCategory} ▾`}
        </SF.CategoryButton>

        {isDropdownOpen && (
          <SF.CategoryUl>
            {categories.map(status => (
              <SF.CategoryLi key={status} onClick={() => {
                setSelectedCategory(status === '전체' ? '' : status);
                setCurrentPage(1); // 카테고리 바꾸면 1페이지로
                setIsDropdownOpen(false);
              }}>
                {status}
              </SF.CategoryLi>
            ))}
          </SF.CategoryUl>
        )}
      </SF.CategoryBox>

      {/* 리스트 */}
      <SF.Wrapper>
        <S.ListHeader>
          <S.NumberBold>번호</S.NumberBold>
          <S.CategoryBold>구분</S.CategoryBold>
          <S.Emptybox></S.Emptybox>
          <S.Title>제목</S.Title>
          <S.Emptybox></S.Emptybox>
        </S.ListHeader>

        {currentFaqs.map((faq, index) => (
          <S.ContentBox key={faq.id}>
            <S.Number>{(currentPage - 1) * itemsPerPage + index + 1}</S.Number>
            <S.Category>{faq.faqCategory}</S.Category>
            <S.Emptybox></S.Emptybox>
            <S.TitleNavigate as={NavLink} to={`/service-center/faq/detail/${faq.id}`} end onClick={() => window.scrollTo(0, 0)}>
              <S.Content>{faq.faqTitle}</S.Content>
            </S.TitleNavigate>
            <S.Emptybox></S.Emptybox>
          </S.ContentBox>
        ))}
      </SF.Wrapper>

      {/* 페이지네이션 */}
      <S.Pagination>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
          <S.PageButton
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </S.PageButton>
        ))}
      </S.Pagination>

    </S.MainWrapper>
  );
};

export default FaqList;
