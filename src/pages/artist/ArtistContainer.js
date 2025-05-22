import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const ArtistContainer = () => {

  const [artists, setArtists] = useState([])
  const [value, setValue] = useState("")
  const [keyword, setKeyword] = useState("")
  const [order, setOrder] = useState("recent")
  const [cursor, setCursor] = useState(1);
  const {category} = useParams();

  const onChangeValue = (e) => { setValue(e.target.value) }
  const onKeyDownKeyword = (e) => { 
    if(e.key === 'Enter'){
      setKeyword(value)
    }
  }
  
  useEffect(() => {

    const params = {
      category : category,
      keyword : keyword,
      cursor : cursor,
    }
    
    const getExhibitions = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artists/api/list`, {
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify(params)
      })
      if(!response.ok) return console.error("getExhibitions error")
      const datas = await response.json()
      return datas
    }

    getExhibitions()
      .then(setArtists)
      .catch(console.error)
  }, [keyword, category, cursor, order])

  return (
    <div>
      <Outlet context={{
        artists, 
        keyword, setKeyword, cursor, setCursor, category, order, setOrder, onKeyDownKeyword, onChangeValue
      }}/>
    </div>
  );
};

export default ArtistContainer;