import { useSelector } from 'react-redux';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import S from './style';

const ArtistListContainer = () => {
  const { category } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const { artists, cursor, setCursor, largeCursor, pageLength, plusLargeCursor, minusLargeCursor, contents} = useOutletContext();
  const navigate = useNavigate();

  if (!artists || artists.length === 0) {
    return <p>작가가 존재하지 않습니다.</p>;
  }

  const myId = currentUser?.id;
  
  const artistData = currentUser ? artists.find((artist) => artist.id === myId) : null;
  const myCard = currentUser && artistData
  ? { ...currentUser, ...artistData }
  : null;
  const userCards = artists.filter((artist) => artist.id !== myId);

  console.log("current", currentUser);
  console.log("myprofile", myCard);
  console.log("artist", artists);

  return (
    <S.Container>
      {currentUser && myCard && (
        <>
          <S.MyCard onClick={() => navigate(`/artist/${category}/detail/${myCard.id}`)} > 
            <S.BackgroundImg
              src={
                myCard.userBackgroundImgName && myCard.userBackgroundImgName !== 'user-background.jpg'
                  ? `${process.env.REACT_APP_BACKEND_URL}/files/api/get/${myCard.userBackgroundImgName}?filePath=${myCard.userBackgroundImgPath}`
                  : `${process.env.REACT_APP_BACKEND_URL}/files/api/get/${myCard.artImgName}?filePath=${myCard.artImgPath}`
              }
              alt='배경 사진'
            />
            <S.ProfileImg src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${myCard.userImgName}?filePath=${myCard.userImgPath}`} alt="내 프로필" />
            <S.CardWrap>
              <S.CardName>{myCard.userName}</S.CardName>
              <S.CardUniversity>{myCard.universityName}</S.CardUniversity>
            </S.CardWrap>
          </S.MyCard>

          <S.Line />
        </>
      )}

      <S.ArtistWrap>
        {userCards.map((artist) => (
          <S.ArtistCard
            key={artist.id}
            onClick={() => navigate(`/artist/${category}/detail/${artist.id}`)}
          >
            <S.BackgroundImg
              src={
                artist.userBackgroundImgName && artist.userBackgroundImgName !== 'user-background.jpg'
                  ? `${process.env.REACT_APP_BACKEND_URL}/files/api/get/${artist.userBackgroundImgName}?filePath=${artist.userBackgroundImgPath}`
                  : `${process.env.REACT_APP_BACKEND_URL}/files/api/get/${artist.artImgName}?filePath=${artist.artImgPath}`
              }
              alt="배경 사진"
            />
            <S.ProfileImg src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${artist.userImgName}?filePath=${artist.userImgPath}`} alt={artist.userName} />
            <S.CardWrap>
              <S.CardName>{artist.userName}</S.CardName>
              <S.CardUniversity>{artist.universityName}</S.CardUniversity>
            </S.CardWrap>
          </S.ArtistCard>
        ))}
      </S.ArtistWrap>

      <S.PagenationWrapper>
        {contents > 75 ? 
          <S.PagenationIcon src='/assets/images/icon/left.png' onClick={minusLargeCursor}/>
          : ""
        }
          {pageLength.map((datas, i) => (
            i === largeCursor ?
            datas.map((data, i) => (
              data !== null?
              <S.PagenationButton key={i} onClick={() => {setCursor((data + 1))}} $active={cursor === data + 1}>
              {data + 1}
              </S.PagenationButton> : ''
            )) : ''
          ))}
        {contents > 75 ?
         <S.PagenationIcon src='/assets/images/icon/right.png' onClick={plusLargeCursor}/>
          : ""
        }
      </S.PagenationWrapper>

    </S.Container>
  );
};

export default ArtistListContainer;