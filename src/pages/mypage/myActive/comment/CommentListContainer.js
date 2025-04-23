import React from 'react';
import { Outlet } from 'react-router-dom';

const CommentListContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default CommentListContainer;