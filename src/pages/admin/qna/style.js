import styled from "styled-components";
import { NavLink } from "react-router-dom";
import * as CS from "../../../styles/common";

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`;

export const QnaTableWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 12px;
`;

export const TabButton = styled(NavLink)`
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

export const QnaTableHeader = styled.div`
  ${CS.H5};
  display: flex;
  width: 100%;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

export const QnaTableRow = styled.div`
  ${CS.H8};
  display: flex;
  width: 100%;
  align-items: center;
  height: 48px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

export const QnaNumberHeader = styled.div`
  width: 60px;
  text-align: center;
  padding: 0 8px;
`;

export const QnaCategoryHeader = styled.div`
  width: 100px;
  text-align: center;
  padding: 0 50px;
`;

export const QnaTitleHeader = styled.div`
  flex: 1;
  text-align: center;
  overflow: hidden;
  padding: 0 50px;
`;

export const QnaNumberCell = styled.div`
  width: 60px;
  text-align: center;
  padding: 0 8px;
`;

export const QnaCategoryCell = styled.div`
  width: 100px;
  text-align: center;
  padding: 0 50px;
`;

export const QnaTitleLinkCell = styled.div`
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

export const QnaTitleText = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-decoration: none;
  color: #000;
`;
