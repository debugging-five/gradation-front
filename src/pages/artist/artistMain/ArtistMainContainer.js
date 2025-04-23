import React from 'react';
import { Outlet } from 'react-router-dom';

const ArtistMainContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ArtistMainContainer;