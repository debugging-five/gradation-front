import styled from 'styled-components';

// 메인 래퍼
export const MainWrapper = styled.div`
    display : flex;
    flex-direction: column;
    width: 440x;
    align-items: center;
    justify-content: center;
`;
// 비밀번호 변경 글씨
export const Title = styled.p`
    font-size: 30px;
    font-weight: bold;
`;
// 여백
export const EmptyBox = styled.div`
    height: 50px;
`;

// 비밀번호 변경란
export const ChangePasswordBox = styled.div`
    display: flex;
`;
export const PasswordTitle = styled.div`
    width: 136px;
`;

// 인풋
export const InputContent = styled.input`
    border: none;
    width: 280px;
    font-size: 16px;
    &:focus {
    outline: none;
  }
`;

// 밑줄
export const EndBar = styled.p`
  width: 440px;
  border-bottom: solid 1px;
  margin-top: 7px;
`;

// 비밀번호 확인 버튼
export const Button = styled.button`
    border: solid 1px red;
    border-radius: 2px;
    background-color: red;
    width: 440px;
    height: 50px;
    color: white;
    font-size: 21px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    gap: 20px;
`;


export const OkBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const UserIcon = styled.img`
    width: 72px;
    height: 72px;
`;
export const OkTitle1 = styled.p`
    font-size: 21px;
    font-weight: bold;
    padding: 20px 0 10px;
`;
export const OkTitle2 = styled.p`
    font-size: 21px;
    font-weight: bold;
`;