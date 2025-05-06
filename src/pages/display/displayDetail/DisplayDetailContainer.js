import React from 'react';
import { Link } from 'react-router-dom';

const DisplayDetailContainer = () => {
  const email = "donggeon@test.app"

  return (
    <div>
      <div>이미지 영역</div>
      <div>댓글 컴포넌트</div>
      <Link to={`/mypage/contact-artist/write/${email}`}>작가와의 연락</Link>
    </div>
  );
};

export default DisplayDetailContainer;