import React from 'react';
import './App.css';

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

export default function App() {
  return <Pokedex/>
};
