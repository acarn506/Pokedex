import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --maxWidth: 900px;
        --darkPurple: #6800b3;
        --white: #f8f8ff;
        --red: #e22740;
        --background: #b4d6f3;
        --fontBig: 20px;
        --fire: #F08030;
        --grass: #78C850;
        --normal: #A8A878;
        --electric: #F8D030;
        --water: #6890F0;
        --rock: #B8A038;
        --bug: #A8B820;
        --ghost: #705898;
        --flying: #ccc287;
        --poison: #A040A0;
        --ground: #E0C068;
        --fighting: #C03028;
        --psychic:#F85888;
        --dragon: #7038F8;
        --ice: #98D8D8;
        --fairy: #EE99AC;
        --steel: #999999;
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