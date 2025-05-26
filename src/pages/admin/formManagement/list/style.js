import styled from "styled-components";
import { NavLink } from "react-router-dom";
import * as CS from "../../../../styles/common";

const S = {};

S.Container = styled.div`
  width: 1160px;
  margin: 0 auto;
  padding: 60px 0;
`;

S.PageTitle = styled.h1`
  ${CS.H2};
  margin-bottom: 40px;
  font-weight: bold;
`;

S.TabWrapper = styled.div`
  display: flex;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

S.TabButton = styled(NavLink)`
  flex: 1;
  text-align: center;
  padding: 12px 0;
  border: none;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? "#000" : "#999")};
  background-color: ${({ isActive }) => (isActive ? "#eee" : "#f7f7f7")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  cursor: pointer;
`;

S.CategoryWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 30px 0;
`;

S.Category = styled(NavLink)`
  ${CS.H7};
  cursor: pointer;
  color: #999;
  position: relative;
  padding-bottom: 6px;
  text-decoration: none;

  &.active {
    color: #ee3333;
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ee3333;
    }
  }
`;

S.Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

S.TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

S.TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

S.Cell = styled.td`
  padding: 12px;
  text-align: center;
`;

S.Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 4px;
    padding: 6px 12px;
    border: none;
    background-color: #eee;
    cursor: pointer;

    &.active {
      background-color: #ee3333;
      color: white;
      font-weight: bold;
    }
  }
`;


export default S;
