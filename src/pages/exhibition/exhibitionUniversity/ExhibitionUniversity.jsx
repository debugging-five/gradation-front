import React, { useEffect, useState } from 'react';
import S from "./style";
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ExhibitionUniversity = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [selectedAddress, setSelectedAddress] = useState("서울특별시 중구 세종대로 110");
  const [location, setLocation] = useState("전체지역")
  const [universityExhibitionStatus, setUniversityExhibitionStatus] = useState("예정전시")
  const [universityExhibitions, setUniversityExhibitions] = useState([]);
  // 드롭다운
  const [locationDrop, setLocationDrop] = useState(false);
  const [exhibitionStatusDrop, setExhibitionStatusDrop] = useState(false);
  const [value, setValue] = useState("")
  const [keyword, setKeyword] = useState("")
  // 대학교 클릭 상태 추가
  const [selectedUniversityId, setSelectedUniversityId] = useState(null);
  // 대학교 이미지
  const [universityImgs, setUniversityImgs] = useState([]);

  useEffect(() => {
    if (universityExhibitions.length > 0 && universityImgs.length === 0) {
      const firstId = universityExhibitions[0].id;
      handleUniversityClick(firstId);
    }
  }, [universityExhibitions]);

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
    if(!currentUser) return;

    const params = {
      location : location,
      keyword : keyword,
      universityExhibitionStatus : universityExhibitionStatus,
      userId: currentUser.id
    }
    
    const getExhibitions = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/exhibitions/api/university/list`, {
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify(params)
      })
      // if(!response.ok) return console.error("getExhibitions error")
      const datas = await response.json()
      setUniversityExhibitions(datas.university);
      return datas
    }

    getExhibitions()
      // .then(console.log)
      // .catch(console.error)

    // console.log("location", location)
    // console.log("keyword", keyword)
    // console.log("universityExhibitionStatus", universityExhibitionStatus)
 
  }, [location, keyword, universityExhibitionStatus, currentUser])

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}/${mm}/${dd}`;
  };

  const handleUniversityClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:10000/exhibitions/api/university/${id}/images`);
      if (!response.ok) {
        throw new Error('University images error');
      }
      const data = await response.json();
      setUniversityImgs(data.images);
      setSelectedUniversityId(id);

      const selected = universityExhibitions.find(item => item.id === id);
      if (selected) {
        // console.log("선택된 주소:", selected.universityLocation);
        setSelectedAddress(selected.universityLocation);
      }

      // console.log(data.message);
    } catch (error) {
      // console.error(error);
    }
  };

  // 지도
  useEffect(() => {
    if (!selectedAddress) return;

    const loadMap = () => {
      const container = document.getElementById("map");
      const map = new window.kakao.maps.Map(container, {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780),
        level: 3,
        draggable: true,  // 지도 드래그 가능
        scrollwheel: false  // 휠로 확대/축소 방지
      });

      // 확대/축소 컨트롤 추가
      const zoomControl = new window.kakao.maps.ZoomControl();
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      // 주소 -> 좌표 변환
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(selectedAddress, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 마커 생성
          const marker = new window.kakao.maps.Marker({
            map,
            position: coords,
          });

          map.setCenter(coords);
        } else {
          // console.log("주소 검색 실패:", selectedAddress);
        }
      });
    };

    // SDK 로드 확인
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=009a52c6bf731449d477ab86172f9d4e&autoload=false&libraries=services`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          loadMap();
        });
      };
      document.head.appendChild(script);
    } else {
      loadMap();
    }
  }, [selectedAddress]);

  // 좋아요 처리
  const handleLikeToggle = async (e, exhibitionId) => {
    e.stopPropagation();

    if(!currentUser || !currentUser.id) {
      navigate("/login");
      return;
    }

    const body = {
      userId: currentUser.id,
      universityExhibitionId: exhibitionId,
    };

    try {
      // 좋아요 여부 확인
      const checkResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/exhibitions/api/liked`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(body),
      });
      const checkResult = await checkResponse.json();

      // 좋아요면 삭제
      if (checkResult.isLiked) {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/exhibitions/api/university/unlike`, {
          method: 'DELETE',
          headers: { 
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(body),
        });
      } else {
        // 좋아요 등록
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/exhibitions/api/university/like`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(body),
        });
      }

      setUniversityExhibitions((prev) =>
        prev.map((item) =>
          item.id === exhibitionId ? { ...item, liked: !checkResult.isLiked } : item
        )
      );
    } catch (error) {
      // console.error("좋아요 처리 오류:", error);
    }
  };


  return (
    <div>

      <S.Map>
        <div id="map"></div>
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
              <S.UniversityItem key={i} onClick={() => handleUniversityClick(item.id)} selected={item.id === selectedUniversityId}>
                <S.RedBox $visible={item.id === selectedUniversityId} className='redBox' />
                <S.UniversityLogoBox>
                  <S.UniversityLogo src={`http://localhost:10000/files/api/get/${item.universityLogoImgName}?filePath=${item.universityLogoImgPath}`} alt="uniLogo" />
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
                    <S.LikeButton $liked={item.liked} onClick={(e) => handleLikeToggle(e, item.id)}>
                      <S.heartText>좋아요</S.heartText>
                      <S.heart src={`/assets/images/icon/${item.liked? "heart_white.png" : "heart.png"}`} alt="heart" />
                    </S.LikeButton>
                  </S.ButtonWrapper>
                </S.UniversityInfo>
              </S.UniversityItem>
            ))}

          </S.ListWrap>

          <S.ImgWrap>
            {universityImgs.length > 0 ? (
              <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                style={{ width: "558px", height: "444px" }}
              >
                {universityImgs.map((img, index) => (
                  <S.SwiperSlide key={index}>
                    <img
                      src={`http://localhost:10000/files/api/get/${img.universityExhibitionImgName}?filePath=${img.universityExhibitionImgPath}`}
                      alt="University Exhibition"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </S.SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div >
                <p style={{ textAlign: "center", paddingRight: "120px" }}>"관람"하고자하는</p>
                <p style={{ textAlign: "center", paddingLeft: "120px" }}>대학교를 선택해주세요.</p>
              </div>
            )}
          </S.ImgWrap>
        </S.ContentWrap>

        <S.ButtonWrap>
          <S.Link to="/service-center/registration"><S.ContactButton>문의하기</S.ContactButton></S.Link>
          <S.Link to="/exhibition/university/registration"><S.RegistrationButton>학교 등록 신청</S.RegistrationButton></S.Link>
        </S.ButtonWrap>
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
    </div>
  );
};

export default ExhibitionUniversity;