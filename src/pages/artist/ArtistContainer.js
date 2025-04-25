import React from 'react';
import { Outlet } from 'react-router-dom';

const ArtistContainer = () => {
  return (
    <div>
      artist
      <Outlet />
    </div>
  );
};

export default ArtistContainer;