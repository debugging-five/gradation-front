import React from 'react';
import { useParams } from 'react-router-dom';

const MyApprovedListContainer = () => {
  const { category } = useParams()
  
  return (
    <div>
      {category} 컨테이너
    </div>
  );
};

export default MyApprovedListContainer;