import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    *{
        box-sizing: border-box;
    };
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
    };
`;

export { GlobalStyle };