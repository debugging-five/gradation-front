import { useForm } from 'react-hook-form';
import S from './style';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuctionAutoModal = ({id, category, bidderCount, bidding, setBidding, timeleft, data, setOpenBidding }) => {
  const { currentUser, isLogin } = useSelector((state) => state.user);
  const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
  const navigate = useNavigate();
  const pricePattern = /^[0-9]+$/;

  return (
    <S.PopupBody>
      <S.PopupContainer>
        <S.Popup>
	      {/* <!-- 팝업 상단바 x 아이콘 --> */}
          <S.Bar>
            <S.BarImg src="/assets/images/icon/close.png" alt="x" onClick={() => {
                  setOpenBidding(false);
                }}/>
          </S.Bar>
            <S.PopupWrapper>
              <S.PopupLeft>
                <S.Info>
                  <S.H4>{data.artTitle}</S.H4>
                  <S.H4>자동응찰 경매중</S.H4>
                </S.Info>
                <S.Info>
                  <S.H4>마감시간</S.H4>
                  <S.RedH4>{timeleft}</S.RedH4>
                </S.Info>
                <S.Info>
                  <S.H4>경쟁응찰자</S.H4>
                  <S.H4>{bidderCount}명</S.H4>
                </S.Info>
                
                {/* <!-- 추정가, 시작가 --> */}
                <S.Info>
                  <S.H6>추정가 KRW</S.H6>
                  <S.H6>{data.auctionEstimatedMinPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ~ {data.auctionEstimatedMaxPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H6>
                </S.Info>
                <S.Info>
                  <S.H6>시작가 KRW</S.H6>
                  <S.H6>{data.auctionStartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H6>
                </S.Info>
              </S.PopupLeft>
        
              <S.PopupRight>
                  <S.PopupArtImg src={`http://localhost:10000/files/api/get/${data.artImgName}?filePath=${data.artImgPath}`} alt="경매 작품" />
              </S.PopupRight>
            </S.PopupWrapper>
            
            <form onSubmit={handleSubmit(async (price) => {
              const getCurrentBidding = await fetch(`http://localhost:10000/auction/api/read-bidder/${id}`)
              const currentBidding = await getCurrentBidding.json();
              
              if(bidding.id !== currentBidding.id) {
                alert("응찰가 변동으로 인한 응찰 실패\n다시 응찰 하시겠습니까?");
                navigate(window.location.href = `/auction/bidding/${category}/detail/${id}`)
                return
              }


              if(price.price < (Math.ceil(bidding?.auctionBiddingPrice * 1.1 / 1000) * 1000) || price.price < data?.auctionStartPrice){
                alert("응찰가는 반드시\n최소 응찰가 이상이어야 합니다.");
                navigate(window.location.href = `/auction/bidding/${category}/detail/${id}`, { replace: true })
                return
              }

              if(bidding.userId === currentUser.id){
                alert("이미 입찰 하셨습니다.");
                setOpenBidding(false)
                navigate(window.location.href = `/auction/bidding/${category}/detail/${id}`, { replace: true })
                return
              }
              const auctionBiddingVO = {
                auctionBiddingPrice : Number(price.price),
                auctionBiddingAutoOk : true,
                auctionId : Number(id),
                userId : Number(currentUser.id)
              }

              // console.log(auctionBiddingVO);
              
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
                  alert("응찰에 성공하셨습니다");
                  setOpenBidding(false)
                  navigate(window.location.href = `/auction/bidding/${category}/detail/${id}`, { replace: true })
                  return res.json()
                })
                .catch(console.error)
            })}>
              <S.PopupInfo2>
                <S.PopupLeft2>
                  <S.Input type="text" placeholder="응찰가를 입력해주세요." autocomplete="off"
                    {...register("price", {
                      required : true,
                      pattern : {
                        value : pricePattern,
                      }
                  })}/>
                  <S.Info3Bid>
                      <S.H4>현재 입찰가 KRW</S.H4>
                      <S.H3>{(bidding?.auctionBiddingPrice || '-').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H3>
                  </S.Info3Bid>
                  <S.Info3>
                      <S.H4>최소 응찰가 KRW</S.H4>
                      <S.H3Red>{((Math.ceil(bidding?.auctionBiddingPrice * 1.1 / 1000) * 1000) || data?.auctionStartPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</S.H3Red>
                  </S.Info3>
                </S.PopupLeft2>
                  
                <S.PopupButton>
                  <S.BiddingButton>응찰하기</S.BiddingButton>
                  <S.BackButton onClick={() => {
                    setOpenBidding(false);
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
    </S.PopupBody>
  );
};

export default AuctionAutoModal;