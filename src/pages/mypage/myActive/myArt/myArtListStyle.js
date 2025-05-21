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
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0,0,0,0.5);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  transition: opacity 0.3s ease;
  ${ArtItem}:hover & {
    opacity: 1;
  }
`;