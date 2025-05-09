import React from 'react';
import { useParams } from 'react-router-dom';
import { MainWrapper } from '../../style';

const MyApprovedListContainer = () => {
  const { category } = useParams()
  
  return (
    <MainWrapper>
      {category} 컨테이너
    </MainWrapper>
  );
};

export default MyApprovedListContainer;