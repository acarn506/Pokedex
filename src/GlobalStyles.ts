import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --maxWidth: 750px;
        --darkPurple: #6800b3;
        --white: #f8f8ff;
        --red: #e22740;
        --background: #b4d6f3
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #35de95;
    }
`