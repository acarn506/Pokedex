import React from 'react'

// Styles 
import { Wrapper, Content, Text } from './Info.styles'

// Types 
type Props = {
    name: string,
    description: string
    type: string
}

const Info: React.FC<Props> = ({ name, description, type}) => (
    <Wrapper>
        <Content>
            <Text>
                <h1 className='name'>{name}</h1>
                <h4>Type: {type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                <h4 className='description'>{description}</h4>
            </Text>
        </Content>
    </Wrapper>
)

export default Info