import styled from "styled-components";
import * as CS from "../../../styles/common";

const S = {};

S.Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px 0;
`;

S.Title = styled.label`
  ${CS.H5};
  display: block;
  margin-bottom: 12px;
  color: #000;
`;

S.TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 16px;
  font-size: 15px;
  border: 1px solid #ccc;
  resize: none;
  line-height: 1.5;
`;

S.ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;

S.CancelButton = styled.button`
  width: 100px;
  height: 40px;
  ${CS.H5};
  background-color: #fff;
  border: 1.5px solid #ee3333;
  color: #ee3333;
  cursor: pointer;
`;

S.ConfirmButton = styled.button`
  width: 100px;
  height: 40px;
  ${CS.H5};
  background-color: #ee3333;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export default S;
