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
  margin-top: 60px;
  margin-bottom: 50px;
`;

S.TabButton = styled(NavLink)`
  ${CS.H5};
  flex: 1;
  text-align: center;
  padding: 12px 0;
  border: 1px solid #C0C5C7;
  background-color: ${({ isActive }) => (isActive ? "#C0C5C7" : "#FBFCFC")}; // isActive가 불린값 기준으로 배경색 교체 활성 : 비활성
  color: #333333;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s ease;
  border-left: none;

  &:first-child {
    border-left: 1px solid #ccc;
  }
`;

export default S;