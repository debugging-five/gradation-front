import React from 'react';
import { NavLink } from 'react-router-dom';
import * as SA from './approvedListStyle';

const ApprovedExhibitionList = () => {
    return (
    <SA.MainWrapper>
        <SA.Wrapper>
            {/* 리스트 헤더 */}
            <SA.ListHeader>
                <SA.NumberTitle>번호</SA.NumberTitle>
                <SA.Title>학교명</SA.Title>
                <SA.ApprovedBox>승인상태</SA.ApprovedBox>
            </SA.ListHeader>
    
            {/* 리스트 배열 */}
            <SA.ContentBox>
                <SA.Number>1</SA.Number>
                <SA.TitleNavigate  as={NavLink} to="/service-center/qna/detail/1" end>
                    <SA.Content>서울대학교</SA.Content>
                </SA.TitleNavigate>
                <SA.ApprovedStatus>승인대기</SA.ApprovedStatus>
            </SA.ContentBox>
        </SA.Wrapper>
    </SA.MainWrapper>
    );
};

export default ApprovedExhibitionList;