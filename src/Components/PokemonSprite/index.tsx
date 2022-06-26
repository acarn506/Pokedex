import React from 'react'

// Styles 
import { Wrapper, Content, Image } from './PokemonSprite.styles'

// Types 
type Props = {
    image : string
    type : string
}

const PokemonSprite: React.FC<Props> = ({ image, type}) => {
    return(
        <Wrapper>
            <Content color={type}>
                <Image src={image} />
            </Content>
        </Wrapper>
    )
}

export default PokemonSprite