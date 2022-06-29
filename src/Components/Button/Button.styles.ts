import styled from 'styled-components'

export const Wrapper = styled.button`
    display: block;
    background: #ffcb05;
    width: 130px;
    height: 40px;
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