import React, { useState } from 'react';
import * as S from '../../style';
import * as SA from './artistDetailModifyStyle';
import DateTimePicker from 'react-flatpickr';

const ArtistDetailModify = () => {
  
  const [selectedFields, setSelectedFields] = useState([]);
  const [selectedArtId, setSelectedArtId] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  // 등록 버튼 클릭 시 유효성 검사 후 확인 팝업 열기
  const handleConfirm = () => {
      setShowConfirmation(true);
  };
  // 확인 팝업에서 확인 클릭 시 처리
  const handleSubmit = () => {
    setShowConfirmation(false);   // 기존 확인 팝업 닫기
    setShowSuccess(true);         // 새 성공 팝업 열기
  };

  // 확인 팝업에서 취소 클릭 시 처리
  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const artworks = [
    { id: 1, src: 'http://localhost:10000/files/api/get/eximage.png?filePath=images/mypage' },
    { id: 2, src: 'http://localhost:10000/files/api/get/eximage2.png?filePath=images/mypage' },
  ];
  const [histories, setHistories] = useState([
    { id: 1, date: null, content: '', isSaved: false }
  ]);
  const checkedUrl = 'http://localhost:10000/files/api/get/checked.png?filePath=images/mypage';
  const uncheckedUrl = 'http://localhost:10000/files/api/get/uncheck.png?filePath=images/mypage';

  const fields = ['한국화', '회화', '조각', '공예', '건축', '서예'];

  const handleFieldClick = (field) => {
    setSelectedFields((prev) => (prev[0] === field ? [] : [field]));
  };

  const handleAddHistory = (id) => {
    setHistories(prev =>
      prev.map(h =>
        h.id === id ? { ...h, isSaved: true } : h
      ).concat({
        id: Date.now(), date: null, content: '', isSaved: false
      })
    );
  };

  const handleDeleteHistory = (id) => {
    setHistories(prev => prev.filter(h => h.id !== id));
  };

  const handleChange = (id, field, value) => {
    setHistories(prev =>
      prev.map(h =>
        h.id === id ? { ...h, [field]: value } : h
      )
    );
  };

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) return '날짜 선택';
    const yy = String(date.getFullYear()).slice(2);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yy}.${mm}.${dd}`;
  };
  

  return (
    <S.MainWrapper>
        <S.MainTitle>내 작가페이지 수정</S.MainTitle>

      <SA.Chepter>
        <SA.Title>작가 소개</SA.Title>
        <SA.InputContent/>
      </SA.Chepter>

      {/* 작품분야 */}
      <SA.Chepter>
        <SA.CategoryBox>
          <SA.Title>작품분야</SA.Title>
          {fields.map((field) => (
            <SA.Category key={field} onClick={() => handleFieldClick(field)} style={{ cursor: 'pointer' }}>
              <img
                src={selectedFields.includes(field) ? checkedUrl : uncheckedUrl}
                alt="check"
                width={16}
                height={16}
                style={{ marginRight: '0.5rem' }}
              />
              {field}
            </SA.Category>
          ))}
        </SA.CategoryBox>
        <S.EndBar />
      </SA.Chepter>

      {/* 작가 이력 */}
      <SA.Chepter>
        <SA.Title>작가 이력</SA.Title>
        {histories.map((history) => (
          <SA.HistoryBox key={history.id}>
            <SA.CalenderBox>
              {history.isSaved ? (
                <span>{formatDate(history.date)}</span>
              ) : (
                <S.OneLine>
                  <SA.Icon src="http://localhost:10000/files/api/get/calendar.png?filePath=images/mypage" alt="default profile" />
                  <DateTimePicker
                    value={history.date}
                    onChange={(dates) => handleChange(history.id, 'date', dates[0])} 
                    placeholder="날짜 선택"
                    dateFormat="yy.MM.dd"
                    style={{ border: 'none', width: '80px', backgroundColor: 'transparent'}}
                    />
                </S.OneLine>
              )}
            </SA.CalenderBox>

            {history.isSaved ? (
              <SA.InputBox as="div">{history.content}</SA.InputBox>
            ) : (
              <SA.InputBox
                placeholder="내용을 입력하세요."
                value={history.content}
                onChange={(e) => handleChange(history.id, 'content', e.target.value)}
              />
            )}

            {history.isSaved ? (
              <SA.DeleteDiv><S.Button75x35R onClick={() => handleDeleteHistory(history.id)}>삭제</S.Button75x35R></SA.DeleteDiv>
            ) : (
              <S.Button75x35R onClick={() => handleAddHistory(history.id)} disabled={!history.date || !history.content.trim()}>
                추가
              </S.Button75x35R>
            )}
          </SA.HistoryBox>
        ))}
        <S.EndBar />
      </SA.Chepter>

      <SA.Chepter>
        <S.OneLine>
          <SA.Title>외부 링크 및 아이디</SA.Title>
          <SA.SmallTitle>기재한 외부링크 및 아이디는 작가 소개창에 공유됩니다.</SA.SmallTitle>
        </S.OneLine>

        <SA.SocialBox>
          <SA.Social>Instagram</SA.Social>
          <SA.Icon src="http://localhost:10000/files/api/get/insta.png?filePath=images/mypage" alt="default profile" />
          <S.Emptybox/>
          <p>gradation</p>
        </SA.SocialBox>
        <S.EndBar/>

        <SA.SocialBox>
          <SA.Social>Youtube</SA.Social>
          <SA.Icon src="http://localhost:10000/files/api/get/youtube.png?filePath=images/mypage" alt="default profile" />
          <S.Emptybox/>
          <p>www.test.com/sdkajhfgshvbjsk</p>
        </SA.SocialBox>
        <S.EndBar/>

        <SA.SocialBox>
          <SA.Social>Blog</SA.Social>
          <SA.Icon src="http://localhost:10000/files/api/get/blog.png?filePath=images/mypage" alt="default profile" />
          <S.Emptybox/>
          <p>www.test.com/sdkajhfgshvbjsk</p>
        </SA.SocialBox>
        <S.EndBar/>
      </SA.Chepter>

      <SA.Chepter>
        <S.OneLine>
          <SA.Title>작가 작품</SA.Title>
          <SA.SmallTitle>체크된 작품은 작가 배경화면으로 등록됩니다.</SA.SmallTitle>
        </S.OneLine>

        <SA.ArtGrid>
        {artworks.map((art) => (
          <SA.ArtContainer key={art.id}>
            <S.ArtImage src={art.src} alt="eximage" />
            
            <SA.OverlayButton className="overlay-button">
              <SA.ArtLabel>
                <SA.ArtInput
                  type="checkbox"
                  checked={selectedArtId === art.id}
                  onChange={() => setSelectedArtId(prev => (prev === art.id ? null : art.id))}      
                />
                <p>작가프로필 배경사진으로 등록</p>
              </SA.ArtLabel>
            </SA.OverlayButton>
          </SA.ArtContainer>
        ))}
      </SA.ArtGrid>
      </SA.Chepter>

      <S.ButtonDiv>
        <S.Button120x45R onClick={handleConfirm}>페이지 수정</S.Button120x45R>
      </S.ButtonDiv>

      {/* 등록 확인 팝업 */}
      {showConfirmation && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="http://localhost:10000/files/api/get/question.png?filePath=images/mypage" alt="question" />
              <S.PopUpText>작가 프로필을 수정하시겠습니까?</S.PopUpText>
              <S.PopUpButtonDiv>
                <S.PopUpButtonW onClick={handleCancel}>취소</S.PopUpButtonW>
                <S.PopUpButtonR onClick={handleSubmit}>확인</S.PopUpButtonR>
              </S.PopUpButtonDiv>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}

      {/* 등록 성공 팝업 */}
      {showSuccess && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="http://localhost:10000/files/api/get/attention.png?filePath=images/mypage" alt="attention" />
              <S.PopUpText>작가 프로필 수정이 완료되었습니다.</S.PopUpText>
              <S.PopUpButtonR onClick={() => setShowSuccess(false)}>확인</S.PopUpButtonR>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}

    </S.MainWrapper>
  );
};

export default ArtistDetailModify;