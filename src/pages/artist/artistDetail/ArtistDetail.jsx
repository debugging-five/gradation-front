import React, { useEffect, useState } from 'react';
import S from './style'
import { useOutletContext, useParams } from 'react-router-dom';

const ArtistDetail = () => {

  const { category, id } = useParams()
  const { artist } = useOutletContext();
  const [ arts, setArts] = useState([]);

  useEffect(() => {
    const fetchArts = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artists/api/detail/${id}/arts`);
      if(!response.ok) {
        throw new Error("ArtistArts fetch Error")
      }
      const data = await response.json();
      setArts(data.arts);
      return data;
    }
    fetchArts()
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
    })
}, [id]); 


  return (
    <S.Container>
      <S.WriterIntroWrap>
        <S.Title>작가 소개</S.Title>
        <S.WriterIntro>{artist.userIntroduce}</S.WriterIntro>
      </S.WriterIntroWrap>

      <S.Category>
        <S.Title>작품 분야</S.Title>
        <S.WriterIntro>{artist.userArtCategory}</S.WriterIntro>
      </S.Category>

      <S.Category>
        <S.Title>작가 이력</S.Title>
          {artist.historyList?.map((history) => (
            <div key={history.id}>
              <S.History>
                {`${new Date(history.historyDate).getFullYear()}.${String(new Date(history.historyDate).getMonth() + 1).padStart(2, '0')}`}
              </S.History>
              {history.historyContent}
            </div>
          ))}
      </S.Category>

      <S.Category>
        <S.Title>작가 작품</S.Title>
        <S.Arts>
          {arts.map((art) => (
            <S.Art key={art.artPostId} to={`/display/${category}/detail/${art.artPostId}`}>
              <S.Overlay className="overlay">
                <S.Content>
                  <S.H2>{art.artTitle}</S.H2>
                  <S.H4>{art.userName}</S.H4>
                </S.Content>
              </S.Overlay>
              <img src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${art.artImgName}?filePath=${art.artImgPath}`} alt="작품 이미지" />
            </S.Art>
          ))}
        </S.Arts>
      </S.Category>

    </S.Container>
  );
};

export default ArtistDetail;