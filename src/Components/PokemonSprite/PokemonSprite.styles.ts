import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
   
`
export const Content = styled.div`
    position: relative;
    background: var(--background);
    border: 5px solid #bbb7b7;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    padding: 15px;
`

export const Image = styled.img`
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

