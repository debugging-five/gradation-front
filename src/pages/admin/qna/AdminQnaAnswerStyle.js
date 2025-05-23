import styled from "styled-components";
import * as CS from "../../../styles/common";

const S = {};

S.Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px 0;
`;

S.HeaderSection = styled.div`
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

S.QuestionSection = styled.div`
`;

S.TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #EE3333;
  padding: 40px 0;
  margin-bottom: 30px;
`;

S.QuestionTitle = styled.h1`
  ${CS.H3};
`;

S.QuestionDate = styled.span`
  ${CS.H9};
  color: #333333;
`;

S.UserInfoTable = styled.table`
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

S.QuestionContent = styled.div`
  min-height: 150px;
  padding: 20px 10px;
  background-color: #FBFCFC;
  ${CS.H8};
`;

S.AnswerSection = styled.div`
`;

S.AnswerLabel = styled.label`
  ${CS.H5}
  width: 80px;
  color: #000000;
  text-align: left;
  white-space: nowrap;
`;

S.RequiredMark = styled.span`
  color: #ee3333;
  margin-left: 2px;
`;

S.AnswerTextArea = styled.textarea`
  width: 100%;
  height: 300px;
  font-size: 15px;
  border: 1px solid #ccc;
  resize: none;
  line-height: 1.5;
`;

S.ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
  margin-right: -5px;
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

S.SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  ${CS.H5};
  background-color: #ee3333;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export default S;
