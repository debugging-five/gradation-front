import React, { useState } from 'react';
import S from './style';
import { NavLink } from 'react-router-dom';

const ExhibitionGradation = () => {

  const [arts, setArts] = useState([]);

//   GET
// /exhibitions/api/gradation/top-liked-art

  React.useEffect(() => {
    const fetchGradation = async () => {
      try {
        const response = await fetch(`http://localhost:10000/exhibitions/api/gradation/top-liked-art`);
        const arts = await response.json();
        setArts(arts);
        console.log(arts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchGradation();
  }, []);

  return (
    <div>
      <S.TitleWrap>
        <S.Title>"여러분의 작품을 전시해드립니다.</S.Title>
      </S.TitleWrap>

      <div style={{ gap: '20px'}}>
        {arts.map((art, idx) => (
          <div key={idx}>
            <p>{art.artTitle}</p>
            <p>{art.artArtist}</p>
            <img src={`http://localhost:10000/files/api/get/${art.artImgName}?filePath=${art.artImgPath}`} alt={art.artTitle} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ExhibitionGradation;