import React from 'react'
import { Pokemon } from '../../API'

// Styles 
import { Wrapper, SelectEL } from './Select.styles'

// Types 
type Props = {
    pokemonList : Array<Pokemon>
    getValue: Function
}

const Select: React.FC<Props> = ({ pokemonList, getValue }) => {

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        getValue(event.target.value)
    }

    return (
        <Wrapper>
            <SelectEL onChange={(event) => onChange(event)}>
                <option value=""></option>
                {pokemonList.map( pokemon => (
                    <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                ))}
            </SelectEL>
        </Wrapper>
    )
    
}

export default Select