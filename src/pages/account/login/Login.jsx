import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import S from './style';

const Login = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, trigger, formState: {isSubmitting, errors, isValid}} = useForm({mode: "onChange", reValidateMode: "onBlur"});

  const [loginMessage, setLoginMessage] = useState("")
  const[passwordType, setPasswordType] = useState({type : 'password', visible : false});
  const handlePasswordType = (e) => {
    setPasswordType(() => {
      if(!passwordType.visible) {
        return {type : 'text', visible : true};
      }
      return {type : 'password', visible : false}
    })
  }

  const navigateGoogleAuth = () => {
    window.location.href = "http://localhost:10000/oauth2/authorization/google"
  }
  const navigateKaKaoAuth = () => {
    window.location.href = "http://localhost:10000/oauth2/authorization/kakao"
  }
  const navigateNaverAuth = () => {
    window.location.href = "http://localhost:10000/oauth2/authorization/naver"
  }

  return (
    <form onSubmit={handleSubmit(async (data) => {
      const {userIdentification, userPassword} = data;
      const userVO = {
        userIdentification : userIdentification,
        userPassword : userPassword
      }

      await fetch("http://localhost:10000/users/api/login", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        }, body : JSON.stringify(userVO)
      })
        .then((res) => {
          if(!res.ok){
            return res.json().then((res) => {
              // alert(res.message)
              setLoginMessage(res.message)
            })
          }
          return res.json()
        })
        .then((res) => {
          console.log(res) 
          if(res && res.jwtToken){
            const { jwtToken } = res
            navigate("/?jwtToken=" + res.jwtToken)
          }
        })
        .catch(console.error)

    })}>
      <S.Container>
        <S.Wrapper>
          <S.H2>로그인</S.H2>
          <S.InputContainer>
            <S.BorderWrapper>
              <S.Border>
                <S.InputWrapper>
                  <S.Label>
                    <S.IconWrapper>
                      <S.Icon src={'/assets/images/icon/user.png'} />
                    </S.IconWrapper>
                    <S.Input type="text" placeholder='아이디' 
                      {...register("userIdentification", {
                        required : true,
                        onChange : (e) => {
                          setLoginMessage("")
                        }
                      })}
                      onBlur={() => trigger("userIdentification")}
                    />
                  </S.Label>
                </S.InputWrapper>
              </S.Border>
              {errors && errors?.userIdentification?.type === "required" && (
                <S.Warning>필수 항목입니다.</S.Warning>
              )}
            </S.BorderWrapper>

            <S.BorderWrapper>
              <S.Border>
                <S.InputWrapper>
                  <S.Label>
                    <S.IconWrapper>
                      <S.Icon src={'/assets/images/icon/lock.png'} />
                    </S.IconWrapper>
                      <S.Input type={passwordType.type} placeholder='비밀번호' 
                        {...register("userPassword", {
                          required : true,
                          onChange : (e) => {
                            setLoginMessage("")
                          }
                        })}
                        onBlur={() => trigger("userPassword")}
                      />
                  </S.Label>
                   <S.PasswordIcon onClick={handlePasswordType}
                      src={passwordType.visible ? "/assets/images/icon/open-eye.png" : "assets/images/icon/close-eye.png"}/>
                </S.InputWrapper>
              </S.Border>
              {errors && errors?.userPassword?.type === "required" && (
                <S.Warning>필수 항목입니다.</S.Warning>
              )}
              {loginMessage && (
                <S.Error>{loginMessage}</S.Error>
              )}
            </S.BorderWrapper>
          </S.InputContainer>

          {/* <S.CheckboxWrapper>
              <S.Checkbox>로그인 상태 유지</S.Checkbox>
              <S.Checkbox>아이디 저장</S.Checkbox>
          </S.CheckboxWrapper> */}

          <S.LoginButton $active={isValid}>
            <S.H4 disabled={isSubmitting}>로그인</S.H4>
          </S.LoginButton>

          <S.Service>
            {/* <S.Link to={"/find-id"}>
              <S.H8 className="service">아이디 찾기<span className='span'>|</span></S.H8>
            </S.Link> */}
            <S.Link to={"/find-id"}>
              <S.H8 className="service">아이디 찾기</S.H8>
            </S.Link>
            <S.Line>|</S.Line>
            {/* <S.Link to={"/find-password"}>
              <S.H8 className="service">비밀번호 찾기<span className='span'>|</span></S.H8>
            </S.Link> */}
            <S.Link to={"/find-password"}>
              <S.H8 className="service">비밀번호 찾기</S.H8>
            </S.Link>
            <S.Line>|</S.Line>
            <S.Link to={"/join"}>
              <S.H8 className="service">회원가입</S.H8>
            </S.Link>
          </S.Service>


          <S.SocialContainer>
            <S.SocialWrapper>
              <S.H8>또는 다른 서비스 계정으로 로그인</S.H8>
            </S.SocialWrapper>

            <S.SocialButton>
              <S.Google onClick={navigateGoogleAuth} src={'/assets/images/icon/google.png'} />
              <S.Kakao onClick={navigateKaKaoAuth} src={'/assets/images/icon/kakao.png'} />
              <S.Naver onClick={navigateNaverAuth} src={'/assets/images/icon/naver.png'} />
            </S.SocialButton>
          </S.SocialContainer>
          </S.Wrapper>
      </S.Container>
    </form>
  );
};

export default Login;