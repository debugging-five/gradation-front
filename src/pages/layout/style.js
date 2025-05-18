import styled from 'styled-components';

const S = {};

S.Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #FBFCFC;
  height: 56px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  z-index: 1000;
`;

S.Nav = styled.nav`
  display: flex;
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
  height: 34px;
`;

S.Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 60px;
`;

S.MenuItem = styled.li`
  position: relative;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.PALLETE.gray[900]};
    font-size: 19px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT_EN.regular};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.PALLETE.primary.main};
    }
  }

  &:hover > ul,
  &:focus-within > ul {
    visibility: visible;
    opacity: 1;
  }
`;

// 드롭다운
S.Dropdown = styled.ul`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #FBFCFC;
  list-style: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: 0.1px solid ${({ theme }) => theme.PALLETE.gray[500]};
  padding: 8px 16px;
  transition: visibility 0.2s ease, opacity 0.2s ease;

  li {
    padding: 10px;

    a {
      color: ${({ theme }) => theme.PALLETE.gray[900]};
      font-size: 16px;
      text-decoration: none;
      white-space: nowrap;

      &:hover {
        background-color: #FBFCFC;
        color: ${({ theme }) => theme.PALLETE.primary.main};
      }
    }
  }
`;

// 로그인 영역
S.LoginSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 52px;
  position: relative;

  .header-bell {
    height: 24px;
    cursor: pointer;
    margin-right: 24px;
  }
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

  ul {
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
`;

export default S;
