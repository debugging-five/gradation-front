import React from 'react';
import { Outlet } from 'react-router-dom';

const UpcyclingMainContainer = () => {
  return (
    <div>
      업 싸이클링
      <Outlet />
    </div>
  );
};

export default UpcyclingMainContainer;