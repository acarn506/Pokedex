
// Types
export type Pokemon = {
    id: number
    name: string,
    image: string
}

export type Pokemons = {
    results: Pokemon[]
}

export const fetchPokemonList = async(): Promise<Array<Pokemon>> => {
    const data = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
    .then((res) => res.json() )
    console.log('data', data)
    return data
}

export const fetchPokemonDescription = async(name: string): Promise<string> => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name.toLocaleLowerCase().replace(' ', '-')}/`)
    .then(res => res.json())
    // Find and return Selected Pokemon's English Description 
    let flavor_text_entries = data.flavor_text_entries
    let englishDescription  = flavor_text_entries.find( (entry : any) => entry.language.name === 'en') 
    return englishDescription.flavor_text.replace(/[\n\f]/g, " ")
}

export const fetchPokemonInfo = async(id: number): Promise<Array<string>> => {
    console.log('fetch id', id)
    const data = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`)
    .then(res => res.json())
    console.log('DATA', data.type)
    const type : string[] = data.type
    return type
}

