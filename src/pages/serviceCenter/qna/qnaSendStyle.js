    import styled from 'styled-components';

    export const Wrapper = styled.div`
        margin-bottom: 60px;
        width: 100%;
        width: 800px;
        margin-left: auto;
        margin-right: auto;
    `;

    export const Line = styled.div`
        margin-top: 7px;
        width: 100%;  
        border-bottom: solid 1px;
    `;

    export const Box = styled.div`
        max-width: 100%;
        margin-top: 48px;
        width: 100%;  
    `;

    export const Title = styled.div`
        display: flex ;
        width: 100px;
        font-size: 16px;
        font-weight: bold;
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
        border : solid 1px red;
        width: 125px;
        height: 50px;
        font-size: 18px;
    `;

    export const OneLine = styled.div`
        display: flex ;
        align-items: center;
    `;

    export const CategoryWrapper = styled.div`
        display: flex;
        gap: 48px;
    `;
    export const Category = styled.div`
        display: flex;
        align-items: center;
    `;

    export const InputTitle = styled.input`
        border: none;
        width: 100%;
        max-width: 680px;
        font-size: 16px;
        background-color: transparent;
        &:focus {
        outline: none;
        
    }
    `;

    export const InputContent = styled.textarea`
        width: 100%;  
        height: 320px;
        padding: 12px;
        resize: none;
        font-size: 16px;
        line-height: 1.5;
        box-sizing: border-box;
        font-family: inherit;
    `;

    export const ButtonDiv = styled.div`
        margin-top: 60px;
        display: flex;
        justify-content : end;
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
    // #EE3333