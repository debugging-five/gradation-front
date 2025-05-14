import React from 'react';
import { Content, ContentBox, ApprovedStatus, ListHeader, MainWrapper, Number, Title, TitleNavigate, Wrapper, ApprovedBox, NumberTitle } from './approvedListStyle';
import { NavLink } from 'react-router-dom';

const ApprovedDisplayList = () => {
  return (
    <MainWrapper>
        <Wrapper>
            {/* 리스트 헤더 */}
            <ListHeader>
                <NumberTitle>번호</NumberTitle>
                <Title>작품명</Title>
                <ApprovedBox>승인상태</ApprovedBox>
            </ListHeader>
    
            {/* 리스트 배열 */}
            <ContentBox>
                <Number>1</Number>
                <TitleNavigate  as={NavLink} to="/service-center/qna/detail/1" end>
                    <Content>절망에 빠진 동상</Content>
                </TitleNavigate>
                <ApprovedStatus>승인대기</ApprovedStatus>
            </ContentBox>
        </Wrapper>
    </MainWrapper>
  );
};

export default ApprovedDisplayList;