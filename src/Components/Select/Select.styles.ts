import styled from 'styled-components'

// Image
import Arrow from '../../images/Arrow-down.svg'

export const Wrapper = styled.div`
    position: relative;
    margin-top:40px;
    min-width: 200px;

    &::after {
        background-image: url('${Arrow}');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        display: block;
        height: 16px;
        content: "";
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        z-index: 1;
        pointer-events: none;
    }
`

export const SelectEL = styled.select`
    appearance: none;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.8);
    width: 100%;
    padding-left: 20px;
    padding-right: 60px;
    height: 50px;
    font-size: 1.5rem;
`