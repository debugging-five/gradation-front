import styled from "styled-components";
import { NavLink } from "react-router-dom";
import * as CS from "../../../styles/common";

const S = {};

S.Container = styled.div`
  width: 800px;
  margin: 0 auto;
`;

S.QnaTableWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
`;

S.TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 12px;
`;

S.TabButton = styled(NavLink)`
  ${CS.H7};
  padding: 8px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  background-color: #ffffff;
  transition: all 0.2s;

  &.active {
    background-color: #f0f0f0;
    font-weight: bold;
    color: #000;
  }
`;

S.QnaTableHeader = styled.div`
  ${CS.H5};
  display: flex;
  width: 100%;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

S.QnaTableRow = styled.div`
  ${CS.H8};
  display: flex;
  width: 100%;
  align-items: center;
  height: 48px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

S.QnaNumberHeader = styled.div`
  width: 60px;
  text-align: center;
  padding: 0 8px;
`;

S.QnaCategoryHeader = styled.div`
  width: 100px;
  text-align: center;
  padding: 0 50px;
`;

S.QnaTitleHeader = styled.div`
  flex: 1;
  text-align: center;
  overflow: hidden;
  padding: 0 50px;
`;

S.QnaNumberCell = styled.div`
  width: 60px;
  text-align: center;
  padding: 0 8px;
`;

S.QnaCategoryCell = styled.div`
  width: 100px;
  text-align: center;
  padding: 0 50px;
`;

S.QnaTitleLinkCell = styled.div`
  flex: 1;
  padding-left: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  text-decoration: none;
  padding: 0 130px;
`;

S.QnaTitleText = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-decoration: none;
  color: #000;
`;

S.Pagination = styled.div`
  ${CS.H7};
  display: flex;
  justify-content: center;
  margin-top: 30px;

  span {
    margin: 0 6px;
    cursor: pointer;
  }

  .active {
    color: #ee3333;
    font-weight: bold;
    text-decoration: underline;
  }
`;

export default S;