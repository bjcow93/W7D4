


export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

// export const getSuccess = pokemon => {
//   // debugger
//   receiveAllPokemon(pokemon)
// };