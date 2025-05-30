import styled from 'styled-components';


export const Wrapper = styled.div`
`;
export const CategoryUl = styled.ul`
    position: absolute; 
    top: 2rem;
    right : 0rem;
    z-index: 10; 
    background-color: white;
    font-size: 16px;
`;
export const CategoryLi = styled.li`
    font-size: 16px;
    border: solid 1px gray;
    width: 75px;
    height: 35px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
      &:hover {
    background-color: red;
    color: white;
  }
`;

export const CategoryBox = styled.div`
    position: relative;
    display: inline-block;
    display: flex;
    align-items: end;
    justify-content: end;
    margin: 15px 0 7px;
    font-size: 16px;

`;
export const CategoryButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 16px;
`;

