import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "./style";

const AdminFaqList = () => {
  const [faqList, setFaqList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/admin/api/faq/list', {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) throw new Error('서버 오류 발생');
        return res.json();
      })
      .then((data) => setFaqList(data))
      .catch((err) => console.error(err));
  }, []);


  const handleDetail = (id) => {
    navigate(`/mypage/admin/faq/${id}`);
  };

  const handleRegister = () => {
    navigate(`/mypage/admin/faq/register`);
  };

  return (
    <S.Container>
      <S.Title>관리자 / 자주 묻는 질문</S.Title>
      <S.Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>구분</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          {faqList.map((faq, index) => (
            <tr key={faq.id}>
              <td>{index + 1}</td>
              <td>{faq.category}</td>
              <S.ClickableTd onClick={() => handleDetail(faq.id)}>
                {faq.title}
              </S.ClickableTd>
            </tr>
          ))}
        </tbody>
      </S.Table>

      <S.ButtonWrapper>
        <S.RegisterButton onClick={handleRegister}>등록</S.RegisterButton>
      </S.ButtonWrapper>

      <S.Pagination>
        <span>&lt;</span>
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>&gt;</span>
      </S.Pagination>
    </S.Container>
  );
};

export default AdminFaqList;
