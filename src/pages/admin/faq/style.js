<<<<<<< Updated upstream
// import styled from 'styled-components';

// export const Wrapper = styled.div`
//   margin-top: 20px;
//   border-top: 1px solid #ccc;
//   width: 100%;
// `;

// export const CategoryBox = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-bottom: 10px;
//   position: relative;
// `;

// export const CategoryButton = styled.button`
//   font-size: 16px;
//   border: 1px solid #ccc;
//   padding: 6px 14px;
//   border-radius: 4px;
//   background-color: white;
//   cursor: pointer;
// `;

// export const CategoryUl = styled.ul`
//   position: absolute;
//   top: 2.5rem;
//   right: 0;
//   z-index: 10;
//   background-color: white;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: 100px;
//   padding: 4px 0;
// `;

// export const CategoryLi = styled.li`
//   font-size: 14px;
//   padding: 8px 12px;
//   cursor: pointer;
//   &:hover {
//     background-color: #305CDE;
//     color: white;
//   }
// `;

// export const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   border-top: 2px solid #000;
// `;

// export const ClickableTd = styled.td`
//   cursor: pointer;
//   color: #305CDE;
//   text-decoration: underline;
// `;

// export const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-top: 20px;
// `;

// export const RegisterButton = styled.button`
//   background-color: #E60023;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   font-size: 16px;
//   border-radius: 4px;
//   cursor: pointer;
// `;

// export const Pagination = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 30px;

//   span {
//     margin: 0 6px;
//     cursor: pointer;
//   }

//   .active {
//     font-weight: bold;
//     text-decoration: underline;
//   }
// `;

// export const Container = styled.div`
//   width: 100%;
//   max-width: 720px;
//   margin: 0 auto;
// `;

// export const Title = styled.h2`
//   font-size: 20px;
//   font-weight: 600;
//   margin-bottom: 25px;
// `;

// export const MainWrapper = styled.div`
//   padding: 20px;
// `;

// export const ListHeader = styled.div`
//   display: flex;
//   border-bottom: 2px solid #000;
//   padding: 10px 0;
//   font-weight: bold;
// `;

// export const NumberBold = styled.div`
//   width: 60px;
//   text-align: center;
// `;

// export const CategoryBold = styled.div`
//   width: 120px;
//   text-align: center;
// `;

// export const Emptybox = styled.div`
//   width: 20px;
// `;

// export const TitleNavigate = styled.div`
//   flex: 1;
// `;

// export const Content = styled.div`
//   cursor: pointer;
//   &:hover {
//     text-decoration: underline;
//     color: #305CDE;
//   }
// `;

// export const ContentBox = styled.div`
//   display: flex;
//   align-items: center;
//   border-bottom: 1px solid #ddd;
//   padding: 12px 0;
// `;

// export const Number = styled.div`
//   width: 60px;
//   text-align: center;
// `;

// export const Category = styled.div`
//   width: 120px;
//   text-align: center;
// `;
=======
import styled from 'styled-components';
import * as CS from '../../../styles/common';

export const FaqPageContainer = styled.div`
  width: 800px;
  margin: 0 auto;
;`

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  position: relative;
;`

export const DropdownToggleButton = styled.button`
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 6px 14px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
;`

export const DropdownList = styled.ul`
  position: absolute;
  top: 2.5rem;
  right: 0;
  z-index: 10;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
  padding: 4px 0;
;`

export const DropdownItem = styled.li`
  font-size: 14px;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #305cde;
    color: white;
  }
;`

export const FaqTableWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
;`

export const PageTitle = styled.div`
  ${CS.H2}
`

export const FaqTableHeader = styled.div`
  ${CS.H5}
  display: flex;
  width: 100%;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
;`

export const FaqTableRow = styled.div`
  ${CS.H8}
  display: flex;
  width: 100%;
  align-items: center;
  height: 48px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
;`

export const FaqNumberHeader = styled.div`
  width: 60px;
  text-align: center;
  padding: 0 8px;
;`

export const FaqCategoryHeader = styled.div`
  width: 100px;
  text-align: center;
  padding: 0 50px;
;`

export const FaqTitleHeader = styled.div`
  flex: 1;
  text-align: center;
  overflow: hidden;
  padding: 0 50px;
`;

export const FaqNumberCell = styled.div`
  width: 60px;
  text-align: center;
  padding: 0 8px;
;`

export const FaqCategoryCell = styled.div`
  width: 100px;
  text-align: center;
  padding: 0 50px;
;`

export const FaqTitleLinkCell = styled.div`
  flex: 1;
  padding-left: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;  // ✅ 수평 기준 가운데 정렬
  text-align: center;       // ✅ 내부 텍스트 가운데 정렬
  align-items: center;
  text-decoration: none;
  padding: 0 130px;
;`

export const FaqTitleText = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-decoration: none;
  color: #000;
;`

export const RegisterButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
  ;`

export const RegisterButton = styled.button`
  ${CS.H8}
  width: 120px;
  height: 45px;
  background-color: #ee3333;
  border: none;
  margin-top: 60px;
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  ;`
  
  export const Pagination = styled.div`
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
  ;`
>>>>>>> Stashed changes
