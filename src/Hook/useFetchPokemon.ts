import React, {useState, useEffect} from 'react'
// API
import { getPokemonList } from '../API'
import { Pokemon } from '../API'

const initialState = {
    results: [] as Pokemon[]
}

export const UseFetchPokemon = () => {
    const [pokemoeList, setPokemonList] = useState(initialState)

    useEffect( () => {

    }, [pokemoeList])

    return { pokemoeList }
}
