import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import S from './style';


const SocialJoin = ({email, provider}) => {

  const { register, handleSubmit, formState: {isSubmitting, errors, isValid}} = useForm({mode:"onChange"});
  const navigate = useNavigate();

  return (
    <form autoComplete="off" onSubmit={handleSubmit(async (data) => {

      const {userName, userNickName} = data;

      const userVO = {
        userName : userName,
        userNickName : userNickName,
        userEmail : email,
        userProvider : provider
      }

      console.log("userVO", userVO)

      await fetch("http://localhost:10000/users/api/join/social", {
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
        // console.log(res)
        alert(res.message)
        navigate("/")
      })
      .catch(console.error)

    })}>
    <S.Container>
      <S.Wrapper>
        <S.H2>소셜 회원가입</S.H2>
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
                    <S.H7>닉네임</S.H7>
                    <S.Input type='text' placeholder='닉네임을 입력하세요.'
                    {...register("userNickName")}
                    />
                  </S.Label>
                </S.InputWrapper>
              </S.Border>
            </S.BorderWrapper>

          </S.InputContainer>

        <S.JoinButton $active={isValid}>
          <S.H4 disabled={isSubmitting}>회원가입</S.H4>
        </S.JoinButton>
      </S.Wrapper>
    </S.Container>
    </form>
  );
};

export default SocialJoin;