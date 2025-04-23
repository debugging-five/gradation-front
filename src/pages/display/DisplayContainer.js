import React from 'react';
import { Outlet } from 'react-router-dom';

const DisplayContainer = () => {
  return (
    <div>
      <h1>Display</h1>
      <Outlet />
    </div>
  );
};

export default DisplayContainer;