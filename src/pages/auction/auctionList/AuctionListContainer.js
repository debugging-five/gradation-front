import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

const AuctionListContainer = () => {
  let { type, category, id } = useParams()
  id = 36

  if(!(category === "korean" || category === "sculpture" || category === "craft" || category === "architecture" || category === "calligraphy" || category === "painting" || category === null)) {
    return <Navigate to="/auction/bidding/korean"></Navigate>
  }
  
  
  return (
    <div>
      리스트 페이지
      <div>
        <Link to={`/auction/${type}/${category}/detail/${id}`}>게시글 1번</Link>
        <Link to={`/auction/${type}/${category}/detail/${id}`}>게시글 2번</Link>
        <Link to={`/auction/${type}/${category}/detail/${id}`}>게시글 3번</Link>
      </div>
    </div>
  );
};

export default AuctionListContainer;