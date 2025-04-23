import React from 'react';
import { Outlet } from 'react-router-dom';

const MyArtListContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MyArtListContainer;