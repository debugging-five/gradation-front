import React from 'react';
import { useParams } from 'react-router-dom';

const AuctionExpectedModify = () => {
  let { type, category, id } = useParams()
  return (
    <div>
      AuctionExpectedModify
    </div>
  );
};

export default AuctionExpectedModify;