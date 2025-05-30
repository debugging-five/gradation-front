// ArtLikeButton.jsx
import { useState } from 'react';
import S from './style';


const ArtLikeButton = ({ userId, artId, isLiked, setIsLiked, setPost }) => {
  const [loading, setLoading] = useState(false);

  const handleToggleLike = async () => {
    if (!userId || !artId) return;
    setLoading(true);

    const userVO = { userId, artId };

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/art/likes/api/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userVO),
      });

      const data = await res.json();
      console.log("toggleLike 응답:", data);

      if (data.isLiked) {
        // 좋아요 클릭된 상태 => 좋아요 취소
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/art/likes/api/delete`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userVO),
        });
        setIsLiked(false);
        setPost((prev) => ({ ...prev, artLikeCount: prev.artLikeCount - 1 }));
      } else {
        // 좋아요 처음 => 좋아요 등록
        setIsLiked(true);
        setPost((prev) => ({ ...prev, artLikeCount: prev.artLikeCount + 1 }));
      }
    } catch (err) {
      console.error("좋아요 토글 에러:", err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <S.LikeButton className="button" onClick={handleToggleLike} isLiked={isLiked} disabled={loading}>
      좋아요
      <S.LikeIcon src={isLiked ? '/assets/images/icon/heart_white.png' : '/assets/images/icon/heart.png'} alt="좋아요" />
    </S.LikeButton>
  );
};

export default ArtLikeButton;
