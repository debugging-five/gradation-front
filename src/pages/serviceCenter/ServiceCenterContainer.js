import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { BarContent, BarContentWapper, BarTitle, Category, EndBar, Leftbar, MainWrapper, Title } from './serviceCenterContainerStyle';

const ServiceCenterContainer = () => {
    const location = useLocation()
    const path = location.pathname;
    console.log(path)
    let title = ""
    if(path.includes("faq")){
      title = "자주 묻는 질문"
    }else if(path.includes("registration")){
      title = "1 : 1 문의하기"
    }else{
      title = "내 문의 목록"
    }

  return (
    <MainWrapper>
      <Leftbar>
        <BarTitle>고객센터</BarTitle>
          <BarContentWapper>
            <BarContent  as={NavLink} to="/service-center/qna" >내 문의 목록</BarContent>
            <BarContent  as={NavLink} to="/service-center/registration">1 : 1 문의하기</BarContent>
            <BarContent  as={NavLink} to="/service-center/faq" >자주 묻는 질문</BarContent>
          </BarContentWapper>
        <EndBar></EndBar>  
      </Leftbar>

      <Category>
        <Title> 고객센터 / {title} </Title>
        <div><Outlet /></div>
      </Category>
      
    </MainWrapper>
  );
};

export default ServiceCenterContainer;


