import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import S from './style'

const ArtistDetailContainer = () => {

  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtistDetail = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artists/api/detail/${id}`);

      if(!response.ok) {
        throw new Error("ArtistDetail fetch Error")
      }
      const data = await response.json();
      setArtist(data);
      return data;
  }
  fetchArtistDetail()
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
    })
}, [id]); 

  if (!artist) return <p>Loading...</p>;

  return (
    <S.DetailWrap>
      <S.Left>
        <S.ProfileImg src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${artist.userImgName}?filePath=${artist.userImgPath}`} />
        <S.Name>{artist.userName}</S.Name>
        <S.University>{artist.universityName}</S.University>

        <S.Button>
          <p>작가와 연락</p>
          <S.MessageIcon src={`/assets/images/icon/message-white.png`} alt="message" />
        </S.Button>

        <S.SNSWrap>
          <S.SnS>
            <Link>
            <S.SnSIcon src={`/assets/images/icon/artist-detail-instagram.png`} alt="message" />
            <p>{artist.userInstagram}</p>
            </Link>
          </S.SnS>
          <S.SnS>
            <S.SnSIcon src={`/assets/images/icon/artist-detail-blog.png`} alt="message" />
            <p>{artist.userBlog}</p>
          </S.SnS>
          <S.SnS>
            <S.SnSIcon src={`/assets/images/icon/artist-detail-youtube.png`} alt="message" />
            <p>{artist.userYoutube}</p>
          </S.SnS>
        </S.SNSWrap>
      </S.Left>

      <S.Right>
        <Outlet context={{ artist }} />
      </S.Right>
    </S.DetailWrap>
  );
};

export default ArtistDetailContainer;