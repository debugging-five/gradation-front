import styled from "styled-components";

const S = {};

// 전체 컨테이너
S.Container = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 40px 0 0 0;
`;

// 페이지 타이틀
S.PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 28px;
`;

// 회원정보 + 검색바
S.HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

S.InfoLabel = styled.div`
  font-size: 1.16rem;
  font-weight: bold;
  letter-spacing: -0.5px;
`;

// 검색바
S.SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

S.SearchInput = styled.input`
  width: 200px;
  padding: 6px 12px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  font-size: 1rem;
`;

S.SearchButton = styled.button`
  padding: 7px 18px;
  background: #ee3333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #c93030;
  }
`;

// 테이블 전체(wrapper)
S.Table = styled.div`
  width: 100%;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 6px;
`;

S.TableHead = styled.div`
  display: flex;
  background: #f7f7f7;
  border-bottom: 1.5px solid #e1e1e1;
  font-weight: bold;
  color: #555;
`;

S.TableTh = styled.div`
  flex: ${({ $flex }) => $flex || 1};
  padding: 13px 0;
  text-align: center;
  font-size: 1.01rem;
  &:first-child { min-width: 42px; } /* 체크박스 */
  &:last-child { min-width: 48px; }  /* 휴지통 */
`;

S.TableBody = styled.div`
`;

S.TableRow = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;
  font-size: 1.03rem;
  &:hover {
    background: #faf9f9;
  }
`;

S.TableTd = styled.div`
  flex: ${({ $flex }) => $flex || 1};
  padding: 13px 0;
  text-align: center;
  color: #222;
  font-size: 1rem;
  &:first-child { min-width: 42px; }
  &:last-child { min-width: 48px; }
`;

// 회원상태관리 드롭다운
S.StatusDropdown = styled.select`
  padding: 4px 12px;
  font-size: 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  background: #fff;
  color: #222;
  min-width: 90px;
`;

// 회원상태(컬러 적용)
S.StatusLabel = styled.span`
  font-weight: 500;
  color: ${({ status }) =>
    status === "댓글정지" ? "#E49804"
    : status === "영구정지" ? "#EE3333"
    : "#222"
  };
`;

// 삭제(휴지통) 버튼
S.DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #888;
  cursor: pointer;
  transition: color 0.15s;
  &:hover { color: #ee3333; }
`;

// 체크박스(일관 스타일)
S.Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  accent-color: #ee3333;
  margin: 0;
`;

export default S;
