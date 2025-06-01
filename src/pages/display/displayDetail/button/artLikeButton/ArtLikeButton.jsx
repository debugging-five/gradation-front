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

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/art/likes/api/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userVO),
      });

      const data = await res.json()

      if(!res.ok) {
        console.log(data)
        return
      }

      alert(data.message)
      // 이미 좋아요 클릭된 상태 => 좋아요 취소
      if(data.isLiked) {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/art/likes/api/delete`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userVO),
        })

        if(!res.ok) {
          const data = await res.json();
          alert(data.message)
          return
        }

        setIsLiked(false)
        setPost((prev) => ({...prev, artLikeCount : prev.artLikeCount - 1}))
      } else {
        // 좋아요 처음 => 좋아요 등록
        setIsLiked(true)
        setPost((prev) => ({...prev, artLikeCount : prev.artLikeCount + 1}))
      }

    } catch(error) {
      console.error(error)
    }
  }

  return (
    <S.LikeButton className="button" onClick={checkIsArtLiked} $isLiked={isLiked}>
      좋아요
      <S.LikeIcon src={isLiked ? '/assets/images/icon/heart_white.png' : '/assets/images/icon/heart.png'} alt="좋아요" />
    </S.LikeButton>
  );
};

export default ArtLikeButton;
