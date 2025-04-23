import React from 'react';
import { Outlet } from 'react-router-dom';

const DisplayDetailContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DisplayDetailContainer;