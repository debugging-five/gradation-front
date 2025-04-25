import React from 'react';
import { Link } from 'react-router-dom';

const AdminQnaCompletedList = () => {
  return (
    <div> 
      QnaCompletedList
      <Link to={"/mypage/admin/qna/detail/1"}>완료 대기글 1</Link>
      <Link to={"/mypage/admin/qna/detail/2"}>완료 대기글 2</Link>
      <Link to={"/mypage/admin/qna/detail/3"}>완료 대기글 3</Link>
      <Link to={"/mypage/admin/qna/detail/4"}>완료 대기글 4</Link>
    </div>
  );
};

export default AdminQnaCompletedList;