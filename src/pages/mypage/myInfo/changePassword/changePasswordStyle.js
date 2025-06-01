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
    background-color: transparent;
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

export const BigPopUp = styled.div`
    width: 640px;
    height: 352px;
    background-color: white;
    transform: translateY(-100px); /* 위로 50px 올림 */
    border-radius: 5px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5); // 팝업 상자 자체의 그림자
`;
export const BigPopUpText = styled.p`
    font-size: 21px;
    font-weight: bold;
`;
export const BigPopUpContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    padding: 60px 0 40px;
`;

export const Error = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;  /* 세로 중앙 정렬 */
  color: orange;
  width: 100%;
  font-size: 12px;
  padding-left: 136px;
  margin-top: 8px;
`;

export const Eye = styled.img`
  width: 16px;
  height: 12px;
`;
export const InputWrapper = styled.div`
    position: relative
`;