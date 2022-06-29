import React, { useState, useEffect } from 'react'

// API
import { fetchPokemonDescription, fetchPokemonInfo, PokemonInfo } from '../API'

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
    const [selectedPokemon, setSelectedPokemon] = useState('')
    const [pokemonId, setPokemonID] = useState('0')
    const [description, setDescription] = useState('Pokemon Name & Description')
    const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo | undefined>(undefined)

    let mainType = ''
    let typeList : string[] = []
    let height = ''
    let weight = ''
    
    if (pokemonInfo) {
        mainType = pokemonInfo.types[0].type.name
        height = pokemonInfo.height
        weight = pokemonInfo.weight

        typeList = pokemonInfo.types.map( info => {
            return info.type.name
        })
    }

    const  { state: pokemonList, error, loading }  = useFetchPokemon()

    //Function passed down to child component
    const getSelectedPokemon = (selectData : string): void => {
        setSelectedPokemon(selectData)
    }

    const getPokemonInfo = async () => {
        const [description, info] = await Promise.all([fetchPokemonDescription(selectedPokemon), fetchPokemonInfo(selectedPokemon)])
        setDescription(description)
        setPokemonInfo(info)
    }

    // Fetch info based on Selection
    useEffect(() => {

        if (selectedPokemon === '') return

        setPokemonID(getPokemonId(pokemonList, selectedPokemon))
        getPokemonInfo()

    }, [selectedPokemon])

    if (error) return <div>Something is Wrong...</div>

    return (
            <>
                <Base header={'Pokedex'}>
                    <Select getValue={getSelectedPokemon} pokemonList={pokemonList} selectedPokemon={selectedPokemon}/>
                    <PokemonSprite image={`${SPRITE_URL}${pokemonId}.png`} type={mainType}/>
                    <Info name={selectedPokemon.charAt(0).toUpperCase() + selectedPokemon.slice(1)} description={description} types={typeList}/>
                    <div className='button-container'>
                        <Button text="Prev" callback={ () => setSelectedPokemon(prevButton(pokemonList, pokemonId))}/>
                        <Button text="Next" callback={ () => setSelectedPokemon(nextButton(pokemonList, pokemonId))}/>
                    </div>
                    
                </Base>
            </>
    )
}

export default Pokedex