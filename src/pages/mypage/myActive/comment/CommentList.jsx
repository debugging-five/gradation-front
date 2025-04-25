import React from 'react';
import Comment from './Comment';

const CommentList = () => {
  return (
    <div>
      내활동 / 작성한 댓글
      
      {/* 반복문 */}
      <Comment />
    </div>
  );
};

export default CommentList;