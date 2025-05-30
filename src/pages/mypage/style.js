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
  background-color: transparent;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
// 내용 
export const Content = styled.div`
  width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* text-align: center; */
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
display: block;
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


export const Button75x35R = styled.button`
  width: 75px;
  height: 35px;
  border-radius: 3px;
  color: white;
  background-color: red;
  border: solid 1px red;
  font-size: 12px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
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


// 팝업
export const PopUpOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1); /* 살짝 어두운 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* 최상단 */
`;
export const PopUp = styled.div`
    width: 400px;
    height: 200px;
    background-color: white;
    transform: translateY(-200px); /* 위로 50px 올림 */
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5); // 팝업 상자 자체의 그림자
`;
export const PopUpContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid 1px red;
    border-radius: 2px;
    padding: 24px;
    background-color: white;
`;
export const PopUpIcon = styled.img`
    width: 48px;
    height: 48px;
`;
export const PopUpText = styled.div`
    font-size: 16px;
    padding: 20px 0 32px;
`;
export const PopUpButtonDiv = styled.div`
    display: flex;
    gap: 10px;
`;
export const PopUpButtonW = styled.button`
    width: 75px;
    height: 35px;
    color: red;
    background-color: white;
    border: solid 1px red;
    border-radius: 2px;
`;
export const PopUpButtonR = styled.button`
    width: 75px;
    height: 35px;
    color: white;
    background-color: red;
    border: solid 1px red;
    border-radius: 2px;
`;


// 큰 팝업
export const BigPopUp = styled.div`
    width: 640px;
    height: 388px;
    background-color: white;
    transform: translateY(-100px); /* 위로 50px 올림 */
    border-radius: 5px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5); // 팝업 상자 자체의 그림자
`;
export const BigPopUpContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    padding: 30px 0 40px;
`;
export const BigPopUpIcon = styled.img`
    width: 56px;
    height: 56px;
`;
export const BigPopUpCloseBox = styled.div`
    color: gray;
    text-align: end;
    height: 30px;
    padding: 0 6px;
    border-bottom: solid 1px gray;
    font-size: 20px;
`;
export const BigPopUpX = styled.span`
    cursor: pointer;
`;
export const BigPopUpTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0 40px;
`;
export const BigPopUpTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 40px;
`;
export const BigPopUpText = styled.div`
    font-size: 18px;
    color: gray;
`;
export const BigPopUpButtonDiv = styled.div`
    display: flex;
    gap: 20px;
`;
export const BigPopUpButtonW = styled.button`
    width: 120px;
    height: 45px;
    color: red;
    background-color: white;
    border: solid 1px red;
    border-radius: 3px;
    font-size: 18px;
`;
export const BigPopUpButtonR = styled.button`
    width: 120px;
    height: 45px;
    color: white;
    background-color: red;
    border: solid 1px red;
    border-radius: 3px;
    font-size: 18px;
`;

// 페이지 네이션
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  .active {
    font-weight: bold;
    color: red;
  }
`;

export const PageButton = styled.span`
  margin: 0 0.5rem;
  cursor: pointer;
`; 
