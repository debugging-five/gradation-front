import styled from 'styled-components';

// 공용 스타일 모음

// 메인 래퍼
export const Chepter1 = styled.div`
    display : flex;
`;


export const Line = styled.div`
    display : flex;
    height: 120px;
    border-left: solid 1px;
`;
export const ProductImg = styled.img`
    width: 72px;
    height: 72px;
`;
// 한줄로 처리할 때
export const OneLine = styled.div`
  display: flex;
  align-items: center;
`;
export const SendedWrapper = styled.div`
  display: flex;
  gap :8px;
  align-items: center;
`;
export const TextOneLine = styled.div`
  display: flex;
  margin: 5px 0;
`;
export const Title = styled.div`
  width: 120px;
  font-weight: bold;
`;
export const RTitle = styled.div`
  width: 120px;
  padding-left: 40px;
  font-weight: bold;
`;
export const Content = styled.div`
  width: 200px;
`;
export const RContent = styled.div`
  width: 240px;
`;
export const RedBox = styled.div`
  width: 100%;
  border: solid 1px red;
  background-color: red;
  padding: 16px 0 16px ;
  display: flex;
`;
export const RedText1 = styled.p`
    padding-left: 16px;
    width: 356px;
    color: white;
`;
export const RedText2 = styled.p`
    width: 300px;
    color: white;
`;
export const RedText3 = styled.p`
    width: 124px;
    color: white;
`;
export const Text1 = styled.p`
    padding: 10px 0 0 16px;
    width: 356px;
    margin-bottom: 10px;
`;
export const Text2 = styled.p`
    width: 300px;
    padding: 10px 0 ;
`;
export const Text3 = styled.p`
    width: 124px;
    padding: 10px 0 ;
`;

