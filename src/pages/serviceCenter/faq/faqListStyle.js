import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const MainWrapper = styled.div`
    display : flex;
    width: 800px;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    margin-top: 48px;
    margin-bottom: 60px;
`;

export const ListHeader = styled.div`
    display: flex;
    width: 800px;
    border-top: solid 1px;
    padding: 16px 0;
    border-bottom: solid 1px;
    gap: 10px;
`;

export const Number = styled.div`
    width: 80px;
    text-align: center;
`;

export const Category = styled.div`
    width: 80px;
    text-align: center;
`;
export const Title = styled.div`
    width: 440px;
    text-align: center;
`;
export const Content = styled.div`
    width: 440px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
export const Emptybox = styled.div`
    width: 80px;
    text-align: center;
`;

export const ContentBox = styled.div`
    display: flex;
    padding: 24px 0;
    border-bottom: solid 1px;
    width: 800px;
    gap: 10px;
`;

export const TitleNavigate = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: #333;
`;