import React from 'react';
import { Link, useParams } from 'react-router-dom';
import S from './style';
import AuctionCategory from '../../auction/AuctionCategory';

const DisplayListContainer = () => {
  const { category } = useParams()
  const id = 1
  console.log(category)
  return (
    // <div>
    //   <Link to={`/display/${category}/detail/${id}`}>전시 미리보기1</Link>
    //   <Link to={`/display/${category}/detail/${id}`}>전시 미리보기2</Link>
    //   <Link to={`/display/${category}/detail/${id}`}>전시 미리보기3</Link>
    // </div>
    <S.Container>
      <S.Wrapper>
        <AuctionCategory />
        <S.EnH2>display</S.EnH2>
        <S.Category>
          <S.H8>한국화</S.H8>
          <p>|</p>
          <S.H8>회화</S.H8>
          <p>|</p>
          <S.H8>조각</S.H8>
          <p>|</p>
          <S.H8>공예</S.H8>
          <p>|</p>
          <S.H8>건축</S.H8>
        </S.Category>
      </S.Wrapper>
    </S.Container>
  );
};

export default DisplayListContainer;