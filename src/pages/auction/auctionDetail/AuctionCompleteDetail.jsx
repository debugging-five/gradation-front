import React from 'react';

const AuctionCompleteDetail = ({type, category, id}) => {
  return (
    <div>
      {type}, {category}, {id}
      경매 완료
    </div>
  );
};

export default AuctionCompleteDetail;