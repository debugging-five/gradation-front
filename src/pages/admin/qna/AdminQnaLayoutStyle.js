import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const TabButton = styled(NavLink)`
  flex: 1;
  text-align: center;
  padding: 12px 0;
  border: 1px solid #ccc;
  background-color: white;
  color: #000;
  font-weight: bold;
  text-decoration: none;

  &.active {
    background-color: #eee;
  }
`;