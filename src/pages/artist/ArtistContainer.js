import React from 'react';
import { Outlet } from 'react-router-dom';

const ArtistContainer = () => {
  return (
    <div>
      컨테이너
      <Outlet />
    </div>
  );
};

export default ArtistContainer;