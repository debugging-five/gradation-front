import styled from "styled-components";

const S = {};

// 전체 레이아웃 컨테이너
S.Container = styled.div`
  width: 900px;
  margin: 40px auto 0 auto;
  background: #fff;
  padding: 36px 48px 48px 48px;
  border-radius: 10px;
  box-shadow: 0 4px 20px 0 #00000015;
  min-height: 700px;
`;

// 상단 카테고리 (display 등)
S.CategoryText = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

// 제목/날짜 영역
S.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 12px;
`;

S.Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #222;
`;

S.ApplyDate = styled.div`
  color: #666;
  font-size: 15px;
  font-weight: 500;
`;

// 신청자 정보 빨간 테이블
S.ContactTable = styled.table`
  width: 100%;
  background: #ee3333;
  color: #fff;
  font-size: 16px;
  margin: 20px 0 32px 0;
  border-radius: 6px;
  overflow: hidden;
  th, td {
    padding: 12px 18px;
    font-weight: 500;
  }
`;

// 테이블 헤더셀
S.TableHeadCell = styled.th`
  font-weight: 600;
  background: #ee3333;
`;

// 본문 정보 (이미지+정보)
S.ContentWrapper = styled.div`
  display: flex;
  gap: 44px;
  margin-bottom: 30px;
`;

// 이미지 영역
S.ImageBox = styled.div`
  min-width: 250px;
  max-width: 250px;
  min-height: 350px;
  background: #f5f5f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    max-height: 350px;
    object-fit: contain;
  }
`;

// 오른쪽 작품 정보들
S.InfoBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 10px;
`;

S.InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 16px;
  gap: 18px;
`;

S.InfoLabel = styled.div`
  font-weight: 700;
  min-width: 110px;
  color: #111;
  margin-top: 2px;
`;

// 버튼 박스
S.ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 18px;
  margin-top: 36px;
`;

// 버튼 공통
const baseBtn = `
  padding: 12px 34px;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.1s;
`;

// 목록 버튼
S.ListButton = styled.button`
  ${baseBtn}
  background: #888;
  color: #fff;
  &:hover { background: #666; }
`;

// 승인
S.ApproveButton = styled.button`
  ${baseBtn}
  background: #0cbb58;
  color: #fff;
  &:hover { background: #09984a; }
`;

// 기각
S.RejectButton = styled.button`
  ${baseBtn}
  background: #ee3333;
  color: #fff;
  &:hover { background: #d62626; }
`;

// 승인 취소
S.CancelButton = styled.button`
  ${baseBtn}
  background: #ffa900;
  color: #fff;
  &:hover { background: #cc8600; }
`;

export default S;
