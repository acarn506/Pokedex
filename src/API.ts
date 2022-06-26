
// Types
export type Pokemon = {
    name: string,
    url: string
}

export type Pokemons = {
    results: Pokemon[]
}

export const fetchPokemonList = async(): Promise<Array<Pokemon>> => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
    .then((res) => res.json() )
    return data.results
}

export const fetchPokemonDescription = async(name: string): Promise<string> => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
    .then(res => res.json())
    return data.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ")
}

export const fetchPokemonType = async(name: string): Promise<string> => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => res.json())
    console.log('DATA', data)
    return data.types[0].type.name
}

export function getPokemonSprite() {
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
}