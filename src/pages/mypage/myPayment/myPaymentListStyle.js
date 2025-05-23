import styled from 'styled-components';

// 공용 스타일 모음

// 메인 래퍼
export const MainWrapper = styled.div`
    display : flex;
    width: 800px;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    margin-top: 48px;
    display: flex;
    gap: 28px;
`;
export const ProductImage = styled.div`
    width: 248px;
    height: 248px;
    background-color: #ECEEEF;
`;
export const ArtImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain; /* 이미지 비율 유지하며 박스 내에 꽉 채움 */
    display: block; /* 이미지 밑 여백 없애기 */
`;

export const StatusDiv = styled.div`
    display: flex;
    gap: 12px;
    align-items: end;
`;

export const ButtonDiv = styled.div`
    display : flex;
    gap: 12px;
    padding: 12px 0;
    justify-content: end;
`;

export const Status = styled.p`
    font-size: 21px;
    font-weight: bold;
`;
export const Day = styled.p`
    font-size: 16px;
    color: gray;
`;

export const Menu = styled.p`
    font-size: 16px; 
`;
export const Content = styled.p`
    font-size: 16px;
    color: gray;
    text-align: end;
`;
export const Price = styled.p`
    font-size: 18px;
    font-weight: bold;
`;
export const MenuBox = styled.div`
    width: 525px;
    padding: 16px 0;
    border-bottom: solid 1px gray;
    border-top: solid 1px gray;
    margin: 6px 0;
`;

export const OneLine = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Emptybox = styled.div`
    height: 16px;
`;



// 주문상세 팝업
export const BigPopUp = styled.div`
    width: 640px;
    height: 420px;
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
    padding: 20px;
`;
export const BigPopUpTitle = styled.div`
    font-size: 21px;
    font-weight: bold;
    padding-bottom: 12px;
`;
export const BigPopUpSub = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: gray;
    width: 120px;
    padding-bottom: 12px;
`;
export const BigPopUpText = styled.div`
    font-size: 18px;
    padding-bottom: 12px;
`;
export const BigPopUpCost = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 12px;
`;
// 밑줄
export const EndBar = styled.p`
  width: 100%;
  border-bottom: solid 1px;
  margin: 8px 0 20px;
`;
