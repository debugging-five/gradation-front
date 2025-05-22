import React, { useEffect, useState } from 'react';

const ExhibitionUniversity = () => {

  const [location, setLocation] = useState("서울")
  const [universityExhibitionStatus, setUniversityExhibitionStatus] = useState("예정전시")
  const [value, setValue] = useState("")
  const [keyword, setKeyword] = useState("")

  const locationList = ["서울", "경기", "강원", "인천", "충남", "충북", "대전", "경북", "경남", "대구", "부산", "전북", "전남", "광주", "제주"]
  const handleLocation = (location) => { setLocation(location) }
  const handleUniversityExhibitionStatus = (universityExhibitionStatus) => { setUniversityExhibitionStatus(universityExhibitionStatus) }

  const onChangeValue = (e) => { setValue(e.target.value) }
  const onKeyDownKeyword = (e) => { 
    if(e.key === 'Enter'){
      setKeyword(value)
    }
  }


  useEffect(() => {

    const params = {
      location : location,
      keyword : keyword,
      universityExhibitionStatus : universityExhibitionStatus,
    }
    
    const getExhibitions = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/exhibitions/api/university/list`, {
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
      .then(console.log)
      .catch(console.error)

    console.log("location", location)
    console.log("keyword", keyword)
    console.log("universityExhibitionStatus", universityExhibitionStatus)

  }, [location, keyword, universityExhibitionStatus])


  return (
    <div>
      <div className='category' style={{display: "flex", gap: "10px"}}>
        <div>
          <ul>
            {locationList.map((location, i) => (
              <li key={i} onClick={(e) => handleLocation(e.target.innerText)}>{location}</li>
            ))}
          </ul>
        </div>
        <div>
          <p onClick={(e) => handleUniversityExhibitionStatus(e.target.innerText)}>예정전시</p>
          <p onClick={(e) => handleUniversityExhibitionStatus(e.target.innerText)}>현재전시</p>
        </div>
        <div>
          <span>검색</span>
          <input 
            placeholder='검색어를 입력하세요.'
            onChange={onChangeValue} onKeyDown={onKeyDownKeyword} 
          />
        </div>
      </div>
    </div>
  );
};

export default ExhibitionUniversity;