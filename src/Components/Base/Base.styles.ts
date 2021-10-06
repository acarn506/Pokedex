import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    background: var(--red);
    margin: 60px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    height: 750px;

    @media screen and (max-width: 700px) {
        width: 550px;
    }

    .header {
        color: #f0f51e;
    }

    .circle-container {
        position: absolute;
        top: 25px;
        left: 30px;
        display: flex;
    }

    .cb {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #41a3f7;
        border: 5px solid white;
    }

    .cr {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: red;
        margin: 0 2px;
    }

    .cy {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: yellow;
        margin: 0 2px;
    }

    .cg {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: green;
        margin: 0 2px;
    }
`

export const Content = styled.div`
   
`