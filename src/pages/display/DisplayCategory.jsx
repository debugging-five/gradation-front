import React from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import S from './style';

const DisplayCategory = () => {
  const { category  } = useParams();
  const navigate = useNavigate();

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
        <S.Input type="text" placeholder='작가명 또는 작품명을 검색하세요.'/>
      </S.InputWrapper>


      <S.Menu>
        <S.Link to={"/display/registration"}>
        <S.Upload>
          <S.Icon src={"/assets/images/icon/upload.png"} />
          <S.H8>작품 업로드</S.H8>
        </S.Upload>
        </S.Link>
        <S.Dropdown>
          드롭다운
        </S.Dropdown>
      </S.Menu>




      <Outlet />
    </div>
  );
};

export default DisplayCategory;