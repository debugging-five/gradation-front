import styled from 'styled-components';

export const MainWrapper = styled.div`
    display : flex;
    width: 800px;
    flex-direction: column;
`;

export const ArtGrid = styled.div`
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    gap: 100px;
`;

export const ArtItem = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;

`;

export const ArtImage = styled.img`
    width: 200px;
    height: 200px;
    display: block;
    transition: 0.3s ease;
    ${ArtItem}:hover & {
        filter: brightness(0.5);
    }
`;

export const Overlay = styled.div`
  position: absolute;
  top: -20px; left: 0; right: 0; bottom: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  transition: opacity 0.3s ease;
  text-align: center;
  ${ArtItem}:hover & {
    opacity: 1;
  }
`;
export const LikeDiv = styled.div`
    display : flex;
    justify-content: end;
    color: red;
    gap: 4px;
`;
export const Emptybox = styled.div`
    width: 120px;
    height: 10px;
`;
