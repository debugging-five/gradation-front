import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const AdminContainer = () => {

  const location = useLocation()
  const path = location.pathname;
  console.log(path)
  let title = ""
  if(path.includes("faq")){
    title = "자주 묻는 질문"
  }else if(path.includes("qna")){
    title = "1:1 문의"
  }else if(path.includes("form-management")){
    title = "양식 관리"
  }else {
    title = "회원 관리"
  }
  
  return (
    <>
      <p>관리자 / {title}</p>
      <Outlet />
    </>
  );
};

export default AdminContainer;