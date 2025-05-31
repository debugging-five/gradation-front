import S from './style';

const ArtLikeButton = ({userId, artId, isLiked, setIsLiked, setPost}) => {

  const checkIsArtLiked = async () => {
    if(!userId || !artId) {
      return
    }

    const userVO = {
      userId : userId,
      artId : artId
    }
    
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/art/likes/api/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userVO),
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
        alert(res.message)
        // 이미 좋아요 클릭된 상태 => 좋아요 취소
        if(res.isLiked) {
          fetch(`${process.env.REACT_APP_BACKEND_URL}/art/likes/api/delete`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userVO),
          })
          setIsLiked(false)
          setPost((prev) => ({...prev, artLikeCount : prev.artLikeCount - 1}))
        } else {
          // 좋아요 처음 => 좋아요 등록
          setIsLiked(true)
          setPost((prev) => ({...prev, artLikeCount : prev.artLikeCount + 1}))
        }
      })
        .catch(console.error)
      }

      return (
        <S.LikeButton className="button" onClick={checkIsArtLiked} isLiked={isLiked}>
          좋아요
          <S.LikeIcon src={isLiked ? '/assets/images/icon/heart_white.png' : '/assets/images/icon/heart.png'} alt="좋아요" />
        </S.LikeButton>
      );
    };

export default ArtLikeButton;
