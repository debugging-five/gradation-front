import React, { useState } from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import S from './style'

const ArtistCategory = () => {
  const navigate = useNavigate();
  const context = useOutletContext();

  const { artists, keyword, setKeyword, cursor, setCursor, category, order, setOrder, onKeyDownKeyword, onChangeValue, contents } = context;
  const [value, setValue] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  const handleOrder = (order) => {
    setOrder(order);
    setIsDropdownOpen(false)
  }

  const dropDownOption = {
    recent: "등록순",
    name: "이름순",
  };

  
  const goKorean = () => {
    navigate(`/artist/korean`);
  }
  const goSculpture = () => {
    navigate(`/artist/sculpture`);
  }
  const goCraft = () => {
    navigate(`/artist/craft`);
  }
  const goArchitecture = () => {
    navigate(`/artist/architecture`);
  }
  const goCalligraphy = () => {
    navigate(`/artist/calligraphy`);
  }
  const goPainting = () => {
    navigate(`/artist/painting`);
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
          placeholder='작가명을 검색하세요.'
          onChange={onChangeValue}
          onKeyDown={onKeyDownKeyword}
        />
        <S.SearchIcon src="/assets/images/icon/search.png" alt="돋보기" />
      </S.InputWrapper>

      <S.Menu>
        <S.DropdownWrapper onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <S.DropdownButton>
            {dropDownOption[order]}
          </S.DropdownButton>
          <S.DropdownIcon src={'/assets/images/icon/down.png'} alt='드롭다운' />
        </S.DropdownWrapper>
        {isDropdownOpen && (
          <S.Dropdown>
            <S.Option onClick={(e) => handleOrder("recent")}>최근순</S.Option>
            <S.Option onClick={(e) => handleOrder("name")}>이름순</S.Option>
          </S.Dropdown>
        )}
      </S.Menu>
      
      <div>
        <Outlet context={ context }/>
      </div>
    </div>
  );
};

export default ArtistCategory;