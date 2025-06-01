import styled from 'styled-components';


export const Box = styled.div`
    margin-top: 48px;
`;

export const AddBox = styled.div`
    margin-top: 48px;
    display: flex;
    align-items: center;
`;

export const AddButton = styled.button`
    color: red;
    border: solid 1px red;
    background-color: white;
    width: 75px;
    height: 35px;
    font-size: 12px;
    margin-right: 20px;
`;

export const CheckButton = styled.button`
    color: white;
    border: solid 1px red;
    background-color: red;
    width: 125px;
    height: 50px;
    font-size: 16px;
`;
export const InfoText = styled.p`
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #555;
`;

export const DeleteDiv = styled.div`
    margin-top: 8px;
    display: flex; 
    align-items: center; 
    font-size: 16px;
    padding-left: 20px;
`;
export const DeleteButton = styled.button`
    color: red;
    cursor: pointer;
    border: none;
    background-color: transparent;
`;
export const ErrorMessege = styled.p`
    color: #E49804;
    margin-top: 0.2rem;
    text-align: end;
`;