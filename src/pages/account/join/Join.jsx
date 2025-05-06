import React, { useState } from 'react';
import S from './style';
import UncheckButton from '../../../components/button/UncheckButton';

const Join = () => {

  const [agreement, setAgreement] = useState([false, false, false, false]);

  // 전체 동의
  const isAllAgreed = agreement[0] && agreement[1] && agreement[2] && agreement[3]

  const agreementAll = () => {
    const checkAll = !isAllAgreed;
    setAgreement([checkAll, checkAll, checkAll, checkAll])
  }

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


  return (
    <S.Container>
      <S.Wrapper>
        <S.H2>회원가입</S.H2>
          <S.InputContainer>
            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>아이디<span>*</span></S.H5>
                  <S.Input type='text' placeholder='6~20자 영문, 숫자 조합으로 입력하세요.'/>
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
                  <S.Input type='text' placeholder='8~12자 영문, 숫자, 특수문자 조합으로 입력하세요.'/>
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>비밀번호 확인<span>*</span></S.H5>
                  <S.Input type='text' placeholder='8~12자 영문, 숫자, 특수문자 조합으로 입력하세요.'/>
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>이름<span>*</span></S.H5>
                  <S.Input type='text' placeholder='이름을 입력하세요.'/>
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>닉네임<span>*</span></S.H5>
                  <S.Input type='text' placeholder='닉네임을 입력하세요.'/>
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>휴대폰<span>*</span></S.H5>
                  <S.Input type='text' placeholder='휴대폰 번호를 입력하세요.'/>
                </S.Label>
                <S.ButtonWrapper>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>

            <S.Border>
              <S.InputWrapper>
                <S.Label>
                  <S.H5>이메일<span>*</span></S.H5>
                  <S.Input type='text' placeholder='이메일을 입력하세요.'/>
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
                  <S.Input type='text' placeholder='인증번호를 입력하세요.'/>
                </S.Label>
                <S.ButtonWrapper>
                  <UncheckButton>인증번호 확인</UncheckButton>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </S.Border>
          </S.InputContainer>

          <S.CheckboxContainer>
            <S.CheckboxWrapper onClick={agreementAll}>
              <S.Checkbox src={ isAllAgreed ? '/assets/images/join/checked-on.png' : '/assets/images/join/checked-off.png'} />
              <S.Terms checked={isAllAgreed}>필수 및 선택 항목을 모두 포함하여 동의합니다.</S.Terms>
            </S.CheckboxWrapper>

            {agreementList.map((terms, i) => (
              <S.CheckboxWrapper key={i} className="detail" onClick={() => agreementOne(i)}>
                <S.Checkbox src={ agreement[i] ? '/assets/images/join/checked-on.png' : '/assets/images/join/checked-off.png'} />
                <S.Terms checked={agreement[i]}>{terms}</S.Terms>
              </S.CheckboxWrapper>
            ))}
          </S.CheckboxContainer>


          <S.JoinButton>
            <S.H4>회원가입</S.H4>
          </S.JoinButton>
      </S.Wrapper>


      

    </S.Container>


  );
};

export default Join;