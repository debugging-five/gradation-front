import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-bottom: 60px;
`;

export const Line = styled.div`
    margin-top: 7px;
    width: 800px;
    border-bottom: solid 1px;
`;

export const Box = styled.div`

    margin-top: 48px;
    width: 800px;
`;

export const Title = styled.div`
    display: flex ;
    width: 100px;
`;



export const ButtonPhoto = styled.button`
    color: red;
    border: solid 1px red;
    background-color: white;
    width: 75px;
    height: 35px;
`;
export const ButtonSend = styled.button`
    color: white;
    background-color: red;
    border : red;
    width: 125px;
    height: 50px;
    font-size: 18px;
`;

export const OneLine = styled.div`
    display: flex ;
`;

export const CategoryWrapper = styled.div`
    display: flex;
    gap: 48px;
`;
export const Category = styled.div`
`;

export const InputTitle = styled.input`
    border: none;
    width: 720px;
    &:focus {
    outline: none;
  }
`;

export const InputContent = styled.textarea`
  width: 800px;
  height: 320px;
  padding: 12px;
  resize: none;
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content : end;
`;