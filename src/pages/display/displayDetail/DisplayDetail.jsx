import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const DisplayDetail = async () => {
    const postId = 578;


    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/displays/api/read/${postId}`, {
      method : "GET"
    })
      .then((res) => {
        if(!res.ok) {
          return res.json().then((res) => {
            console.log(res)
          })
        }
      })


  return (
    // <div>
    //   <div>이미지 영역</div>
    //   <div>댓글 컴포넌트</div>
    //   <Link to={`/mypage/contact-artist/write/${email}`}>작가와의 연락</Link>
    // </div>
    <S.Container>
      <S.Image>

      </S.Image>
      <S.Info>

      </S.Info>

    </S.Container>
  );
};

export default DisplayDetail;