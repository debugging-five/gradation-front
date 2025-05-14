import React, { useState } from "react";
import * as S from "./style";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";

const UpcyclingRegistration = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    detailAddress: "",
    email: "",
    phone: "",
    pickupDate: "",
    smallCount: 0,
    mediumCount: 0,
    largeCount: 0,
    materials: [],
    notes: "",
    image: null,
    imagePreview: null,
  });

  // input 값 받아서 폼데이터에 반영.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // 업로드 이미지 미리보기URL 만들기
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: file, imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  // 체크박스 배열로 추가, 제거
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedMaterials = checked
      ? [...formData.materials, value]
      : formData.materials.filter((item) => item !== value);
    setFormData({ ...formData, materials: updatedMaterials });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 유효성 검사 등 처리 후 서버 전송
    alert("신청이 완료되었습니다.");
  };

  const handleAddressSearch = () => {
  new window.daum.Postcode({
    oncomplete: function (data) {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
        if (data.bname) extraAddress += data.bname;
        if (data.buildingName) {
          extraAddress += (extraAddress ? ', ' + data.buildingName : data.buildingName);
        }
        if (extraAddress) {
          fullAddress += `(${extraAddress})`;
        }
      }

      setFormData(prev => ({ ...prev, schoolName: fullAddress }));
    }
  }).open();
};


  return (
    <S.Container>
      <S.TitleWrapper>
        <S.PageTitle>upcycle</S.PageTitle>
        <S.RegistrationLabel>registration</S.RegistrationLabel>
      </S.TitleWrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.ImageUploadWrapper>
          <S.ImageBox onClick={() => document.getElementById("file-input").click()}>
            {!formData.imagePreview && (
              <>
                <img src="/assets/images/display/add.png" alt="add-icon" />
                <span>첨부파일 업로드</span>
              </>
            )}
            {formData.imagePreview && <S.PreviewImage src={formData.imagePreview} alt="preview" />}
          </S.ImageBox>
          <input
            type="file"
            id="file-input"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <S.UploadDescription>(수거 신청한 폐기 작품 사진 업로드)</S.UploadDescription>
        </S.ImageUploadWrapper>

        <S.InputSection>
          <S.InputGroup>
            <S.Label>학교명 *</S.Label>
            <S.SchoolSearchRow>
              <S.Input name="schoolName" placeholder="학교명을 검색하세요." value={formData.schoolName} onChange={handleInputChange} required />
              <S.SearchButton type="button" onClick={handleAddressSearch}>주소 검색</S.SearchButton>
            </S.SchoolSearchRow>
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>상세주소 *</S.Label>
            <S.Input name="detailAddress" placeholder="상세주소를 입력하세요" value={formData.detailAddress} onChange={handleInputChange} required />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>이메일 *</S.Label>
            <S.Input name="email" type="email" placeholder="이메일을 입력하세요" value={formData.email} onChange={handleInputChange} required />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>연락처 *</S.Label>
            <S.Input name="phone" placeholder="연락처를 입력하세요" value={formData.phone} onChange={handleInputChange} required />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>수거 신청일 *</S.Label>
            <Flatpickr
              options={{ dateFormat: "Y-m-d", disableMobile: true }}
              value={formData.pickupDate}
              onChange={([date]) => setFormData({ ...formData, pickupDate: date })}
            />
          </S.InputGroup>
          <S.SizeSection>
            <S.Label>크기 분류 (작품 개수 선택) *</S.Label>
            <S.SizeInputGroup>
              <S.SizeInput>
                <S.Input name="smallCount" type="number" min="0" value={formData.smallCount} onChange={handleInputChange} />
                <span>소형</span>
              </S.SizeInput>
              <S.SizeInput>
                <S.Input name="mediumCount" type="number" min="0" value={formData.mediumCount} onChange={handleInputChange} />
                <span>중형</span>
              </S.SizeInput>
              <S.SizeInput>
                <S.Input name="largeCount" type="number" min="0" value={formData.largeCount} onChange={handleInputChange} />
                <span>대형</span>
              </S.SizeInput>
            </S.SizeInputGroup>
          </S.SizeSection>
          <S.MaterialSection>
            <S.Label>주된 재질 *</S.Label>
            <S.CheckboxGroup>
              {[
                { label: "캔버스 & 종이류", value: "canvas-paper" },
                { label: "목재", value: "wood" },
                { label: "금속", value: "metal" },
                { label: "플라스틱 & 아크릴", value: "plastic-acrylic" },
                { label: "기타", value: "other" },
              ].map((material) => (
                <label key={material.value}>
                  <input
                    type="checkbox"
                    name="material"
                    value={material.value}
                    checked={formData.materials.includes(material.value)}
                    onChange={handleCheckboxChange}
                  />
                  {material.label}
                </label>
              ))}
            </S.CheckboxGroup>
          </S.MaterialSection>

          <S.InputGroup>
            <S.Label>특이 사항</S.Label>
            <S.Textarea name="notes" value={formData.notes} onChange={handleInputChange} placeholder="예: 깨지기 쉬움, 분해 필요"></S.Textarea>
          </S.InputGroup>
          <S.ButtonGroup>
            <S.CancelButton type="button" onClick={() => window.history.back()}>취소</S.CancelButton>
            <S.SubmitButton type="submit">신청</S.SubmitButton>
          </S.ButtonGroup>
        </S.InputSection>
      </S.Form>
    </S.Container>
  );
};

export default UpcyclingRegistration;
