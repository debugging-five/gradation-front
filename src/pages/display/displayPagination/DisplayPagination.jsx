import S from "./style";

const DisplayPagination = ({ postsLength, itemCount, cursor, setCursor }) => {
  const pageCount = postsLength && itemCount ? Math.ceil(postsLength / itemCount) : 1;
  const groupCount = 5;
  const groupStart = Math.floor(cursor / groupCount) * groupCount;

  const prevGroup = () => {
    const newCursor = Math.max(0, cursor - groupCount);
    setCursor(newCursor);
  };

  const nextGroup = () => {
    const newCursor = Math.min(pageCount - 1, cursor + groupCount);
    setCursor(newCursor);
  };

  return (
    <S.Wrapper>
        <S.Button onClick={prevGroup} disabled={cursor === 0}>
          <S.Icon src={'/assets/images/icon/left.png'} alt='이전 버튼'/>
        </S.Button>

      {/* 숫자 버튼 */}
      {[...Array(Math.max(0, Math.min(groupCount, pageCount - groupStart)))].map((_, i) => {
        const page = groupStart + i;
        return (
          <S.Button
            key={page}
            active={cursor === page ? 'active' : ''}
            onClick={() => setCursor(page)}
          >
            {page + 1}
          </S.Button>
        );
      })}

      {/* ▶ 다음 그룹 이동 */}
      <S.Button onClick={nextGroup} disabled={cursor >= pageCount - 1}>
        <S.Icon src={'/assets/images/icon/right.png'} alt='다음 버튼'/>
      </S.Button>
    </S.Wrapper>
  );
};

export default DisplayPagination;
