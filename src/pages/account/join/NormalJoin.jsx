import { useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CheckedButton from '../../../components/button/CheckedButton';
import UncheckedButton from '../../../components/button/UncheckedButton';

const NormalJoin = () => {

  const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
  const navigate = useNavigate();

  const identificationRegex =  /^[a-zA-Z0-9]{6,20}$/; 
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#])[a-zA-Z\d!@#]{8,12}$/;
  const phoneRegex = /^01[016789][0-9]{7,8}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [agreement, setAgreement] = useState([false, false, false, false]);
  const isAllAgreed = agreement[0] && agreement[1] && agreement[2] && agreement[3] // 전체동의
  const isAllRequiredAgreed = agreement[0] && agreement[1] && agreement[2] // 필수동의 3개
  
  const [userIdentification, setUserIdentification] = useState(""); 
  const [userEmail, setUserEmail] = useState(""); 
  const [code, setCode] = useState("") 

  const [idCheckMessage, setIdCheckMessage] = useState("") // 아이디 중복 체크 결과 메시지
  const [isIdAvailable, setIsIdAvailable] = useState(null) // 아이디 사용 가능 여부
  const [emailCheckMessage, setEmailCheckMessage] = useState("")
  const [isSendVerificationCode, setIsSendVerificationCode] = useState(false) // 인증번호 이메일 전송 성공 여부
  const [confirmVerificationCode, setConfirmVerificationCode] = useState(false) // 인증번호 검증 성공 여부
  const [verificationMessage, setVerificationMessage] = useState("") // 인증 완료 실패 메시지
  const [errorCount, setErrorCount] = useState(1); // 인증번호 실패 횟수

  // 전체 동의
  const agreementAll = () => {
    const shouldCheckAll = !isAllAgreed;
    setAgreement([shouldCheckAll, shouldCheckAll, shouldCheckAll, shouldCheckAll])
  }

  // 개별 동의
  const agreementOne = (i) => {
    const newAgreement = [...agreement];
    newAgreement[i] = !newAgreement[i];
    setAgreement(newAgreement)
  }

  const agreementList = [
    '만 14세 이상입니다.',
    '[필수] 서비스 약관 동의',
    '[필수] 개인정보 수집 및 이용 동의',
    '[선택] 개인정보 수집 및 이용 동의',
  ];
  
  
  // 아이디 중복 검사
  const checkId = async () => {
    console.log("userIdentification", userIdentification)

    if(!userIdentification) {
      alert("아이디를 입력하세요.")
    }
  
    await fetch(`http://localhost:10000/users/api/check-id/${userIdentification}`, {
      method : "GET"
    })
    .then((res) => {
      if(!res.ok) {
        return res.json().then((res) => {
          setIdCheckMessage(res.message)
          setIsIdAvailable(false)
        })
      }
      return res.json()
    })
    .then((res) => {
      console.log(res)
      setIdCheckMessage(res.message)
      setIsIdAvailable(true)
    })
    .catch(console.error)
  }

  // 이메일 중복 체크 + 이메일 인증번호 전송
  const getVerificationCodeEmail = async () => {
    if(!userEmail) {
      alert("이메일을 입력하세요.")
      return;
    }

    // 이메일 중복 체크
    await fetch(`http://localhost:10000/users/api/check-email/${userEmail}`, {
      method : "GET"
    })
    .then((res) => {
      if(!res.ok) {
        res.json().then((res) => {
          setEmailCheckMessage(res.message)
        })
      }
      return res.json();
    })
    .then(() => {
      setEmailCheckMessage("");
      setIsSendVerificationCode(true)
      setErrorCount(0);
      setConfirmVerificationCode(false);

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
        })
        .catch(console.error)
      })
    
    .catch(console.error)
  }

  // 인증번호 검증
  const getIsVerificationCode = async () => {

    if(!code) {
      alert("인증번호를 입력하세요.")
    }

    if(!isSendVerificationCode) {
      alert("이메일을 인증해주세요.")
      return;
    }

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
            setIsSendVerificationCode(false)
            setErrorCount(0)
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
    <form onSubmit={handleSubmit(async (data) => {

      // 아이디 중복 체크
      if(!isIdAvailable) {
        alert("아이디 중복 체크 필수입니다.")
        return;
      }

      // 인증번호
      if(!confirmVerificationCode) {
        alert("인증번호 확인은 필수입니다.")
        return
      }

      // 필수약관동의
      if(!isAllRequiredAgreed) {
        alert("필수 약관에 동의해주세요.")
        return
      }

      const {
        userIdentification,
        userPassword,
        userName,
        userNickName,
        userPhone,
        userEmail,
      } = data;

      const userVO = {
        userIdentification : userIdentification,
        userPassword : userPassword,
        userName : userName,
        userNickName : userNickName,
        userPhone : userPhone,
        userEmail : userEmail,
      }

      await fetch("http://localhost:10000/users/api/join/normal", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(userVO)
      })
      .then((res) => {
        if(!res.ok) {
          return res.json().then((res) => {
            console.log(res)
            // alert(`${res.message}`)
          })
        }
        return res.json()
      })
      .then((res) => {
        console.log(res)
        alert(res.message)
        navigate("/login")
      })
      .catch(console.error)

    })}>
    <S.Container>
      <S.Wrapper>
        <S.H2>회원가입</S.H2>
          <S.InputContainer>
            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>아이디<span>*</span></S.H5>
                  <S.Input type='text' placeholder='6~20자 영문, 숫자 조합으로 입력하세요.'
                  
                  {...register("userIdentification", {
                    required : true,
                    pattern : {
                    value : identificationRegex,
                    }
                  })}
                   onChange={(e) => { 
                  setUserIdentification(e.target.value)
                  setIsIdAvailable(null);
                  setIdCheckMessage("")
                }}
                />
                {errors && errors?.userIdentification?.type === "required" && (
                  <p>필수 항목입니다.</p>
                )}
                {errors && errors?.userIdentification?.type === "pattern" && (
                  <p>아이디 양식에 맞게 입력해주세요.</p>
                )}

                {idCheckMessage && (
                  <p>{idCheckMessage}</p>
                )}
                </S.Label>
                <S.ButtonWrapper>
                  {isIdAvailable ? (
                    <CheckedButton type="button">중복 체크 완료</CheckedButton>
                  ) : (
                    <UncheckedButton type="button" onClick={checkId}>중복 체크</UncheckedButton>
                  )}
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>
          
            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>비밀번호<span>*</span></S.H5>
                  <S.Input type='text' placeholder='8~12자 영문, 숫자, 특수문자 조합으로 입력하세요.'
                  {...register("userPassword", {
                    required : true,
                    pattern : {
                    value : passwordRegex,
                    }
                  })}
                />
                {errors && errors?.userPassword?.type === "required" && (
                  <p>필수 항목입니다.</p>
                )}
                {errors && errors?.userPassword?.type === "pattern" && (
                  <p>소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.</p>
                )}
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>비밀번호 확인<span>*</span></S.H5>
                  <S.Input type='text' placeholder='8~12자 영문, 숫자, 특수문자 조합으로 입력하세요.'
                  {...register("passwordConfirm", {
                    required : true,
                    validate : {
                      matchPassword : (passwordConfirm) => {
                        const { userPassword } = getValues();
                        console.log(userPassword, passwordConfirm, userPassword === passwordConfirm );
                        return userPassword === passwordConfirm;
                      }
                    }
                  })}
                />
                {errors && errors?.passwordConfirm && (
                  <p>비밀번호가 일치하지 않습니다.</p>
                )}
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>이름<span>*</span></S.H5>
                  <S.Input type='text' placeholder='이름을 입력하세요.'
                  {...register("userName")}
                  />
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>닉네임</S.H5>
                  <S.Input type='text' placeholder='닉네임을 입력하세요.'
                  {...register("userNickName")}
                  />
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>휴대폰<span>*</span></S.H5>
                  <S.Input type='text' placeholder='휴대폰 번호를 입력하세요.'
                  {...register("userPhone", {
                    required : true,
                    pattern : {
                    value : phoneRegex,
                    }
                  })}
                />
                {errors && errors?.userPhone?.type === "required" && (
                  <p>필수 항목입니다.</p>
                )}
                {errors && errors?.userPhone?.type === "pattern" && (
                  <p>휴대폰 번호 양식에 맞게 입력해주세요.</p>
                )}
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>이메일<span>*</span></S.H5>
                  <S.Input type='text' placeholder='이메일을 입력하세요.' 
                  {...register("userEmail", {
                    required : true,
                    pattern : {
                    value : emailRegex,
                    }
                  })}
                  onChange={(e) => { 
                  setUserEmail(e.target.value)
                  setConfirmVerificationCode(false)
                  setIsSendVerificationCode(false)
                  setErrorCount(0)
                  setEmailCheckMessage("");
                  setVerificationMessage("")
                }}
                />
                {errors && errors?.userEmail?.type === "required" && (
                  <p>필수 항목입니다.</p>
                )}
                {errors && errors?.userEmail?.type === "pattern" && (
                  <p>이메일 양식에 맞게 입력해주세요.</p>
                )}
                {emailCheckMessage && (
                  <p>{emailCheckMessage}</p>
                )}
                {isSendVerificationCode && !errors.userEmail && (
                  <p>인증코드가 발송되었습니다.</p>
                )}
                </S.Label>
                <S.ButtonWrapper>
                  {isSendVerificationCode ? (
                    <CheckedButton type="button" onClick={getVerificationCodeEmail}>이메일 재전송</CheckedButton>
                  ) : (
                    <UncheckedButton type="button" onClick={getVerificationCodeEmail}>이메일 인증</UncheckedButton>
                  )}
                </S.ButtonWrapper> 
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>인증번호<span>*</span></S.H5>
                  <S.Input placeholder='인증번호를 입력하세요.' 
                    {...register("code", {
                    required : true
                  })}
                  onChange={(e) => setCode(e.target.value)}
                  />
                  {errors && errors?.code?.type === "required" && (
                    <p>필수 항목입니다.</p>
                  )}

                  {verificationMessage && (
                    <p>{verificationMessage}</p>
                  )}
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
          </S.InputContainer>

          {/* 전체 동의 */}
          <S.CheckboxContainer>
            <S.CheckboxWrapper onClick={agreementAll}>
              <S.Checkbox src={isAllAgreed ? '/assets/images/join/checked-on.png' : '/assets/images/join/checked-off.png'} />
              <S.Terms checked={isAllAgreed}>필수 및 선택 항목을 모두 포함하여 동의합니다.</S.Terms>
            </S.CheckboxWrapper>

            {/* 개별 동의 */}
            {agreementList.map((terms, i) => (
              <S.CheckboxWrapper key={i} className="detail" onClick={() => agreementOne(i)}>
                <S.Checkbox src={agreement[i] ? '/assets/images/join/checked-on.png' : '/assets/images/join/checked-off.png'} />
                <S.Terms checked={agreement[i]}>{terms}</S.Terms>
              </S.CheckboxWrapper>
            ))}
          </S.CheckboxContainer>

          <S.JoinButton>
            <S.H4 disabled={isSubmitting}>회원가입</S.H4>
          </S.JoinButton>
      </S.Wrapper>
    </S.Container>
    </form>

  );
};

export default NormalJoin;