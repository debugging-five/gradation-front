import React, { useEffect } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';

const ArtistListContainer = () => {

  const { category } = useParams()
  const id = 1
  const myId = 2;
  const { artists } = useOutletContext();
  console.log("artists 반복으로 뿌려라 김동건!", artists)

  const myCard = artists.find((artist) => artist.id === myId);
  console.log(myCard)
  const userCard = artists.filter((artist) => artist.id !== myId);

  return (
    <div>
      {myId && myCard?.userName}
      <div>
        {/* userCard 반복문 */}
        <Link to={`/artist/${category}/detail/${id}`}>게시글 1</Link>
        <Link to={`/artist/${category}/detail/${id}`}>게시글 2</Link>
        <Link to={`/artist/${category}/detail/${id}`}>게시글 3</Link>
      </div>
    </div>
  );
};

export default ArtistListContainer;