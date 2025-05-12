import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const CategoryWrapper = styled.div`
    display : flex;
    width: 800px;
    gap: 24px;
    align-items: center;
    justify-content: center;
    padding: 20px 0;

`;

export const BarContent = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: #333;

  &.active {
    color: red;
  }

  &:hover {
    color: darkgray;
  }
`;