import React from 'react';
import { Outlet} from 'react-router-dom';
import * as S from '../style';

const MypageAlertContainer = () => {
  return (
    <S.MainWrapper>
      <S.MainTitle>내 알림</S.MainTitle>

      <div>
        <Outlet />
      </div>
      
    </S.MainWrapper>
  );
};

export default MypageAlertContainer;