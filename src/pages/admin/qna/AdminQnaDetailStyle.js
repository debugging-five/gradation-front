import styled from "styled-components";
import * as CS from "../../../styles/common";

const S = {};

S.Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px 0;
`;

S.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #EE3333;

`;

S.Category = styled.h2`
  ${CS.H6};
`;

S.Note = styled.span`
  ${CS.H10};
  color: #333333;
`;

S.TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #EE3333;
  padding: 40px 0;
  margin-bottom: 30px;
`;

S.Title = styled.h1`
  ${CS.H3};
`;

S.Date = styled.span`
  ${CS.H9};
  color: #333333;
`;

S.InfoTable = styled.table`
  width: 100%;
`;

S.TableHead = styled.thead``;

S.TableRow = styled.tr``;

S.TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  ${CS.H8};
  background-color: #EE3333;
  color: #FBFCFC;
`;

S.TableData = styled.td`
  padding: 10px;
  text-align: center;
  ${CS.H8};
  background-color: #EE3333;
  color: #FBFCFC;
  border-right: 1px solid #FBFCFC;

  &:last-child {
    border-right: none;
  }
`;

S.Content = styled.div`
  min-height: 150px;
  padding: 20px 10px;
  background-color: #FBFCFC;
  ${CS.H8};

`;

S.AnswerGroup = styled.div`
  width: 100%;
  background-color: #FBFCFC;
  margin-bottom: 50px;
`;

S.AnswerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #EE3333;
  border-top: 1px solid #EE3333;
  padding: 40px 0;
`;

S.AnswerTitle = styled.h3`
  ${CS.H3};
  color: #333333;
`;

S.AnswerDate = styled.span`
  ${CS.H9};
  color: #333333;
`;

S.AnswerContent = styled.div`
  ${CS.H8};
  line-height: 1.6;
  white-space: pre-wrap;
  padding: 20px 10px
`;

S.ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

S.CancelButton = styled.button`
  width: 100px;
  height: 40px;
  ${CS.H5};
  background-color: #EE3333;
  border: none;
  color: #FBFCFC;
  cursor: pointer;
`;

S.ConfirmButton = styled.button`
  width: 100px;
  height: 40px;
  ${CS.H5};
  background-color: #FBFCFC;
  border: 1.5px solid #EE3333;
  color: #EE3333;
  cursor: pointer;
`;


export default S;