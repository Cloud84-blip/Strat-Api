import { Pokemons_InsertParameters } from './__generated__';
import db, {pokemons} from './database';


async function insertPokemon(pokemon: Pokemons_InsertParameters) {
  await pokemons(db).insert(pokemon);
}

async function getPokemonById(id: number) {
    const pokemon = await pokemons(db).findOne({id});
    return pokemon;
}

export {insertPokemon, getPokemonById};