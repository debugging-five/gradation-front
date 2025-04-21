// global-style : 모든 스타일에 들어가야 하는거 ex)css reset, font
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: face;
    src: url();
    // 자간 -0.4px
    // (font)color:131313
  }


`
// font-family는 body에 적용시켜라
export default GlobalStyle;