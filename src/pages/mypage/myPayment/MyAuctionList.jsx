import React, { useEffect, useState } from 'react';
import * as S from '../style';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyAuctionList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const userId = currentUser?.id;

  const [auctions, setAuctions] = useState([]);
  const [bidPrices, setBidPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const categoryMap = {
    '한국화': 'korean',
    '건축': 'architecture',
    '조각': 'sculpture',
    '공예': 'craft',
    '회화': 'painting',
    '서예': 'calligraphy',
  };

  // 전체 경매 목록 불러오기
  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:10000/auction/api/my-bidding/${userId}`)
      .then(res => {
        if (!res.ok) throw new Error('네트워크 응답 에러');
        return res.json();
      })
      .then(data => {
        const list = data.auction || [];
        setAuctions(list);
        fetchAllBidPrices(list);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  // 경매 ID별 현재 입찰가 호출
  const fetchAllBidPrices = async (auctionList) => {
    const prices = {};
    await Promise.all(
      auctionList.map(async (item) => {
        try {
          const res = await fetch(`http://localhost:10000/auction/api/read-bidder/${item.id}`);
          const data = await res.json();
          prices[item.id] = data.auctionBiddingPrice || 0;
        } catch (err) {
          prices[item.id] = null;
        }
      })
    );
    setBidPrices(prices);
    setLoading(false);
  };

  // 페이지네이션
  const totalPages = Math.ceil(auctions.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAuctions = auctions.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (auctions.length === 0) return <div style={{ padding: "1rem", textAlign: "center" }}>경매 정보가 없습니다.</div>;

  return (
    <S.MainWrapper>
      <S.Wrapper>
        <S.ListHeader>
          <S.NumberBold>번호</S.NumberBold>
          <S.CategoryBold>구분</S.CategoryBold>
          <S.EmptyboxBold>경매상태</S.EmptyboxBold>
          <S.Title>상품명</S.Title>
          <S.EmptyboxBold>현재 입찰가</S.EmptyboxBold>
        </S.ListHeader>

        {currentAuctions.map((item, index) => (
          <S.ContentBox key={item.ID}>
            <S.Number>{indexOfFirstItem + index + 1}</S.Number>
            <S.Category>{item.artCategory}</S.Category>
            <S.RedText status={
              item.auctionAttracted
                ? item.userId === userId
                  ? 'win'
                  : 'fail'
                : 'progress'
            }>
              {item.auctionAttracted
                ? item.userId === userId
                  ? '낙찰'
                  : '패찰'
                : '진행중'}
            </S.RedText>
            <S.TitleNavigate
              as={NavLink}
              to={`/auction/complete/${categoryMap[item.artCategory]}/detail/${item.id}`}
              end
            >
              <S.Content>{item.artTitle}</S.Content>
            </S.TitleNavigate>
            <S.Emptybox>
              {bidPrices[item.id] != null
                ? `${bidPrices[item.id].toLocaleString()} 원`
                : '불러오는 중...'}
            </S.Emptybox>
          </S.ContentBox>
        ))}

        {totalPages > 1 && (
          <S.Pagination>
            {pageNumbers.map(number => (
              <S.PageButton
                key={number}
                onClick={() => setCurrentPage(number)}
                className={number === currentPage ? 'active' : ''}
              >
                {number}
              </S.PageButton>
            ))}
          </S.Pagination>
        )}
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default MyAuctionList;
