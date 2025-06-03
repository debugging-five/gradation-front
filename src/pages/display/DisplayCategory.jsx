import React, { useState } from 'react';
import { Outlet, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import S from './style';
import { useSelector } from 'react-redux';

const DisplayCategory = ({props}) => {
  const navigate = useNavigate();
  const { isLogin, currentUser } = useSelector((state) => state.user);
  // console.log(currentUser)
  
  const { category } = useParams();
  const { order, setOrder, cursor, setCursor, keyword, setKeyword, isLoading, isError, display } = useOutletContext();

  const [value, setValue] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }
  // const handleOrder = (order) => setOrder(order);
  const handleOrder = (order) => {
    setOrder(order);
    setIsDropdownOpen(false)
  }

  const handleSearch = (e) => {
    if(e.key === 'Enter'){
      setKeyword(value)
    }
  }

  const dropDownOption = {
    date: "등록순",
    popular: "좋아요순",
    comment: "댓글순"
};

const handleUpload = () => {
  if(!isLogin) {
    navigate("/login")
  } else if (currentUser.userWriterStatus === "미승인") {
    alert("작가 아님!")
  } else {
    navigate("/display/registration")
  }
}


  const goKorean = () => {
    navigate(`/display/korean`);
  }
  const goSculpture = () => {
    navigate(`/display/sculpture`);
  }
  const goCraft = () => {
    navigate(`/display/craft`);
  }
  const goArchitecture = () => {
    navigate(`/display/architecture`);
  }
  const goCalligraphy = () => {
    navigate(`/display/calligraphy`);
  }
  const goPainting = () => {
    navigate(`/display/painting`);
  }

  return (
    <div>
      <S.CategoryWrapper>
        <S.TypeDiv>
          {category === "korean"? 
            <S.SelectedRed>한국화</S.SelectedRed> : 
            <S.UnSelectedType onClick={goKorean}>한국화</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {category === "sculpture"? 
            <S.SelectedRed>조각</S.SelectedRed> : 
            <S.UnSelectedType onClick={goSculpture}>조각</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {category === "craft"? 
            <S.SelectedRed>공예</S.SelectedRed> : 
            <S.UnSelectedType onClick={goCraft}>공예</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {category === "architecture"? 
            <S.SelectedRed>건축</S.SelectedRed> : 
            <S.UnSelectedType onClick={goArchitecture}>건축</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {category === "calligraphy"? 
            <S.SelectedRed>서예</S.SelectedRed> : 
            <S.UnSelectedType onClick={goCalligraphy}>서예</S.UnSelectedType>
          }
        </S.TypeDiv>
        <S.Bar>|</S.Bar>
        <S.TypeDiv>
          {category === "painting"? 
            <S.SelectedRed>회화</S.SelectedRed> : 
            <S.UnSelectedType onClick={goPainting}>회화</S.UnSelectedType>
          }
        </S.TypeDiv>
      </S.CategoryWrapper>

      <S.InputWrapper>
        <S.Input type="text" 
          placeholder='작가명 또는 작품명을 검색하세요.'
          onChange={onChangeValue}
          onKeyDown={handleSearch}
        />
        <S.SearchIcon src="/assets/images/icon/search.png" alt="돋보기" />
      </S.InputWrapper>

      <S.Menu>
        {/* <S.Link to={"/display/registration"}> */}
        <S.Upload onClick={handleUpload}>
          <S.Icon src={"/assets/images/icon/upload.png"} />
          <S.H8>작품 업로드</S.H8>
        </S.Upload>
        {/* </S.Link> */}
        <S.DropdownWrapper onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <S.DropdownButton>
            {dropDownOption[order]}
          </S.DropdownButton>
          <S.DropdownIcon src={'/assets/images/icon/down.png'} alt='드롭다운' />
        </S.DropdownWrapper>
        {isDropdownOpen && (
          <S.Dropdown>
            <S.Option onClick={() => handleOrder("date")}>등록순</S.Option>
            <S.Option onClick={() => handleOrder("popular")}>좋아요순</S.Option>
            <S.Option onClick={() => handleOrder("comment")}>댓글순</S.Option>
          </S.Dropdown>
        )}
      </S.Menu>
      <Outlet context={useOutletContext()}/>

    </div>
  );
};

export default DisplayCategory;