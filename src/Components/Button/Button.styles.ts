import styled from 'styled-components'

export const Wrapper = styled.button`
    display: block;
    background: #1b65d4;
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 20px 5px;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
        background: #5591ec;
    }
`