import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FormManagementCategory = () => {
  return (
    <div>
      <div>
        <Link to={"pending/upcycling"}>upcycling</Link> |
        <Link to={"pending/display"}>display</Link> |
        <Link to={"pending/exhibition"}>exhibition</Link> |
        <Link to={"pending/university"}>university</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default FormManagementCategory;
