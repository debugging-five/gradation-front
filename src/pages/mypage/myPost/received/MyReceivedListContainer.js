import React from 'react';
import { Outlet } from 'react-router-dom';

const MyReceivedListContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MyReceivedListContainer;