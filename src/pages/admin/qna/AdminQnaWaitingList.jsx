import React from 'react';
import { Link } from 'react-router-dom';

const AdminQnaWaitingList = () => {
  return (
    <div>
      <Link to={"detail/1"}>대기글 1</Link>
      <Link to={"detail/2"}>대기글 2</Link>
      <Link to={"detail/3"}>대기글 3</Link>
      <Link to={"detail/4"}>대기글 4</Link>
    </div>
  );
};

export default AdminQnaWaitingList;