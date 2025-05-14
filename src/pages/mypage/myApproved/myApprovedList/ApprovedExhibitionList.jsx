import React from 'react';
import { ApprovedBox, ApprovedStatus, Content, ContentBox, ListHeader, MainWrapper, Number, NumberTitle, Title, TitleNavigate, Wrapper } from './approvedListStyle';
import { NavLink } from 'react-router-dom';

const ApprovedExhibitionList = () => {
    return (
    <MainWrapper>
        <Wrapper>
            {/* 리스트 헤더 */}
            <ListHeader>
                <NumberTitle>번호</NumberTitle>
                <Title>학교명</Title>
                <ApprovedBox>승인상태</ApprovedBox>
            </ListHeader>
    
            {/* 리스트 배열 */}
            <ContentBox>
                <Number>1</Number>
                <TitleNavigate  as={NavLink} to="/service-center/qna/detail/1" end>
                    <Content>서울대학교</Content>
                </TitleNavigate>
                <ApprovedStatus>승인대기</ApprovedStatus>
            </ContentBox>
        </Wrapper>
    </MainWrapper>
    );
};

export default ApprovedExhibitionList;