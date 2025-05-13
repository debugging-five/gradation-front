import React from 'react';
import { ArtGrid, ArtImage, MainWrapper } from '../../style';
import { LikeDiv } from './artLikeListStyle';

const ArtLikeList = () => {
  return (
    <MainWrapper>
        <ArtGrid>
          <div>
            <ArtImage src="http://localhost:10000/files/api/get/eximage.png?filePath=images/mypage" alt="eximage" />
            <LikeDiv>
              <span>♡</span>
              <span>99</span>
            </LikeDiv>
          </div>
        </ArtGrid>

    </MainWrapper>
  );
};

export default ArtLikeList;