import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --maxWidth: 750px;
        --darkPurple: #6800b3;
        --white: #f8f8ff;
        --red: #e22740;
        --background: #b4d6f3;
        --fontBig: 20px;
        --fire: #de4628;
        --grass: #22d422;
        --normal: white;
        --electric: #dbc012;
        --water: #1897db;
        --rock: #635442;
        --bug: #a6eb4d;
        --ghost: #6c0ca8;
        --flying: #ccc287;
        --poison: #b036d1;
        --ground: #9e7a5f;
        --fighting: #e38640;
        --psychic:#eba4eb;
        --dragon: #54d6ad;
        --ice: #87d8e8;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #b2f9da;
    }
`