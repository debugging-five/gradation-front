import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import S from './style';

const AuctionListContainer = () => {
  const { auction, isError } = useOutletContext()
  
  const { type, category } = useParams();

  if(auction.auctionList) {
    return (
      <S.Wrapper>
        {auction.auctionList.map((post) => (
          <S.Display key={post.id} to={`/auction/${type}/${category}/detail/${post.id}`}>
            <S.Overlay className="overlay">
              <S.Content>
                <S.H2>{post.artTitle}</S.H2>
                <S.H4>{post.artistName}</S.H4>
              </S.Content>
            </S.Overlay>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${post.artImgName}?filePath=${post.artImgPath}`} alt={post.artTitle} />
          </S.Display>
        ))}
      </S.Wrapper>
    );
  } 
};


export default AuctionListContainer;