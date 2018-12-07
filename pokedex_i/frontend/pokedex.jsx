import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, getSuccess } from './actions/pokemon_actions';
import configureStore from "./store/store";
import {requestAllPokemon} from "./actions/pokemon_actions";
import {selectAllPokemon} from './reducers/selectors';
import Root from "./components/root";
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
