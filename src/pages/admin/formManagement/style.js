import styled from "styled-components";
import { NavLink } from "react-router-dom";
import * as CS from "../../../styles/common";

const S = {};

S.Container = styled.div`
  width: 800px;
  margin: 0 auto;
`;

S.TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

S.TabBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border: 1px solid #C0C5C7;
  overflow: hidden;
`;

S.TabButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 10px 0;
  font-weight: 500;
  background-color: ${({ $active }) => ($active ? "#C0C5C7" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#000000" : "#999999")};
  text-decoration: none;
  cursor: pointer;
  border: none;
  outline: none;
`;

S.CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 20px 0;
`;

S.Category = styled(NavLink)`
  ${CS.EN_H6};
  cursor: pointer;
  color: #333333;
  position: relative;
  text-decoration: none;
  padding: 0 10px;

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

S.Separator = styled.span`
  color: #c0c5c7;
  font-size: 14px;
`;

export default S;
