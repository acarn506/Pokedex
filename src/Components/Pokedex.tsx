import React from 'react'

// API
import { getPokemonList, getPokemonDescription } from '../API'

// Types 
import { Pokemons } from '../API'

// Components 
import Base from './Base'
import Select from './Select'

// Hook
import { useFetchPokemon } from '../Hook/useFetchPokemon'

const Pokedex: React.FC = () => {

    const  { state: pokemonList, error, loading }  = useFetchPokemon()
    
    console.log('pokemonList', pokemonList)
    return (
            <>
                <Base header={'Pokedex'}>
                    <Select/>
                </Base>
            </>
    )
}

export default Pokedex