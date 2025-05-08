import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import S from './style';

const AuctionContainer = () => {

  const [cursor,setCursor] = useState(1);
  console.log(cursor);
  
  const auctionList = async () => {
    const response = await fetch(`http://localhost:10000/auction/api/footer/${cursor}`)
    const lists = response.json();
    return lists
  }

  auctionList().then((lists) => {
    console.log(lists);
  })

  return (
    <S.Wrapper>
      <S.EN_H2>auction</S.EN_H2>
      <Outlet />
      <S.AuctionList>
	      <S.AuctionIng>
	         <S.AuctionIngTitle>경매중인 작품</S.AuctionIngTitle>
	      </S.AuctionIng>
	      <S.ArtWrapper>
          <button>왼쪽</button>
          <S.ArtList>
            <img src="../assets/images/display/art/sculpture/img-sculpture-cat.jpeg" alt="리스트1"/>
          </S.ArtList>
          <S.ArtList>
            <img src="../assets/images/display/art/sculpture/img-sculpture-cat-3.jpeg" alt="리스트2"/>
          </S.ArtList>
          <S.ArtList>
            <img src="../assets/images/display/art/sculpture/img-sculpture-furuit.jpeg" alt="리스트3"/>
          </S.ArtList>
          <S.ArtList>
            <img src="../assets/images/display/art/sculpture/img-sculpture-wow.jpeg" alt="리스트4"/>
          </S.ArtList>
          <button>오른쪽</button>
	      </S.ArtWrapper>
	    </S.AuctionList>
    </S.Wrapper>
  );
};

export default AuctionContainer;