import React, { useEffect, useState } from 'react';
import S from './style'
import { useOutletContext, useParams } from 'react-router-dom';

const ArtistDetail = () => {

  const { category, id } = useParams()
  const { artist } = useOutletContext();
  const [ arts, setArts] = useState([]);
  const [ cursor, setCursor ] = useState(1);
  const [pageLength, setPageLength] = useState([]);
  const [largeCursor, setLargeCursor] = useState(0);
  const [contents, setContents] = useState(0);



  useEffect(() => {
    const fetchArts = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artists/api/detail/${id}/arts?cursor=${cursor}`);
      if(!response.ok) {
        throw new Error("ArtistArts fetch Error")
      }
      const data = await response.json();
      setArts(data.arts);
      setContents(data.contents);
      return data;
    }
    fetchArts()
    .then((data) => {
      // console.log("data.arts:", res.arts);
        let pages = data.contents === 0? 0 : (data.contents % 9 === 0? data.contents / 9 - 1 : data.contents / 9)

        const result = [];
        let count = 0

        // 받은 값 기준으로 2차원 배열을 만든다.
        for (let i = 0; i < pages/5; i++) {
          const row = [];
          for (let j = 0; j < 5; j++) {
            if (count < pages) {
              row.push(count++);
            } else {
              row.push(null);
            }
          }
          result.push(row);
        }
        setPageLength(result)
      })
    .catch((error) => {
      console.error(error)
    })
}, [id, cursor]); 

  const minusLargeCursor = () => {
    if (largeCursor !== 0) {
      let value = largeCursor - 1
      setLargeCursor(value);
    }
  }

  const plusLargeCursor = () => {
    if (pageLength && largeCursor !== (pageLength.length - 1)) {
      let value = largeCursor + 1
      setLargeCursor(value);
    }
  }


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

export default ArtistDetail;