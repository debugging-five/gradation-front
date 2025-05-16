import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
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
  const { register, handleSubmit, getValues, formState: { isSubmitting, isSubmitted, errors } } = useForm({ mode: "onChange" });
  const [auctionVO, setAuctionVO] = useState({});

  useEffect(() => {
    const fetchAuction = async () => {
      const response = await fetch(`http://localhost:10000/auction/api/detail/${id}`);
      const auction = await response.json();
      const auctionData = auction[0];
      setData(auctionData);
      setAuctionVO({
        id: id,
        artId: auctionData.artId,
        auctionStartDate: auctionData.auctionStartDate ? dayjs(auctionData.auctionStartDate).toDate() : null,
        auctionEstimatedMinPrice: auctionData.auctionEstimatedMinPrice,
        auctionEstimatedMaxPrice: auctionData.auctionEstimatedMaxPrice,
        auctionStartPrice: auctionData.auctionStartPrice
      });
    };
    fetchAuction();
  }, [id]);

  if (!data || !auctionVO) return null;

  return (
    <S.Container>
      <S.Modify>
        <S.EN_H4Primary>modify</S.EN_H4Primary>
      </S.Modify>
      <S.ContentWrap>
        <S.ImageWrap>
          <S.ImgWrapper>
            <S.AuctionImg src={`http://localhost:10000/files/api/get/${data.artImgName}?filePath=${data.artImgPath}`} alt="경매 작품" />
          </S.ImgWrapper>
        </S.ImageWrap>

        <S.InfoDiv>
          <S.ArtName>
            <S.H2>멋진 고양이</S.H2>
          </S.ArtName>
          <S.ArtArtist>
            <S.H3>작가명 | 박세현</S.H3>
          </S.ArtArtist>
          <S.ArtInfo>
            <S.H10gray900>팔레트에 아크릴물감</S.H10gray900>
            <S.H10gray900>50 X 50</S.H10gray900>
            <S.H10gray900>2025</S.H10gray900>
          </S.ArtInfo>

          <form>
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
                      minDate: "today",
                      time_24hr: true,
                      closeOnSelect: false,
                    }}
                    value={auctionVO.auctionStartDate}
                    onChange={([date]) =>
                      setAuctionVO(prev => ({
                        ...prev,
                        auctionStartDate: date
                      }))
                    }
                    render={({ value, defaultValue, id, name }, ref) => (
                      <S.CalendarInput ref={ref} id={id} name={name}>
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
              <S.CancelButton>취소</S.CancelButton>
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
