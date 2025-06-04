import { useForm } from 'react-hook-form';
import S from './style';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import getLatestPrice from '../_function/getLatePrice';
import AuctionBiddingPopupTime from '../AuctionBiddingPopup/AuctionBiddingPopupTime';
import AuctionBiddingPopupPrice from '../AuctionBiddingPopup/AuctionBiddingPopupPrice';
import { useState } from 'react';
import InfoAlert from '../../alert/infoAlert/InfoAlert';
import ConfirmAlert from '../../alert/confirmAlert/ConfirmAlert';

const AuctionAutoModal = ({
  id, auction, setOpenAutoBidding, auctionStartDate, auctionEndDate, auctionBidDate,
  price, isPriceUpdate, setIsPriceUpdate
}) => {
  const { currentUser, isLogin } = useSelector((state) => state.user);
  const { category } = useParams;
  const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
  const navigate = useNavigate();
  const pricePattern = /^[0-9]+$/;
  const [isShowConfirm, setIsShowConfirm] = useState(false)
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [isShowAlertClose, setIsShowAlertClose] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  
  const handleConfirmOk = () => {
    navigate(window.location.href = `/auction/bidding/${category}/detail/${id}`)
  }

  if(!isLogin) {
    return <Navigate to={"/login"} />
  }

  return (
    <S.PopupBody>
      <S.PopupContainer>
        <S.Popup>
	      {/* <!-- 팝업 상단바 x 아이콘 --> */}
          <S.Bar>
            <S.BarImg src="/assets/images/icon/close.png" alt="x" onClick={() => {
                  setOpenAutoBidding(false);
                }}/>
          </S.Bar>
            <S.PopupWrapper>
              <S.PopupLeft>
                <S.Info>
                  <S.H4>{auction.artTitle}</S.H4>
                  <S.H4>경매중</S.H4>
                </S.Info>
                <S.Info>
                  <AuctionBiddingPopupTime 
                    id={id} auctionBidDate={auction.auctionBidDate} 
                    auctionStartDate={auction.auctionStartDate} auctionEndDate={auction.auctionEndDate}
                  />
                </S.Info>
                <S.Info>
                  <S.H4>경쟁응찰자</S.H4>
                  <S.H4>{price.bidderCount || 0}명</S.H4>
                </S.Info>
                
                {/* <!-- 추정가, 시작가 --> */}
                <S.Info>
                  <S.H6>추정가 KRW</S.H6>
                  <S.H6>{auction.auctionEstimatedMinPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ~ {auction.auctionEstimatedMaxPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H6>
                </S.Info>
                <S.Info>
                  <S.H6>시작가 KRW</S.H6>
                  <S.H6>{auction.auctionStartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H6>
                </S.Info>
              </S.PopupLeft>
        
              <S.PopupRight>
                  <S.PopupArtImg src={`http://localhost:10000/files/api/get/${auction.argImgList[0].artImgName}?filePath=${auction.argImgList[0].artImgPath}`} alt="경매 작품" />
              </S.PopupRight>
            </S.PopupWrapper>
            
            <form onSubmit={handleSubmit(async (formDatas) => {
              const latestPrice = await getLatestPrice(id)
              const myId = currentUser.id;
              const currentUserId = price.userId;
              const latestUserId = latestPrice.price.userId;

              if (!pricePattern.test(formDatas.biddingPrice)) {
                setAlertMessage("숫자만 입력해주세요.")
		            setIsShowAlert(true)
                return
              }

              if(latestUserId) {
                if(currentUserId !== latestUserId) {
                  setIsShowConfirm(true)
                  return
                }
              }

              if(formDatas.price < (price.auctionBiddingMinimumPrice || Math.ceil(auction?.auctionStartPrice * 1.1 / 1000) * 1000)){
                setAlertMessage("응찰가는 반드시 최소 응찰가 이상이어야 합니다.")
		            setIsShowAlert(true)
                setIsPriceUpdate(!isPriceUpdate)
                return
              }

              if(formDatas.biddingPrice > 1000000000000) {
                setAlertMessage("사이트 정책에 위반되는 금액입니다")
		            setIsShowAlert(true)
                setIsPriceUpdate(!isPriceUpdate)
                return
              }

              if(latestUserId === myId || currentUserId === myId){
                setAlertMessage("이미 입찰 하셨습니다")
		            setIsShowAlertClose(true)
                setIsPriceUpdate(!isPriceUpdate)
                return
              }

              const auctionBiddingVO = {
                auctionBiddingPrice : Number(formDatas.biddingPrice),
                auctionBiddingAutoOk : true,
                auctionId : Number(id),
                userId : Number(myId)
              }

              await fetch("http://localhost:10000/auction/api/bidding", {
                method : "POST",
                headers : {
                  "Content-Type" : "application/json"
                }, 
                body : JSON.stringify(auctionBiddingVO)
              })
                .then((res) => {
                  if(!res.ok){
                  return res.json().then((res) => {
                      alert(res.message)
                    })
                  }
                  setAlertMessage("응찰에 성공하셨습니다")
                  setIsShowAlertClose(true)
                  setIsPriceUpdate(!isPriceUpdate)
                })
                .catch(console.error)
            })}>
              <S.PopupInfo2>
                <S.PopupLeft2>
                  <S.Input type="text" placeholder="응찰가를 입력해주세요." autoComplete="off"
                    {...register("biddingPrice", {
                      required : true
                  })}/>
                  <AuctionBiddingPopupPrice price={price} auction={auction} />
                </S.PopupLeft2>
                  
                <S.PopupButton>
                  <S.BiddingButton>응찰하기</S.BiddingButton>
                  <S.BackButton onClick={() => {
                    setOpenAutoBidding(false);
                  }}>돌아가기</S.BackButton>
                </S.PopupButton>
              </S.PopupInfo2>
            </form>
        
          <S.Notice>
              <S.NoticeP>※ 작품 마감 30초 전에 응찰이 들어왔을 경우 해당작품 마감이 30초 연장됩니다. 한번 응찰된 작품은 응찰을 취소 할 수 없습니다. </S.NoticeP>
              <S.NoticeP>신중한 선택 부탁드립니다. 낙찰 후 결제기한 내에 결제하지 않으면 경매이용이 불가능해질 수 있습니다. </S.NoticeP>
          </S.Notice>
		    </S.Popup>
      </S.PopupContainer>
      {isShowAlert && (
        <S.AlertBody>
          <InfoAlert src="/assets/images/icon/confirm.png"
            message={alertMessage} handleOk={() => setIsShowAlert(false)} />
        </S.AlertBody>
      )}
      {isShowAlertClose && (
        <S.AlertBody>
          <InfoAlert src="/assets/images/icon/check.png"
            message={alertMessage} handleOk={() => setOpenAutoBidding(false)} />
        </S.AlertBody>
      )}
      {isShowConfirm && (
        <S.AlertBody>
          <ConfirmAlert src="/assets/images/icon/question.png"
            message="응찰가 변동으로 인한 응찰 실패"
            message1="다시 응찰 하시겠습니까?"
            handleOk={handleConfirmOk}
            handleCancel={handleConfirmOk} />
        </S.AlertBody>
      )}
    </S.PopupBody>
  );
};

export default AuctionAutoModal;