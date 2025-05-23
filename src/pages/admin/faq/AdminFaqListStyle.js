import styled from "styled-components";
import * as CS from "../../../styles/common";

const S = {};

S.FaqPageContainer = styled.div`
  width: 800px;
  margin: 0 auto;
`;

S.DropdownContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  position: relative;
`;

S.DropdownToggleButton = styled.button`
  ${CS.H8};
  border: 1px solid #ccc;
  padding: 6px 14px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

S.DropdownList = styled.ul`
  position: absolute;
  top: 2.5rem;
  right: 0;
  z-index: 10;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
  padding: 4px 0;
`;

S.DropdownItem = styled.li`
  ${CS.H8};
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #305cde;
    color: white;
  }
`;

S.FaqTableWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
`;

S.FaqTableHeader = styled.div`
  ${CS.H5}
  display: flex;
  width: 100%;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

S.FaqTableRow = styled.div`
  ${CS.H8}
  display: flex;
  width: 100%;
  align-items: center;
  height: 48px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

S.FaqNumberHeader = styled.div`
  width: 60px;
  text-align: center;
  padding: 0 8px;
`;

S.FaqCategoryHeader = styled.div`
  width: 100px;
  text-align: center;
  padding: 0 50px;
`;

S.FaqTitleHeader = styled.div`
  flex: 1;
  text-align: center;
  overflow: hidden;
  padding: 0 50px;
`;

S.FaqNumberCell = styled.div`
  width: 60px;
  text-align: center;
  padding: 0 8px;
`;

S.FaqCategoryCell = styled.div`
  width: 100px;
  text-align: center;
  padding: 0 50px;
`;

S.FaqTitleLinkCell = styled.div`
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

S.FaqTitleText = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-decoration: none;
  color: #000;
`;

S.RegisterButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
`;

S.RegisterButton = styled.button`
  ${CS.H8}
  width: 125px;
  height: 50px;
  background-color: #ee3333;
  border: none;
  margin-top: 60px;
  padding: 10px 20px;
  border-radius: 2px;
  color: white;
  cursor: pointer;
`;

S.Pagination = styled.div`
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