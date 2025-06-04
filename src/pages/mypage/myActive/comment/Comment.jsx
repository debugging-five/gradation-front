import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../style';
import { Link } from 'react-router-dom';

const Comment = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [comments, setComments] = useState([]);
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
    const fetchComments = async () => {
      if (!currentUser?.id) return;
      try {
        const response = await fetch(`http://localhost:10000/comments/api/list/${currentUser.id}`);
        if (!response.ok) throw new Error('서버 응답 실패');
        const data = await response.json();
        setComments(data.commentList);
      } catch (error) {
        console.error('댓글 목록 불러오기 실패:', error);
      }
    };

    fetchComments();
  }, [currentUser]);

  const totalPages = Math.ceil(comments.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = comments.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <S.MainWrapper>
      <S.Wrapper>
        {/* 리스트 헤더 */}
        <S.ListHeader>
          <S.NumberBold>번호</S.NumberBold>
          <S.CategoryBold>작품명</S.CategoryBold>
          <S.Emptybox></S.Emptybox>
          <S.Title>내 댓글</S.Title>
          <S.EmptyboxBold>작성일</S.EmptyboxBold>
        </S.ListHeader>

        {/* 댓글 목록 */}
        {currentItems.length > 0 ? (
  currentItems.map((comment, idx) => {
    const linkTo = `/display/${categoryMap[comment.artCategory]}/detail/${comment.artPostId}`;
    return (
      <S.ContentBox as={Link} to={linkTo} key={comment.id || idx}>
        <S.Number>{indexOfFirstItem + idx + 1}</S.Number>
        <S.Category>{comment.artTitle || '작품명 없음'}</S.Category>
        <S.Emptybox></S.Emptybox>
        <S.Content>{comment.commentContent || '댓글 내용 없음'}</S.Content>
        <S.Emptybox>{new Date(comment.commentDate || '-').toLocaleDateString('ko-KR')}</S.Emptybox>
      </S.ContentBox>
    );
  })
) : (
  <div style={{ padding: "1rem", textAlign: "center" }}>작성한 댓글이 없습니다.</div>
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

export default Comment;
