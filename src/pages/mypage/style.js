import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// 공용 스타일 모음

// 메인 래퍼
export const MainWrapper = styled.div`
    display : flex;
    width: 800px;
    flex-direction: column;
`;

// 감싸는 래퍼
export const Wrapper = styled.div`
  margin-top: 48px;
`;

// 상단 글씨
export const MainTitle = styled.p`
    font-size: 30px;
    font-weight: bold;
`;

// 밑줄
export const EndBar = styled.p`
  width: 800px;
  border-bottom: solid 1px;
  margin-top: 7px;
`;

// 한줄로 처리할 때
export const OneLine = styled.div`
  display: flex;
  align-items: end;
`;


export const TitleBox = styled.div`
  width: 120px;
  font-size: 18px;
`;

export const InputBox = styled.input`
  border: none;
  font-size: 16px;
  outline: none;
`;


// 상단 바
export const ChooseBarWapper = styled.div`
    width: 800;
    margin-top: 48px;
    display: flex;
`;
export const ChooseBar = styled(NavLink)`
    width: 400px;
    height: 45px;
    border: solid 1px #C0C5C7;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
  &.active {
    font-weight: bold;
    background-color: #C0C5C7;
  }
`;



// 리스트 공통 스타일
// ---------------------

// 리스트 헤더
export const ListHeader = styled.div`
  display: flex;
  width: 800px;
  border-top: solid 1px;
  padding: 16px 0;
  border-bottom: solid 1px;
  gap: 10px;
`;
// 헤더 번호 
export const NumberBold = styled.div`
  width: 80px;
  text-align: center;
  font-weight: bold;
`;
// 구분 및 이름
export const CategoryBold = styled.div`
  width: 120px;
  text-align: center;
  font-weight: bold;
`;
// 제목 및 작품명
export const Title = styled.div`
  width: 320px;
  text-align: center;
  font-weight: bold;
`;
// 여백 및 상태, 작성일, 금액
export const EmptyboxBold = styled.div`
  width: 120px;
  text-align: center;
  font-weight: bold;
`;
// 리스트 하단 뿌리는 내용
// 리스트 감싸는 박스
export const ContentBox = styled.div`
  display: flex;
  padding: 24px 0;
  border-bottom: solid 1px;
  width: 800px;
  gap: 10px;
`;
// 번호 
export const Number = styled.div`
  width: 80px;
  text-align: center;
`;
// 구분 및 이름
export const Category = styled.div`
  width: 120px;
  text-align: center;
`;
// 내용 
export const Content = styled.div`
  width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;
// 여백 및 상태, 작성일, 금액
export const Emptybox = styled.div`
  width: 120px;
  text-align: center;
`;
export const RedText = styled.div`
width: 120px;
text-align: center;
color: red;
`;



export const TitleNavigate = styled(NavLink)`
font-size: 16px;
text-decoration: none;
color: #333;
`;



// 작품 이미지 무한증식 --------------
// 감싸는 박스
export const ArtGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);  // 한 줄에 3개
  gap: 100px;  // 카드 사이 간격
  `;
// 이미지
export const ArtImage = styled.img`
width: 200px;
height: 200px;
background-color: #C0C5C7;
`;
// 좋아요이미지
export const LikeImage = styled.img`
width: 16px;
height: 16px;
`;



// 쪽지 공용 디테일
export const MailTitleBox = styled.div`
width: 800px;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
border-top: solid 1px red;
border-bottom: solid 1px red;
`;
export const MailContentBox = styled.div`
width: 800px;
padding-top: 48px;
`;
export const MailTitle = styled.p`
  font-size: 21px;
  font-weight: bold;
`;



// 120사이즈 빨강버튼
export const Button120x45R = styled.button`
width: 120px;
height: 45px;
border-radius: 3px;
color: white;
background-color: red;
border: solid 1px red;
font-size: 18px;
`;
// 120사이즈 하얀버튼
export const Button120x45W = styled.button`
width: 120px;
height: 45px;
border-radius: 3px;
color: red;
background-color: white;
border: solid 1px red;
font-size: 18px;
`;
// 210사이즈 빨간버튼
export const Button210R = styled.button`
    border: solid 1px red;
    border-radius: 2px;
    background-color: red;
    width: 210px;
    height: 50px;
    color: white;
    font-size: 21px;
`;
// 210사이즈 빨간버튼
export const Button210W = styled.button`
    border: solid 1px red;
    border-radius: 2px;
    background-color: white;
    width: 210px;
    height: 50px;
    color: red;
    font-size: 21px;
`;


// 우측 하단 버튼
export const ButtonDiv = styled.div`
    display: flex;
    justify-content : end;
    margin-top: 60px;
    gap: 20px;
`;

// 강조
export const Important = styled.span`
    color: red;
`;