import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const MainWrapper = styled.div`
  display : flex;
  justify-content: center; 
  padding : 184px 380px 300px 380px;
  gap: 120px;
`;

export const Leftbar = styled.div`
  width: 248px;
  height: 500px;
  display : flex;
  flex-direction : column;
  gap: 16px;
`;

export const BarContentWapper = styled.div`
  display : flex;
  flex-direction : column;
  gap: 12px;
`;

export const BarTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

export const EndBar = styled.p`
  width: 248px;
  border-bottom: solid 1px;
`;


export const Category = styled.div`
  width: 800px;
`;


export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const BarContent = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  color: #333;

  &.active {
    font-weight: bold;
    color: red;
  }

  &:hover {
    color: darkgray;
  }
`;