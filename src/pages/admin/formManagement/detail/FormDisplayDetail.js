import styled from "styled-components";

console.log("FormDisplayDetailStyle 모듈 진입!");
const S = {};

S.Container = styled.div`
  width: 1160px;
  margin: 50px auto;
`;

S.PageTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

S.CategoryTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #ee3333;
`;

S.RequestInfo = styled.div`
  text-align: right;
`;

S.RequestTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 4px;
`;

S.RequestDate = styled.h3`
  font-size: 14px;
  color: #888;
`;

S.ContactTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
`;

S.TableHead = styled.th`
  border-bottom: 1px solid #ccc;
  padding: 12px;
  text-align: left;
  font-size: 14px;
  background: #f5f5f5;
`;

S.TableCell = styled.td`
  padding: 12px;
  font-size: 14px;
  color: #333;
`;

S.DetailContent = styled.div`
  display: flex;
  gap: 30px;
`;

S.ImageBox = styled.div`
  flex-shrink: 0;
`;

S.Image = styled.img`
  max-width: 300px;
  max-height: 400px;
  border: 1px solid #eee;
  margin-bottom: 20px;
`;

S.InfoItem = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

S.InfoLabel = styled.div`
  width: 100px;
  font-weight: bold;
  color: #555;
`;

S.InfoValue = styled.div`
  flex: 1;
  color: #333;
`;

S.Description = styled.div`
  font-size: 14px;
  color: #444;
  line-height: 1.5;
`;

S.ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;
  justify-content: flex-end;
`;

S.ActionButton = styled.button`
  padding: 10px 20px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;

  &.approve {
    background: #ee3333;
    color: #fff;
  }

  &.cancel {
    background: #aaa;
    color: #fff;
  }
`;


export default S;
