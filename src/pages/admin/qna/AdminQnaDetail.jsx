import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const AdminQnaDetail = () => {
  const [edit, setEdit] = useState(false)
  const {id} = useParams()
  const qna = {
    title : "김동건을 어떻게 해야하죠?",
    content : "나갈 때 나뭇가지로 서당에서처럼 종아리 걷어야죠",
    status : false
  }

  const { status } = qna;
  const handleEdit = () => setEdit(!edit)

  return (
    <div>
      세부 정보 읽기
      { !status && (
        edit ? (
        <div>
          <input placeholder='답변 내용' />
          <p onClick={handleEdit}>취소하기</p>
          <Link to={`/mypage/qna/detail/${id}`}>등록하기 하기</Link>
        </div>
        ) : (
          <p onClick={handleEdit}>답변하기</p>
        )
      )}
    </div>
  );
};

export default AdminQnaDetail;