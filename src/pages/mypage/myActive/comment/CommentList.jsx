import React from 'react';
import Comment from './Comment';
import { MainTitle, MainWrapper } from '../../style';

const CommentList = () => {
  return (
    <MainWrapper>
      <MainTitle>내활동 / 작성한 댓글</MainTitle>
      
      
      {/* 반복문 */}
      <Comment />
    </MainWrapper>
  );
};

export default CommentList;