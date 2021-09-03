import React, { useState } from 'react'

// API
import { getPokemonSprite } from '../API'

// Types 
import { Pokemons } from '../API'

// Components 
import Base from './Base'
import Select from './Select'
import PokemonSprite from './PokemonSprite'

// Hook
import { useFetchPokemon } from '../Hook/useFetchPokemon'

// Config
import { SPRITE_URL } from '../config'

// Helpers
import { getPokemonId } from '../helper'

const Pokedex: React.FC = () => {
    const [selectValue, setSelectValue] = useState('')
    const [pokemonId, setPokemonID] = useState('')

    const  { state: pokemonList, error, loading }  = useFetchPokemon()

    const getSelectValue = (selectData : string): void => {
        setSelectValue(selectData)
    }
    
    console.log('select Value', selectValue)

    const num = getPokemonId(pokemonList, selectValue)
    console.log('Pokemon ID: ', num)
    
    console.log('pokemonList', pokemonList)
    return (
            <>
                <Base header={'Pokedex'}>
                    <Select getValue={getSelectValue} pokemonList={pokemonList}/>
                    <PokemonSprite image={`${SPRITE_URL}1.png`}/>
                </Base>
            </>
    )
}

export default Pokedex