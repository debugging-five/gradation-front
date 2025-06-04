import styled from 'styled-components';

export const Chepter = styled.div`
    width: 800px;
    padding-top: 48px;
`;
export const Title = styled.p`
    font-size: 21px;
    font-weight: bold;
`;


export const InputContent = styled.textarea`
    color: #333333;
    margin-top : 7px;
    width: 800px;
    height: 228px;
    padding: 12px;
    resize: none;
    font-size: 16px;
    line-height: 1.5;
    box-sizing: border-box;
    font-family: inherit;
        /* 포커스 시 스타일 변형 방지 */
    border: 1px solid #333333; /* 원하는 기본 테두리 */
    outline: none;

    &:focus {
        border: 1px solid #333333; /* 포커스돼도 테두리 그대로 */
        outline: none;
    }
`;

export const CategoryBox = styled.div`
    display: flex;
    align-items: end;
    gap: 48px;
`;

export const ArtGrid = styled.div`
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);  // 한 줄에 3개
    gap: 100px;  // 카드 사이 간격
  `;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`;
export const IconYoutube = styled.img`
    width: 20px;
    height: 15px;
`;
export const IconDelete = styled.img`
    width: 16px;
    height: 16px;
`;
export const SocialBox = styled.div`
    display: flex;
    padding-top: 12px;
    align-items: center;
`;
export const Social = styled.div`
    width: 100px;
    font-weight: bold;
`;
export const SmallTitle = styled.span`
    margin-left: 10px;
    font-size: 12px;
    color: gray;
`;
export const Date = styled.span`
    font-weight: bold;
    font-size: 14px;
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
`;

export const HistoryBox = styled.div`
    display: flex;
    padding: 16px 0 0 0;
    align-items: end;
`;
export const CalenderBox = styled.div`
    display: flex;
    align-items: end;
    color: gray;
    width: 120px;
`;
export const Calender = styled.div`
    border: none;
`;


// 아트 컨테이너: 이미지 + 버튼 포함
export const ArtContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;
export const DeleteDiv = styled.div`
  margin-left: 4px;
`;
export const ArtLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px; 
    cursor: pointer;
    flex-direction: column;
`;
export const ArtInput = styled.input`
    width: 16px; 
    height: 16px;
    accent-color: black;
`;





// 오버레이 버튼
export const OverlayButton = styled.button`
  position: absolute;
  bottom: 0; 
  left: 0; 
  width: 100%;
  height: 100%;
  padding: 8px 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 14px;
  border: none;

  opacity: 0;
  pointer-events: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  ${ArtContainer}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const InputBox = styled.input`
  border: none;
  font-size: 16px;
  outline: none;
  background-color: transparent;
  width: 600px;
  color: gray;
`;

