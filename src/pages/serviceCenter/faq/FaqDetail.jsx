import React, { useEffect, useState } from 'react';
import { Button, ButtonDiv, Category, Line, MainWrapper, QContent, QSize, QTitle, Title, Wrapper } from './faqDetailStyle';
import { useNavigate, useParams } from 'react-router-dom';

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
    <MainWrapper>
      <Wrapper>
        <Category>{faq.faqCategory} 관련 문의</Category> 
        <Title>
          <QSize>Q</QSize>
          <QTitle>{faq.faqTitle}</QTitle> 
        </Title>
        <Line />
        <QContent>{faq.faqContent}</QContent> 
      </Wrapper>

      <ButtonDiv>
        <Button onClick={() => navigate(-1)}>목록</Button>
      </ButtonDiv>
    </MainWrapper>
  );
};

export default FaqDetail;