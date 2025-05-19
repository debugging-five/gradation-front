import styled from 'styled-components';
import { H10, H8 } from '../../../styles/common';
import { Link } from 'react-router-dom';

const S = {};

S.FooterWrap = styled.footer`
  border-top: 1px solid #C0C5C7;
  color: ${({ theme }) => theme.PALLETE.gray[100]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

S.FooterInner = styled.div`
  width: 100%;
`;

S.FooterMenu = styled.div`
  ${H8}
  display: flex;
  gap: 60px;
  margin: 80px 12px 80px 52px;
`;

S.Menu = styled.div`
  p {
    margin-bottom: 20px;
  }

  .menu-wrap {
    font-weight: bold;
  }
`;

S.Link = styled(Link)`
  text-decoration: none;
  color: inherit;

  &.menu {
    color: ${({ theme }) => theme.PALLETE.gray[900]};
  }
`;

S.IconWrap = styled.p`
  display: flex;
  gap: 12px;
  margin: 0 24px auto auto;
  align-items: center;
`;

S.FooterInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

S.FooterInfo = styled.div`
  ${H10}
  padding: 0 0 84px 52px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  gap: 12px;


  p {
    color: ${({ theme }) => theme.PALLETE.gray[900]};
  }


`;

S.FooterLogoWrap = styled.div`
  margin-right: 24px;
`;

S.FooterLogo = styled.img`
  width: 167px;
  height: 60px;
`;

export default S;
