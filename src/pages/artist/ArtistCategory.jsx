import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ArtistCategory = () => {
  return (
    <div>
       <div>
        <Link to={"/artist"}>한국화</Link>
        <Link to={"jokak"}>조각</Link>
        <Link to={"kongyeo"}>공예</Link>
        <Link to={"kunchuk"}>건축</Link>
        <Link to={"seoyeo"}>서예</Link>
        <Link to={"hehe"}>회화</Link>
      </div>
      <div>
        업로드
        검색
      </div>
      <Outlet />
    </div>
  );
};

export default ArtistCategory;