import React from 'react';
import { GlobalStyles } from './GlobalStyles';

// API
import { getPokemonList, getPokemonDescription } from './API'

// Components
import Pokedex from './Components/Pokedex'

async function logData() {
  const list = await getPokemonList()
  console.log(list)

  const description = await getPokemonDescription()
  console.log(description)
}

logData()

const App: React.FC = () => (
  <>
   <Pokedex/>
   <GlobalStyles/>
  </>
)

export default App
  
