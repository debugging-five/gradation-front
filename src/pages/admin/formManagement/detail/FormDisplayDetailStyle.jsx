import styled from "styled-components";

const S = {};

S.Container = styled.div`
  width: 1160px;
  margin: 50px auto;
`;

S.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
`;

S.PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
`;

S.RequestDate = styled.div`
  font-size: 14px;
  color: #444;
`;

S.Alert = styled.div`
  font-size: 13px;
  color: #ee3333;
  margin-bottom: 10px;
`;

S.InfoBox = styled.div`
  border: 1px solid #ddd;
  background: #fff;
  padding: 20px;
  margin-bottom: 30px;
`;

S.Row = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

S.Label = styled.div`
  width: 120px;
  font-weight: 600;
  font-size: 14px;
  margin-right: 10px;
  color: #333;
`;

S.Value = styled.div`
  font-size: 14px;
  color: #222;
  flex: 1;
  word-break: break-all;
`;

S.Image = styled.img`
  max-width: 300px;
  max-height: 400px;
  border: 1px solid #eee;
  margin-bottom: 20px;
`;

S.ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  gap: 10px;
`;

S.Button = styled.button`
  padding: 10px 20px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;

  &.approve {
    background: #ee3333;
    color: #fff;
  }

  &.reject {
    background: #999;
    color: #fff;
  }

  &.back {
    background: #eee;
    color: #333;
  }
`;

export default S;
