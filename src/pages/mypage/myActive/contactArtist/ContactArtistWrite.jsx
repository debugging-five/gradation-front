import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, ButtonDiv, ButtonSend, Important, InputContent, InputTitle, Line, OneLine, Title, Wrapper } from './contactArtistWriteStyle';
import { MainWrapper } from '../../style';

const ContactArtistWrite = () => {
  // 이메일을 들고와서 적어준다
  const {email} = useParams()
  return (
    <MainWrapper>
      <Wrapper>
        <Box>
          <OneLine>
            <Title>작가 이메일<Important>*</Important></Title>
            <p>{email}</p>
          </OneLine>
          <Line/>
        </Box>

        <Box>
          <OneLine>
            <Title>제목<Important>*</Important></Title>
            <InputTitle placeholder='제목을 입력하세요.' />
          </OneLine>
          <Line/>
        </Box>

        <Box>
          <Title>내용<Important>*</Important></Title>
          <InputContent/>
        </Box>

      </Wrapper>

      <ButtonDiv>
        <ButtonSend>등록</ButtonSend>
      </ButtonDiv> 
    </MainWrapper>
  );
};

export default ContactArtistWrite;