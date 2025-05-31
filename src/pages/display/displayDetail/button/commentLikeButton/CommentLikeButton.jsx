import S from './style';

const CommentLikeButton = ({userId, commentId, isLiked, setIsLiked, commentLikeCount, setComments}) => {

  const checkIsCommentLiked = async () => {

    if(!userId || !commentId) {
      return
    }

    const commentLikeVO = {
      userId : userId,
      commentId : commentId
    }
    
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/comment/likes/api/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentLikeVO)
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
          // 이미 좋아요 클릭된 상태 => 좋아요 취소
          if(res.isLiked) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/comment/likes/api/delete`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(commentLikeVO)
            })
            .then((res) => {
              if(!res.ok) {
                return res.json().then((res) => 
                  alert(res.message)
              )}
              setComments(prev => prev.map(comment => comment.id === commentId ?
                { ...comment, isLiked : false, commentLikeCount : comment.commentLikeCount - 1 } : comment ))
            })
            } else {
              // 좋아요 처음 => 좋아요 등록
              setComments(prev => prev.map(comment => comment.id === commentId ? 
                { ...comment, isLiked : true, commentLikeCount : comment.commentLikeCount + 1 } : comment ))
              }
            })
              .catch(console.error)
          }
          
          return (
          <S.LikeWrapper onClick={checkIsCommentLiked}>
            <S.LikeIcon src={isLiked ? '/assets/images/icon/like-red.png' : '/assets/images/icon/like.png'} alt="댓글 좋아요" />
              {commentLikeCount > 0 && (
                <S.LikeCount $count={commentLikeCount}>{commentLikeCount}</S.LikeCount>
              )}
          </S.LikeWrapper>
        );
      };

export default CommentLikeButton;
