import styled from 'styled-components';

export const UserInfo = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const Box = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: end;
`;

export const IdBox = styled.div`
  margin-top: 48px;
  display: flex;
`;

export const IdBar = styled.p`
  width: 80px;
  text-align: center;
`;

export const IdTitle = styled.p`
  font-weight: bold;
`;

export const IdContent = styled.p`
    width: 100px;
`;

export const EndBar = styled.p`
  margin-top : 8px;
  width: 800px;
  border-bottom: solid 1px;
`;

export const Title = styled.div`
  font-weight: bold;
  display: flex;
  width: 120px;
`;

export const CheckDiv = styled.div`
  width: 164px;
`;
export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  `;

  export const NickNameSpace = styled.div`
    width: 320px;
  `;
  export const AddressSpace = styled.div`
    width: 190px;
  `;
  export const NumEmailSpace = styled.div`
    width: 156px;
  `;
  export const InputButtonDiv = styled.div`
    display: flex;
    gap: 10px;
  `;
export const Button = styled.button`
  width: 125px;
  height: 50px;
  background-color: red;
  color: white;
  text-align: center;
  border: none;
`;

export const InputStyle = styled.input`
  all: unset;           
  font-size: 16px;      
  width: 240px;         
  box-sizing: border-box;
`;
export const PStyle = styled.p`
  font-size: 16px;      
  width: 240px;   
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

// 120사이즈 회원정보 수정용 빨간버튼
export const Button120x35R = styled.button`
  border: solid 1px red;
  border-radius: 2px;
  background-color: red;
  width: 120px;
  height: 35px;
  color: white;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 120사이즈 회원정보 수정용 빨간버튼
export const Button120x35W = styled.button`
  border: solid 1px red;
  border-radius: 2px;
  background-color: white;
  width: 120px;
  height: 35px;
  color: red;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;