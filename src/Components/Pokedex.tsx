import React from 'react'

// API
import { getPokemonList, getPokemonDescription } from '../API'

// Components 
import Base from './Base'
import Select from './Select'

const Pokedex: React.FC = () => {
    return (
            <>
                <Base header={'Pokedex'}>
                    <Select/>
                </Base>
            </>
    )
}

export default Pokedex