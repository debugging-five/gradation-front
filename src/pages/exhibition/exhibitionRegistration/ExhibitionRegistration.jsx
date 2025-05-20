import React, { useState } from 'react';
import S from "./style";
import CheckedButton from '../../../components/button/CheckedButton';
import PrimaryButton from '../../../components/button/PrimaryButton';

const ExhibitionRegistration = () => {

  const [form, setForm] = useState({
    universityName: '',
    majorName: '',
    universityExhibitionTitle: '',
    universityExhibitionLocation: '',
    universityHomepage: '',
    universityExhibitionStartDate: '',
    universityExhibitionEndDate: '',
  });

  const [file, setFile] = useState(null);

  // 텍스트 입력 시 상태 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // 파일 선택 시 상태 업데이트
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }

  const submitTextData = async () => {
    const response = await fetch('http://localhost:10000/university/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
      });
      const data = await response.json();
      return data.id;
    };

  const submitFileData = async (exhibitionId) => {
    const formData = new FormData();
    formData.append('file', file);

    await fetch(`http://localhost:10000/university/register/${exhibitionId}`, {
      method: 'POST',
      body: formData,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const exhibitionId = await submitTextData();
      await submitFileData(exhibitionId);
      alert('신청이 완료되었습니다.');
    }
    catch (error) {
      console.error('Error submitting form:', error);
      alert('신청에 실패했습니다. 다시 시도해주세요.');
    }
  }

  return (
    <S.FormWrapper onSubmit={handleSubmit}>

      <S.TitleWrap>
        <S.Title>registration</S.Title>
      </S.TitleWrap>

      <S.InputForm>

        <S.InputButtonWrap>
          <S.InputText>
            <S.Label>대학명<span>*</span></S.Label>
            <S.Input type="text" name="universityName" placeholder="대학교를 검색하세요." onChange={handleChange} />
          </S.InputText>
          <S.Button type="button">학교 검색</S.Button>
        </S.InputButtonWrap>

        <S.InputWrap>
          <S.Label>전시회 제목<span>*</span></S.Label>
          <S.Input type="text" name="title" placeholder="제 n회 졸업 전시회" onChange={handleChange} />
        </S.InputWrap>

        <S.InputWrap>
          <S.Label>학과명<span>*</span></S.Label>
          <S.Input type="text" name="major" placeholder="학과를 입력하세요." onChange={handleChange} />
        </S.InputWrap>

        <S.InputWrap>
          <S.Label>상세 주소<span>*</span></S.Label>
          <S.Input type="text" name="address" placeholder="상세 주소를 입력하세요. ex) 00대학교 조형예술관 A동 2층 " onChange={handleChange} />
        </S.InputWrap>

        <S.InputWrap>
          <S.Label>홈페이지<span>*</span></S.Label>
          <S.Input type="text" name="homepage" placeholder="홈페이지 주소를 입력하세요." onChange={handleChange} />
        </S.InputWrap>

        <S.InputWrap>
          <S.Label>전시회 일정<span>*</span></S.Label>
          <S.Datewrap>
            <S.calendar src={`/assets/images/icon/calendar.png`} alt="calendar" />
            <S.InputDate type="text" name="startDate" placeholder="시작일 선택" onChange={handleChange} />
          </S.Datewrap>
          <p>~</p>
          <S.Datewrap2>
            <S.calendar src={`/assets/images/icon/calendar.png`} alt="calendar" />
            <S.InputDate type="text" name="endDate" placeholder="종료일 선택" onChange={handleChange} />
          </S.Datewrap2>
        </S.InputWrap>

        <S.InputFileWrap>
          <S.File>첨부파일<span>*</span></S.File>
          <S.question src={`/assets/images/icon/gray_question.png`} alt="question" />
          <S.Tip>사이트에 올라간 전시회 이미지를 첨부해주세요.</S.Tip>
          <S.FileLabel htmlFor="file">첨부파일</S.FileLabel>
          <S.FileInput type="file" id="file" onChange={handleFileChange} />
        </S.InputFileWrap>



        

      </S.InputForm>


      <S.PrimaryButton type="sumit">신청</S.PrimaryButton>
    </S.FormWrapper>
  );
};

export default ExhibitionRegistration;