import React from 'react';
import S from './style';
import UncheckButton from '../../../components/button/UncheckButton';

const Join = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.H2>회원가입</S.H2>
          <S.InputContainer>
            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>아이디<span>*</span></S.H5>
                  <S.Input type='text' placeholder='6~20자 영문, 숫자'/>
                </S.Label>
                <S.ButtonWrapper>
                  <UncheckButton>중복 체크</UncheckButton>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>
            
            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>비밀번호<span>*</span></S.H5>
                  <S.Input type='text' placeholder='6~20자 영문, 숫자'/>
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>비밀번호 확인<span>*</span></S.H5>
                  <S.Input type='text' placeholder='6~20자 영문, 숫자'/>
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>이름<span>*</span></S.H5>
                  <S.Input type='text' placeholder='6~20자 영문, 숫자'/>
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>닉네임<span>*</span></S.H5>
                  <S.Input type='text' placeholder='6~20자 영문, 숫자'/>
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>휴대폰<span>*</span></S.H5>
                  <S.Input type='text' placeholder='6~20자 영문, 숫자'/>
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>이메일<span>*</span></S.H5>
                  <S.Input type='text' placeholder='6~20자 영문, 숫자'/>
                </S.Label>
                <S.ButtonWrapper>
                  <UncheckButton>이메일 인증</UncheckButton>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>인증번호<span>*</span></S.H5>
                  <S.Input type='text' placeholder='6~20자 영문, 숫자'/>
                </S.Label>
                <S.ButtonWrapper>
                  <UncheckButton>인증번호 확인</UncheckButton>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>
          </S.InputContainer>
      </S.Wrapper>
      

    </S.Container>


  );
};

export default Join;