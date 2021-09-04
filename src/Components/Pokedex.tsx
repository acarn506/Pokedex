import React, { useState, useEffect } from 'react'

// API
import { getPokemonSprite, getPokemonDescription } from '../API'

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
    const [description, setDescription] = useState('')

    const  { state: pokemonList, error, loading }  = useFetchPokemon()

    const getSelectValue = (selectData : string): void => {
        setSelectValue(selectData)
    }

    const fetchDescription = async () => {
        const value = await getPokemonDescription(selectValue)
        setDescription(value)
    }

    console.log('description', description)

    useEffect(() => {

        setPokemonID(getPokemonId(pokemonList, selectValue))
        fetchDescription()

    }, [selectValue])

    console.log('pokemonList', pokemonList)
    return (
            <>
                <Base header={'Pokedex'}>
                    <Select getValue={getSelectValue} pokemonList={pokemonList}/>
                    <PokemonSprite image={`${SPRITE_URL}${pokemonId}.png`}/>
                </Base>
            </>
    )
}

export default Pokedex