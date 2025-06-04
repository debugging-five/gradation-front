import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { H10, H8 } from '../../../styles/common';
const primary = "#EE3333";
const gray100 = "#FBFCFC";
const gray500 = "#C0C5C7";
const gray900 = "#6E7476";
const black = "#333333";
const warning = "#E49804";

const S = {};

S.Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.PALLETE.gray[100]};
  height: 56px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  transform: translateY(0);
  z-index: 1000;

  &.hide {
    transform: translateY(-100%);
  }
  &.show {
    transform: translateY(0);
  }
`;

S.Nav = styled.nav`
  display: flex;
  flex-shrink: 0;
  width: 1400px;
  align-items: center;
  height: 100%;
`;

S.HeaderLogoWrap = styled.div`
  margin: 11px 52px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

S.HeaderLogo = styled.img`
  width: 96px;
`;

S.Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 60px;
`;

S.MenuItemWrapper = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 48px; // 드롭다운까지의 거리
  }
  
`;

S.MenuItem = styled.li`
  position: relative;

  &:hover > ul,
  &:focus-within > ul {
    visibility: visible;
    opacity: 1;
  }
`;

S.MenuLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.PALLETE.gray[900]};
    font-size: 19px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT_EN.regular};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.PALLETE.primary.main};
    }
`;

S.Dropdown = styled.ul`
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.PALLETE.gray[100]};
  list-style: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: 0.1px solid ${({ theme }) => theme.PALLETE.gray[500]};
  padding: 8px 16px;
  transition: visibility 0.2s ease, opacity 0.2s ease;

  li {
    padding: 10px;
  }
`;

S.DropdownLink = styled(Link)`
  color: ${({ theme }) => theme.PALLETE.gray[900]};
  font-size: 16px;
  text-decoration: none !important;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.gray[100]};
    color: ${({ theme }) => theme.PALLETE.primary.main};
  }
`;

S.DropdownSpan = styled.span`
  color: ${({ theme }) => theme.PALLETE.gray[900]};
  font-size: 16px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.gray[100]};
    color: ${({ theme }) => theme.PALLETE.primary.main};
  }
`;

S.LoginSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 24px;
  position: relative;
`;

S.BellWrap = styled.div`
  position: relative;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`

S.BellIcon = styled.img`
  height: 24px;
  margin-right: 24px;
`;



S.SignInWrap = styled.div`
  position: relative;

  .sign-in {
    text-decoration: none;
    color: ${({ theme }) => theme.PALLETE.gray[900]};
    font-size: 19px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT_EN.regular};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.PALLETE.primary.main};
    }
  }

  &:hover ul {
    visibility: visible;
    opacity: 1;
  }
`;

S.BellDropdown = styled.div`
  width: 180px;
  height: 412px;
  border: solid 1px #C0C5C7;
  background-color: #FBFCFC;
  position: absolute;
  /* top: 100%; */
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
`

S.Title = styled.div`
  display: flex;
  justify-content: space-between;
  height: 43px;
  border-bottom: solid 1px #C0C5C7;
  align-items: center;
`

S.Alarm = styled.p`
  ${H8}
  margin: 0 0 0 12px;
`

S.Read = styled.p`
  ${H10}
  color: #EE3333;
  margin: 0 12px 0 0;
`

S.Content = styled.div`

`

S.MoreAlarm = styled.div`
  background-color: #C0C5C7;
  ${H10}
  display: flex;
  align-items: center;
  justify-content: center;
`

S.AlarmContent = styled.div`
  border-bottom: solid 1px #C0C5C7;
  height: 34px;
`

S.Message = styled.p`
  ${H10}
  color: #6E7476;
  display: flex;
  align-items: center;
  justify-content: center;
`



export default S;
