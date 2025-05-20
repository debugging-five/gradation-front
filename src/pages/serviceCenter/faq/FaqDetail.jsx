import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as SF from './faqDetailStyle';

const FaqDetail = () => {
  const { id } = useParams(); // URL에서 id 꺼냄
  const navigate = useNavigate();
  const [faq, setFaq] = useState(null); // 상세 데이터 상태

  useEffect(() => {
    const fetchFaqDetail = async () => {
      try {
        const response = await fetch(`http://localhost:10000/faq/api/faq/${id}`);
        const data = await response.json();
        setFaq(data);
      } catch (error) {
        console.error('FAQ 상세 호출 실패:', error);
      }
    };

    fetchFaqDetail();
  }, [id]);

    if (!faq) {
    return <div>로딩 중...</div>;
    }
  
  return (
    <SF.MainWrapper>
      <SF.Wrapper>
        <SF.Category>{faq.faqCategory} 관련 문의</SF.Category> 
        <SF.Title>
          <SF.QSize>Q</SF.QSize>
          <SF.QTitle>{faq.faqTitle}</SF.QTitle> 
        </SF.Title>
        <SF.Line />
        <SF.QContent>{faq.faqContent}</SF.QContent> 
      </SF.Wrapper>

      <SF.ButtonDiv>
        <SF.Button onClick={() => navigate(-1)}>목록</SF.Button>
      </SF.ButtonDiv>
    </SF.MainWrapper>
  );
};

export default FaqDetail;