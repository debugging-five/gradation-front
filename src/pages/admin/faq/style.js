import * as CS from "../../../styles/common";
import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px;
`;

export const Title = styled.h2`
  ${CS.H3}
  margin-bottom: 30px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border-bottom: 1px solid #eee;
    padding: 16px;
    text-align: center;
  }
`;

export const ClickableTd = styled.td`
  text-align: left;
  color: #333;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const RegisterButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

export const Pagination = styled.div`
  text-align: center;
  margin-top: 40px;

  span {
    margin: 0 8px;
    cursor: pointer;
  }

  .active {
    font-weight: bold;
    color: red;
  }
`;
