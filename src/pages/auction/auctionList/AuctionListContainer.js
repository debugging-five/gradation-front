import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import S from './style';

const AuctionListContainer = () => {
  const categoryMap = new Map([
		["korean", "한국화"],
		["painting", "회화"],
		["architecture", "건축"],
		["sculpture", "조각"],
		["calligraphy", "서예"],
		["craft", "공예"]
  ]);
  
  const { category, type } = useParams("category");
  const [order, setOrder] = useState("");
  const [cursor, setCursor] = useState(1);
  const [direction, setDirection] = useState("asc");
  const [keyword, setKeyword] = useState("");
  const [auction, setAuction] = useState([]);

  const params = {
    order : order,
    cursor : cursor,
    direction : direction,
    category : categoryMap.get(category) || "한국화",
    status : type,
    keyword : keyword,
  }

  useEffect(() => {

    const getAuctionList = async () => {
      const response = await fetch(`http://localhost:10000/auction/api/list`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(params)
      })
      if(!response.ok) {
        throw new Error(`getDisplayList fetch`)
      } 
      const datas = await response.json()
      console.log(datas);
      

      return datas;
    }

    getAuctionList()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [order, category, cursor, keyword])
  
  

  return (
    <S.Container>
    </S.Container>
  );
};

export default AuctionListContainer;