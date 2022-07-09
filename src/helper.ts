// Types
import { Pokemon } from "./API"

export const getPokemonId = (pokemonList : Array<Pokemon>, pokemonName: string): string => {
    let index

    index = pokemonList.findIndex( pokemon => pokemon.name === pokemonName)
    return pokemonList[index].id.toString()
}

export const prevButton = (pokemonList : Array<Pokemon>, pokemonId: number): Pokemon => {
    let index = pokemonId

    index--
    if (index < 1) {
        index = 809
    }

    let pokemon = pokemonList.findIndex(pokemon => pokemon.id === index) >= 0 ? pokemonList[pokemonList.findIndex(pokemon => pokemon.id === index)]
    : pokemonList[pokemonList.findIndex(pokemon => pokemon.id === index - 1)]

    return pokemon
}

export const nextButton = (pokemonList : Array<Pokemon>, pokemonId: number): Pokemon => {
    let index = pokemonId

    index++
    if (index > 809) {
        index = 1
    }

    let pokemon = pokemonList.findIndex(pokemon => pokemon.id === index) >= 0 ? pokemonList[pokemonList.findIndex(pokemon => pokemon.id === index)]
    : pokemonList[pokemonList.findIndex(pokemon => pokemon.id === index + 1)]
    
    return pokemon
}

