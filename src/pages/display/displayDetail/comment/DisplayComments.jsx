import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import S from './style';
import CommentLikeButton from '../likeButton/commentLikeButton/CommentLikeButton';
import { useSelector } from 'react-redux';

const DisplayComments = ({postId, category}) => {
  // const { id, category } = useParams();
  // const { id } = useParams();
  const [text, setText] = useState("")
  const [comments, setComments] = useState([])
  const [cursor, setCursor] = useState(1)
  const [commentOrder, setCommentOrder] = useState('date')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [modifyCommentId, setModifyCommentId] = useState(null)
  const [modifyCommentContent, setModifyCommentContent] = useState("")
  const [openMenuId, setOpenMenuId] = useState(null)
  const [pageLength, setPageLength] = useState([]);
  const [largeCursor, setLargeCursor] = useState(0);
  const navigate = useNavigate()
  const { currentUser } = useSelector((state) => state.user);
  

  const commentDropdownOption = {
    date : "등록순",
    like : "좋아요순"
  };
  
  const handleOrder = (order) => {
    setCursor(1)
    setCommentOrder(order)
    setIsDropdownOpen(false)
  }

  // 댓글 리스트
    const getCommentsList = async () => {
  
      const params = {
        postId: postId,
        order: commentOrder,
        cursor: cursor 
      }
  
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/comments/api/list`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      })
      .then((res) => {
        if(!res.ok) {
          return res.json().then((res) => {
            console.log(res);
            // alert(res.message);
          })
        }
        return res.json()
      })
      .then((res) => {
        if(res) {
          setComments(res.commentList);
          // console.log("res", res)
          let pages = res.contents === 0 ? 0 : (res.contents % 10 === 0 ? res.contents / 10 - 1 : res.contents / 10)
          
          const result = [];
          let count = 0
          
          // 받은 값 기준으로 2차원 배열을 만든다.
          for(let i = 0; i < pages / 5; i++) {
            const row = [];
            for (let j = 0; j < 5; j++) {
              if(count < pages) {
                row.push(count++);
              } else {
                row.push(null);
              }
            }
            result.push(row);
          }
          setPageLength(result)
          console.log(result)
        }
      })
      .catch(console.error);
    }
      
    // 댓글 등록
    const registerComment = async () => {
      const commentVO = {
        commentContent : text,
        artPostId : postId
      }
  
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
        setCursor(1)
        getCommentsList()
        setText("")
        alert(res.message)
      })
      .catch(console.error)
    }
      
    useEffect(() => {
      getCommentsList()
    }, [postId, commentOrder, cursor]);
  
  
    // 댓글 삭제
    const deleteComment = async (commentId) => {
      console.log(commentId)
      // const id = comment.id;
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/comments/api/delete/${commentId}`, {
        method : "DELETE",
        credentials: "include",
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
    
    const minusLargeCursor = () => {
      if (largeCursor !== 0) {
        let value = largeCursor - 1
        setLargeCursor(value);
      }
    }
  
    const plusLargeCursor = () => {
      if (pageLength && largeCursor !== (pageLength.length - 1)) {
        let value = largeCursor + 1
        setLargeCursor(value);
      }
    }
  
  return (
    <S.CommentWrapper>
      <S.EnH3>comments</S.EnH3>
      <S.Line />
      <S.InputWrapper>
        <S.Input type="text" placeholder="댓글을 작성하세요." maxLength={300} 
        value={text} onChange={(e) => setText(e.target.value)}/>
        <S.CountButtonWrapper>
          <S.Count>{text.length} / 300</S.Count>
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

      {/* 댓글 리스트 */}
      {comments.length === 0 ? (
        <p>댓글이 존재하지 않습니다.</p>
      ) : (
        comments.map((comment) => (
      <S.Comment key={comment.id}>
        <S.Wrapper>
          {comment.userWriterStatus === "승인" ? (
            <S.Link to={`/artist/${category}/detail/${comment.userId}`}>
              <S.ProfileWrapper>
                <S.Profile src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${comment.userImgName}?filePath=${comment.userImgPath}`} alt="프로필" />
                <S.Name>{comment.userName}</S.Name>
                <S.ArtistProfile>작가</S.ArtistProfile>
              </S.ProfileWrapper>
            </S.Link>
          ) : (
            <S.ProfileWrapper>
              <S.Profile src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${comment.userImgName}?filePath=${comment.userImgPath}`} alt="프로필" />
              <S.Name>{comment.userName}</S.Name>
            </S.ProfileWrapper>
          )}
          {currentUser.id === comment.userId && (
            <S.MoreIcon
              src={'/assets/images/icon/more.png'} alt="더보기"
              onClick={() => setOpenMenuId(openMenuId === comment.id? null : comment.id)}/>
          )}
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
                setOpenMenuId(null)
                }}>
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


        {/* 댓글 좋아요 버튼 */}
        <CommentLikeButton
          userId={currentUser.id}
          commentId={comment.id}
          isLiked={comment.isLiked}
          commentLikeCount={comment.commentLikeCount}
          setComments={setComments} />
      </S.Comment>
      ))
    )}

    {pageLength.length > 0 &&
      <S.PagenationWrapper>
        <S.PagenationIcon src='/assets/images/icon/left.png' onClick={minusLargeCursor}/>
          {pageLength.map((datas, i) => (
            i === largeCursor ?
            datas.map((data, i) => (
              data !== null?
              <S.PagenationButton key={i} onClick={() => {setCursor((data + 1))}} $active={cursor === data + 1}>
              {data + 1}
              </S.PagenationButton> : ''
            )) : ''
          ))}

        <S.PagenationIcon src='/assets/images/icon/right.png' onClick={plusLargeCursor}/>
      </S.PagenationWrapper>
      }
        </S.CommentWrapper>
  );
};

export default DisplayComments;