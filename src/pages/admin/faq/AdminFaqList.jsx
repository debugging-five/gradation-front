import React from 'react';
import { Link } from 'react-router-dom';

const AdminFaqList = () => {
  return (
    <div style={{display : "flex", flexDirection : "column"}}>
      <Link to={"detail/1"}>자주 묻는 질문1</Link>
      <Link to={"detail/2"}>자주 묻는 질문2</Link>
      <Link to={"detail/3"}>자주 묻는 질문3</Link>
      <Link to={"detail/4"}>자주 묻는 질문4</Link>
      <Link to={"detail/4"}>자주 묻는 질문5</Link>
      <div>
        <Link to={"registration"}>등록하기</Link>
      </div>
    </div>
  );
};

export default AdminFaqList;