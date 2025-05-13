import React from 'react';
import { ArtGrid, ArtImage, MainWrapper } from '../../style';

const MyArtList = () => {
  return (
        <MainWrapper>
            <ArtGrid>
              <div>
                <ArtImage src="http://localhost:10000/files/api/get/eximage.png?filePath=images/mypage" alt="eximage" />
              </div>
            </ArtGrid>
        </MainWrapper>
  );
};

export default MyArtList;