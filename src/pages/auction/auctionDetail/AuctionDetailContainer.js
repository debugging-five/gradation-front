import React from 'react';
import { useParams } from 'react-router-dom';
import AuctionBiddingDetail from './AuctionBiddingDetail';
import AuctionExpectedDetail from './AuctionExpectedDetail';
import AuctionCompleteDetail from './AuctionCompleteDetail';

const AuctionDetailContainer = () => {
  const { type, category, id } = useParams()
  console.log("type", type)
  console.log("category", category)
  console.log("id", id)

  return (
    <>
      { type === "bidding" && <AuctionBiddingDetail type={type} category={category} id={id} />}
      { type === "expected" && <AuctionExpectedDetail type={type} category={category} id={id} />}
      { type === "complete" && <AuctionCompleteDetail type={type} category={category} id={id} />}
    </>
  );
};

export default AuctionDetailContainer;