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
    margin-top : 7px;
    width: 800px;
    height: 228px;
    padding: 12px;
    resize: none;
    font-size: 16px;
    line-height: 1.5;
    box-sizing: border-box;
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
export const SocialBox = styled.div`
    display: flex;
    padding-top: 12px;
`;
export const Social = styled.div`
    width: 100px;
`;
export const SmallTitle = styled.span`
    margin-left: 10px;
    font-size: 12px;
    color: gray;
`;
