import React, { useEffect, useState } from 'react';
import * as S from '../style';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyAuctionList = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const userId = currentUser?.id;

  const [auctions, setAuctions] = useState([]);
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

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:10000/auction/api/my-bidding/${userId}`)
      .then(res => {
        if (!res.ok) throw new Error('네트워크 응답 에러');
        return res.json();
      })
      .then(data => {
        setAuctions(data.auction || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  // 페이지네이션 계산
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
          <S.EmptyboxBold>가격</S.EmptyboxBold>
        </S.ListHeader>

        {currentAuctions.map((item, index) => (
          <S.ContentBox key={item.ID}>
            <S.Number>{indexOfFirstItem + index + 1}</S.Number>
            <S.Category>{item.artCategory}</S.Category>
            <S.RedText>{item.auctionAttracted ? '낙찰' : '진행중'}</S.RedText>
            <S.TitleNavigate
              as={NavLink}
              to={`/auction/complete/${categoryMap[item.artCategory]}/detail/${item.id}`}
              end
            >
              <S.Content>{item.artTitle}</S.Content>
            </S.TitleNavigate>
            <S.Emptybox>{item.auctionBidPrice?.toLocaleString()} 원</S.Emptybox>
          </S.ContentBox>
        ))}

        {/* 페이지네이션 */}
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
