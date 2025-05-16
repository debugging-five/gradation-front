import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import S from './style';
import dayjs from 'dayjs';

const AuctionExpectedModify = () => {
  let { type, category, id } = useParams()
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const inputRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState("");
  
  useEffect(() => {
    const fetchAuction = async () => {
      const response = await fetch(`http://localhost:10000/auction/api/detail/${id}`);
      const auction = await response.json();
      setData(auction[0]);
      // 최종방어
      // if(!currentUser || data.artistId !== currentUser.id) {
      //   alert("수정 권한이 없습니다!")
      //   navigate(`/auction/${type}/${category}/detail/${id}`)
      // }
    };
    fetchAuction();
  },[id])

  
  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const formattedDate = dayjs(selectedDate).format("YYYY . MM . DD . H:mm:ss");


  if(data.length !== 0){

    return (
      <S.Container>
        <S.Modify>
          <S.EN_H4Primary>modify</S.EN_H4Primary>
        </S.Modify>
        <S.ContentWrap>
          {/* <!-- 이미지 --> */}
          <S.ImageWrap>
            <S.ImgWrapper>
              <S.AuctionImg src={`http://localhost:10000/files/api/get/${data.artImgName}?filePath=${data.artImgPath}`} alt="경매 작품" />
            </S.ImgWrapper>
          </S.ImageWrap>
          
          {/* <!-- 수정 정보 --> */}
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
                      <S.WriteImg src="/assets/images/icon/calendar.png" alt='달력'/>
                      <S.InputDate id="myDate" type="text" readOnly/>
                  </S.InputBoxInfo>
                </S.InputBox>
              </S.InputBoxWrap>
              <S.InputBoxWrap>
                <S.InputBox>
                  <S.H5>추정가</S.H5>
                  <S.InputBoxInfo>
                    <S.InputText type="text" placeholder="ex) 100,000 ~ 200,000" />
                  </S.InputBoxInfo>
                </S.InputBox>
              </S.InputBoxWrap>
              <S.InputBoxWrap>
                <S.InputBox>
                  <S.InputBoxInfo><S.H5>시작가</S.H5><S.RedStar>*</S.RedStar></S.InputBoxInfo>
                  
                  <S.InputBoxInfo>
                    <S.InputText placeholder="KRW 1,000,000" />			
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
  }
};

export default AuctionExpectedModify;