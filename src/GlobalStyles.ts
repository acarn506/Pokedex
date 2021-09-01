import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --maxWidth: 750px;
        --darkPurple: #6800b3;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }
`