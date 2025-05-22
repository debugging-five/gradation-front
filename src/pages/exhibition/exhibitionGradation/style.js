import styled from "styled-components";
import { H1 } from "../../../styles/common";

const S = {};

S.TitleWrap = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 28px;
  display: flex;
  align-items: center;
`

S.Title = styled.p`
  ${H1};
`

export default S;