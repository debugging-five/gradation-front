import { useEffect, useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import S from './style';

const DisplayDetail = () => {
  const { id } = useParams();
  const { isLoading, isError } = useOutletContext();
  const [post, setPost] = useState(null);
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const [cursor, setCursor] = useState(1);
  const [commentOrder, setCommentOrder] = useState('date');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const handleOrder = (order) => {
    setCommentOrder(order);
    setIsDropdownOpen(false)
  }

  // const onClickToDeleteComment = () => {
  //   setIsDeleteComment(true)
  // }

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
        // console.log("res", res);
        console.log("res.post", res.post);
        setPost(res.post); 
      })
      .catch((error) => {
        // console.error(error)
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
    // const token = localStorage.getItem("jwtToken");
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/comments/api/registration`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        // "Authorization": `Bearer ${token}`
      },
      credentials: "include",
      body : JSON.stringify(commentVO)
    }) 
      .then((res) => {
        if(!res.ok) {
          return res.json().then((res) => {
            // console.log(res)
            // alert(res.message)
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
  const getCommentsList = () => {
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
  const deleteComment = async (comment) => {
    const id = comment.id;
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/comments/api/delete/${id}`, {
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
      })
      .catch(console.error)
  }

  // 댓글 수정
  const modifyComment = async (comment) => {
    const id = comment.id;
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/comments/api/modify/${id}`, {
      method : "PUT",
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
      {/* <p>{post.artTitle}</p>
      <p>{post.userName}</p>
      <p>{post.artCategory}</p>
      <p>{post.artMaterial}</p>
      <p>{post.artSize}</p>
      {post.comments.length === 0 ? (
      <p>댓글이 없습니다.</p>
    ) : (
      post.comments.map((comment) => (
        <div key={comment.commentId}>
          <p>{comment.commentContent}</p>
        </div>
      ))
    )} */}
      <S.Detail>
        <S.LeftWrapper>
          <S.ArtImg src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${post.artImgName}?filePath=${post.artImgPath}`} alt={post.artTitle}/>
          <S.ButtonWrapper>
            <S.LikeButton className="button">
              좋아요
              <S.LikeIcon src={'/assets/images/icon/heart.png'} alt="좋아요"/>
            </S.LikeButton>
            <S.Link to={`/mypage/contact-artist/write/${post.userEmail}`}>
              <S.ArtistButton className="button">
                작가와 연락
                <S.MessageIcon src={'/assets/images/icon/message-white.png'} alt="작가오 연락" />
              </S.ArtistButton>
            </S.Link>
          </S.ButtonWrapper>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.TitleWrapper>
            <S.Title>{post.artTitle}</S.Title>
            <S.Artist>
              <S.H3>작가명<span>|</span></S.H3>
              <S.H3>{post.userName}</S.H3>
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
            <S.ProfileWrapper>
              <S.Profile src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${comment.userImgName}?filePath=${comment.userImgPath}`} alt={post.artTitle} />
              <S.Name>{comment.userName}</S.Name>
            </S.ProfileWrapper>
            <S.MoreIcon src={'/assets/images/icon/more.png'} alt="더보기"/>
            <p onClick={() => deleteComment(comment)}>삭제</p>
            <p onClick={() => modifyComment(comment)}>수정</p>
          </S.Wrapper>
          <S.Content>{comment.commentContent}</S.Content>
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