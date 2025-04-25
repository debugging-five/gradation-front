import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AuctionListContainer = () => {
  let { type, category, id } = useParams()
  id = 1

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