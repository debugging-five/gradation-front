import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import S from './style';

const ExhibitionGradationPastContainer = () => {

  const [lastExhibitions, setLastExhibition] = useState([]);

  useEffect(() => {
    const fetchLastExhibition  = async () => {
      const response = await fetch(`http://localhost:10000/exhibitions/api/gradation/past`)
     
      if(!response.ok) {
        throw new Error('LastExhibition fetch Error')
      }

      const data = await response.json();
      setLastExhibition(data);
      return data;
    };
    fetchLastExhibition()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }, []);



  return (
    <S.Wrap >
      <S.EN_H2>exhibition</S.EN_H2>
      
      <S.TitleWrap>
        <S.Title>2023 아트스펙트럼</S.Title>
      </S.TitleWrap>

      {/* <div>
        {lastExhibitions.map((lastExhibition, idx) => (
          <div key={idx}>
            <p>{lastExhibition.gradationExhibitionTitle}</p>
          </div>
        ))}
      </div> */}

      <Outlet />
    </S.Wrap>
  );
};

export default ExhibitionGradationPastContainer;