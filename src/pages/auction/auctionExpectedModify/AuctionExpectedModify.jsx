import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import S from './style';
import Flatpickr from "react-flatpickr";
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';

const AuctionExpectedModify = () => {
  let { type, category, id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const inputRef = useRef(null);
  const { register, handleSubmit, getValues, formState: { isSubmitting, isSubmitted, errors } } = useForm({ mode: "onChange", shouldFocusError: false });
  const [auctionVO, setAuctionVO] = useState({});
  const [back, setBack] = useState(false);
  const [inputMinWidth, setInputMinWidth] = useState("")
  const [inputMaxWidth, setInputMaxWidth] = useState("")

  useEffect(() => {
    const fetchAuction = async () => {
      const response = await fetch(`http://localhost:10000/auction/api/detail/${id}`);
      const auction = await response.json();
      const auctionData = await auction.auction;
      
      setData(auctionData);
      if (auctionData.artistId !== currentUser.id) {
        alert("수정 권한이 없습니다!")
        navigate(`/auction/bidding/${category}/detail/${id}`, { replace: true })
        return
      }
      
      setAuctionVO({
        id: id,
        artId: auctionData.artId,
        auctionStartDate: auctionData.auctionStartDate ? auctionData.auctionStartDate : null,
        auctionEndDate: auctionData.auctionEndDate ? auctionData.auctionEndDate : null,
        auctionEstimatedMinPrice: auctionData.auctionEstimatedMinPrice,
        auctionEstimatedMaxPrice: auctionData.auctionEstimatedMaxPrice,
        auctionStartPrice: auctionData.auctionStartPrice
      });
    };
    fetchAuction();
  }, [id]);

  const goBack = () => {
    setBack(true)
    navigate(`/auction/bidding/${category}/detail/${id}`, { replace: true })
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
            <S.AuctionImg src={`http://localhost:10000/files/api/get/${data.argImgList[0].artImgName}?filePath=${data.argImgList[0].artImgPath}`} alt="경매 작품" />
          </S.ImgWrapper>
        </S.ImageWrap>

        <S.InfoDiv>
          <S.ArtName>
            <S.H2>{data.artTitle}</S.H2>
          </S.ArtName>
          <S.ArtArtist>
            <S.H3>작가명 | {data.artistName}</S.H3>
          </S.ArtArtist>
          <S.ArtInfo>
            <S.H10gray900>{data.artMaterial}</S.H10gray900>
            <S.H10gray900>{data.artSize}</S.H10gray900>
            <S.H10gray900>{data.artEndDate.split('-')[0]}년</S.H10gray900>
          </S.ArtInfo>

          <form onSubmit={handleSubmit(async (auctionData) => {
            if(back) return
            const getCurrentAuction = await fetch(`http://localhost:10000/auction/api/detail/${id}`)
            const currentAuction = await getCurrentAuction.json();

            if(dayjs(currentAuction.auctionStartDate) > dayjs()){
              alert("이미 시작된 경매입니다.");
              navigate(window.location.href = `/auction/bidding/${category}/detail/${id}`, { replace: true })
              return
            }
            

            console.log(auctionVO);
            
            await fetch("http://localhost:10000/auction/api/modify", {
              method : "PUT",
              headers : {
                "Content-Type" : "application/json"
              }, 
              body : JSON.stringify(auctionVO)
            })
              .then((res) => {
                if(!res.ok){
                return res.json().then((res) => {
                    alert(res.message)
                  })
                }
                alert("수정에 성공하셨습니다");
                navigate(window.location.href = `/auction/expected/${category}/detail/${id}`, { replace: true })
                return res.json()
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
                        auctionStartDate: dayjs(date).format("YYYY-MM-DD HH:mm:ss"),
                        auctionEndDate: dayjs(date).add(3).format("YYYY-MM-DD HH:mm:ss")
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
            <S.WarningArea>
              {errors.auctionStartDate && (
                <S.NeedWrite>{errors.auctionStartDate.message}</S.NeedWrite>
              )}
            </S.WarningArea>
            {(errors.auctionEstimatedMaxPrice || errors.auctionEstimatedMinPrice) ? (
            <S.NeedWriteDiv>
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
                      inputMinWidth={inputMinWidth}
                      onChange={(e) => {
                        setAuctionVO(prev => ({ ...prev, auctionEstimatedMinPrice: e.target.value }))
                        setInputMinWidth((prev) => {
                          let width = e.target.value.length * 10 + "px";
                          
                          return e.target.value.length === 0 ? "160px" : (e.target.value.length > 20 ? "200px" : width);
                        })
                      }}
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
                      inputMaxWidth={inputMaxWidth}
                      onChange={(e) => {
                        setAuctionVO(prev => ({ ...prev, auctionEstimatedMaxPrice: e.target.value }))
                        setInputMaxWidth((prev) => {
                          let width = e.target.value.length * 10 + "px";
                          return e.target.value.length === 0 ? "160px" : (e.target.value.length > 20 ? "200px" : width);
                        })
                      }}
                      autoComplete="off"
                      />
                  </S.InputBoxInfo>
                </S.InputBox>
              </S.InputBoxWrap>
            </S.NeedWriteDiv>
            ) : (
            <S.InputBoxWrap>
              <S.InputBox>
                <S.InputBoxInfo><S.H5>추정가</S.H5><S.RedStar>*</S.RedStar></S.InputBoxInfo>
                <S.InputBoxInfo>
                  <S.InputMin
                    type="text"
                    value={auctionVO.auctionEstimatedMinPrice || ''}
                    placeholder="최소추정가를 입력하세요"
                    {...register("auctionEstimatedMinPrice", {
                      required: true,
                    })}
                    inputMinWidth={inputMinWidth}
                    onChange={(e) => {
                      setAuctionVO(prev => ({ ...prev, auctionEstimatedMinPrice: e.target.value }))
                      setInputMinWidth((prev) => {
                        let width = e.target.value.length * 10 + "px";
                        return e.target.value.length === 0 ? "160px" : (e.target.value.length > 20 ? "200px" : width);
                      })
                    }}
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
                    inputMaxWidth={inputMaxWidth}
                    onChange={(e) => {
                      setAuctionVO(prev => ({ ...prev, auctionEstimatedMaxPrice: e.target.value }))
                      setInputMaxWidth((prev) => {
                        let width = e.target.value.length * 10 + "px";
                        return e.target.value.length === 0 ? "160px" : (e.target.value.length > 20 ? "200px" : width);
                      })
                    }}
                    autoComplete="off"
                  />
                </S.InputBoxInfo>
              </S.InputBox>
            </S.InputBoxWrap>
            )}
            <S.WarningArea>
              {(errors.auctionEstimatedMaxPrice || errors.auctionEstimatedMinPrice) && (
              <S.NeedWrite>필수항목입니다</S.NeedWrite>
              )}
            </S.WarningArea>
            {errors.auctionStartPrice ? (
              <S.NeedWriteDiv>
                <S.InputBoxWrap>
                  <S.InputBox>
                    <S.InputBoxInfo><S.H5>시작가</S.H5><S.RedStar>*</S.RedStar></S.InputBoxInfo>
                    <S.InputBoxInfo>
                      <S.InputText
                        placeholder="시작입찰가를 입력해주세요"
                        {...register("auctionStartPrice", {
                          required: true,
                        })}
                        autoComplete="off"
                        value={auctionVO.auctionStartPrice || ''}
                        onChange={(e) =>
                          setAuctionVO(prev => ({ ...prev, auctionStartPrice: e.target.value }))
                        }
                      />
                    </S.InputBoxInfo>
                  </S.InputBox>
                </S.InputBoxWrap>
              </S.NeedWriteDiv>
            ) : (
              <S.InputBoxWrap>
                <S.InputBox>
                  <S.InputBoxInfo><S.H5>시작가</S.H5><S.RedStar>*</S.RedStar></S.InputBoxInfo>
                  <S.InputBoxInfo>
                    <S.InputText
                      placeholder="시작입찰가를 입력해주세요"
                      {...register("auctionStartPrice", {
                        required: true,
                      })}
                      autoComplete="off"
                      value={auctionVO.auctionStartPrice || ''}
                      onChange={(e) =>
                        setAuctionVO(prev => ({ ...prev, auctionStartPrice: e.target.value }))
                      }
                    />
                  </S.InputBoxInfo>
                </S.InputBox>
              </S.InputBoxWrap>
            )}
            <S.WarningArea>
            {errors.auctionStartPrice && (
              <S.NeedWrite>필수항목입니다</S.NeedWrite>
            )}
            </S.WarningArea>
            <S.ButtonWrap>
              <S.CancelButton onClick={goBack}>취소</S.CancelButton>
              <S.ModifyButton>수정</S.ModifyButton>
            </S.ButtonWrap>
            <S.Reference>경매가 개시되면 작품 수정 및 삭제가 불가능합니다.</S.Reference>
          </form>
        </S.InfoDiv>
      </S.ContentWrap>
    </S.Container>
  );
};

export default AuctionExpectedModify;
