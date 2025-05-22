import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from '../../mypage/style';
import * as SF from './faqListStyle';

const FaqList = () => {
  const [faqList, setFaqList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // ''이면 전체
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = ['전체', '전시', '전시회', '경매', '업사이클', '마이페이지', '기타'];

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

  const filteredFaqs = selectedCategory === '' ? faqList : faqList.filter(faq => faq.faqCategory === selectedCategory);

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

        {filteredFaqs.map((faq, index) => (
          <S.ContentBox key={faq.id}>
            <S.Number>{index + 1}</S.Number>
            <S.Category>{faq.faqCategory}</S.Category>
            <S.Emptybox></S.Emptybox>
            <S.TitleNavigate as={NavLink} to={`/service-center/faq/detail/${faq.id}`} end onClick={() => window.scrollTo(0, 0)}>
              <S.Content>{faq.faqTitle}</S.Content>
            </S.TitleNavigate>
            <S.Emptybox></S.Emptybox>
          </S.ContentBox>
        ))}
      </SF.Wrapper>
    </S.MainWrapper>
  );
};

export default FaqList;
