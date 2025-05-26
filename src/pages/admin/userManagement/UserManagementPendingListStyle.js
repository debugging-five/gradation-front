import styled from "styled-components";
import * as CS from "../../../styles/common";

const S = {};

S.Container = styled.div`
  margin-top: 20px;
`;

S.Table = styled.div`
  width: 100%;
  border-top: 1px solid #999;
`;

S.TableHeader = styled.div`
  ${CS.H6};
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
`;

S.TableRow = styled.div`
  ${CS.H8};
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

S.HeaderCell = styled.div`
  flex: 1;
  text-align: center;
`;

S.Cell = styled.div`
  flex: 1;
  text-align: center;
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
