import React, { useState, useEffect } from 'react'

// API
import { getPokemonDescription } from '../API'

// Types 
import { Pokemons } from '../API'

// Components 
import Base from './Base'
import Select from './Select'
import PokemonSprite from './PokemonSprite'
import Info from './Info'
import Button from './Button'

// Hook
import { useFetchPokemon } from '../Hook/useFetchPokemon'

// Config
import { SPRITE_URL } from '../config'

// Helpers
import { getPokemonId, prevButton, nextButton } from '../helper'

// Styles 
import '../index.css'

const Pokedex: React.FC = () => {
    const [selectValue, setSelectValue] = useState('')
    const [pokemonId, setPokemonID] = useState('1')
    const [description, setDescription] = useState('')

    const  { state: pokemonList, error, loading }  = useFetchPokemon()

    //Function passed down to child component
    const getSelectValue = (selectData : string): void => {
        setSelectValue(selectData)
    }

    const fetchDescription = async () => {
        const value = await getPokemonDescription(selectValue)
        setDescription(value)
    }

    // Fetch info based on Selection
    useEffect(() => {

        if (selectValue === '') return

        setPokemonID(getPokemonId(pokemonList, selectValue))
        fetchDescription()

    }, [selectValue])

    // Check for Pokemon List
    console.log('pokemonList', pokemonList)

    if (error) return <div>Something is Wrong...</div>

    return (
            <>
                <Base header={'Pokedex'}>
                    <Select getValue={getSelectValue} pokemonList={pokemonList}/>
                    <PokemonSprite image={`${SPRITE_URL}${pokemonId}.png`}/>
                    <Info name={selectValue} description={description}/>
                    <div className='button-container'>
                        <Button text="Prev" callback={ () => setSelectValue(prevButton(pokemonList, pokemonId))}/>
                        <Button text="Next" callback={ () => setSelectValue(nextButton(pokemonList, pokemonId))}/>
                    </div>
                    
                </Base>
            </>
    )
}

export default Pokedex