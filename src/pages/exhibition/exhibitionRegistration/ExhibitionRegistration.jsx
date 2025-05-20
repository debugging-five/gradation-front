import React, { useState } from 'react';
import S from "./style";
import "flatpickr/dist/flatpickr.min.css";
import { useForm } from 'react-hook-form';


const ExhibitionRegistration = () => {

  const [files, setFiles] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { register, handleSubmit, getValues, formState: { isSubmitting, isSubmitted, errors } } = useForm({ mode: "onChange", shouldFocusError: false });
  

  
  // 파일 선택 시 상태 업데이트
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  }

  const handleFileRemove = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }


  
  return (
    <S.FormWrapper onSubmit={handleSubmit ((data) => {
      console.log(data);
    })}>

      <S.TitleWrap>
        <S.Title>registration</S.Title>
      </S.TitleWrap>

      <S.InputForm>

        <S.InputButtonWrap>
          <S.InputText>
            <S.Label>대학명<span>*</span></S.Label>
            <S.Input type="text" name="universityName" placeholder="대학교를 검색하세요." />
          </S.InputText>
          <S.Button type="button">학교 검색</S.Button>
        </S.InputButtonWrap>

        <S.InputWrap>
          <S.Label>전시회 제목<span>*</span></S.Label>
          <S.Input type="text" name="universityExhibitionTitle" placeholder="제 n회 졸업 전시회"  />
        </S.InputWrap>

        <S.InputWrap>
          <S.Label>학과명<span>*</span></S.Label>
          <S.Input type="text" name="majorName" placeholder="학과를 입력하세요." />
        </S.InputWrap>

        <S.InputWrap>
          <S.Label>상세 주소<span>*</span></S.Label>
          <S.Input type="text" name="universityExhibitionLocation" placeholder="상세 주소를 입력하세요. ex) 00대학교 조형예술관 A동 2층 " />
        </S.InputWrap>

        <S.InputWrap>
          <S.Label>홈페이지<span>*</span></S.Label>
          <S.Input type="text" name="universityHomepage" placeholder="홈페이지 주소를 입력하세요." />
        </S.InputWrap>

        <S.InputWrap>
          <S.Label>전시회 일정<span>*</span></S.Label>
          <S.Datewrap>
            <S.calendar src={`/assets/images/icon/calendar.png`} alt="calendar" />
            <S.StyledFlatpickr options={{ dateFormat: 'Y-m-d' }} value={startDate} onChange={([date]) => setStartDate(date)} placeholder="시작일 선택" />
          </S.Datewrap>
          <p>~</p>
          <S.Datewrap2>
            <S.calendar src={`/assets/images/icon/calendar.png`} alt="calendar" />
            <S.StyledFlatpickr options={{ dateFormat: 'Y-m-d' }} value={endDate} onChange={([date]) => setEndDate(date)} placeholder="종료일 선택" />
          </S.Datewrap2>
        </S.InputWrap>

        <S.InputFileWrap>
          <S.File>첨부파일<span>*</span></S.File>
          <S.question src={`/assets/images/icon/gray_question.png`} alt="question" />
          <S.Tip>사이트에 올라간 전시회 이미지를 첨부해주세요.</S.Tip>
          <S.FileLabel htmlFor="file">첨부파일</S.FileLabel>
          <S.FileInput type="file" id="file" onChange={handleFileChange} />
        </S.InputFileWrap>

          <S.UploadedFileList>
            {files.map((file, index) => (
              <S.UploadedFileItem key={index}>
                <span>{file.name} ({(file.size / 1024).toFixed(1)}kb)</span>
                <S.DeleteButton onClick={() => handleFileRemove(index)}>삭제</S.DeleteButton>
              </S.UploadedFileItem>
            ))}
          </S.UploadedFileList>

        

      </S.InputForm>


      <S.PrimaryButton type="sumit">신청</S.PrimaryButton>
    </S.FormWrapper>
  );
};

export default ExhibitionRegistration;