import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AuctionBiddingDetail from './AuctionBiddingDetail';
import AuctionExpectedDetail from './AuctionExpectedDetail';
import AuctionCompleteDetail from './AuctionCompleteDetail';
import S from './style';

const AuctionDetailContainer = () => {
  const { type, category, id } = useParams()
  // console.log("type", type)
  // console.log("category", category)
  // console.log("id", id)
  const [cursor, setCursor] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    const auctionList = async () => {
      try {
        const response = await fetch(`http://localhost:10000/auction/api/footer/${cursor}`);
        const lists = await response.json();
        setList(lists);

        // lists.forEach((data) => {
        //   console.log(data.artImgName);
        //   console.log(data.artImgPath);
        // });
      } catch (error) {
        console.error("API 호출 실패:", error);
      }
    };

    auctionList();
  }, [cursor]);

  const cursorDown = () => {
    if (cursor !== 1) {
      setCursor(prev => prev - 1);
    }
  };

  const cursorUp = () => {
    if (list.length === 4) {
      setCursor(prev => prev + 1);
    }
  };

  return (
    <>
      { type === "bidding" && <AuctionBiddingDetail type={type} category={category} id={id} />}
      { type === "expected" && <AuctionExpectedDetail type={type} category={category} id={id} />}
      { type === "complete" && <AuctionCompleteDetail type={type} category={category} id={id} />}
      <S.AuctionList>
        <S.AuctionIng>
          <S.AuctionIngTitle>경매중인 작품</S.AuctionIngTitle>
        </S.AuctionIng>
        <S.ArtWrapper>
          <S.NoneButton onClick={cursorDown}>
            <S.buttonImg src='/assets/images/icon/left.png' alt='left' />
          </S.NoneButton>
          <S.ArtList>
          {list.length > 0 && (
            <Link>
                <S.ArtListImg
                  src={`http://localhost:10000/files/api/get/${list[0].artImgName}?filePath=${list[0].artImgPath}`}
                  alt="작품1"
                />
            </Link>
          )}
          </S.ArtList>
          <S.ArtList>
          {list.length > 1 && (
            <Link>
                <S.ArtListImg
                  src={`http://localhost:10000/files/api/get/${list[1].artImgName}?filePath=${list[1].artImgPath}`}
                  alt="이미지 호출 오류"
                />
            </Link>
          )}
          </S.ArtList>
          <S.ArtList>
          {list.length > 2 && (
            <Link>
                <S.ArtListImg
                  src={`http://localhost:10000/files/api/get/${list[2].artImgName}?filePath=${list[0].artImgPath}`}
                  alt="이미지 호출 오류"
                />
            </Link>
          )}
          </S.ArtList>
          <S.ArtList>
          {list.length > 3 && (
            <Link>
              <S.ArtListImg
                src={`http://localhost:10000/files/api/get/${list[3].artImgName}?filePath=${list[0].artImgPath}`}
                alt="이미지 호출 오류"
                />
              </Link>
            )}
          </S.ArtList>
          <S.NoneButton onClick={cursorUp}>
            <S.buttonImg src='/assets/images/icon/right.png' alt='right' />
          </S.NoneButton>
        </S.ArtWrapper>
      </S.AuctionList>
    </>
  );
};

export default AuctionDetailContainer;