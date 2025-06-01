import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainWrapper = styled.div`
    display : flex;
    width: 800px;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 60px;
`;

export const ListHeader = styled.div`
    display: flex;
    width: 800px;
    border-top: solid 1px;
    padding: 16px 0;
    border-bottom: solid 1px;
    gap: 10px;
    justify-content: space-between;
`;

export const NumberTitle = styled.div`
    width: 80px;
    text-align: center;
    font-weight: bold;
`;
export const Number = styled.div`
    width: 80px;
    text-align: center;
`;

export const Title = styled.div`
    width: 320px;
    text-align: center;
    font-weight: bold;
`;
export const Content = styled.div`
    width: 320px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    `;
export const ApprovedBox = styled.div`
    width: 120px;
    text-align: center;
    font-weight: bold;
`;
export const ApprovedStatus = styled.div`
    width: 120px;
    text-align: center;
    color: ${({ status }) =>
    (status === '승인' || status === '승인완료') ? 'red' :
    status === '기각' ? 'orange' : 'black'};
`;

export const ContentBox = styled.div`
    display: flex;
    padding: 24px 0;
    border-bottom: solid 1px;
    width: 800px;
    gap: 10px;
    justify-content: space-between;
`;

export const TitleNavigate = styled(NavLink)`
    font-size: 16px;
    text-decoration: none;
    color: #333;
`;