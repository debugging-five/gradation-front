import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import S from './style'
import { useSelector } from 'react-redux';

const ArtistDetailContainer = () => {

  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user)
  const myId = currentUser?.id;

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
      console.log("res", res)
    })
    .catch((error) => {
      // console.error(error)
    })
}, [id]); 

  if (!artist) return <p>Loading...</p>;

  const extractId = (url) => {
    try {
      const u = new URL(url);
      return u.pathname.replace(/^\/+/, '').slice(0, 20);
    } catch {
      return url;
    }
  };

  return (
    <S.DetailWrap>
      <S.Left>
        <S.ProfileImg src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${artist.userImgName}?filePath=${artist.userImgPath}`} />
        <S.Name>{artist.userName}</S.Name>
        <S.University>{artist.universityName}</S.University>

        {artist?.id !== undefined && myId === artist.id ? (
          <S.Button onClick={() => navigate('/mypage/artist-datail-modify')}>
            <p>작가페이지 수정</p>
          </S.Button>
        ) : (
          <S.Link to={`/mypage/contact-artist/write/${artist.userEmail}`}>
            <S.Button>
              <p>작가와 연락</p>
              <S.MessageIcon src={`/assets/images/icon/message-white.png`} alt="message" />
            </S.Button>
          </S.Link>
        )}

        <S.SNSWrap>
          {artist.userInstagram && (
            <S.SnS as="a" href={`https://instagram.com/${artist.userInstagram}`} target="_blank" rel="noopener noreferrer">
              <S.SnSIcon src={`/assets/images/icon/artist-detail-instagram.png`} alt="Instagram" />
              <S.SnSText>{extractId(artist.userInstagram)}</S.SnSText>
            </S.SnS>
          )}

          {artist.userBlog && (
            <S.SnS as="a" href={`https://blog.com/${artist.userBlog}`} target="_blank" rel="noopener noreferrer">
              <S.SnSIcon src={`/assets/images/icon/artist-detail-blog.png`} alt="Blog" />
              <S.SnSText>{extractId(artist.userBlog)}</S.SnSText>
            </S.SnS>
          )}

          {artist.userYoutube && (
            <S.SnS as="a" href={`https://youtube.com/${artist.userYoutube}`} target="_blank" rel="noopener noreferrer">
              <S.SnSIcon src={`/assets/images/icon/artist-detail-youtube.png`} alt="YouTube" />
              <S.SnSText>{extractId(artist.userYoutube)}</S.SnSText>
            </S.SnS>
          )}
        </S.SNSWrap>
      </S.Left>

      <S.Right>
        <Outlet context={{ artist }} />
      </S.Right>
    </S.DetailWrap>
  );
};

export default ArtistDetailContainer;