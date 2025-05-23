import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuctionBiddingDetail from './AuctionBiddingDetail';
import AuctionExpectedDetail from './AuctionExpectedDetail';
import AuctionCompleteDetail from './AuctionCompleteDetail';
import S from './style';
import getTimeLeft from './_function/getTimeLeft';

const AuctionDetailContainer = () => {

  const { id } = useParams()
  const [cursor, setCursor] = useState(1);
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  // 현재 커서에 해당하는 리스트를 가져오는 useEffect
  useEffect(() => {
    const fetchList = async () => {
      const response = await fetch(`http://localhost:10000/auction/api/footer/${cursor}`);
      const data = await response.json();
      setList(data);
    };

    fetchList();
  }, [cursor]);

  // 최대 커서 찾기
  const cursorUp = async () => {
    const nextCursor = cursor + 1;
    const response = await fetch(`http://localhost:10000/auction/api/footer/${nextCursor}`);
    if (!response.ok) {
      navigate("../")
    }
    const data = await response.json();
      if (data.length === 0) {
        setCursor(1);
      } else {
        setCursor(nextCursor);
      }
  };
  const cursorDown = async () => {
    if (cursor === 1) {
      let tempCursor = 1;
      let data = [];

      do {
        const response = await fetch(`http://localhost:10000/auction/api/footer/${tempCursor}`);
        data = await response.json();
        if (data.length === 4) tempCursor++;
      } while (data.length === 4);

      setCursor(tempCursor - 1);
    } else {
      setCursor(prev => prev - 1);
    }
  };

  const categoryMap = new Map([
    ["한국화", "korean"],
    ["회화", "painting"],
    ["건축", "architecture"],
    ["조각", "sculpture"],
    ["서예", "calligraphy"],
  ["공예", "craft"]
  ]);

  // id가 바뀔 때마다 최초 한 번 해당 데이터를 가져온다.
  const [auction, setAction] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAuction = async () => {
      const response = await fetch(`http://localhost:10000/auction/api/detail/${id}`)
      if(!response.ok) return console.error(`getAuction err ${response}`)
      const datas = await response.json()
      return datas;
    }

    getAuction()
      .then((res) => {
        // 받은 데이터 최초로 추가
        setAction(res.auction)
        setIsLoading(false)
      })
      .catch(console.err)
  }, [id])

  // 경매 완료 여부
  const timeLeft = getTimeLeft(auction.auctionStartDate, auction.auctionEndDate, new Date())
  if(isLoading) return <div>데이터를 불러오는 중...😁 </div>

  return (
    <div>
      
      <AuctionBiddingDetail auction={auction} timeLeft={timeLeft} />

      <S.AuctionIng>
        <S.AuctionIngTitle>경매중인 작품</S.AuctionIngTitle>
      </S.AuctionIng>
      <S.ArtWrapper>
        <S.NoneButton onClick={cursorDown}>
          <S.buttonImg src='/assets/images/icon/left.png' alt='left' />
        </S.NoneButton>
        <S.ArtList>
        {list.length > 0 && (
          <Link to={`/auction/bidding/${categoryMap.get(list[0].artCategory)}/detail/${list[0].id}`}>
              <S.ArtListImg
                src={`http://localhost:10000/files/api/get/${list[0].artImgName}?filePath=${list[0].artImgPath}`}
                alt="작품1"
              />
          </Link>
        )}
        </S.ArtList>
        <S.ArtList>
        {list.length > 1 && (
          <Link to={`/auction/bidding/${categoryMap.get(list[1].artCategory)}/detail/${list[1].id}`}>
              <S.ArtListImg
                src={`http://localhost:10000/files/api/get/${list[1].artImgName}?filePath=${list[1].artImgPath}`}
                alt="이미지 호출 오류"
              />
          </Link>
        )}
        </S.ArtList>
        <S.ArtList>
        {list.length > 2 && (
          <Link to={`/auction/bidding/${categoryMap.get(list[2].artCategory)}/detail/${list[2].id}`}>
              <S.ArtListImg
                src={`http://localhost:10000/files/api/get/${list[2].artImgName}?filePath=${list[2].artImgPath}`}
                alt="이미지 호출 오류"
              />
          </Link>
        )}
        </S.ArtList>
        <S.ArtList>
        {list.length > 3 && (
          <Link to={`/auction/bidding/${categoryMap.get(list[3].artCategory)}/detail/${list[3].id}`}>
            <S.ArtListImg
              src={`http://localhost:10000/files/api/get/${list[3].artImgName}?filePath=${list[3].artImgPath}`}
              alt="이미지 호출 오류"
              />
            </Link>
          )}
        </S.ArtList>
        <S.NoneButton onClick={cursorUp}>
          <S.buttonImg src='/assets/images/icon/right.png' alt='right' />
        </S.NoneButton>
      </S.ArtWrapper>
    </div>
  );
};

export default AuctionDetailContainer;