import React, { useState } from 'react';
import S from './style';
import UncheckButton from '../../../components/button/UncheckButton';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const NormalJoin = () => {

  const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
  const identificationRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/; // 조건 변경
  const phoneRegex = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;

  const navigate = useNavigate();

  const [agreement, setAgreement] = useState([false, false, false, false]);
  const isAllAgreed = agreement[0] && agreement[1] && agreement[2] && agreement[3]

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
  
  const [email, setEmail] = useState("");
  const [userIdentification, setUserIdentification] = useState("");
  
  // 아이디 중복 검사
  const checkId = async () => {
    console.log("userIdentification", userIdentification)
    
    if(!userIdentification) {
      alert("아이디를 입력하세요");
      return;
    }
    await fetch(`http://localhost:10000/users/api/check-id/${userIdentification}`, {
      method : "GET"
    })
    .then((res) => {
      if(!res.ok) {
        return res.json().then((res) => {
          alert(`${res.message}`)
        })
      }
      return res.json()
    })
    .then((res) => {
      console.log(res)
      alert(res.message)
    })
    .catch(console.error)
  }

  return (
    <form onSubmit={handleSubmit(async (data) => {
      const {
        userIdentification,
        userPassword,
        userName,
        userNickName,
        userPhone,
        userEmail
      } = data;

      const userVO = {
        userIdentification : userIdentification,
        userPassword : userPassword,
        userName : userName,
        userNickName : userNickName,
        userPhone : userPhone,
        userEmail : userEmail
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
            alert(`${res.message}`)
          })
        }
        return res.json()
      })
      // 성공한 res
      .then((res) => {
        console.log(res)
        alert(res.message)
        // 페이지 이동
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
                      // value : identificationRegex,
                    }
                  })}
                  onChange={(e) => setUserIdentification(e.target.value)}
                />
                {errors && errors?.userIdentification?.type === "required" && (
                  <p>필수 항목입니다.</p>
                )}
                {errors && errors?.userIdentification?.type === "pattern" && (
                  <p>아이디 양식에 맞게 입력해주세요.</p>
                )}
                </S.Label>
                <S.ButtonWrapper type="button" onClick={checkId}>
                  <UncheckButton>중복 체크</UncheckButton>
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
                      // value : passwordRegex,
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
                  <S.H5>닉네임<span>*</span></S.H5>
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
                      // value : phoneRegex,
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
                      // value : emailRegex,
                    }
                  })}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors && errors?.userEmail?.type === "required" && (
                  <p>필수 항목입니다.</p>
                )}
                {errors && errors?.userEmail?.type === "pattern" && (
                  <p>이메일 양식에 맞게 입력해주세요.</p>
                )}
                </S.Label>
                <S.ButtonWrapper>
                  <UncheckButton>
                    이메일 인증
                  </UncheckButton>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>인증번호<span>*</span></S.H5>
                  <S.Input type='text' placeholder='인증번호를 입력하세요.'/>
                </S.Label>
                <S.ButtonWrapper>
                  <UncheckButton>인증번호 확인</UncheckButton>
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

          <S.JoinButton disabled={isSubmitting}>
            <S.H4 disabled={isSubmitting}>회원가입</S.H4>
          </S.JoinButton>
      </S.Wrapper>
    </S.Container>
    </form>

  );
};

export default NormalJoin;