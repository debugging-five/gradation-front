import React from 'react';
import { Outlet } from 'react-router-dom';

const MyReceivedDetailContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MyReceivedDetailContainer;