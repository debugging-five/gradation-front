import React from 'react';
import { useForm } from 'react-hook-form';

const SocialJoin = ({email, provider}) => {

  const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <form onSubmit={handleSubmit(async (data) => {

      const {userName, userNickName} = data;

      const userVO = {
        userName : userName,
        userNickName : userNickName,
        userEmail : email,
        userProvider : provider
      }

      console.log("userVO", userVO)

      await fetch("http://localhost:10000/users/api/user/login", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(userVO)
      })
      .then((res) => {
        if(!res.ok) {
          return res.json().then((res) => {
            alert(`${res.message}${res.provider}`)
          })
        }
        return res.json()
      })
      .then((res) => {
        console.log(res)
      })
      .catch(console.error)

    })}>
      <label>
        <p>이름</p>
        <input type="text" placeholder='이름을 입력하세요.' 
          {...register("userName")}
        />
      </label>

      <label>
        <p>닉네임</p>
        <input type="text" placeholder='닉네임을 입력하세요.' 
          {...register("userNickName")}
        />
      </label>

      <button disabled={isSubmitting}>회원가입</button>
    </form>
  );
};

export default SocialJoin;