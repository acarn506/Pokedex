// Types
import { Pokemon } from "./API"

export const getPokemonId = (pokemonList : Array<Pokemon>, pokemonName: string): string => {
    let index = 0

    index = pokemonList.findIndex( pokemon => pokemon.name === pokemonName)
    index = index + 1

    return index.toString()
}

export const prevButton = (pokemonList : Array<Pokemon>, pokemonId: string): string => {
    let index = parseInt(pokemonId)

    index--
    if (index < 1) {
        index = 150
    }

    for (let i = 0; i < pokemonList.length; i++) {
        if (index === i + 1) {
            return pokemonList[i].name
        }
    }

    return 'bulbasaur'
}

export const nextButton = (pokemonList : Array<Pokemon>, pokemonId: string): string => {
    let index = parseInt(pokemonId)

    index++
    if (index > pokemonList.length) {
        index = 1
    }

    for (let i = 0; i < pokemonList.length; i++) {
        if (index === i + 1) {
            return pokemonList[i].name
        }
    }

    return 'mewtwo'
}

