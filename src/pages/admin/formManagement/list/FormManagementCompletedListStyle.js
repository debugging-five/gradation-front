import styled from "styled-components";
import * as CS from "../../../../styles/common"; 

const S = {};

S.Container = styled.div`
  margin-top: 20px;
`;

S.Table = styled.div`
  width: 100%;
  border-top: 1px solid #999;
`;

S.TableHeader = styled.div`
  display: flex;
  height: 60px;
  padding: 0 50px;
  align-items: center;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
`;

S.TableRow = styled.div`
  display: flex;
  height: 60px;
  padding: 0 50px;
  align-items: center;
  border-bottom: 1px solid #eee;
`;


S.HeaderCell = styled.div`
  flex: 1;
  text-align: center;

  &:first-child {
    text-align: left;
  }

  &:nth-child(2) {
    text-align: center;
  }

  &:last-child {
    text-align: right;
  }
`;

const baseCell = `
  flex: 1;
  padding: 16px 0;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
`;

S.FormNumberCell = styled.div`
  ${baseCell}
  justify-content: flex-start;
  transform: translateX(10px);
`;

S.FormTitleCell = styled.div`
  ${baseCell}
  justify-content: center;
  cursor: pointer;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

S.FormDateCell = styled.div`
  ${baseCell}
  justify-content: flex-end;
  transform: translateX(-1px);
`;

S.Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 30px;

  button {
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
    color: #999;
  }

  .active {
    color: #ee3333;
    font-weight: bold;
    text-decoration: underline;
  }
`;

export default S;
