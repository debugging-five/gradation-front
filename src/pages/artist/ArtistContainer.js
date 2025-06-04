import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import S from './style';

const ArtistContainer = () => {

  const [artists, setArtists] = useState([])
  const [value, setValue] = useState("")
  const [keyword, setKeyword] = useState("")
  const [order, setOrder] = useState("recent")
  const {category} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  const [cursor, setCursor] = useState(1);
  const [pageLength, setPageLength] = useState([]);
  const [largeCursor, setLargeCursor] = useState(0);

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
      .then((data) => {
        setIsLoading(false)
        setIsError(false)
        setArtists(data.posts);
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
        setIsLoading(false)
        setIsError(true)        
      })
  }, [keyword, category, cursor, order])

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
      <S.Link to="/display">
        <S.EN_H2>artist</S.EN_H2>
      </S.Link>
      <Outlet context={{
        cursor, setCursor, 
        keyword, setKeyword, 
        category,
        order, setOrder, 
        onKeyDownKeyword, onChangeValue,
        minusLargeCursor, plusLargeCursor,
        artists, setArtists, 
        largeCursor, setLargeCursor, 
        pageLength, setPageLength,
        isLoading, 
      }}/>
    </S.Container>
  );
};

export default ArtistContainer;