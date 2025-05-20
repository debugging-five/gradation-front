import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import S from './style';
import { useCookies } from 'react-cookie';

const Login = () => {

  const { register, handleSubmit, formState: {isSubmitting, errors, isValid}} = useForm({mode : "onBlur"});
  
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"])
  const [isRemember, setIsRemember] = useState(false);

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

  useEffect(() => {
    if(cookies.rememberUserId !== undefined) {
      setUserId(cookies.rememberUserId);
      setIsRemember(true)
    }
  }, [])

  return (
    <form autoComplete="off" onSubmit={handleSubmit(async (data) => {
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
            if(isRemember) {
            setCookie("rememberUserId", userId, {
              path: "/",
              maxAge: 60 * 60 * 24 * 7
            })
          }else {
            removeCookie("rememberUserId")
          }
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
                    <S.Input type="text" placeholder='아이디' value={userId}
                      {...register("userIdentification", {
                        required : true,
                        onChange : (e) => {
                          setLoginMessage("")
                          setUserId(e.target.value)
                        }
                      })}
                    />
                  </S.Label>
                </S.InputWrapper>
              </S.Border>
              {errors && errors?.userIdentification?.type === "required" && (
                <S.Warning>필수 항목입니다.</S.Warning>
              )}
            </S.BorderWrapper>

            <S.PasswordBorderWrapper>
              <S.Border>
                <S.InputWrapper>
                  <S.Label>
                    <S.IconWrapper>
                      <S.Icon src={'/assets/images/icon/lock.png'} />
                    </S.IconWrapper>
                      <S.Input type={passwordType.type} placeholder='비밀번호' 
                        {...register("userPassword", {
                          required : true,
                          onChange : () => {
                            setLoginMessage("")
                          }
                        })}
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
            </S.PasswordBorderWrapper>
          </S.InputContainer>

          <S.CheckboxWrapper>
            <S.Login>
              <S.Checkbox src={'/assets/images/join/checked-off.png' }/>
                <S.H8>로그인 상태 유지</S.H8>
            </S.Login>
            <S.Id onClick = {() => {
              const remove = !isRemember;
              setIsRemember(remove)
              if(!remove) {
                removeCookie("rememberUserId")
              }
            }}>
              <S.Checkbox   
              src={ isRemember ? "/assets/images/join/checked-on.png" : "/assets/images/join/checked-off.png" }/>
              <S.H8>아이디 저장</S.H8>
            </S.Id>
          </S.CheckboxWrapper> 

          <S.LoginButton $active={isValid}>
            <S.H4 disabled={isSubmitting}>로그인</S.H4>
          </S.LoginButton>

          <S.Service>
            <S.Link to={"/find-id"}>
              <S.H8 className="service">아이디 찾기</S.H8>
            </S.Link>
            <S.Line>|</S.Line>
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