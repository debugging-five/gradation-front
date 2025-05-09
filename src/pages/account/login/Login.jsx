import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

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
              alert(res.message)
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

      <label>
        <p>아이디</p>
        <input type="text" placeholder='아이디를 입력하세요.' 
          {...register("userIdentification", {
            required : true,
            // pattern : {
            //   value : emailRegex,
            // }
          })}
        />
        {errors && errors?.userIdentification?.type === "required" && (
          <p>아이디를 입력하세요</p>
        )}
        {errors && errors?.userIdentification?.type === "pattern" && (
          <p>아이디 양식에 맞게 입력해주세요.</p>
        )}
      </label>

      {/* 비밀번호 로직 */}
      <label>
        <p>비밀번호</p>
        <input type="password" placeholder='비밀번호를 입력하세요.' 
          {...register("userPassword", {
            required : true,
            // pattern : {
            //   value : passwordRegex,
            // }
          })}
        />
        {errors && errors?.userPassword?.type === "required" && (
          <p>비밀번호를 입력하세요</p>
        )}
        {errors && errors?.userPassword?.type === "pattern" && (
          <p>소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.</p>
        )}
      </label>

      <button disabled={isSubmitting}>로그인</button>
      <div>
        <button onClick={navigateGoogleAuth}>구글 로그인</button>
        <button onClick={navigateKaKaoAuth}>카카오 로그인</button>
        <button onClick={navigateNaverAuth}>네이버 로그인</button>
      </div>
    </form>
  );
};

export default Login;