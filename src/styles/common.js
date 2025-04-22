import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// export const h1Bold = css`
//   font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
//   line-height: ${({theme}) => theme.FONT_LINE["h1"]};
//   font-weight: 800;
// `

export const H1 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.korean};
  font-size: ${({ theme }) => theme.FONT_SIZE_KR.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_KR.bold};
`;

export const H2 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.korean};
  font-size: ${({ theme }) => theme.FONT_SIZE_KR.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_KR.bold};
`;

export const H3 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.korean};
  font-size: ${({ theme }) => theme.FONT_SIZE_KR.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_KR.bold};
`;

export const H4 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.korean};
  font-size: ${({ theme }) => theme.FONT_SIZE_KR.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_KR.medium};
`;

export const H5 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.korean};
  font-size: ${({ theme }) => theme.FONT_SIZE_KR.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_KR.semibold};
`;

export const H6 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.korean};
  font-size: ${({ theme }) => theme.FONT_SIZE_KR.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_KR.medium};
`;

export const H7 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.korean};
  font-size: ${({ theme }) => theme.FONT_SIZE_KR.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_KR.regular};
`;

export const H8 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.korean};
  font-size: ${({ theme }) => theme.FONT_SIZE_KR.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_KR.light};
`;

export const H9 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.korean};
  font-size: ${({ theme }) => theme.FONT_SIZE_KR.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_KR.light};
`;



// 영어, 숫자
export const EN_H1 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.english};
  font-size: ${({ theme }) => theme.FONT_SIZE_EN.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_EN.bold};
`;

export const EN_H2 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.english};
  font-size: ${({ theme }) => theme.FONT_SIZE_EN.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_EN.bold};
`;

export const EN_H3 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.english};
  font-size: ${({ theme }) => theme.FONT_SIZE_EN.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_EN.bold};
`;

export const EN_H4 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.english};
  font-size: ${({ theme }) => theme.FONT_SIZE_EN.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_EN.bold};
`;

export const EN_H5 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.english};
  font-size: ${({ theme }) => theme.FONT_SIZE_EN.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_EN.medium};
`;

export const EN_H6 = css`
  font-family: ${({ theme }) => theme.FONT_FAMILY.english};
  font-size: ${({ theme }) => theme.FONT_SIZE_EN.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_EN.regular};
`;