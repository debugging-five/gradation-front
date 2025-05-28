import { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import S from './style';
import { useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const DisplayDetail = () => {
  const { id, category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [post, setPost] = useState(null)
  const [text, setText] = useState("")
  const [comments, setComments] = useState([])
  const [cursor, setCursor] = useState(1)
  const [commentOrder, setCommentOrder] = useState('date')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [modifyCommentId, setModifyCommentId] = useState(null)
  const [modifyCommentContent, setModifyCommentContent] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const [openMenuId, setOpenMenuId] = useState(null)

  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser)
  
  const navigate = useNavigate()
  const handleOrder = (order) => {
    setCommentOrder(order)
    setIsDropdownOpen(false)
  }

  const commentDropdownOption = {
    date: "등록순",
    like: "좋아요순"
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/displays/api/read/${id}`)
      .then((res) => {
        // console.log(res)
        if(!res.ok) {
          throw new Error("에러")
        }
        return res.json();
      })
      .then((res) => {
        console.log("res", res);
        console.log("res.post", res.post);
        setPost(res.post); 
        setIsError(false)
        setIsLoading(false)
      })
      .catch((error) => {
        // console.error(error)
        setIsError(true)
        setIsLoading(false)
      })
  }, [id])


  const commentVO = {
    commentContent : text,
    artPostId : id,
  }

  const params = {
    postId: id,
    order: commentOrder,
    cursor: cursor 
  }

  // 댓글 등록
  const registerComment = async () => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/comments/api/registration`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      credentials: "include",
      body : JSON.stringify(commentVO)
    }) 
      .then((res) => {
        if(!res.ok) {
          return res.json().then((res) => {
            // console.log(res)
            alert(res.message)
            navigate("/login")
          })
        }
        return res.json()
      })
      .then((res) => {
        getCommentsList()
        setText("")
        alert(res.message)
      })
      .catch(console.error)
  }


  // 댓글 리스트
  const getCommentsList = async () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/comments/api/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((res) => {
            console.log(res);
            // alert(res.message);
          });
        }
        return res.json(); 
      })
      .then((res) => {
        if(res) {
          setComments(res.commentList);
          console.log("res", res)
        }
      })
      .catch(console.error);
  };
  
  useEffect(() => {
    getCommentsList()
  }, [id, commentOrder]);


  // 댓글 삭제
  const deleteComment = async (commentId) => {
    // const id = comment.id;
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/comments/api/delete/${commentId}`, {
      method : "DELETE",
    })
      .then((res) => {
        if(!res.ok) {
          return res.json().then((res) => {
            console.log(res)
          })
        }
        return res.json()
      })
      .then((res) => {
        console.log(res)
        alert(res.message)
        getCommentsList()
      })
      .catch(console.error)
  }

  // 댓글 수정
  const modifyComment = async (commentId, commentContent) => {
    // const id = comment.id;
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/comments/api/modify/${commentId}`, {
      method : "PUT",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ commentContent }),
    })
      .then((res) => {
        if(!res.ok) {
          return res.json().then((res) => {
            // console.log(res)
          })
        }
        return res.json()
      })
      .then((res) => {
        console.log(res)
        getCommentsList()
      })
      .catch(console.error)
  }


  // 작품 좋아요 등록
  const registerLike = async () => {
    //   if (!post.artId) {
    //     console.log("post 로딩 중,,");
    //   return;
    // }
    
  const userVO = {
    userId : currentUser.id,
    artId: post.artId
  }

  console.log("userVO", userVO);

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/art/likes/api/registration`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(userVO)
    })
      .then((res) => {
        if(!res.ok) {
          return res.json().then((res) => {
            console.log(res)
          })
        }
        return
      })
      .then((res) => {
        console.log(res)
        setIsLiked(true)
      })
      .catch(console.error)
  }

  // 작품 좋아요 취소
  const deleteLike = async () => {
    //   if (!post.artId) {
    //     console.log("post 로딩 중,,");
    //   return;
    // }
    
  const userVO = {
    userId : currentUser.id,
    artId: post.artId
  }

  console.log("userVO", userVO);

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/art/likes/api/delete`, {
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(userVO)
    })
      .then((res) => {
        if(!res.ok) {
          return res.json().then((res) => {
            console.log(res)
          })
        }
        return 
      })
      .then((res) => {
        console.log(res)
        setIsLiked(false)
      })
      .catch(console.error)
  }

  if(isLoading) {
    return <p>로딩 중,,</p>
  }

  if(isError) {
    return <p>오류 발생 ,,</p>
  }

  if (!post) {
    return <p>작품 정보 불러오는 중,,</p>; 
  }

  return (
    <S.Container>
      <S.Detail>
        <S.LeftWrapper>
          {/* <S.ArtImg src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${post.artImgName}?filePath=${post.artImgPath}`} alt={post.artTitle}/> */}
          <S.Wrapper style={{width : "560px"}}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              style={{width: "100%", height: "100%", objectFit: "contain"}}>
              {post.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <S.ArtImg src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${img.artImgName}?filePath=${img.artImgPath}`} alt="이미지" />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.Wrapper>

          <S.ButtonWrapper>
            <S.LikeButton className="button"
              onClick={isLiked ? deleteLike : registerLike}
              $isLiked={isLiked}>
              좋아요
              <S.LikeIcon src={'/assets/images/icon/heart.png'} alt="좋아요"/>
            </S.LikeButton>
            <S.Link to={`/mypage/contact-artist/write/${post.userEmail}`}>
              <S.ArtistButton className="button">
                작가와 연락
                <S.MessageIcon src={'/assets/images/icon/message-white.png'} alt="작가와 연락" />
              </S.ArtistButton>
            </S.Link>
          </S.ButtonWrapper>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.TitleWrapper>
            <S.Title>{post.artTitle}</S.Title>
            <S.Artist>
              <S.H3>작가명<span>|</span></S.H3>
              <S.H3>{post.artistName}</S.H3>
            </S.Artist>
          </S.TitleWrapper>
          <S.LikeCountWrapper>
            <S.LikeLabel>좋아요</S.LikeLabel>
            <S.LikeCount>{post.artLikeCount}<span className='unit'>개</span></S.LikeCount>
            <S.NoticeIconWrapper>
              <S.NoticeIcon src={'/assets/images/icon/question-gray.png'} alt="좋아요 설명"/>
              <S.Notice>좋아요 50개 이상인 작품은 경매 등록 가능합니다.</S.Notice>
            </S.NoticeIconWrapper>
          </S.LikeCountWrapper>
          <S.ArtInfoContainer>
            <S.ArtInfoWrapper>
              <S.ArtInfoLabel>제작연도</S.ArtInfoLabel>
              <S.ArtInfo>{post.artEndDate.slice(0, 4)}</S.ArtInfo>
            </S.ArtInfoWrapper>
            <S.ArtInfoWrapper>
              <S.ArtInfoLabel>재료</S.ArtInfoLabel>
              <S.ArtInfo>{post.artMaterial}</S.ArtInfo>
            </S.ArtInfoWrapper>
            <S.ArtInfoWrapper>
              <S.ArtInfoLabel>규격</S.ArtInfoLabel>
              <S.ArtInfo>{post.artSize}</S.ArtInfo>
            </S.ArtInfoWrapper>
            <S.ArtInfoWrapper>
              <S.ArtInfoLabel>부문</S.ArtInfoLabel>
              <S.ArtInfo>{post.artCategory}</S.ArtInfo>
            </S.ArtInfoWrapper>

          </S.ArtInfoContainer>
          <S.ArtDescription>{post.artDescription}</S.ArtDescription>
        </S.RightWrapper>
      </S.Detail>

      <S.CommentWrapper>
        <S.EnH3>comments</S.EnH3>
        <S.Line />
        <S.InputWrapper>
          <S.Input type="text" placeholder="댓글을 작성하세요." maxLength={300} 
          value={text} onChange={(e) => setText(e.target.value)}/>
          <S.CountButtonWrapper>
            <S.Count>{text.length}/300</S.Count>
            <S.RegisterButton onClick={registerComment}>등록</S.RegisterButton>
          </S.CountButtonWrapper>
        </S.InputWrapper>

        {/* 댓글 드롭다운 */}
        <S.Menu>
          <S.DropdownWrapper onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <S.DropdownButton>
              {commentDropdownOption[commentOrder]}
            </S.DropdownButton>
          <S.DropdownIcon src={'/assets/images/icon/down.png'} alt='드롭다운' />
          </S.DropdownWrapper>
          {isDropdownOpen && (
            <S.Dropdown>
              <S.Option onClick={() => handleOrder("date")}>등록순</S.Option>
              <S.Option onClick={() => handleOrder("like")}>좋아요순</S.Option>
            </S.Dropdown>
          )}
        </S.Menu>

        {comments.length === 0 ? (
          <p>댓글이 존재하지 않습니다.</p>
        ) : (
          comments.map((comment) => (
        <S.Comment key={comment.id}>
          <S.Wrapper>
            {comment.userWriterStatus === "승인" ? (
              <S.Link to={`/artist/${category}/detail/${comment.userId}`}>
                <S.ProfileWrapper>
                  <S.Profile src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${comment.userImgName}?filePath=${comment.userImgPath}`} alt={post.artTitle} />
                  <S.Name>{comment.userName}</S.Name>
                </S.ProfileWrapper>
              </S.Link>
            ) : (
              <S.ProfileWrapper>
                <S.Profile src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${comment.userImgName}?filePath=${comment.userImgPath}`} alt={post.artTitle} />
                <S.Name>{comment.userName}</S.Name>
              </S.ProfileWrapper>
            )}
            {currentUser.id === comment.userId ? (
              <S.MoreIcon src={'/assets/images/icon/more.png'} alt="더보기"
                onClick={() => setOpenMenuId(openMenuId === comment.id? null : comment.id)}/>
            ) : (<div></div>)}
            {/* <button onClick={() => deleteComment(comment.id)}>삭제</button> */}
            {openMenuId === comment.id && (
              <S.MoreMenu>
                <S.Option onClick={() => {
                  setModifyCommentContent(comment.commentContent);
                  setModifyCommentId(comment.id);
                  setOpenMenuId(null); }}>
                  수정
                </S.Option>
                <S.Option onClick={() => {
                  deleteComment(comment.id);
                  setOpenMenuId(null);}}>
                  삭제
                </S.Option>
              </S.MoreMenu>
            )}
          </S.Wrapper>
          { modifyCommentId === comment.id ? (
            <S.ModifyWrapper>
              <S.Input
                type="text"
                maxLength={300}
                value={modifyCommentContent}
                onChange={(e) => setModifyCommentContent(e.target.value)}
              />
              
              <S.ButtonContainer>
                <S.CancelButton onClick={() => setModifyCommentId(null)}>취소</S.CancelButton>
                <S.SaveButton onClick={() => {
                  modifyComment(comment.id, modifyCommentContent);
                  setModifyCommentId(null);
                }}>저장</S.SaveButton>
              </S.ButtonContainer>
            </S.ModifyWrapper>
            ) : (
            <S.Content>{comment.commentContent}</S.Content>
            )}

          <S.LikeWrapper>
            <S.LikeIcon src={'/assets/images/icon/like.png'} alt="댓글 좋아요" />
            <S.LikeCount>{comment.commentLikeCount}</S.LikeCount>
          </S.LikeWrapper>
        </S.Comment>
      ))
        )}

      </S.CommentWrapper>
    </S.Container>
  );
};

export default DisplayDetail;