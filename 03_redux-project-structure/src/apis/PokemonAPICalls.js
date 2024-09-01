import { GET_POKEMONS } from "../modules/PokemonModule";

export function callGetPokemonsAPI(url, params) {

    // url을 전달받지 않는다면 뒤에있는 요청으로 보낸다.
    const requestURL = url || 'https://pokeapi.co/api/v2/pokemon'; 

    return async function getPokemons(dispatch, getState) {
    
        const result = await fetch(requestURL).then(res => res.json());
    
        console.log('result : ', result);
    
        dispatch({ type: GET_POKEMONS, payload: result });
    }
}
