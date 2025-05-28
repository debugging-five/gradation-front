import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import S from './style';

const ExhibitionGradationPastContainer = () => {

  const [lastExhibitions, setLastExhibition] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
  if (id && lastExhibitions.length > 0) {
    const selected = lastExhibitions.find(item => String(item.id) === id);
    if (selected) {
      setTitle(selected.gradationExhibitionTitle);
    }
  }
}, [id, lastExhibitions]);

  useEffect(() => {
    const fetchLastExhibition = async () => {
      const response = await fetch(`http://localhost:10000/exhibitions/api/gradation/past`)
     
      if(!response.ok) {
        throw new Error('LastExhibition fetch Error')
      }

      const data = await response.json();
      setLastExhibition(data.exhibitions);
      return data.exhibitions;
    };
    fetchLastExhibition()
      .then((res) => {
        // console.log(res)
      })
      .catch((error) => {
        // console.error(error)
      })
  }, []);

  return (
    <S.Wrap >
      <S.EN_H2>exhibition</S.EN_H2>
      
      <S.TitleWrap>
        <S.Title>{title}</S.Title>
      </S.TitleWrap>

      <S.Container>

        <S.Sidebar>
        <S.ListWrap>
          <S.ListTitle>지난 전시회</S.ListTitle>
        </S.ListWrap>

          {lastExhibitions.map((exhibition) => (
            <S.ListWrap2 key={exhibition.id}>
              <S.ListItem 
                onClick={() => {
                  setTitle(exhibition.gradationExhibitionTitle); 
                  navigate(`/exhibition/gradation/past/${exhibition.id}`);
              }}
              >
                {exhibition.gradationExhibitionTitle}
              </S.ListItem>
            </S.ListWrap2>
          ))}
        </S.Sidebar>

        <S.Content>
          <Outlet />
        </S.Content>

      </S.Container>
    </S.Wrap>
  );
};

export default ExhibitionGradationPastContainer;