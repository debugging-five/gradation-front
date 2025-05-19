import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as S from './style';

const FaqList = () => {
  const [faqList, setFaqList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const categories = ['전체', '전시', '전시회', '경매', '업사이클', '마이페이지', '기타'];

  useEffect(() => {
    // 관리자 여부 확인
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch('http://localhost:10000/users/api/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.currentUser?.userAdminOk === true) {
          setIsAdmin(true);
        }
      })
      .catch(err => console.error('관리자 확인 실패:', err));
  }, []);

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

  const handleRegister = () => {
    navigate('/mypage/admin/faq/register');
  };

  return (
    <S.FaqPageContainer>
      <S.DropdownContainer ref={dropdownRef}>
        <S.DropdownToggleButton onClick={() => setIsDropdownOpen(prev => !prev)}>
          {selectedCategory === '' ? '구분 ▾' : `${selectedCategory} ▾`}
        </S.DropdownToggleButton>

        {isDropdownOpen && (
          <S.DropdownList>
            {categories.map(status => (
              <S.DropdownItem key={status} onClick={() => {
                setSelectedCategory(status === '전체' ? '' : status);
                setIsDropdownOpen(false);
              }}>
                {status}
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        )}
      </S.DropdownContainer>

      {isAdmin && (
        <S.RegisterButtonContainer>
          <S.RegisterButton onClick={handleRegister}>등록</S.RegisterButton>
        </S.RegisterButtonContainer>
      )}

      <S.FaqTableWrapper>
        <S.FaqTableHeader>
          <S.FaqNumberHeader>번호</S.FaqNumberHeader>
          <S.FaqCategoryHeader>구분</S.FaqCategoryHeader>
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
    </S.FaqPageContainer>
  );
};

export default FaqList;
