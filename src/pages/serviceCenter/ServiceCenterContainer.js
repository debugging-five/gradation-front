import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ServiceCenterContainer = () => {
  return (
    <div style={{display : "flex"}}>
      <div style={{
        display : "flex",
        flexDirection : "column"
        }}>
        <h1>고객센터</h1>
        <NavLink to={"/service-center/qna"}>내 문의 목록</NavLink>
        <NavLink to={"/service-center/qna/registration"}>1 : 1 문의하기</NavLink>
        <NavLink to={"/service-center/faq"}>자주 묻는 질문</NavLink>
      </div>
      <div>
        <h1>고객센터 / (내 문의 목록 / 1 : 1 문의 / 자주 묻는 질문) </h1>
        <div><Outlet /></div>
      </div>
    </div>
  );
};

export default ServiceCenterContainer;


