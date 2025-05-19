import React, { useState } from "react";
import * as S from "./style";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpcyclingRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolName: "",
    detailAddress: "",
    email: "",
    phone: "",
    pickupDate: "",
    smallCount: "",
    mediumCount: "",
    largeCount: "",
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

  // 커런트 유저 받아오기
  const currentUser = useSelector((state) => state.user.currentUser);

  // 팝업이랑 알럿
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

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
  
  // 주소 찾기
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

    if (!formData.schoolName) {
      setAlertMessage("학교명을 입력해주세요.");
      return;
    }
    if (!formData.detailAddress) {
      setAlertMessage("상세주소를 입력해주세요.");
      return;
    }
    if (!formData.email) {
      setAlertMessage("이메일을 입력해주세요.");
      return;
    }
    if (!formData.phone) {
      setAlertMessage("연락처를 입력해주세요.");
      return;
    }
    if (!formData.pickupDate) {
      setAlertMessage("수거 신청일을 선택해주세요.");
      return;
    }

    const totalCount =
      Number(formData.smallCount) + Number(formData.mediumCount) + Number(formData.largeCount);
    if (totalCount === 0) {
      setAlertMessage("작품 개수를 입력해주세요.");
      return;
    }

    if (formData.materials.length === 0) {
      setAlertMessage("주된 재질을 선택해주세요.");
      return;
    }

    // 모든 필드 유효할 때만 팝업 띄우기
    setShowConfirmPopup(true);
  };

  const handleRegisterSubmit = async () => {
  setShowConfirmPopup(false);

  const { image, imagePreview, ...rest } = formData;

  const upcyclingData = {
    upcyclingAddress: formData.schoolName,
    upcyclingDetailAddress: formData.detailAddress,
    upcyclingEmail: formData.email,
    upcyclingPhone: formData.phone,
    upcyclingDate: formData.pickupDate,
    upcyclingSizeSmall: parseInt(formData.smallCount || 0),
    upcyclingSizeMedium: parseInt(formData.mediumCount || 0),
    upcyclingSizeLarge: parseInt(formData.largeCount || 0),
    upcyclingMaterials: formData.materials.join(","),
    upcyclingSignificant: formData.notes,
    userId: currentUser?.id || null,
  };

  const payload = new FormData();
  payload.append("info", new Blob([JSON.stringify(upcyclingData)], { type: "application/json" }));
  if (image) {
    payload.append("file", image);
  }

  try {
    const res = await fetch("http://localhost:10000/upcycling/api/register", {
      method: "POST",
      body: payload,
    });

    if (!res.ok) throw new Error("등록 실패");

    const result = await res.json();
    console.log("등록 성공:", result);
    setShowSuccessPopup(true);
  } catch (error) {
    console.error("업사이클링 등록 에러:", error);
    alert("신청 중 오류가 발생했습니다.");
  }
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
                <S.UploadIcon  src="http://localhost:10000/files/api/get/add.png?filePath=images/icons" alt="add-icon" />
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
            <S.InfoRow>
              <S.Label>
                학교명<S.Required>*</S.Required>
              </S.Label>
              <S.SchoolSearchRow>
                <S.Input
                  name="schoolName"
                  placeholder="학교명을 검색하세요."
                  value={formData.schoolName}
                  onChange={handleInputChange}
                />
                <S.SearchButton type="button" onClick={handleAddressSearch}>
                  주소 검색
                </S.SearchButton>
              </S.SchoolSearchRow>
            </S.InfoRow>
          </S.InputGroup>

          <S.InputGroup>
            <S.InfoRow>
              <S.Label>
                상세주소<S.Required>*</S.Required>
              </S.Label>
              <S.Input
                name="detailAddress"
                placeholder="상세주소를 입력하세요"
                value={formData.detailAddress}
                onChange={handleInputChange}
              />
            </S.InfoRow>
          </S.InputGroup>

          <S.InputGroup>
            <S.InfoRow>
              <S.Label>
                이메일<S.Required>*</S.Required>
              </S.Label>
              <S.Input
                name="email"
                type="email"
                placeholder="이메일을 입력하세요"
                value={formData.email}
                onChange={handleInputChange}
              />
            </S.InfoRow>
          </S.InputGroup>

          <S.InputGroup>
            <S.InfoRow>
              <S.Label>
                연락처<S.Required>*</S.Required>
              </S.Label>
              <S.Input
                name="phone"
                placeholder="연락처를 입력하세요"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </S.InfoRow>
          </S.InputGroup>

          <S.InputGroupRow>
            <S.Label>
              수거 신청일 <S.Required>*</S.Required>
            </S.Label>
            <S.DateWrapper>
              {/* 달력 여기 있습니다! */}
              <Flatpickr
                options={{ dateFormat: "Y-m-d", disableMobile: true, minDate: "today", }}
                value={formData.pickupDate}
                onChange={([date]) => setFormData({ ...formData, pickupDate: date })}
                render={({ value, ...props }, ref) => (
                  <S.CalendarInput {...props} ref={ref}>
                    <S.CalendarIcon src="http://localhost:10000/files/api/get/calendar.png?filePath=images/icons" alt="calendar-icon" />
                    <span>{formData.pickupDate ? formData.pickupDate.toLocaleDateString('ko-KR') : '날짜를 선택해주세요.'}</span>
                  </S.CalendarInput>
                )}
              />
            </S.DateWrapper>
          </S.InputGroupRow>

          <S.SizeSection>
            <S.InputSizeGroupRow>
              <S.Label>
                크기 분류(작품 개수 선택) <S.Required>*</S.Required>
              </S.Label>
            </S.InputSizeGroupRow>
            <S.SizeInputGroup>
              <S.SizeRow>
                <span>소형(50cm 이하)</span>
                <S.InputWrapper>
                  <S.Input name="smallCount" type="number" min="0" value={formData.smallCount} onChange={handleInputChange} />
                  <span>개</span>
                </S.InputWrapper>
              </S.SizeRow>
              <S.SizeRow>
                <span>중형(50cm ~ 100cm)</span>
                <S.InputWrapper>
                  <S.Input name="mediumCount" type="number" min="0" value={formData.mediumCount} onChange={handleInputChange} />
                  <span>개</span>
                </S.InputWrapper>
              </S.SizeRow>
              <S.SizeRow>
                <span>대형(100cm 이상)</span>
                <S.InputWrapper>
                  <S.Input name="largeCount" type="number" min="0" value={formData.largeCount} onChange={handleInputChange} />
                  <span>개</span>
                </S.InputWrapper>
              </S.SizeRow>
            </S.SizeInputGroup>
          </S.SizeSection>

          <S.MaterialSection>
            <S.Label>주된 재질 <S.Required>*</S.Required></S.Label>
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

    {alertMessage && (
      <S.PopupOverlay>
        <S.PopupBox>
          <S.PopupIcon as="img" src="http://localhost:10000/files/api/get/attention.png?filePath=images/icons" alt="attention-icon" />
          <S.PopupMessage>{alertMessage}</S.PopupMessage>
          <S.PopupButtonGroup>
            <S.PopupButton className="confirm" onClick={() => setAlertMessage("")}>확인</S.PopupButton>
          </S.PopupButtonGroup>
        </S.PopupBox>
      </S.PopupOverlay>
    )}
    {showConfirmPopup && (
      <S.PopupOverlay>
        <S.PopupBox>
          <S.PopupIcon as="img" src="http://localhost:10000/files/api/get/question.png?filePath=images/icons" alt="question-icon" />
          <S.PopupMessage>신청하시겠습니까?</S.PopupMessage>
          <S.PopupButtonGroup>
            <S.PopupButton className="cancel" onClick={() => setShowConfirmPopup(false)}>취소</S.PopupButton>
            <S.PopupButton className="confirm" onClick={() => {
              setShowConfirmPopup(false);
              setShowSuccessPopup(true);
            }}>확인</S.PopupButton>
          </S.PopupButtonGroup>
        </S.PopupBox>
      </S.PopupOverlay>
    )}
    {showSuccessPopup && (
      <S.PopupOverlay>
        <S.PopupBox>
          <S.PopupIcon as="img" src="http://localhost:10000/files/api/get/ok.png?filePath=images/icons" alt="ok-icon" />
          <S.PopupMessage>신청이 완료되었습니다!</S.PopupMessage>
          <S.PopupButtonGroup>
            <S.PopupButton
              className="confirm"
              onClick={async () => {
                await handleRegisterSubmit();
                navigate("/upcycling");
              }}
            >
              확인
            </S.PopupButton>


          </S.PopupButtonGroup>
        </S.PopupBox>
      </S.PopupOverlay>
    )}
    </S.Container>
  );
};

export default UpcyclingRegistration;
