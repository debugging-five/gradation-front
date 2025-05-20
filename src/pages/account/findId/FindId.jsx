import { useState } from 'react';
import S from './style';
import { useForm } from 'react-hook-form';
import CheckedButton from '../../../components/button/CheckedButton';
import UncheckedButton from '../../../components/button/UncheckedButton';
import FindIdSuccessModal from './findIdModal/successModal/FindIdSuccessModal';
import SocialModal from './findIdModal/socialModal/SocialModal';
import NotFoundModal from './findIdModal/notFoundModal/NotFoundModal';

const FindId = () => {

  const { register, handleSubmit, formState: {isSubmitting, errors, isValid} } = useForm({mode: "onBlur"});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  const [userEmail, setUserEmail] = useState(""); 
  const [code, setCode] = useState("") 
  
  const [emailCheckMessage, setEmailCheckMessage] = useState("")
  const [isSendVerificationCode, setIsSendVerificationCode] = useState(false) // 인증번호 이메일 전송 성공 여부
  const [confirmVerificationCode, setConfirmVerificationCode] = useState(false) // 인증번호 검증 성공 여부
  const [verificationMessage, setVerificationMessage] = useState("") // 인증 완료 실패 메시지
  const [errorCount, setErrorCount] = useState(1); // 인증번호 실패 횟수
  const [isEmailButtonClicked, setIsEmailButtonClicked] = useState(false);
  
  const [foundId, setFoundId] = useState("")
  const [foundEmail, setFoundEmail] = useState("")

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);
  const [isNotFoundModalOpen, setIsNotFoundModalOpen] = useState(false);

  const isFindId = isValid && confirmVerificationCode === true;


// 이메일 존재 여부 확인 + 이메일 인증번호 전송
const getVerificationCodeEmail = async () => {
  if(!userEmail) {
    // alert("이메일을 입력하세요.")
    setVerificationMessage("필수 항목입니다.")
    return;
  }
    
  // 인증번호 발송
      fetch("http://localhost:10000/auth/sendEmail", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(userEmail)
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setEmailCheckMessage("");
        setIsSendVerificationCode(true)
        setIsEmailButtonClicked(true)
        setErrorCount(0);
        setConfirmVerificationCode(false);
      })
      .catch(console.error)
  }
  
  // 인증번호 검증
  const getIsVerificationCode = async () => {
    
    if(!code) {
      // alert("인증번호를 입력하세요.")
      setVerificationMessage("필수 항목입니다.")
      return;
    }
    
    // if(!isSendVerificationCode) {
      //   alert("이메일을 인증해주세요.")
      //   return;
      // }
      
      await fetch("http://localhost:10000/auth/verifyCode", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(code)
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if(!res.isFlag){
          const updateErrorCount = errorCount + 1;
          if(updateErrorCount >= 3) {
            setVerificationMessage(`인증코드 ${updateErrorCount}회 실패! \n다시 인증해주세요.`)
            // setIsSendVerificationCode(false)
            setErrorCount(0)
            setConfirmVerificationCode(false)
            setCode("")
            setIsEmailButtonClicked(false)
            return;
          }
          setErrorCount(updateErrorCount)
          setVerificationMessage(`인증코드가 일치하지 않습니다. (${updateErrorCount}회)`)
          return;
        }
        setConfirmVerificationCode(true);
        setVerificationMessage("인증이 완료되었습니다.")
      })
      .catch(console.error)
    }
    
    console.log("confirmVerificationCode", confirmVerificationCode)
    
    
    return (
      <div>
        <form autoComplete="off" onSubmit={handleSubmit(async (data) => {
        
          // 인증번호
          if(!confirmVerificationCode) {
            alert("인증번호 확인은 필수입니다.")
            return
          }
        
          const {
            userName,
            userEmail,
          } = data;
        
          const userVO = {
            userName : userName,
            userEmail : userEmail,
          }
        
          // 아이디 찾기
            await fetch("http://localhost:10000/users/api/find-id", {
              method: "POST",
              headers : {
                "Content-Type" : "application/json"
              },
              body : JSON.stringify(userVO)
            })
            .then((res) => {
              if(!res.ok) {
                return res.json().then((res) => {
                  console.log(res)
                  // alert(res.message)
                  setIsNotFoundModalOpen(true)
                  return;
                })
              }
              return res.json()
            })
            .then((res) => {
              console.log(res)
              // alert(res.message)
              if(res.foundIdentification) {
                setFoundId(res.foundIdentification)
                setFoundEmail(userEmail)
                setIsSuccessModalOpen(true)
              } else if (res.socialLogin === true) {
                setIsSocialModalOpen(true)
              } else {
                setIsNotFoundModalOpen(true)
              }
            })
            .catch(console.error)
        
            })}>
            <S.Container>
        <S.Wrapper>
          <S.H2>아이디 찾기</S.H2>
            <S.InputContainer>
              <S.BorderWrapper>
                <S.Border>
                  <S.InputWrapper>
                    <S.Label>
                      <S.H7>이름<span>*</span></S.H7>
                      <S.Input type='text' placeholder='이름을 입력하세요.'
                      {...register("userName", {
                        required : true,
                      })}
                      />
                    </S.Label>
                    <S.ButtonWrapper>
                    </S.ButtonWrapper>
                  </S.InputWrapper>
                </S.Border>
                {errors && errors?.userName?.type === "required" && (
                  <S.Warning>필수 항목입니다.</S.Warning>
                )}
                </S.BorderWrapper>
              <S.BorderWrapper>
                <S.Border>
                  <S.InputWrapper>
                    <S.Label>
                      <S.H7>이메일<span>*</span></S.H7>
                      <S.Input type='text' placeholder='이메일을 입력하세요.'
                      {...register("userEmail", {
                        required : true,
                        pattern : {
                          value : emailRegex
                        },
                        onChange : (e) => {
                          setUserEmail(e.target.value)
                          setConfirmVerificationCode(false)
                          setIsEmailButtonClicked(false)
                          // setIsSendVerificationCode(false)
                          setErrorCount(0)
                          setEmailCheckMessage("");
                          setVerificationMessage("")
                          setCode("")
                        }
                      })}
                    />
                    </S.Label>
                    <S.ButtonWrapper>
                      {isEmailButtonClicked ? (
                        <CheckedButton type="button" onClick={getVerificationCodeEmail}>이메일 재전송</CheckedButton>
                      ) : (
                        <UncheckedButton type="button"
                        disabled={errors && errors?.userEmail?.type === "pattern"}
                        onClick={getVerificationCodeEmail}>이메일 인증</UncheckedButton>
                      )}
                    </S.ButtonWrapper>
                  </S.InputWrapper>
                </S.Border>
                {errors && errors?.userEmail?.type === "required" && (
                  <S.Warning>필수 항목입니다.</S.Warning>
                )}
                {errors && errors?.userEmail?.type === "pattern" && (
                  <S.Error>이메일 양식에 맞게 입력해주세요.</S.Error>
                )}
                {emailCheckMessage && (
                  <S.Error>{emailCheckMessage}</S.Error>
                )}
                {isSendVerificationCode && !errors.userEmail && (
                  <S.Error>인증코드가 발송되었습니다.</S.Error>
                )}
              </S.BorderWrapper>
              <S.HiddenBorderWrapper $visible={isSendVerificationCode}>
                {isSendVerificationCode && (
                  <S.Border>
                    <S.InputWrapper>
                      <S.Label>
                        <S.H7>인증번호<span>*</span></S.H7>
                        <S.Input placeholder='인증번호를 입력하세요.'
                          onChange = {(e) => setCode(e.target.value)}
                          value={code}
                        />
                      </S.Label>
                      <S.ButtonWrapper>
                        {confirmVerificationCode ? (
                          <CheckedButton type="button">인증 완료</CheckedButton>
                        ): (
                          <UncheckedButton onClick={getIsVerificationCode} type="button">인증번호 확인</UncheckedButton>
                        )}
                      </S.ButtonWrapper>
                    </S.InputWrapper>
                  </S.Border>
                )}
                  {verificationMessage && (
                    verificationMessage === "필수 항목입니다." ? (
                      <S.Warning>{verificationMessage}</S.Warning>
                    ) : (
                      <S.Error>{verificationMessage}</S.Error>
                    )
                  )}
              </S.HiddenBorderWrapper>
            </S.InputContainer>
            <S.JoinButton $active={isFindId}>
              <S.H4 disabled={isSubmitting}>아이디 찾기</S.H4>
            </S.JoinButton>
              </S.Wrapper>
            </S.Container>
          </form>
          {isSuccessModalOpen && <FindIdSuccessModal userId={foundId} userEmail={foundEmail} />}
          {isSocialModalOpen && <SocialModal />}
          {isNotFoundModalOpen && <NotFoundModal />}
      </div>

  );
};

export default FindId;