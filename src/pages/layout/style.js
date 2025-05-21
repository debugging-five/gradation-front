import styled from 'styled-components'
import { EN_H1, EN_H2, H8 } from '../../styles/common';
const primary = "#EE3333";
const gray100 = "#FBFCFC";
const gray500 = "#C0C5C7";
const gray900 = "#6E7476";
const black = "#333333";
const warning = "#E49804";

const S = {};

  S.Container = styled.div`
    width: 100dvw;
    min-height: 100%;
    background-color: ${gray100};
  `

  S.Main = styled.main`
    margin-top : 56px;
  `

export default S;