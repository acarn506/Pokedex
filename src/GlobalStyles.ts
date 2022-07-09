import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --maxWidth: 850px;
        --mobileMaxWidth: 550px;
        --darkPurple: #6800b3;
        --white: #f8f8ff;
        --red: #e22740;
        --background: #b4d6f3;
        --fontBig: 20px;
        --Fire: #F08030;
        --Grass: #78C850;
        --Normal: #A8A878;
        --Electric: #F8D030;
        --Water: #6890F0;
        --Rock: #B8A038;
        --Bug: #A8B820;
        --Ghost: #705898;
        --Flying: #ccc287;
        --Poison: #A040A0;
        --Ground: #E0C068;
        --Fighting: #C03028;
        --Psychic:#F85888;
        --Dragon: #7038F8;
        --Ice: #98D8D8;
        --Fairy: #EE99AC;
        --Steel: #999999;
        --Dark: #453a3a;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #3d7dca;
    }
`