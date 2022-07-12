import React from 'react'

// Styles 
import { Wrapper, Content, Text, UnorderedList, Item } from './Info.styles'

// Types 
type Props = {
    name: string,
    description: string
    types: string[]
}

const Info: React.FC<Props> = ({ name, description, types}) => (
    <Wrapper>
        <Content>
            <Text>
                <h1 className='name'>{name}</h1>
                <UnorderedList>
                {types.map( type => {
                    return ( <Item key={type} color={type}>{type.toUpperCase()}</Item>)
                })}
                </UnorderedList>
                <h4 className='description'>{description}</h4>
            </Text>
        </Content>
    </Wrapper>
)

export default Info