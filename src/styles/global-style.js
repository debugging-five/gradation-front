import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}

  /* Pretendard - 한글 */
  @font-face {
    font-family: 'Pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/Pretendard-Bold.woff2) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display : swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/Pretendard-Light.woff2) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display : swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/Pretendard-Medium.woff2) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display : swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/Pretendard-Regular.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display : swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/Pretendard-SemiBold.woff2) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display : swap;
  }
  
  

  /* SUIT - 영어, 숫자 */
  @font-face {
    font-family: 'SUIT';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Bold.woff2) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display : swap;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Light.woff2) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display : swap;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Medium.woff2) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display : swap;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Regular.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display : swap;
  }
  @font-face {
    font-family: 'SUIT';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-SemiBold.woff2) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display : swap;
  }



  body {
    box-sizing: border-box;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
    letter-spacing: -0.4px;
    text-decoration: none;
    color: #333333;
    font-family: 'Pretendard', sans-serif !important;
    
    background-color : #FBFCFC;
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
