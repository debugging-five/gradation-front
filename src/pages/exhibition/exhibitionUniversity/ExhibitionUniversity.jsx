import React, { useEffect, useState } from 'react';
import S from "./style";
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ExhibitionUniversity = () => {

  const [location, setLocation] = useState("전체지역")
  const [universityExhibitionStatus, setUniversityExhibitionStatus] = useState("예정전시")
  const [universityExhibitions, setUniversityExhibitions] = useState([]);
  // 좋아요 누른 전시회 목록
  // const [liked, setLiked] = useState([]);

  // 드롭다운
  const [locationDrop, setLocationDrop] = useState(false);
  const [exhibitionStatusDrop, setExhibitionStatusDrop] = useState(false);

  const [value, setValue] = useState("")
  const [keyword, setKeyword] = useState("")
  
  // 대학교 이미지
  const [universityImgs, setUniversityImgs] = useState([]);
  // 대학교 전시회 아이디
  const { universityExhibitionId } = useParams();

  // useEffect(() => {
  //   const fetchUniversityImgs = async () => {
  //     const response = await fetch(`http://localhost:10000/exhibitions/api/university/${1}/images`)

  //     if(!response.ok) {
  //       throw new Error('university Imgs fetch Error')
  //     }

  //     const data = await response.json();
  //     setUniversityImgs(data);
  //     return data
  //   };
  //   fetchUniversityImgs()
  //     .then((res) => {
  //       // console.log(res);
  //     })
  //     .catch((error) => {
  //       // console.error(error)
  //     })
  // }, []);


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
      setUniversityExhibitions(datas.university);
      return datas
    }

    getExhibitions()
      .then(console.log)
      .catch(console.error)

    console.log("location", location)
    console.log("keyword", keyword)
    console.log("universityExhibitionStatus", universityExhibitionStatus)
 
  }, [location, keyword, universityExhibitionStatus])

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}/${mm}/${dd}`;
  };

  const handleUniversityClick = async (id) => {
    console.log("id", id);
    try {
      const response = await fetch(`http://localhost:10000/exhibitions/api/university/${id}/images`);
      if (!response.ok) {
        throw new Error('University images fetch error');
      }
      const data = await response.json();
      setUniversityImgs(data);
    } catch (error) {
      console.error(error);
    }
  };




  return (
    <S.Container>

      <S.Map>
        <div id="map">학교 지도</div>
      </S.Map>

      <S.Wrap>
        <S.FilterContainer>
          {/* 지역 드롭다운 */}
          <S.Dropdown>
            <S.DropdownButton onClick={() => setLocationDrop(!locationDrop)} >
              {location} 
              <S.DropdownIcon src={`/assets/images/icon/down.png`} alt="dropdown" ></S.DropdownIcon>
            </S.DropdownButton>
            {locationDrop && (
              <S.DropdownList>
                <li onClick={() => { handleLocation("전체지역"); setLocationDrop(false); }}>전체지역</li>
                {locationList.map((location, i) => (
                  <li key={i} onClick={() => { handleLocation(location); setLocationDrop(false); }}>
                    {location}
                  </li>
                ))}
              </S.DropdownList>
            )}
          </S.Dropdown>

          {/* 전시상태 드롭다운 */}
          <S.Dropdown>
            <S.DropdownButton onClick={() => setExhibitionStatusDrop(!exhibitionStatusDrop)} >
              {universityExhibitionStatus}
              <S.DropdownIcon src={`/assets/images/icon/down.png`} alt="dropdown" ></S.DropdownIcon>
            </S.DropdownButton>
            {exhibitionStatusDrop && (
              <S.DropdownList>
                <li onClick={() => { handleUniversityExhibitionStatus("예정전시"); setExhibitionStatusDrop(false); }}>예정전시</li>
                <li onClick={() => { handleUniversityExhibitionStatus("현재전시"); setExhibitionStatusDrop(false); }}>현재전시</li>
              </S.DropdownList>
            )}
          </S.Dropdown>

          {/* 검색창 */}
          <S.SearchBox>
            <input
              placeholder="대학교를 검색하세요."
              value={value}
              onChange={onChangeValue}
              onKeyDown={onKeyDownKeyword}
            />
            <S.SearchIcon src={`/assets/images/icon/search.png`} alt="searchIcon"></S.SearchIcon>
          </S.SearchBox>
        </S.FilterContainer>

        <S.ContentWrap>
          <S.ListWrap>
            <S.TipWrap>
              <S.question src={`/assets/images/icon/gray_question.png`} alt="question" />
              <S.Tip>전시상태를 클릭 시 홈페이지로 이동합니다.</S.Tip>
            </S.TipWrap>

            {universityExhibitions.map((item, i) => (
              <S.UniversityItem key={i} onClick={() => handleUniversityClick(item.id)}>
                <S.RedBox className='redBox' />
                <S.UniversityLogoBox>
                  <S.UniversityLogo src={`http://localhost:10000/${item.universityLogoImgPath}${item.universityLogoImgName}`} alt="uniLogo" />
                </S.UniversityLogoBox>

                <S.UniversityInfo>
                  <div>
                    <S.UniversityName>{item.universityName}</S.UniversityName>
                    <S.ExhibitionTitle>{item.universityExhibitionTitle}</S.ExhibitionTitle>
                    <S.MajorName>{item.majorName}</S.MajorName>
                    <S.ExhibitionDate>
                      {formatDate(item.universityExhibitionStartDate)} ~ {formatDate(item.universityExhibitionEndDate)}
                    </S.ExhibitionDate>
                    <S.ExhibitionLocation>{item.universityExhibitionLocation}</S.ExhibitionLocation>
                  </div>

                  <S.ButtonWrapper onClick={(e) => { e.stopPropagation();}}>
                    <a href={item.universityHomepage} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                      <S.VisitButton>
                        <p>{item.universityExhibitionState}</p>
                      </S.VisitButton>
                    </a>
                    <S.LikeButton>
                      <p>좋아요</p>
                      <S.heart src={`/assets/images/icon/heart.png`} alt="question" />
                    </S.LikeButton>
                  </S.ButtonWrapper>
                </S.UniversityInfo>
              </S.UniversityItem>
            ))}

          </S.ListWrap>

          <S.ImgWrap>
            {universityImgs.length > 0 ? (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                modules={[Navigation]} // ✅ Swiper 네비게이션 활성화
              >
                {universityImgs.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={`http://localhost:10000/${img.universityExhibitionImgPath}${img.universityExhibitionImgName}`} // ✅ 이미지 경로 조합
                      alt={`exhibition-${index}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} // ✅ 크기 맞춤
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p>이미지를 선택하세요.</p> // ✅ 선택 안 됐을 때 안내 문구
            )}
          </S.ImgWrap>
        </S.ContentWrap>

          
      </S.Wrap>





      {/* <div className='category' style={{display: "flex", gap: "10px"}}>
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
      </div> */}
    </S.Container>
  );
};

export default ExhibitionUniversity;