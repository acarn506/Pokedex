import {useState, useEffect} from 'react'
// API
import { fetchPokemonList } from '../API'
import { Pokemon } from '../API'

export const useFetchPokemon = () => {
    const [state, setState] = useState([] as Array<Pokemon>)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const fetchPokemon = async () => {
        try {
            setLoading(true)
            setError(false)

            const list = await fetchPokemonList()
            list.forEach( pokemon => decodeURI(pokemon.name))
            
            setState(list)

        } catch (error) {
            setError(true)
        }

        setLoading(false)
    }

    useEffect( () => {
        fetchPokemon()
    }, [])

    return {state, error, loading}
}
