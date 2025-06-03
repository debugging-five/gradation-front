import styled from "styled-components";

const S = {};

S.Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background: #fff;
`;

S.PageTitle = styled.h1`
  color: #111;
  margin-bottom: 24px;
`;

S.SearchBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

S.SearchInput = styled.input`
  height: 36px;
  width: 200px;
  padding: 0 10px;
  border: 1px solid #cccccc;
`;

S.SearchButton = styled.button`
  height: 36px;
  padding: 0 16px;
  background: #ee3333;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #c62828;
  }
`;

S.Table = styled.div`
  width: 100%;
  background: #fff;
`;

S.Head = styled.div`
  display: flex;
  width: 100%;
  background: #fbfcfc;
  border-bottom: 1px solid #ddd;
  font-size: 0.92rem;
  color: #555;
  font-weight: 600;
`;

S.Body = styled.div`
width: 100%;
`;

S.Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const commonCell = `
  padding: 12px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  box-sizing: border-box;
`;

S.HeaderCell = styled.div`
  ${commonCell}
  justify-content: center;

  &:nth-child(1) { width: 40px; justify-content: center; }
  &:nth-child(2) { width: 140px; justify-content: flex-start; padding-left: 18px; }
  &:nth-child(3) { width: 160px; justify-content: flex-start; }
  &:nth-child(4) { width: 180px; justify-content: flex-start; padding-left: 42px; }
  &:nth-child(5) { width: 140px; justify-content: center; }
  &:nth-child(6) { width: 120px; justify-content: center; }
`;

S.Cell = styled.div`
  ${commonCell}
  justify-content: center;
  text-align: center;

  &:nth-child(1) { width: 40px; justify-content: center; }
  &:nth-child(2) { width: 140px; justify-content: flex-start; }
  &:nth-child(3) { width: 160px; justify-content: flex-start; }
  &:nth-child(4) { width: 180px; justify-content: flex-start; }
  &:nth-child(5) { width: 140px; justify-content: center; }
  &:nth-child(6) { width: 120px; justify-content: center; }
`;


S.Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  accent-color: #ee3333;
`;

S.StatusSelect = styled.select`
  width: 100px;
  padding: 6px 10px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 0.9rem;
  text-align: center;
`;

S.StatusText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ status }) =>
    status === "댓글정지" ? "#e49804" :
    status === "영구정지" ? "#ee3333" :
    "#2c2c2c"};
`;

S.Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 10px;
  gap: 6px;
`;

S.PaginationNumber = styled.span`
  font-size: 14px;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? "#ee3333" : "#666")};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};

  &:hover {
    color: #ee3333;
  }
`;

S.SaveButton = styled.button`
  display: block;
  margin: 16px auto;
  min-width: 120px;
  height: 40px;
  background: #ee3333;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #c62828;
  }
`;

export default S;
