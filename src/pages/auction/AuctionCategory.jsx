import React, { useEffect, useState } from 'react';
import { Outlet, replace, useLocation, useNavigate, useParams } from 'react-router-dom';
import S from './style';

const AuctionCategory = () => {
  const categoryMap = new Map([
		["korean", "한국화"],
    ["painting", "회화"],
    ["architecture", "건축"],
    ["sculpture", "조각"],
    ["calligraphy", "서예"],
    ["craft", "공예"]
  ]);

  const pathName = useLocation().pathname
  // const type = pathName.split("/")[2]
  const params = useParams()
  const navigate = useNavigate();

  const {category, type} = useParams()
  const [order, setOrder] = useState("");
  const [cursor, setCursor] = useState(1)
  const [keyword, setKeyword] = useState("")
  const [auction, setAuction] = useState([])
  const [pageLength, setPageLength] = useState([])
  const [largeCursor, setLargeCursor] = useState(0)
  
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  

  // const { order, setOrder, cursor, setCursor, keyword, setKeyword, isLoading, isError, auction } = useOutletContext();

  const [value, setValue] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  

  const onChangeValue = (e) => {
    setValue(e.target.value)
    
  }

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
    "" : "등록순",
    popular: "좋아요순",
    date: "시작일순"
  }


  const goKorean = () => {
    navigate(`/auction/${type}/korean`);
    setCursor(1);
  }
  const goSculpture = () => {
    navigate(`/auction/${type}/sculpture`);
    setCursor(1);
  }
  const goCraft = () => {
    navigate(`/auction/${type}/craft`);
    setCursor(1);
  }
  const goArchitecture = () => {
    navigate(`/auction/${type}/architecture`);
    setCursor(1);
  }
  const goCalligraphy = () => {
    navigate(`/auction/${type}/calligraphy`);
    setCursor(1);
  }
  const goPainting = () => {
    navigate(`/auction/${type}/painting`);
    setCursor(1);
  }

  useEffect(() => {
    const sendParam = {
      order : order,
      cursor : cursor,
      status : type,
      category : categoryMap.get(category),
      keyword : keyword,
    }
  
    const getAuctions = async () => {
      try{
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auction/api/list`, {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify(sendParam)
        })

        if(!response.ok) {
          navigate("/")
          // throw new Error(`getDisplayList fetch`)
        } 
        
        const datas = await response.json()
        return datas;
      } catch(error) {
        console.error(error);
        
        navigate("/")
        return
      }
      
    }
    getAuctions().then((data) => {
      setAuction(data)
      
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

      setPageLength(result);
    })
  }, [category, cursor, keyword, order, type])

  const plusLargeCursor = () => {
    if (largeCursor !== 0) {
      let value = largeCursor - 1
      setLargeCursor(value);
    }
  }

  const minusLargeCursor = () => {
    if (pageLength && largeCursor !== (pageLength.length - 1)) {
      let value = largeCursor + 1
      setLargeCursor(value);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cursor])

  useEffect(() => {
    setCursor(1)
  }, [type])

  if(pageLength){
    return (
      <S.CategoryContainer>
        <S.CategoryWrapper>
          <S.TypeDiv>
            {params.category === "korean"? 
              <S.SelectedRed>한국화</S.SelectedRed> : 
              <S.UnSelectedType onClick={goKorean}>한국화</S.UnSelectedType>
            }
          </S.TypeDiv>
          <S.Bar>|</S.Bar>
          <S.TypeDiv>
            {params.category === "sculpture"? 
              <S.SelectedRed>조각</S.SelectedRed> : 
              <S.UnSelectedType onClick={goSculpture}>조각</S.UnSelectedType>
            }
          </S.TypeDiv>
          <S.Bar>|</S.Bar>
          <S.TypeDiv>
            {params.category === "craft"? 
              <S.SelectedRed>공예</S.SelectedRed> : 
              <S.UnSelectedType onClick={goCraft}>공예</S.UnSelectedType>
            }
          </S.TypeDiv>
          <S.Bar>|</S.Bar>
          <S.TypeDiv>
            {params.category === "architecture"? 
              <S.SelectedRed>건축</S.SelectedRed> : 
              <S.UnSelectedType onClick={goArchitecture}>건축</S.UnSelectedType>
            }
          </S.TypeDiv>
          <S.Bar>|</S.Bar>
          <S.TypeDiv>
            {params.category === "calligraphy"? 
              <S.SelectedRed>서예</S.SelectedRed> : 
              <S.UnSelectedType onClick={goCalligraphy}>서예</S.UnSelectedType>
            }
          </S.TypeDiv>
          <S.Bar>|</S.Bar>
          <S.TypeDiv>
            {params.category === "painting"? 
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
        </S.InputWrapper>

        <S.Menu>
          <S.Link to={"/auction/agreement"}>
          <S.Upload>
            <S.H8>이용약관</S.H8>
            <S.Icon src={"/assets/images/icon/quest.png"} />
          </S.Upload>
          </S.Link>
          <S.DropdownWrapper onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <S.DropdownButton>
              {dropDownOption[order]? dropDownOption[order] : "등록순"}
            </S.DropdownButton>
            <S.DropdownIcon src={'/assets/images/icon/down.png'} alt='드롭다운' />
          </S.DropdownWrapper>
          {isDropdownOpen && (
            <S.Dropdown>
              <S.Option onClick={() => handleOrder("")}>등록순</S.Option>
              <S.Option onClick={() => handleOrder("popular")}>좋아요순</S.Option>
              <S.Option onClick={() => handleOrder("date")}>시작일순</S.Option>
            </S.Dropdown>
          )}
        </S.Menu>
        {auction.contents === 0 ? <S.NotFoundDiv><S.NotFoundH3>조회된 작품이 없습니다</S.NotFoundH3></S.NotFoundDiv> : 

        <div>
          <Outlet context={{ 
            isLoading, isError,
            auction
          }}/>
          <S.PagenationWrapper>
            <S.PagenationIcon src='/assets/images/icon/left.png' onClick={plusLargeCursor}/>
              {pageLength.map((datas, i) => (
                i === largeCursor ?
                datas.map((data, i) => (
                  data !== null?
                  <S.PagenationButton key={i} onClick={() => setCursor(data+1)} $active={cursor === data + 1}>
                  {data + 1}
                  </S.PagenationButton> : ''
                )) : ''
              ))}
              
            <S.PagenationIcon src='/assets/images/icon/right.png' onClick={minusLargeCursor}/>
          </S.PagenationWrapper>
        </div>
        }
      </S.CategoryContainer>
    );
  }
};

export default AuctionCategory;