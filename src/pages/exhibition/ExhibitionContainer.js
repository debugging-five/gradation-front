import React from 'react';
import { Outlet } from 'react-router-dom';

const ExhibitionContainer = () => {

  // const id = 1;

  return (
    <div>
      <p>exhibition</p>

      <Outlet />

      {/* <p>일반 사용자</p> */}
      {/* {id === 1 && (
        <p>어드민 일 때</p>
      )} */}

    </div>
  );
};

export default ExhibitionContainer;