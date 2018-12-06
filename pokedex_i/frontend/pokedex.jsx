import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, getSuccess } from './actions/pokemon_actions';
import fetchAllPokemon from './util/api_util';



document.addEventListener('DOMContentLoaded', () => {
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.getSuccess = getSuccess;
  
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});