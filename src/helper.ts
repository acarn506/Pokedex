// Types
import { Pokemon } from "./API"

export const getPokemonId = (pokemonList : Array<Pokemon>, pokemonName: string): string => {
    let index = 0

    index = pokemonList.findIndex( pokemon => pokemon.name === pokemonName)
    index = index + 1
    console.log('id', index)

    return index.toString()
}
