import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from '../../style';
import * as SA from './myAvailableAuctionArtStyle';
import { useSelector } from 'react-redux';

const MyAvailableAuctionArt = () => {
  const [auctionArts, setAuctionArts] = useState([]);
  const currentUser = useSelector(state => state.user.currentUser);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수

  useEffect(() => {
    if (!currentUser?.id) return;

    const fetchAuctionArts = async () => {
      try {
        const response = await fetch(`http://localhost:10000/displays/api/list/auction?userId=${currentUser.id}`);
        if (!response.ok) throw new Error('서버 응답 실패');
        const data = await response.json();
        setAuctionArts(data.artListForAuction);
      } catch (error) {
        console.error('경매 가능 작품 불러오기 실패:', error);
      }
    };

    fetchAuctionArts();
  }, [currentUser]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(auctionArts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = auctionArts.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <S.MainWrapper>
      <S.Wrapper>
        {/* 리스트 헤더 */}
        <S.ListHeader>
          <S.Number>번호</S.Number>
          <S.Category>구분</S.Category>
          <S.Emptybox></S.Emptybox>
          <S.Title>작품명</S.Title>
          <S.Emptybox></S.Emptybox>
        </S.ListHeader>

        {/* 리스트 배열 */}
        {currentItems.length > 0 ? (
          currentItems.map((art, index) => (
            <SA.ContentBox key={art.id || index}>
              <S.Number>{indexOfFirstItem + index + 1}</S.Number> {/* 전체 기준 번호 */}
              <S.Category>{art.artCategory}</S.Category>
              <S.Emptybox></S.Emptybox>
              <S.TitleNavigate as={NavLink} to={`/display/detail/${art.id}`} end>
                <S.Content>{art.artTitle}</S.Content>
              </S.TitleNavigate>
              <S.Emptybox>
                <SA.Button75x35R onClick={() => window.location.href = `/auction/registration/${art.id}`}>
                  경매 등록
                </SA.Button75x35R>
              </S.Emptybox>
            </SA.ContentBox>
          ))
        ) : (
          <SA.NoneText>경매 가능 작품이 없습니다.</SA.NoneText>
        )}

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

export default MyAvailableAuctionArt;
