import React, { useState, useEffect } from 'react'

// API
import { fetchPokemonDescription, fetchPokemonInfo, Pokemon } from '../API'

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
import { prevButton, nextButton } from '../helper'

// Styles 
import '../index.css'


const Pokedex: React.FC = () => {
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>({id : 0, name : '', image: ''})
    const [description, setDescription] = useState('Pokemon Name & Description')
    const [pokemonInfo, setPokemonInfo] = useState<Array<string>>([])

    const  { state: pokemonList, error, loading }  = useFetchPokemon()
    

    //Function passed down to child component
    const getSelectedPokemon = (selectData : string): void => {
        let index : number
        index = pokemonList.findIndex( pokemon => pokemon.name === selectData)
        setSelectedPokemon(pokemonList[index])
    }

    const getPokemonInfo = async () => {
        const [description, info] = await Promise.all([fetchPokemonDescription(selectedPokemon.name), fetchPokemonInfo(selectedPokemon.id)])
        setDescription(description)
        setPokemonInfo(info)
    }

    // Fetch info based on Selection
    useEffect(() => {

        if (selectedPokemon.id === 0) return

        getPokemonInfo()
        

    }, [selectedPokemon])

    if (error) return <div>Something is Wrong...</div>

    return (
            <>
                <Base header={'Pokedex'}>
                    <Select getValue={getSelectedPokemon} pokemonList={pokemonList} selectedPokemon={selectedPokemon.name}/>
                    <PokemonSprite image={`${SPRITE_URL}${selectedPokemon.id}.png`} type={pokemonInfo[0]}/>
                    <Info name={selectedPokemon.name} description={description} types={pokemonInfo}/>
                    <div className='button-container'>
                        <Button text="Prev" callback={ () => setSelectedPokemon(prevButton(pokemonList, selectedPokemon.id))}/>
                        <Button text="Next" callback={ () => setSelectedPokemon(nextButton(pokemonList, selectedPokemon.id))}/>
                    </div>
                </Base>
            </>
    )
}

export default Pokedex