import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import S from './style';
import Flatpickr from "react-flatpickr";
import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';

const AuctionExpectedModify = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { register, handleSubmit, control, getValues, formState: { isSubmitting, isSubmitted, errors } } = useForm({ mode: "onChange", shouldFocusError: false });
  const [auctionVO, setAuctionVO] = useState({});
  const [back, setBack] = useState(false);
  const [imageData, setImageData] = useState({});
  
  const [inputMinWidth, setInputMinWidth] = useState("160px")
  const [inputMaxWidth, setInputMaxWidth] = useState("160px")

  useEffect(() => {
    const fetchAuction = async () => {
      const response = await fetch(`http://localhost:10000/displays/api/read/${id}`);
      const auction = await response.json();
      const auctionData = await auction.post;
      const imgData = await auctionData.images[0];
      const isExistFetch = await fetch(`http://localhost:10000/auction/api/read-bidding/${auctionData.artId}`);
      const isExist = await isExistFetch.json();
      
      setData(auctionData);
      setImageData(imgData)
      setAuctionVO({
        artId: auctionData.artId
      });
      
      if (isExist || auctionData.artLikeCount < 50 || auctionData.userId !== currentUser.id) {
        alert("등록 권한이 없습니다")
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
                navigate(window.location.href = `/auction/expected/korean/detail/${data.request.id}`, { replace: true })
              })
              .catch(console.error)
          })}>
          {errors.auctionStartDate ? (
            <S.NeedWriteDiv>
              <S.InputBoxWrap>
                <S.InputBox>
                  <S.InputBoxInfo>
                    <S.H5>경매 개시</S.H5>
                    <S.RedStar>*</S.RedStar>
                  </S.InputBoxInfo>
                  <S.InputBoxInfo>
                    <Controller
                      name="auctionStartDate"
                      control={control}
                      rules={{ required: "필수항목입니다" }}
                      render={({ field }) => (
                        <Flatpickr
                          {...field}
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
                          onChange={([date]) => {
                            const formatted = dayjs(date).format("YYYY-MM-DD HH:mm:ss");
                            field.onChange(formatted);
                            setAuctionVO(prev => ({
                              ...prev,
                              auctionStartDate: formatted,
                            }));
                          }}
                          render={({ value, defaultValue, id, name }, ref) => (
                            <S.CalendarInput ref={ref} id={id} name={name}>
                              <S.CalendarIcon
                                src="/assets/images/icon/calendar_warning.png"
                                alt="calendar_warning-icon"
                              />
                              <span>
                                {value
                                  ? dayjs(value).format("YYYY-MM-DD HH:mm:ss")
                                  : "날짜를 선택해주세요"}
                              </span>
                            </S.CalendarInput>
                          )}
                        />
                      )}
                    />
                  </S.InputBoxInfo>
                </S.InputBox>
              </S.InputBoxWrap> 
            </S.NeedWriteDiv>
            ) : (
            <S.InputBoxWrap>
              <S.InputBox>
                <S.InputBoxInfo>
                  <S.H5>경매 개시</S.H5>
                  <S.RedStar>*</S.RedStar>
                </S.InputBoxInfo>
                <S.InputBoxInfo>
                  <Controller
                    name="auctionStartDate"
                    control={control}
                    rules={{ required: "필수항목입니다" }}
                    render={({ field }) => (
                      <Flatpickr
                        {...field}
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
                        onChange={([date]) => {
                          const formatted = dayjs(date).format("YYYY-MM-DD HH:mm:ss");
                          field.onChange(formatted);
                          setAuctionVO(prev => ({
                            ...prev,
                            auctionStartDate: formatted,
                          }));
                        }}
                        render={({ value, defaultValue, id, name }, ref) => (
                          <S.CalendarInput ref={ref} id={id} name={name}>
                            <S.CalendarIcon
                              src="/assets/images/icon/calendar.png"
                              alt="calendar-icon"
                            />
                            <span>
                              {value
                                ? dayjs(value).format("YYYY-MM-DD HH:mm:ss")
                                : "날짜를 선택해주세요"}
                            </span>
                          </S.CalendarInput>
                        )}
                      />
                    )}
                  />
                </S.InputBoxInfo>
              </S.InputBox>
            </S.InputBoxWrap>
            )}
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
                        autoComplete="off"
                        value={auctionVO.auctionStartPrice || ''}
                        {...register("auctionStartPrice", {
                          required: true,
                        })}
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
                      autoComplete="off"
                      value={auctionVO.auctionStartPrice || ''}
                      {...register("auctionStartPrice", {
                        required: true,
                      })}
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
