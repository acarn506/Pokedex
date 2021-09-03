// Types
import { Pokemon } from "./API"

export const getPokemonId = (pokemonList : Array<Pokemon>, pokemonName: string): number => {
    let index = 0

    index = pokemonList.findIndex( pokemon => pokemon.name === pokemonName)

    return index
}