import React from 'react';
import { Link } from 'react-router-dom';

const AuctionExpectedDetail = ({type, category, id}) => {

  const userId = 2
  console.log(userId === parseInt(id))

  return (
    <div>
      {type}, {category}, {id}
      {userId === parseInt(id) && <p><Link to={`/auction/${type}/${category}/modify/${id}`}>수정</Link></p>}
      경매 예정
    </div>
  );
};

export default AuctionExpectedDetail;