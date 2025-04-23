import React from 'react';
import { Outlet } from 'react-router-dom';

const ArtistMainContainer = () => {
  return (
    <div>
      <h1>Artist</h1>
      <Outlet />
    </div>
  );
};

export default ArtistMainContainer;