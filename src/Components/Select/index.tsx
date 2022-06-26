import React from 'react'
import { Pokemon } from '../../API'

// Styles 
import { Wrapper, SelectEL } from './Select.styles'

// Types 
type Props = {
    pokemonList : Array<Pokemon>
    getValue: Function
    selectedPokemon : string
}

const Select: React.FC<Props> = ({ pokemonList, getValue, selectedPokemon }) => {

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        getValue(event.target.value)
    }

    return (
        <Wrapper>
            <SelectEL value={selectedPokemon} onChange={(event) => onChange(event)}>
                <option value=''>Search for Pokemon</option>
                {pokemonList.map( pokemon => (
                    <option key={pokemon.name} value={pokemon.name}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</option>
                ))}
            </SelectEL>
        </Wrapper>
    )
    
}

export default Select