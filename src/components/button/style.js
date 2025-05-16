import styled, { css } from 'styled-components'

const variantCSS = {
  primary : css`
    background-color: ${({theme}) => theme.PALLETE.primary["main"]};
  `,
  black : css`
    background-color: ${({theme}) => theme.PALLETE["black"]};
  `,
  gray100 : css`
    background-color: ${({theme}) => theme.PALLETE.gray[100]};
  `,
  gray500 : css`
    background-color: ${({theme}) => theme.PALLETE.gray[500]};
  `,
  gray900 : css`
    background-color: ${({theme}) => theme.PALLETE.gray[900]};
  `,
  warning : css`
    background-color: ${({theme}) => theme.PALLETE["warning"]};
  `,
}

const fontSizeCSS = {
  h1 : css`
    font-size: ${({theme}) => theme.FONT_SIZE_KR["h1"]};
  `,
  h2 : css`
    font-size: ${({theme}) => theme.FONT_SIZE_KR["h2"]};
  `,
  h3 : css`
    font-size: ${({theme}) => theme.FONT_SIZE_KR["h3"]};
  `,
  h4 : css`
    font-size: ${({theme}) => theme.FONT_SIZE_KR["h4"]};
  `,
  h5 : css`
    font-size: ${({theme}) => theme.FONT_SIZE_KR["h5"]};
  `,
  h6 : css`
    font-size: ${({theme}) => theme.FONT_SIZE_KR["h6"]};
  `,
  h7 : css`
    font-size: ${({theme}) => theme.FONT_SIZE_KR["h7"]};
  `,
  h8 : css`
    font-size: ${({theme}) => theme.FONT_SIZE_KR["h8"]};
  `,
  h9 : css`
    font-size: ${({theme}) => theme.FONT_SIZE_KR["h9"]};
  `
}

const fontWeightCSS = {
  h1 : css`
    font-weight: ${({theme}) => theme.FONT_WEIGHT_KR["bold"]};
  `,
  h2 : css`
    font-weight: ${({theme}) => theme.FONT_WEIGHT_KR["bold"]};
  `,
  h3 : css`
    font-weight: ${({theme}) => theme.FONT_WEIGHT_KR["bold"]};
  `,
  h4 : css`
    font-weight: ${({theme}) => theme.FONT_WEIGHT_KR["medium"]};
  `,
  h5 : css`
    font-weight: ${({theme}) => theme.FONT_WEIGHT_KR["semibold"]};
  `,
  h6 : css`
    font-weight: ${({theme}) => theme.FONT_WEIGHT_KR["medium"]};
  `,
  h7 : css`
    font-weight: ${({theme}) => theme.FONT_WEIGHT_KR["regular"]};
  `,
  h8 : css`
    font-weight: ${({theme}) => theme.FONT_WEIGHT_KR["light"]};
  `,
  h9 : css`
    font-weight: ${({theme}) => theme.FONT_WEIGHT_KR["light"]};
  `
}

const colorCSS = {
  primary : css`
    color : ${({theme}) => theme.PALLETE.primary["main"]};
  `,
  black : css`
    color : ${({theme}) => theme.PALLETE["black"]};
  `,
  gray100 : css`
    color : ${({theme}) => theme.PALLETE.gray[100]};
  `,
  gray500 : css`
    color : ${({theme}) => theme.PALLETE.gray[500]};
  `,
  gray900 : css`
    color : ${({theme}) => theme.PALLETE.gray[900]};
  `,
  warning : css`
    color : ${({theme}) => theme.PALLETE["warning"]};
  `,
}

const borderColorCSS = {
  primary : css`
    border-color : ${({theme}) => theme.PALLETE.primary["main"]};
  `,
  black : css`
    border-color : ${({theme}) => theme.PALLETE["black"]};
  `,
  gray100 : css`
    border-color : ${({theme}) => theme.PALLETE.gray[100]};
  `,
  gray500 : css`
    border-color : ${({theme}) => theme.PALLETE.gray[500]};
  `,
  gray900 : css`
    border-color : ${({theme}) => theme.PALLETE.gray[900]};
  `,
  warning : css`
    border-color : ${({theme}) => theme.PALLETE["warning"]};
  `,
}

const sizeCSS = {
// AlertButton
  small : css`
    width: 60px;
    height: 24px;
    padding: 5px 0;
    border : 1px solid;
  `,

// CheckButton, UncheckButton
  medium : css`
    width: 120px;
    height: 35px;
    padding: 8px 0;
    border: 1.2px solid;
  `,

// PrimaryButton, SubButton
  large : css`
    width: 120px;
    height: 45px;
    padding: 12px 0 ;
    border: 1.5px solid;
  `
}

const shapeCSS = {
  small : css`
    border-radius: 2px;
  `,

  medium : css`
    border-radius: 2px;
  `,

  large : css`
    border-radius: 3px;
  `,
}

const Button = styled.button`
  ${({$variant}) => variantCSS[$variant]}
  ${({$fontSize}) => fontSizeCSS[$fontSize]}
  ${({$fontWeight}) => fontWeightCSS[$fontWeight]}
  ${({$color}) => colorCSS[$color]}
  ${({$borderColor}) => borderColorCSS[$borderColor]}
  ${({$size}) => sizeCSS[$size]}
  ${({$shape}) => shapeCSS[$shape]}
  font-family: ${({theme}) => theme.FONT_FAMILY.korean}
`

export default Button;