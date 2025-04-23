import React from 'react';
import { Outlet } from 'react-router-dom';

const UserManagementContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserManagementContainer;