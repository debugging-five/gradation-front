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
            <S.Button type="button">학교 검색</S.Button>
          </S.InputText>
        </S.InputButtonWrap>

        

      </S.InputForm>


      <PrimaryButton type="sumit">신청</PrimaryButton>
    </S.FormWrapper>
  );
};

export default ExhibitionRegistration;