import React from 'react'

// Styles 
import { Wrapper, Content, Text } from './Info.styles'

// Types 
type Props = {
    name: string,
    description: string
}

const Info: React.FC<Props> = ({ name, description}) => (
    <Wrapper>
        <Content>
            <Text>
                <h1 className='name'>{name}</h1>
                <h4 className='description'>{description}</h4>
            </Text>
        </Content>
    </Wrapper>
)

export default Info