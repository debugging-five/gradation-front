import { useOutletContext, useParams } from 'react-router-dom';
import S from './style';
import { useEffect, useState } from 'react';

const DisplayListContainer = () => {
  // const { category } = useParams()
  // const { display, isLoading, isError, cursor } = useOutletContext()
  // const id = 1
  // console.log(category)
  // console.log("cursor:", cursor);

  const { order, keyword } = useOutletContext();
  const { category } = useParams();
  const [cursor, setCursor] = useState(1)
  const [display, setDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false)
  const [pageLength, setPageLength] = useState([]);
  const [largeCursor, setLargeCursor] = useState(0);

  const params = {
    order : order,
    cursor : cursor,
    // category : category || "korean",
    category : category,
    keyword : keyword,
  }

    useEffect(() => {
  
      const getDisplayList = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/displays/api/list`, {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify(params)
        })
        if(!response.ok) {
          setIsError(true);
          throw new Error(`getDisplayList fetch`)
        } 
        const datas = await response.json()
        return datas;
      }
  
      getDisplayList()
        .then((data) => {
          console.log(data)
          // setDisplay(res.posts)
          console.log("작품 개수", data.postList.length);
          setIsLoading(false)
          setIsError(false)
          // setDisplay(res.posts)
          setDisplay(data.postList)
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
          setPageLength(result)
          console.log(result)
        })
        .catch((error) => {
          console.error(error)
          setIsLoading(false)
          setIsError(true)
        })
    }, [order, category, cursor, keyword, isUpdate])

      useEffect(() => {
      setCursor(1);
    }, [order, category, keyword]);

    const minusLargeCursor = () => {
      if (largeCursor !== 0) {
        let value = largeCursor - 1
        setLargeCursor(value);
      }
    }

    const plusLargeCursor = () => {
      if (pageLength && largeCursor !== (pageLength.length - 1)) {
        let value = largeCursor + 1
        setLargeCursor(value);
      }
    }
  

  if(isLoading) {
    return <S.H6>로딩중!</S.H6>
  }

  if(isError) {
    return <S.H6>작품을 불러오는데 실패했습니다.</S.H6>
  }

  if(display.length === 0) {
    return <S.H6>작품이 존재하지 않습니다.</S.H6>
  }

  if(pageLength) {
    return (
      <S.Container>
        <S.Wrapper>
          {display.map((post) => (
             <S.Display key={post.artPostId} to={`/display/${category}/detail/${post.artPostId}`}>
              <S.Overlay className="overlay">
                <S.Content>
                  <S.H2>{post.artTitle}</S.H2>
                  <S.H4>{post.artistName}</S.H4>
                </S.Content>
              </S.Overlay>
              <img src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${post.artImgName}?filePath=${post.artImgPath}`} alt={post.artTitle} />
            </S.Display>
          ))}
        </S.Wrapper>
          <S.PagenationWrapper>
            <S.PagenationIcon src='/assets/images/icon/left.png' onClick={minusLargeCursor}/>
              {pageLength.map((datas, i) => (
                i === largeCursor ?
                datas.map((data, i) => (
                  data !== null?
                  <S.PagenationButton key={i} onClick={() => {setCursor((data+1))}} $active={cursor === data+1}>
                  {data + 1}
                  </S.PagenationButton> : ''
                )) : ''
              ))}
        
            <S.PagenationIcon src='/assets/images/icon/right.png' onClick={plusLargeCursor}/>
          </S.PagenationWrapper>
      </S.Container>
    );
  }

};

export default DisplayListContainer;