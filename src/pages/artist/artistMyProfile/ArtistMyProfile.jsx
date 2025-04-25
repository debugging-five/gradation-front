import React from 'react';
import { Outlet } from 'react-router-dom';

const ArtistMyProfile = () => {
  const isArtist = true
  
  return (
    <div>
      {isArtist && (
        <>
          내 작가 프로필 수정할 수 있는 곳😎
        </>
      )}
      <Outlet />
    </div>
  );
};

export default ArtistMyProfile;