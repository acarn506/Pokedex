import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 500px;

    @media screen and (max-width: 550px) {
        width: 420px;
    } 
    
` 

export const Content = styled.div`
    background-color: #262424;
    padding: 10px;
    border-radius: 6px;
    text-align: center;
`

export const Text = styled.div`
    .name {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
    }

    .description {
        margin: 0 20px 20px 20px;
        color: white;
        font-family: Roboto;
        font-size: 1.1rem;

    }
`

export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    gap: 25px;
`

export const Item = styled.li`
    width: 100px;
    height: 30px;
    background-color: var(--${props => props.color});
    border-radius: 0.8rem;
    padding: 6px;
    color: white;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
`