import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../style';
import * as SL from './artLikeListStyle';

const ArtLikeList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [likedArts, setLikedArts] = useState([]);

  useEffect(() => {
    if (!currentUser?.id) return; 

    const fetchLikedArts = async () => {
      try {
        const response = await fetch(`http://localhost:10000/displays/api/display/my/liked?userId=${currentUser.id}`);
        if (!response.ok) throw new Error('서버 응답 실패');
        const data = await response.json();
        setLikedArts(data.likedArtList);
      } catch (error) {
        console.error('좋아요 작품 목록 불러오기 실패:', error);
      }
    };

    fetchLikedArts();
  }, [currentUser]);

  return (
    <S.MainWrapper>
      <S.ArtGrid>
        {likedArts.length > 0 ? (
          likedArts.map((art) => (
            <SL.ArtContainer key={art.id}>
              <S.ArtImage
                src={`http://localhost:10000/files/api/get/${art.artImgName}?filePath=${art.artImgPath}`}
                alt={art.artTitle || '좋아요 작품 이미지'}
              />
              <SL.Overlay className="overlay">
                <SL.HoverText>{art.artTitle}DFSFfsfsddfsdssssssssssssdfsdfsfdd</SL.HoverText>
                <SL.HoverText>{art.userName}</SL.HoverText>
                <SL.HoverText></SL.HoverText>

              </SL.Overlay>
              <SL.LikeDiv>
                <span>♡</span>
                <span>{art.artLikeCount || 0}</span>
              </SL.LikeDiv>
            </SL.ArtContainer>
          ))
        ) : (
          <p>좋아요한 작품이 없습니다.</p>
        )}
      </S.ArtGrid>
    </S.MainWrapper>
  );
};

export default ArtLikeList;
