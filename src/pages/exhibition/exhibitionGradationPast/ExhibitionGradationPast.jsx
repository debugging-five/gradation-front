import React, { useEffect, useState } from 'react';
import S from './style';
import { NavLink, useParams } from 'react-router-dom';


const ExhibitionGradationPast = () => {

  const [arts, setArt] = useState([]);
  const { id: exhibitionId } = useParams();
  // const [cursor, setCursor] = useState(1);

  useEffect(() => {
    const fetchArt = async () => {
      const response = await fetch(`http://localhost:10000/exhibitions/api/gradation/past/${exhibitionId}/arts`);

      if(!response.ok){
        throw new Error("fetchArt fetch Error")
      }

      const data = await response.json();
      setArt(data.arts);
      return data
    }
    fetchArt()
      .then((res) => {
        // console.log(res)
      })
      .catch((error) => {
        // console.error(error)
      })
  }, [exhibitionId]);

  // console.log("exhibitionId", exhibitionId);

  return (
    <div>
      <S.LastImgContainer>
        {arts.map((art) => (
          <div key={art.artId} >
            <S.ImgWrap>
              <S.ArtImg src={`http://localhost:10000/files/api/get/${art.artImgName}?filePath=${art.artImgPath}`} 
              alt={art.artTitle} />
              <NavLink to={`/display/detail/${art.id}`}>
                <S.ArtInfo>
                  <p>{art.artTitle}</p>
                  <p>{art.userName}</p>
                </S.ArtInfo>
              </NavLink>
            </S.ImgWrap>
          </div>
        ))}
      </S.LastImgContainer>

      <div style={{marginTop: '160px'}}>
        <p>페이지 네이션</p>
      </div>

    </div>
  );
};

export default ExhibitionGradationPast;