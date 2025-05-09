import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TextBox = styled.div`
    margin-bottom: 48px;
`;

export const MainContent1 = styled.div`
    margin-top: 28px;
    margin-bottom: 56px;
    font-size: 18px;
    font-weight: bold;
`;

export const MainContent2 = styled.div`
    margin-bottom: 28px;
    font-size: 18px;
    color: gray;
`;

export const SubTitle = styled.div`
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 12px;
`;


export const Content = styled.div`
    font-size: 18px;
    color: gray;
`;

export const EndBar = styled.p`
  width: 248px;
  border-bottom: solid 1px;
`;

export const GoToQna = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  color: red;
`;

export const ButtonDiv = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    gap: 80px;
`;

export const Button1 = styled.button`
    width: 300px;
    height: 50px;
    color: white;
    background-color: red;
    border: solid 1px red;
    font-size: 18px;
`;
export const Button2 = styled.button`
    width: 300px;
    height: 50px;
    color: red;
    background-color: white;
    border: solid 1px red;
    font-size: 18px;
`;

export const CheckBoxDiv = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    margin-top: 52px;
`;

export const CheckImage = styled.div`
    display: flex;
    width: 16px;
    height: 16px;
`;