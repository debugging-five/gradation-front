import React, { useEffect, useState } from 'react';
import S from './style';
import { NavLink, useParams } from 'react-router-dom';


const ExhibitionGradationPast = () => {

  const [arts, setArt] = useState([]);
  const { id: exhibitionId } = useParams();
  const [cursor, setCursor] = useState(1);
  const [pageLength, setPageLength] = useState([]);
  const [largeCursor, setLargeCursor] = useState(0);
  const [contents, setContents] = useState(0);

  useEffect(() => {
    setCursor(1);
    setLargeCursor(0);
  }, [exhibitionId]);

  useEffect(() => {
    const fetchArt = async () => {
      const response = await fetch(`http://localhost:10000/exhibitions/api/gradation/past/${exhibitionId}/arts?cursor=${cursor}`);

      if(!response.ok){
        throw new Error("fetchArt Error")
      }

      const data = await response.json();
      setArt(data.arts);
      setContents(data.contents);
      return data
    }
    fetchArt()
      .then((data) => {
        console.log(data)
        let pages = data.contents === 0? 0 : (data.contents % 15 === 0? data.contents / 15 - 1 : data.contents / 15)

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
        // console.error(error)
      })
  }, [exhibitionId, cursor]);

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
    <div>
      <S.LastImgContainer>
        {arts.map((art) => (
          <div key={art.artId} >
            <S.ImgWrap>
              <S.ArtImg src={`http://localhost:10000/files/api/get/${art.artImgName}?filePath=${art.artImgPath}`} 
              alt={art.artTitle} />
              <NavLink to={`/display/:category/detail/${art.id}`}>
                <S.ArtInfo>
                  <p>{art.artTitle}</p>
                  <p>{art.userName}</p>
                </S.ArtInfo>
              </NavLink>
            </S.ImgWrap>
          </div>
        ))}
      </S.LastImgContainer>

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

    </div>
  );
};

export default ExhibitionGradationPast;