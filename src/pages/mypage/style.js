import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// 공용 스타일 모음

// 메인 래퍼
export const MainWrapper = styled.div`
    display : flex;
    width: 800px;
    flex-direction: column;
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
  margin-top: 8px;
`;

// 한줄로 처리할 때
export const OneLine = styled.div`
  display: flex;
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

// 우측 하단 버튼
export const ButtonDiv = styled.div`
    display: flex;
    justify-content : end;
    margin-top: 60px;
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
export const Wrapper = styled.div`
margin-top: 48px;
margin-bottom: 60px;
`;

export const ListHeader = styled.div`
display: flex;
width: 800px;
border-top: solid 1px;
padding: 16px 0;
border-bottom: solid 1px;
gap: 10px;
`;

export const Number = styled.div`
width: 80px;
text-align: center;
`;

export const Category = styled.div`
width: 120px;
text-align: center;
`;
export const Title = styled.div`
width: 320px;
text-align: center;
`;
export const Content = styled.div`
width: 320px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
text-align: center;
`;
export const Emptybox = styled.div`
width: 120px;
text-align: center;
`;

export const ContentBox = styled.div`
display: flex;
padding: 24px 0;
border-bottom: solid 1px;
width: 800px;
gap: 10px;
`;

export const TitleNavigate = styled(NavLink)`
font-size: 16px;
text-decoration: none;
color: #333;
`;



// 작품 이미지 무한증식

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