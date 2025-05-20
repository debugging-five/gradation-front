import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import S from './style';
import { useState } from 'react';
import NewPasswordSuccessModal from './newPasswordModal/NewPasswordSuccessModal';

const NewPassword = () => {

  const { register, handleSubmit, getValues, trigger, formState: {isSubmitting, errors, isValid}} = useForm({mode:"onChange"});
  const location = useLocation();
  const userIdentification = location.state?.userIdentification
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#])[a-zA-Z\d!@#]{8,12}$/;
  const[passwordType, setPasswordType] = useState({type : 'password', visible : false});
  const[passwordConfirmType, setPasswordConfirmType] = useState({type : 'password', visible : false});

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handlePasswordType = (e) => {
    setPasswordType(() => {
      if(!passwordType.visible) {
        return {type : 'text', visible : true};
      }
      return {type : 'password', visible : false}
    })
  }
  
  // console.log("userIdentification", userIdentification); 

  const handlePasswordConfirmType = (e) => {
      setPasswordConfirmType(() => {
        if(!passwordConfirmType.visible) {
          return {type : 'text', visible : true};
        }
        return {type : 'password', visible : false}
      })
    }
  

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit(async (data) => {
        const {userPassword} = data;
        const userVO = {
          userIdentification : userIdentification,
          userPassword : userPassword
        }
        console.log("userIdentification", userIdentification);
        console.log("userPassword", userPassword)
        console.log("userVO", userVO)
        await fetch("http://localhost:10000/users/api/modify-password", {
          method : "PUT",
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
              return res;
            })
          }
          return res.json()
        })
        .then((res) => {
          // console.log(res)
          if(res.status === "success") {
            setIsSuccessModalOpen(true)
          } else if(res.status === "fail") {
            alert(res.message)
          } 
        })
        .catch(console.error)
      })}>
      <S.Container>
        <S.Wrapper>
          <S.UserIcon src={'/assets/images/icon/user.png'}/>
          <S.Info>
            <S.H3>인증되었습니다.</S.H3>
            <S.H3>새로운 비밀번호를 설정해 주세요.</S.H3>
          </S.Info>
            <S.InputContainer>
                <S.BorderWrapper>
                  <S.Border>
                    <S.InputWrapper>
                      <S.Label>
                        <S.H7>새 비밀번호<span>*</span></S.H7>
                        <S.Input type={passwordType.type} placeholder='8~12자 영문, 숫자, 특수문자'
                        {...register("userPassword", {
                          required : true,
                          pattern : {
                            value : passwordRegex,
                          },
                          onChange : (e) => {
                            const confirm = getValues("passwordConfirm");
                            if (confirm) trigger("passwordConfirm");
                          }
                        })}
                      />
                      </S.Label>
                      <S.Icon onClick={handlePasswordType}
                        src={passwordType.visible ? "/assets/images/icon/open-eye.png" : "assets/images/icon/close-eye.png"}/>
                    </S.InputWrapper>
                  </S.Border>
                {errors && errors?.userPassword?.type === "required" && (
                  <S.Warning>필수 항목입니다.</S.Warning>
                )}
                {errors && errors?.userPassword?.type === "pattern" && (
                  <S.Error>소문자, 숫자, 특수문자를 각 하나 포함한 8~12자여야 합니다.</S.Error>
                )}
                </S.BorderWrapper>
                <S.BorderWrapper>
                  <S.Border>
                    <S.InputWrapper>
                      <S.Label>
                        <S.H7>새 비밀번호 확인<span>*</span></S.H7>
                        <S.Input type={passwordConfirmType.type} placeholder='8~12자 영문, 숫자, 특수문자'
                        {...register("passwordConfirm", {
                          // required : true,
                          pattern : {
                            value : passwordRegex,
                            message: "8~12자 영문, 숫자, 특수문자 조합으로 입력하세요."
                          },
                          validate : {
                            matchPassword : (passwordConfirm) => {
                              const userPassword = getValues("userPassword");
                              if(!passwordConfirm) {
                                return "필수 항목입니다.";
                              }
                              if(!userPassword) {
                                return true;
                              }
                              if(passwordConfirm !== userPassword) {
                                return "비밀번호가 일치하지 않습니다."
                              }
                              return true;
                            }
                          }
                        })}
                      />
                      </S.Label>
                      <S.Icon onClick={handlePasswordConfirmType}
                        src={passwordConfirmType.visible ? "/assets/images/icon/open-eye.png" : "assets/images/icon/close-eye.png"}/>
                    </S.InputWrapper>
                  </S.Border>
                  {errors && errors?.passwordConfirm?.message === "필수 항목입니다." && (
                    <S.Warning>필수 항목입니다.</S.Warning>
                  )}
                  {errors && errors?.passwordConfirm?.message === "8~12자 영문, 숫자, 특수문자 조합으로 입력하세요." && (
                    <S.Error>8~12자 영문, 숫자, 특수문자 조합으로 입력하세요.</S.Error>
                  )}
                  {errors && errors?.passwordConfirm?.message === "비밀번호가 일치하지 않습니다." && (
                    <S.Error>비밀번호가 일치하지 않습니다.</S.Error>
                  )}
                </S.BorderWrapper>
            </S.InputContainer>
          <S.JoinButton $active={isValid}>
            <S.H4 disabled={isSubmitting}>새 비밀번호 설정</S.H4>
          </S.JoinButton>
        </S.Wrapper>
      </S.Container>
      </form>
      {isSuccessModalOpen && <NewPasswordSuccessModal />}
    </div>
  );
};

export default NewPassword;