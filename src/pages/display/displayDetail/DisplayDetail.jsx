import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArtLikeButton from './likeButton/artLikeButton/ArtLikeButton';
import S from './style';
import DisplayComments from './comment/DisplayComments';

const DisplayDetail = () => {
  const { id, category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [post, setPost] = useState(null)
  const [isLiked, setIsLiked] = useState(false)

  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser)
  
  // 작품 단일 조회
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/displays/api/read/${id}`)
      .then((res) => {
        if(!res.ok) {
          throw new Error("에러")
        }
        return res.json();
      })
      .then((res) => {
        // console.log("res", res);
        // console.log("res.post", res.post);
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
      
  // 작품 좋아요 여부
  const checkIsLiked = async () => {

    const userVO = {
      userId : currentUser.id,
      artId : post.artId,
    }
    
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/art/likes/api/liked`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userVO)
    })
    .then((res) => {
      if(!res.ok) {
        return res.json()
        .then((res) => {
          console.log(res)
        })
      }
      return res.json()
    })
    .then((res) => {
      setIsLiked(res.isLiked)
    })
  }
      
  useEffect(() => {
    if(post && currentUser?.id) {
      checkIsLiked()
    }
  }, [post, currentUser])


  if (isLoading) {
    return <p>로딩 중,,</p>
  }


  if (isError) { 
    return <p>오류 발생,,</p>
  }


  if (!post) {
    return <p>작품 정보 불러오는 중,,</p>
  }

  return (
    <S.Container>
      <S.Detail>
        <S.LeftWrapper>
          <S.Wrapper style={{ width: "560px" }}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}>
              {post.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <S.ArtImg
                    src={`${process.env.REACT_APP_BACKEND_URL}/files/api/get/${img.artImgName}?filePath=${img.artImgPath}`}
                    alt="이미지"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.Wrapper>

          {/* 작품 좋아요 버튼 */}
          <S.ButtonWrapper>
            <ArtLikeButton
              userId={currentUser.id}
              artId={post.artId}
              isLiked={isLiked}
              setIsLiked={setIsLiked}
              setPost={setPost} />
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

      <DisplayComments
        postId = {id}
        currentUser={currentUser}
        category={category}
      />

      
    </S.Container>
  );
};

export default DisplayDetail;
