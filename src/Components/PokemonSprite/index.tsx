import React from 'react'

// Styles 
import { Wrapper, Content, Image } from './PokemonSprite.styles'

// Types 
type Props = {
    image : string
}

const PokemonSprite: React.FC<Props> = ({ image }) => {
    return(
        <Wrapper>
            <Content>
                <Image src={image} />
            </Content>
        </Wrapper>
    )
}

export default PokemonSprite