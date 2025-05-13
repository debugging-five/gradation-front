import styled from 'styled-components';


export const UniversityGrid = styled.div`
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);  // 한 줄에 3개
    gap: 78px;  // 카드 사이 간격
  `;

export const UniversityBox = styled.div`
    display: flex;
    gap: 24px;
`;
export const UniversityPictureDiv = styled.div`
    width: 160px;
    height: 160px;
    border: solid 1px gray;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const UniversityPicture = styled.img`
    width: 120px;
    height: 120px;
`;
export const Title = styled.div`
    width: 176px;
    font-size: 18px;
    font-weight: bold;
`;
export const Content = styled.div`
    width: 176px;
    padding-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
export const EmptyBox = styled.div`
   height: 12px;
`;
export const Button = styled.button`
    width: 176px;
    height: 28px;
    background-color: white;
    font-size: 18px;
    border: solid 1px gray;
    border-radius: 2px;
`;