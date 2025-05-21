import React from 'react';
import { NavLink, Outlet, useOutletContext } from 'react-router-dom';

const ArtistCategory = () => {

  const {artists, keyword, setKeyword, cursor, setCursor, category, order, setOrder, onKeyDownKeyword, onChangeValue} = useOutletContext()
  return (
    <div>
      <div>
        <NavLink to={"korean"}>한국화</NavLink>
        <NavLink to={"painting"}>조각</NavLink>
        <NavLink to={"sculpture"}>공예</NavLink>
        <NavLink to={"craft"}>건축</NavLink>
        <NavLink to={"architecture"}>서예</NavLink>
        <NavLink to={"calligraphy"}>회화</NavLink>
      </div>
      <div className='category' style={{display: "flex", gap: "10px"}}>
        <div>
          <p onClick={(e) => setOrder("recent")}>최근</p>
          <p onClick={(e) => setOrder("name")}>이름순</p>
        </div>
        <div>
          <span>검색</span>
          <input 
            placeholder='검색어를 입력하세요.'
            onChange={onChangeValue} onKeyDown={onKeyDownKeyword} 
          />
        </div>
      </div>
      <div>
        <Outlet context={{ artists }}
        />
      </div>
    </div>
  );
};

export default ArtistCategory;