import styled from 'styled-components';


export const LikeDiv = styled.div`
    display : flex;
    justify-content: end;
    color: red;
    gap: 4px;
`;

// 이미지 컨테이너
export const ArtContainer = styled.div`
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:hover img {
    filter: brightness(50%);
    }

    &:hover div.overlay {
    opacity: 1;
    }
`;

// 오버레이 텍스트
export const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
`;
export const HoverText = styled.div`
    padding: 8px;
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const ArtGrid = styled.div`
  display: grid;
  `;