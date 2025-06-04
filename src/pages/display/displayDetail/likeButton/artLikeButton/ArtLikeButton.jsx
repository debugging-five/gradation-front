import { useState } from 'react';
import S from './style';
import InfoAlert from '../../../alert/infoAlert/InfoAlert';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArtLikeButton = ({userId, artId, isLiked, setIsLiked, setPost}) => {

  const [isShowAlert, setIsShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const navigate = useNavigate()
  const [isShowLoginAlert, setIsShowLoginAlert] = useState(false)
  const { isLogin, currentUser } = useSelector((state) => state.user);

  const checkIsArtLiked = async () => {
    if(!isLogin) {
      navigate("/login")
      return
    } 

    // if(!userId || !artId) {
    //   setIsShowLoginAlert(true)
    //   return
    // }

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
        // alert(res.message)
        // 이미 좋아요 클릭된 상태 => 좋아요 취소
        if(res.isLiked) {
          fetch(`${process.env.REACT_APP_BACKEND_URL}/art/likes/api/delete/${artId}?userId=${userId}`, {
            method: "DELETE",
          })
          setIsLiked(false)
          setPost((prev) => ({...prev, artLikeCount : prev.artLikeCount - 1}))
          setAlertMessage("좋아요 작품에서 삭제되었습니다.")
          setIsShowAlert(true)
        } else {
          // 좋아요 처음 => 좋아요 등록
          setIsLiked(true)
          setPost((prev) => ({...prev, artLikeCount : prev.artLikeCount + 1}))
          setAlertMessage("좋아요 작품에 추가되었습니다.")
          setIsShowAlert(true)
        }
      })
        .catch(console.error)
      }

      return (
        <div>
          <S.LikeButton className="button" onClick={checkIsArtLiked} isLiked={isLiked}>
            좋아요
            <S.LikeIcon src={isLiked ? '/assets/images/icon/heart_white.png' : '/assets/images/icon/heart.png'} alt="좋아요" />
          </S.LikeButton>

          {/*  */}
          {isShowAlert && (
            <InfoAlert src="/assets/images/icon/check.png"
              message={alertMessage} handleOk={() => setIsShowAlert(false)} />
          )}

          {/* 로그인 alert */}
          {/* {isShowLoginAlert && (
            <InfoAlert src="/assets/images/icon/check.png"
              message="로그인이 필요합니다."
              handleOk={() => {
                setIsShowLoginAlert(false)
                navigate("/login")}} />
          )} */}


        </div>
      );
    };

export default ArtLikeButton;
