import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import S from './style';

const DisplayDetail = () => {
  const { id } = useParams();
  const { isLoading, isError } = useOutletContext();
  const [ post, setPost ] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/displays/api/read/${id}`)
      .then((res) => {
        console.log(res)
        if(!res.ok) {
          throw new Error("에러")
        }
        return res.json();
      })
      .then((res) => {
        console.log("res", res);
        console.log("res.post", res.post);
        setPost(res.post); 
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

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
      <p>{post.artTitle}</p>
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
    )}
    {/* <p>{post.comments}</p> */}

    </S.Container>
  );
};

export default DisplayDetail;