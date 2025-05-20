import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../style';
import * as SA from './myArtListStyle';
import { NavLink } from 'react-router-dom';

const MyArtList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [myArtList, setMyArtList] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    const fetchMyArtList = async () => {
      try {
        const response = await fetch(`http://localhost:10000/displays/api/display/my/list?userId=${currentUser.id}`);
        if (!response.ok) {
          throw new Error('서버 응답 실패');
        }
        const data = await response.json();
        setMyArtList(data.myArtList);
      } catch (error) {
        console.error('작품 목록 불러오기 실패:', error);
      }
    };

    fetchMyArtList();
  }, [currentUser]);

  return (
    <S.Wrapper>
      <SA.ArtGrid>
        {myArtList.length > 0 ? (
          myArtList.map((art, index) => (
            <SA.ArtItem key={index}>
              <SA.ArtImage
                src={`http://localhost:10000/files/api/get/${art.artImgName}?filePath=${art.artImgPath}`}
                alt={art.artTitle}
              />
              <NavLink to={`/display/detail/${art.id}`}>
                <SA.Overlay>{art.artTitle}</SA.Overlay>
              </NavLink>
            </SA.ArtItem>
          ))
        ) : (
          <p>작품이 없습니다.</p>
        )}
      </SA.ArtGrid>
    </S.Wrapper>
  );
};

export default MyArtList;
