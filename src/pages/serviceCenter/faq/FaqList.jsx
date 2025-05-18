import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Category, CategoryBold, Content, ContentBox, Emptybox, ListHeader, MainWrapper, Number, NumberBold, Title, TitleNavigate } from '../../mypage/style';
import { CategoryBox, CategoryButton, CategoryLi, CategoryUl, Wrapper } from './faqListStyle';

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
    <MainWrapper>

      {/* 구분 드롭다운 */}
      <CategoryBox ref={dropdownRef}>
        <CategoryButton onClick={() => setIsDropdownOpen(prev => !prev)}>
          {selectedCategory === '' ? '구분 ▾' : `${selectedCategory} ▾`}
        </CategoryButton>

        {isDropdownOpen && (
          <CategoryUl>
            {categories.map(status => (
              <CategoryLi key={status} onClick={() => {
                setSelectedCategory(status === '전체' ? '' : status);
                setIsDropdownOpen(false);
              }}>
                {status}
              </CategoryLi>
            ))}
          </CategoryUl>
        )}
      </CategoryBox>

      {/* 리스트 */}
      <Wrapper>
        <ListHeader>
          <NumberBold>번호</NumberBold>
          <CategoryBold>구분</CategoryBold>
          <Emptybox></Emptybox>
          <Title>제목</Title>
          <Emptybox></Emptybox>
        </ListHeader>

        {filteredFaqs.map((faq, index) => (
          <ContentBox key={faq.id}>
            <Number>{index + 1}</Number>
            <Category>{faq.faqCategory}</Category>
            <Emptybox></Emptybox>
            <TitleNavigate as={NavLink} to={`/service-center/faq/detail/${faq.id}`} end>
              <Content>{faq.faqTitle}</Content>
            </TitleNavigate>
            <Emptybox></Emptybox>
          </ContentBox>
        ))}
      </Wrapper>
    </MainWrapper>
  );
};

export default FaqList;
