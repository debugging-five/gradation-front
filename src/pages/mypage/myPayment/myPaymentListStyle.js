import styled from 'styled-components';

// 공용 스타일 모음

// 메인 래퍼
export const MainWrapper = styled.div`
    display : flex;
    width: 800px;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    margin-top: 48px;
    display: flex;
    gap: 28px;
`;
export const ProductImage = styled.div`
    width: 248px;
    height: 248px;
    background-color: gray;
    border: solid 1px gray;
`;

export const StatusDiv = styled.div`
    display: flex;
    gap: 12px;
    align-items: end;
`;

export const ButtonDiv = styled.div`
    display : flex;
    gap: 12px;
    padding: 12px 0;
    justify-content: end;
`;

export const Status = styled.p`
    font-size: 21px;
    font-weight: bold;
`;
export const Day = styled.p`
    font-size: 16px;
    color: gray;
`;

export const Menu = styled.p`
    font-size: 16px; 
`;
export const Content = styled.p`
    font-size: 16px;
    color: gray;
    text-align: end;
`;
export const Price = styled.p`
    font-size: 18px;
    font-weight: bold;
`;
export const MenuBox = styled.div`
    width: 525px;
    padding: 16px 0;
    border-bottom: solid 1px gray;
    border-top: solid 1px gray;
    margin: 6px 0;
`;

export const OneLine = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Emptybox = styled.div`
    height: 16px;
`;