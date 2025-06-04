import React, { useEffect, useState } from 'react';
import * as S from '../../style';
import * as SA from './artistDetailModifyStyle';
import DateTimePicker from 'react-flatpickr';
import { useSelector } from 'react-redux';

const ArtistDetailModify = () => {
  const currentUser = useSelector(state => state.user.currentUser); // 현재 로그인 유저
  const [selectedField, setSelectedField] = useState(''); // 구분 불러오기
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [userIntroduce, setUserIntroduce] = useState('');
  const [userInstagram, setUserInstagram] = useState('');
  const [userYoutube, setUserYoutube] = useState('');
  const [userBlog, setUserBlog] = useState('');
  const [histories, setHistories] = useState([]);
  const [artworks, setArtworks] = useState([]);
  
  
  // 컴포넌트 최상단 useState 선언 아래에 추가
  const LOCAL_STORAGE_KEY = 'artist_selectedArtId';

  // selectedArtId 초기값을 로컬스토리지에서 불러오기
  const [selectedArtId, setSelectedArtId] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved !== null ? JSON.parse(saved) : null;
  });

  // selectedArtId가 변경될 때마다 로컬스토리지에 저장
  useEffect(() => {
    if (selectedArtId === null) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedArtId));
    }
  }, [selectedArtId]);

  // 작가이력 정리하기
  const toTimestamp = (date) => {
    if (!date) return 0; 
    if (typeof date === 'string') return new Date(date).getTime();
    if (date instanceof Date) return date.getTime();
    return 0; 
  };
  // 저장된 이력만 날짜순 정렬 
  const savedHistories = histories.filter(h => h.isSaved);
  const newHistories = histories.filter(h => !h.isSaved);
  // 저장된 항목은 날짜 내림차순 정렬
  const sortedSavedHistories = savedHistories.sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date));
  // 저장 안 된(입력 중) 항목은 뒤에 붙이기
  const displayHistories = [...sortedSavedHistories, ...newHistories];

  // 등록 버튼 클릭 시 유효성 검사 후 확인 팝업 열기
  const handleConfirm = () => {
      setShowConfirmation(true);
  };
  // 확인 팝업에서 확인 클릭 시 처리
const handleSubmit = () => {
  setShowConfirmation(false);
  if (!currentUser?.id) return;

  let userBackgroundImgName = '';
  let userBackgroundImgPath = '';

  if (selectedArtId !== null && artworks[selectedArtId]) {
    userBackgroundImgName = artworks[selectedArtId].artImgName || '';
    userBackgroundImgPath = artworks[selectedArtId].artImgPath || '';
  } else {
    // 선택 안 된 경우 기본값 세팅
    userBackgroundImgName = 'user-background.jpg';
    userBackgroundImgPath = '/public/images/default/';
  }

  const body = {
    userIntroduce,
    userArtCategory: selectedField,
    userInstagram,
    userYoutube,
    userBlog,
    userBackgroundImgName,
    userBackgroundImgPath,
  };

  fetch(`http://localhost:10000/artists/api/detail/${currentUser.id}/modify`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(res => {
      if (!res.ok) throw new Error('수정 실패');
      return res.json();
    })
    .then(data => {
      setShowSuccess(true);
    })
    .catch(err => {
      console.error(err);
      alert('수정 중 오류가 발생했습니다.');
    });
};

  // 확인 팝업에서 취소 클릭 시 처리
  const handleCancel = () => {
    setShowConfirmation(false);
  };
  
  const checkedUrl = "/assets/images/icon/checked_on.png";
  const uncheckedUrl = "/assets/images/icon/checked_off.png";

  const fields = ['한국화', '회화', '조각', '공예', '건축', '서예'];

  // 구분
  const handleFieldClick = (field) => {
    setSelectedField(prev => (prev === field ? '' : field));
  };

  // 구분 바꾸기
  const handleChange = (id, field, value) => {
    setHistories(prev =>
      prev.map(h =>
        h.id === id ? { ...h, [field]: value } : h
      )
    );
  };
  
  // 작가이력 저장
  const handleAddHistory = (id) => {
    const history = histories.find(h => h.id === id);
    if (!history || !currentUser?.id) return;

    const body = {
      historyDate: history.date,
      historyContent: history.content
    };

    fetch(`http://localhost:10000/artists/api/detail/${currentUser.id}/history`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => {
        if (!res.ok) throw new Error('이력 추가 실패');
        return res.json();
      })
      .then(data => {
        setHistories(prev =>
          prev.map(h =>
            h.id === id
              ? { ...h, isSaved: true, id: data.historyId || h.id } // 서버에서 historyId를 받으면 갱신
              : h
          )
        );
      })
      .catch(err => {
        console.error(err);
        alert('작가 이력 추가 중 오류가 발생했습니다.');
      });
  };

  // 빈 입력폼 하나 추가
  const addEmptyHistory = () => {
    setHistories((prev) => [
      ...prev,
      {
        id: Date.now(),
        date: null,
        content: '',
        isSaved: false,
      },
    ]);
  };


  // 작가 이력 불러오고 추가버튼 나오게끔
  useEffect(() => {
    if (!histories.some((h) => !h.isSaved)) {
      addEmptyHistory();
    }
  }, [histories]);  
  console.log(histories);
  // 작가이력 삭제 
  const handleDeleteHistory = (id) => {
    const target = histories.find(h => h.id === id);
    if (!target) return;

    // 서버에 등록된 이력만 삭제 요청
    if (target.isSaved) {
      console.log("삭제 요청 보낼 히스토리 ID:", id); // ← 이거 여기!
      console.log(`요청 URL: http://localhost:10000/artists/api/detail/{userId}/history/${id}`); 
      fetch(`http://localhost:10000/artists/api/detail/{userId}/history/${id}`, {
        method: 'DELETE',
      })
        .then(res => {
          if (!res.ok) throw new Error('이력 삭제 실패');
          // 성공 시 로컬에서도 제거
          setHistories(prev => prev.filter(h => h.id !== id));
        })
        .catch(err => {
          console.error(err);
          alert('작가 이력 삭제 중 오류가 발생했습니다.');
        });
    } else {
      // 저장되지 않은 항목은 로컬에서만 제거
      setHistories(prev => prev.filter(h => h.id !== id));
    }
  };
  

  // 이미지 불러오기
  const getImageUrl = (img) => {
    const hasExtension = img.artImgName.includes('.');
    const fileName = hasExtension ? img.artImgName : `${img.artImgName}.jpeg`;
    return `http://localhost:10000/files/api/get/${fileName}?filePath=${img.artImgPath}`;
  };
  

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) return '날짜 선택';
    const yy = String(date.getFullYear()).slice(2);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yy}.${mm}.${dd}`;
  };

  // 작가 정보 불러오기 (소개, 분야, 이력 등)
  useEffect(() => {
    if (!currentUser?.id) return;

    fetch(`http://localhost:10000/artists/api/detail/${currentUser.id}`)
      .then(res => {
        if (!res.ok) throw new Error('서버 응답 실패');
        return res.json();
      })
      .then(data => {
        setUserIntroduce(data.userIntroduce || '');
        setSelectedField(data.userArtCategory || '');
        setUserInstagram(data.userInstagram || '');
        setUserYoutube(data.userYoutube || '');
        setUserBlog(data.userBlog || '');

        if (data.historyList && Array.isArray(data.historyList)) {
          const historyItems = data.historyList.map((item) => ({
            id: item.id, 
            date: new Date(item.historyDate),
            content: item.historyContent,
            isSaved: true
          }));
          setHistories(historyItems);
        }
      })
      .catch(err => {
        console.error('작가 상세 정보 불러오기 실패:', err);
      });
  }, [currentUser]);

  // 작품 불러오기
  useEffect(() => {
    if (!currentUser?.id) return;

    fetch(`http://localhost:10000/artists/api/detail/${currentUser.id}/arts`)
      .then(res => {
        if (!res.ok) throw new Error('작품 목록 불러오기 실패');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data.arts)) {
          setArtworks(data.arts);
        }
      })
      .catch(err => {
        console.error('작품 이미지 불러오기 실패:', err);
      });
  }, [currentUser]);
    const itemsPerPage = 9; 

  const [currentPage, setCurrentPage] = useState(1);

  // 페이지네이션용 데이터 슬라이싱
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArtworks = artworks.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(artworks.length / itemsPerPage);

  

  return (
    <S.MainWrapper>
        <S.MainTitle>내 작가페이지 수정</S.MainTitle>

      <SA.Chepter>
        <SA.Title>작가 소개</SA.Title>
        <SA.InputContent
          placeholder='내용을 입력하세요.'
          value={userIntroduce}
          onChange={(e) => setUserIntroduce(e.target.value)}
        />
      </SA.Chepter>

      {/* 작품분야 */}
      <SA.Chepter>
        <SA.CategoryBox>
          <SA.Title>작품분야</SA.Title>
          {fields.map((field) => (
            <SA.Category key={field} onClick={() => handleFieldClick(field)} style={{ cursor: 'pointer' }}>
              <img
                src={selectedField === field ? checkedUrl : uncheckedUrl}
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

      <SA.Chepter>
        <SA.Title>작가 이력</SA.Title>

        {displayHistories
          .filter(history => !history.isSaved)
          .map(history => (
            <SA.HistoryBox key={history.id}>
              <SA.CalenderBox>
                <S.OneLine>
                  <SA.Icon src="/assets/images/icon/calendar.png" alt="calendar" />
                  <DateTimePicker
                    value={history.date}
                    onChange={(dates) => handleChange(history.id, 'date', dates[0])}
                    placeholder="날짜 선택"
                    dateFormat="yy.MM.dd"
                    style={{
                      border: 'none',
                      width: '80px',
                      backgroundColor: 'transparent',
                    }}
                  />
                </S.OneLine>
              </SA.CalenderBox>

              <SA.InputBox
                placeholder="내용을 입력하세요."
                value={history.content}
                onChange={(e) =>
                  handleChange(history.id, 'content', e.target.value)
                }
              />

              <S.ButtonEdit onClick={() => handleAddHistory(history.id)} disabled={!history.date || !history.content.trim()}> + </S.ButtonEdit>
            </SA.HistoryBox>
          ))}
          <S.EndBar />

        {/* 2. 저장된 항목 렌더링 */}
        {displayHistories
          .filter(history => history.isSaved)
          .map(history => (
            <SA.HistoryBox key={history.id}>
              <SA.CalenderBox>
                <SA.Date>{formatDate(history.date)}</SA.Date>
              </SA.CalenderBox>

              <SA.InputBox as="div">{history.content}</SA.InputBox>

              <SA.DeleteDiv>
                <S.ButtonEdit onClick={() => handleDeleteHistory(history.id)}>
                  <SA.IconDelete src="/assets/images/icon/close.png" alt="close" />
                </S.ButtonEdit>
              </SA.DeleteDiv>
            </SA.HistoryBox>
          ))}

        
      </SA.Chepter>

      <SA.Chepter>
        <S.OneLine>
          <SA.Title>외부 링크 및 아이디</SA.Title>
          <SA.SmallTitle>기재한 외부링크 및 아이디는 작가 소개창에 공유됩니다.</SA.SmallTitle>
        </S.OneLine>

        <SA.SocialBox>
          <SA.Social>Instagram</SA.Social>
          <SA.Icon src="/assets/images/icon/instagram.png" alt="default profile" />
          <S.Emptybox/>
          <SA.InputBox placeholder='아이디를 입력하세요' value={userInstagram} onChange={(e) => setUserInstagram(e.target.value)}/>
        </SA.SocialBox>
        <S.EndBar/>

        <SA.SocialBox>
          <SA.Social>Youtube</SA.Social>
          <SA.IconYoutube src="/assets/images/icon/youtube.png" alt="default profile" />
          <S.Emptybox/>
          <SA.InputBox placeholder='링크를 입력하세요' value={userYoutube} onChange={(e) => setUserYoutube(e.target.value)}/>
        </SA.SocialBox>
        <S.EndBar/>

        <SA.SocialBox>
          <SA.Social>Blog</SA.Social>
          <SA.Icon src="/assets/images/icon/blog.png" alt="default profile" />
          <S.Emptybox/>
          <SA.InputBox placeholder='링크를 입력하세요' value={userBlog} onChange={(e) => setUserBlog(e.target.value)}/>
        </SA.SocialBox>
        <S.EndBar/>
      </SA.Chepter>

      <SA.Chepter>
        <S.OneLine>
          <SA.Title>작가 작품</SA.Title>
          <SA.SmallTitle>체크된 작품은 작가 배경화면으로 등록됩니다.</SA.SmallTitle>
        </S.OneLine>

        <SA.ArtGrid>
          {currentArtworks.map((art, idx) => {
            const realIdx = (currentPage - 1) * itemsPerPage + idx;
            return (
              <SA.ArtContainer key={realIdx}>
                <S.ArtImage src={getImageUrl(art)} alt={art.artImgName} />
                <SA.OverlayButton className="overlay-button">
                  <SA.ArtLabel>
                    <SA.ArtInput
                      type="checkbox"
                      checked={selectedArtId === realIdx}
                      onChange={() => setSelectedArtId(prev => (prev === realIdx ? null : realIdx))}
                    />
                    <p>작가프로필 배경사진으로 등록</p>
                  </SA.ArtLabel>
                </SA.OverlayButton>
              </SA.ArtContainer>
            );
          })}
        </SA.ArtGrid>

        <S.Pagination>
          {[...Array(totalPages)].map((_, idx) => (
            <S.PageButton
              key={idx + 1}
              className={currentPage === idx + 1 ? 'active' : ''}
              onClick={() => {
                setCurrentPage(idx + 1);
              }}
            >
              {idx + 1}
            </S.PageButton>
          ))}
        </S.Pagination>
      </SA.Chepter>


      <S.ButtonDiv>
        <S.Button120x45R onClick={handleConfirm}>페이지 수정</S.Button120x45R>
      </S.ButtonDiv>

      {/* 등록 확인 팝업 */}
      {showConfirmation && (
        <S.PopUpOverlay>
          <S.PopUp>
            <S.PopUpContent>
              <S.PopUpIcon src="/assets/images/icon/quest.png" />
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
              <S.PopUpIcon src="/assets/images/icon/check.png" alt="attention" />
              <S.PopUpText>작가 프로필 수정이 완료되었습니다.</S.PopUpText>
              <S.PopUpButtonR onClick={() => {setShowSuccess(false);  window.location.reload();}}>확인</S.PopUpButtonR>
            </S.PopUpContent>
          </S.PopUp>
        </S.PopUpOverlay>
      )}

    </S.MainWrapper>
  );
};

export default ArtistDetailModify;