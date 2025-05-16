import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { H7 } from '../../styles/common';

const S = {};

S.Container = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

S.Logo = styled(Link)`
  ${H7}
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.PALLETE.black};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.PALLETE.black};
  padding: 5px 10px;
`;

S.Nav = styled.nav`
  display: flex;
  gap: 36px;
`;

S.MenuItem = styled(Link)`
  ${H7}
  color: ${({ theme }) => theme.PALLETE.gray[900]};
  text-decoration: none;
  position: relative;

  &.active {
    color: ${({ theme }) => theme.PALLETE.primary.main};
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.PALLETE.primary.main};
    }
  }
`;

S.RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

S.BellIcon = styled.img`
  width: 20px;
  height: 20px;
`;

S.SignIn = styled(Link)`
  ${H7}
  color: ${({ theme }) => theme.PALLETE.gray[900]};
  text-decoration: none;
`;

// 로그인한 경우
S.UserMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

S.UserName = styled.span`
  ${H7}
  color: ${({ theme }) => theme.PALLETE.black};
  cursor: pointer;
`;

S.Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: #fff;
  border: 1px solid #ddd;
  list-style: none;
  padding: 8px 0;
  width: 140px;
  z-index: 100;
`;

S.DropdownLink = styled(Link)`
  ${H7}
  display: block;
  padding: 8px 16px;
  color: ${({ theme }) => theme.PALLETE.gray[900]};
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.gray[100]};
  }
`;

export default S;
