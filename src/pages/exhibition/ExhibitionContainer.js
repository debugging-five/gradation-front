import React from 'react';
import { Outlet } from 'react-router-dom';
import S from './style';

const ExhibitionContainer = () => {

  // const id = 1;

  return (
    <div>
    <S.Wrapper>
        <S.EN_H2>exhibition</S.EN_H2>
      <Outlet />
    </S.Wrapper>

      {/* <p>일반 사용자</p> */}
      {/* {id === 1 && (
        <p>어드민 일 때</p>
      )} */}

    </div>
  );
};

export default ExhibitionContainer;