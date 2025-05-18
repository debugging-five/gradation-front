import styled from 'styled-components';

const S = {};

S.FooterWrap = styled.footer`
  border-top: 1px solid #C0C5C7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

S.FooterInner = styled.div`
  width: 100%;
  max-width: 100%;
`;

S.FooterMenu = styled.div`
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

  a {
    text-decoration: none;
    color: #6E7476;
  }
`;

S.IconWrap = styled.p`
  margin-left: auto;

  .icon {
    color: #333333;
    margin-left: 10px;
  }
`;

S.FooterInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

S.FooterInfo = styled.div`
  padding: 0 0 84px 52px;
  font-size: var(--font-size-h9);
  color: var(--color-gray900);
  white-space: nowrap;
`;

S.FooterLogoWrap = styled.div``;

S.FooterLogo = styled.img`
  width: 167px;
  height: 60px;
`;

export default S;
