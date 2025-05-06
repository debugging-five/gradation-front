import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DisplayListContainer = () => {
  const { category } = useParams()
  const id = 1
  console.log(category)
  return (
    <div>
      <Link to={`/display/${category}/detail/${id}`}>전시 미리보기1</Link>
      <Link to={`/display/${category}/detail/${id}`}>전시 미리보기2</Link>
      <Link to={`/display/${category}/detail/${id}`}>전시 미리보기3</Link>
    </div>
  );
};

export default DisplayListContainer;