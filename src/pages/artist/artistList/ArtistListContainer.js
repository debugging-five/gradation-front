import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ArtistListContainer = () => {

  const { category } = useParams()
  console.log(category)
  const id = 1

  return (
    <div>
      아티스트 리스트 컨테이너
      <div>
        <Link to={`/artist/${category}/detail/${id}`}>게시글 1</Link>
        <Link to={`/artist/${category}/detail/${id}`}>게시글 2</Link>
        <Link to={`/artist/${category}/detail/${id}`}>게시글 3</Link>
      </div>
    </div>
  );
};

export default ArtistListContainer;