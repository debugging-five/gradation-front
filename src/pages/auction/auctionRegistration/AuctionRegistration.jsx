import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import S from './style';
import Flatpickr from "react-flatpickr";
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';

const AuctionExpectedModify = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const inputRef = useRef(null);
  const { register, handleSubmit, getValues, formState: { isSubmitting, isSubmitted, errors } } = useForm({ mode: "onChange" });
  const [auctionVO, setAuctionVO] = useState({});
  const [back, setBack] = useState(false);
  const [imageData, setImageData] = useState({});

  useEffect(() => {
    const fetchAuction = async () => {
      const response = await fetch(`http://localhost:10000/displays/api/display/${id}`);
      const auction = await response.json();
      const auctionData = await auction.post;
      const imgData = await auction.images[0];
      const isExistFetch = await fetch(`http://localhost:10000/auction/api/read-bidding/${auctionData.artId}`);
      const isExist = await isExistFetch.json();

      if(isExist) {
        navigate(`/auction`, { replace: true })
        return
      }
      
      setData(auctionData);
      setImageData(imgData)
      setAuctionVO({
        artId: auctionData.artId
      });
      
      if (auction.likeCount < 50 || auctionData.userId !== currentUser.id) {
        navigate("/auction");
        return
      }
      
    };
    fetchAuction();

    
    
    
  }, [id]);

  const goBack = () => {
    setBack(true)
    navigate(`/display/korean/detail/${id}`, { replace: true })
    return
  }

  if (!data || !auctionVO) return null;

  return (
    <S.Container>
      <S.Modify>
        <S.EN_H4Primary>modify</S.EN_H4Primary>
      </S.Modify>
      <S.ContentWrap>
        <S.ImageWrap>
          <S.ImgWrapper>
            <S.AuctionImg src={`http://localhost:10000/files/api/get/${imageData.artImgName}?filePath=${imageData.artImgPath}`} alt="경매 작품" />
          </S.ImgWrapper>
        </S.ImageWrap>

        <S.InfoDiv>
          <S.ArtName>
            <S.H2>{data.artTitle}</S.H2>
          </S.ArtName>
          <S.ArtArtist>
            <S.H3>작가명 | {data.userName}</S.H3>
          </S.ArtArtist>
          <S.ArtInfo>
            <S.H10gray900>{data.artMaterial}</S.H10gray900>
            <S.H10gray900>{data.artSize}</S.H10gray900>
            <S.H10gray900>{data.artEndDate.split('-')[0]}년</S.H10gray900>
          </S.ArtInfo>

          <form onSubmit={handleSubmit(async (auctionData) => {
            if(back) return
            
            setAuctionVO({
              auctionStartDate: auctionData.auctionStartDate ? auctionData.auctionStartDate : null,
              auctionEstimatedMinPrice: auctionData.auctionEstimatedMinPrice,
              auctionEstimatedMaxPrice: auctionData.auctionEstimatedMaxPrice,
              auctionStartPrice: auctionData.auctionStartPrice
            });
            
            await fetch("http://localhost:10000/auction/api/registration", {
              method : "POST",
              headers : {
                "Content-Type" : "application/json"
              }, 
              body : JSON.stringify(auctionVO)
            })
              .then(async (res)=> {
                if(!res.ok){
                const response = await res.json();
                  alert(response.message);
                  return
                }
                alert("등록에 성공하셨습니다");
                
                return res.json()
              })
              .then(data => {
                console.log(auctionVO);
                navigate(window.location.href = `/auction/expected/korean/detail/${data.status.id}`, { replace: true })
              })
              .catch(console.error)
          })}>
            <S.InputBoxWrap>
              <S.InputBox>
                <S.InputBoxInfo><S.H5>경매 개시</S.H5><S.RedStar>*</S.RedStar></S.InputBoxInfo>
                <S.InputBoxInfo>
                  <Flatpickr
                    options={{
                      enableTime: true,
                      enableSeconds: true,
                      noCalendar: false,
                      dateFormat: "Y-m-d H:i:S",
                      disableMobile: true,
                      minDate: new Date().fp_incr(1),
                      time_24hr: true,
                      closeOnSelect: false,
                    }}
                    value={auctionVO.auctionStartDate}
                    onChange={([date]) =>
                      setAuctionVO(prev => ({
                        ...prev,
                        auctionStartDate: dayjs(date).format("YYYY-MM-DD HH:mm:ss")
                      }))
                    }
                    render={({ value, defaultValue, id, name }, ref) => (
                      <S.CalendarInput ref={ref} id={id} name={name} >
                        <S.CalendarIcon
                          src="/assets/images/icon/calendar.png"
                          alt="calendar-icon"
                        />
                        <span>
                          {auctionVO.auctionStartDate
                            ? dayjs(auctionVO.auctionStartDate).format("YYYY-MM-DD HH:mm:ss")
                            : "날짜를 선택해주세요."}
                        </span>
                      </S.CalendarInput>
                    )}
                  />
                </S.InputBoxInfo>
              </S.InputBox>
            </S.InputBoxWrap>

            <S.InputBoxWrap>
              <S.InputBox>
                <S.H5>추정가</S.H5>
                <S.InputBoxInfo>
                  <S.InputMin
                    type="text"
                    value={auctionVO.auctionEstimatedMinPrice || ''}
                    placeholder="최소추정가를 입력하세요"
                    {...register("auctionEstimatedMinPrice", {
                      required: true,
                    })}
                    onChange={(e) =>
                      setAuctionVO(prev => ({ ...prev, auctionEstimatedMinPrice: e.target.value }))
                    }
                    autoComplete="off"
                  />
                  <span>~</span>
                  <S.InputMax
                    type="text"
                    value={auctionVO.auctionEstimatedMaxPrice || ''}
                    placeholder="최대추정가를 입력하세요"
                    {...register("auctionEstimatedMaxPrice", {
                      required: true,
                    })}
                    onChange={(e) =>
                      setAuctionVO(prev => ({ ...prev, auctionEstimatedMaxPrice: e.target.value }))
                    }
                    autoComplete="off"
                  />
                </S.InputBoxInfo>
              </S.InputBox>
            </S.InputBoxWrap>

            <S.InputBoxWrap>
              <S.InputBox>
                <S.InputBoxInfo><S.H5>시작가</S.H5><S.RedStar>*</S.RedStar></S.InputBoxInfo>
                <S.InputBoxInfo>
                  <S.InputText
                    placeholder="시작입찰가를 입력해주세요"
                    autoComplete="off"
                    value={auctionVO.auctionStartPrice || ''}
                    onChange={(e) =>
                      setAuctionVO(prev => ({ ...prev, auctionStartPrice: e.target.value }))
                    }
                  />
                </S.InputBoxInfo>
              </S.InputBox>
            </S.InputBoxWrap>

            <S.ButtonWrap>
              <S.CancelButton onClick={goBack}>취소</S.CancelButton>
              <S.ModifyButton>등록</S.ModifyButton>
            </S.ButtonWrap>
            <S.Reference>경매가 개시되면 작품 수정 및 삭제가 불가능합니다.</S.Reference>
          </form>
        </S.InfoDiv>
      </S.ContentWrap>
    </S.Container>
  );
};

export default AuctionExpectedModify;
