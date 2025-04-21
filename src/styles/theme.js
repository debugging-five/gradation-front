// theme : 이미 값이 정해져있고 그걸 스위칭할때 사용

const theme = {};

theme.PALLETE = {
    primary: {
      //이름따라 간다
        main: "#EE3333",
        sub: "#fff4d8",
    },
    secondary: "#f1ebf5",
    black: "#333",
    white: "#fff",
    // point : {
    //     100;
    // }
    gray: {
        100: "#F1EBF5",
        200: "#AEA8B2",
        300: "#605866",
    },
    error: "#eb6144",
    background: {
        white: "#fff",
        gray: "#f1ebf5"
    }
}

theme.FONT_SIZE = {
    h1: "38px",
    h2: "30px",
    h3: "22px",
    h4: "18px",
    h5: "16px",
    h6: "14px",
    h7: "10px",
    h8: "7px",
}

theme.FONT_WEIGHT = {
    thin: "100",
    regular: "400",
    blod: "800",
    
}

theme.FONT_LINE = {
    h1: "50px",
    h2: "42px",
    h3: "24px",
    h4: "28px",
    h5: "26px",
    h6: "22px",
    h7: "15px",
}

export default theme;
