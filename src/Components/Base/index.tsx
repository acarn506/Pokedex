import React from 'react'

// Styles
import { Wrapper, Content } from './Base.styles'

// Types 
type Props = {
    header: string
}

const Base: React.FC<Props> = ({ children, header }) =>  (
    <Wrapper>
        
        <section className="circle-container">  
            <div className='cb'></div> 
            <div className='cr'></div>
            <div className='cy'></div>
            <div className='cg'></div>
        </section>
        <h1 className='header'>{header}</h1>
       
        <Content>
            {children}
        </Content>
    </Wrapper>
)

export default Base