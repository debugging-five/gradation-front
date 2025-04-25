import React from 'react';
const AuctionBiddingDetail = ({type, category, id}) => {
  return (
    <div>
      {type}, {category}, {id}
      경매 중
    </div>
  );
};

export default AuctionBiddingDetail;