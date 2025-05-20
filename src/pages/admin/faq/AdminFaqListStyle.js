import styled from 'styled-components';

export const FaqDetailPageContainer = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 60px;
`;

export const FaqDetailWrapper = styled.div`
  width: 800px;
  margin-bottom: 60px;
`;

export const FaqDivider = styled.div`
  margin-top: 7px;
  width: 800px;
  border-bottom: solid 1px;
`;

export const FaqDetailButton = styled.button`
  color: red;
  border: solid 1px red;
  background-color: white;
  width: 125px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
`;

export const FaqDetailButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px; // 버튼 간격 조금 추가
`;

export const FaqTitleWrapper = styled.div`
  margin-top: 32px;
  width: 800px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const FaqQ = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const FaqTitleText = styled.p`
  font-size: 21px;
  font-weight: bold;
`;

export const FaqContentText = styled.p`
  margin-top: 24px;
  font-size: 18px;
  width: 800px;
`;

export const FaqCategoryText = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
