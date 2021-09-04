import React from 'react'

// Styles
import { Wrapper, Content } from './Base.styles'

// Types 
type Props = {
    header: string
}

const Base: React.FC<Props> = ({ children, header }) =>  (
    <Wrapper>
        <h1 className='header'>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
)

export default Base