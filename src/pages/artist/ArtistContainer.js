import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import S from './style';

const ArtistContainer = () => {

  const [artists, setArtists] = useState([])
  const [value, setValue] = useState("")
  const [keyword, setKeyword] = useState("")
  const [order, setOrder] = useState("recent")
  const [cursor, setCursor] = useState(1);
  const {category} = useParams();

  const onChangeValue = (e) => { 
    setValue(e.target.value) 
  }
  const onKeyDownKeyword = (e) => { 
    if(e.key === 'Enter'){
      setKeyword(value)
    }
  }
  
  useEffect(() => {
    const params = {
      order : order,
      cursor : cursor,
      category : category || "korean",
      keyword : keyword,
    }
    const getArtists = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artists/api/list`, {
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify(params)
      })
      // if(!response.ok) return console.error("getArtists error")
      const datas = await response.json()
      return datas
    }
    getArtists()
      .then((res) => {
        setArtists(res.posts);
      })
      // .catch(console.error)
  }, [keyword, category, cursor, order])

  return (
    <S.Container>
      <S.Link to="/display">
        <S.EN_H2>artist</S.EN_H2>
      </S.Link>
      <Outlet context={{
        cursor, setCursor, 
        keyword, setKeyword, 
        category, order, 
        setOrder, onKeyDownKeyword, onChangeValue,
        artists
      }}/>
    </S.Container>
  );
};

export default ArtistContainer;