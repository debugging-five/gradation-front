import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}

  /* Pretendard - 한글 */
  @font-face {
    font-family: 'Pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/Pretendard-Bold.otf) format('opentype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/Pretendard-Light.otf) format('opentype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/Pretendard-Medium.otf) format('opentype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/Pretendard-Regular.otf) format('opentype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/Pretendard-SemiBold.otf) format('opentype');
    font-weight: 600;
    font-style: normal;
  }
  
  

  /* SUIT - 영어, 숫자 */
  @font-face {
    font-family: 'SUIT';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Bold.otf) format('opentype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Light.otf) format('opentype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Medium.otf) format('opentype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Regular.otf) format('opentype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-SemiBold.otf) format('opentype');
    font-weight: 600;
    font-style: normal;
  }



  body {
    box-sizing: border-box;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
    letter-spacing: -0.4px;
    text-decoration: none;
    color: #333333;
    font-family: 'Pretendard', sans-serif !important;
  }

  .sub {
    font-family: 'SUIT', sans-serif !important;
  }

  body {
    line-height: 1.3;
  }

  button {
    cursor: pointer;
  }

`

export default GlobalStyle;
