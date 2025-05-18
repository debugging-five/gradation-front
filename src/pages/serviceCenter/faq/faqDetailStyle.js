import styled from 'styled-components';


export const MainWrapper = styled.div`
    display : flex;
    width: 800px;
    flex-direction: column;
    margin-top: 48px;
    margin-bottom: 60px;
`;

export const Wrapper = styled.div`
    width: 800px;
    margin-bottom: 60px;
`;


export const Line = styled.div`
    margin-top: 7px;
    width: 800px;
    border-bottom: solid 1px;
`;

export const Button = styled.button`
    color: red;
    border: solid 1px red;
    background-color: white;
    width: 125px;
    height: 50px;
    font-size: 18px;
`;

export const Title = styled.div`
    margin-top: 32px;
    width: 800px;
    display: flex;
    align-items: end;
    gap: 10px;
`;

export const QSize = styled.p`
    font-size: 30px;
    font-weight: bold;
`;
export const QTitle = styled.p`
    font-size: 21px;
    font-weight: bold;
`;

export const QContent = styled.p`
    margin-top: 24px;
    font-size: 18px;
    width: 800px;
`;
export const Category = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content : end;
`;
