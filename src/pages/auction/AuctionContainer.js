import { Link, Outlet } from 'react-router-dom';
import S from './style';

const AuctionContainer = () => {
  return (
    <S.Wrapper>
      <Link to="/auction/bidding/korean" style={{ color: 'inherit', textDecoration: 'none' }}>
        <S.EN_H2>auction</S.EN_H2>
      </Link>
      <Outlet />
    </S.Wrapper>
  );
};

export default AuctionContainer;
