import { async } from 'rxjs';
import { Pokemons_InsertParameters } from './__generated__';
import db, {pokemons, sql} from './database';

async function createTable() {
  await db.query(sql`
  create table pokemons (
    id serial primary key,
    name_en VARCHAR(255),
    name_fr VARCHAR(255),
    _type VARCHAR(50),
    default_sprite VARCHAR(400),
    moves VARCHAR(50)[]
  );
  `);
}

async function dropTableIfExists() {
  await db.query(sql`DROP TABLE IF EXISTS pokemons;`);
}
async function insertPokemon(pokemon: Pokemons_InsertParameters) {
  await pokemons(db).insert(pokemon);
}

async function getPokemonsById(id: number): Promise<{}> {
    return await pokemons(db).findOne({id});
}

// async function deletePokemon(pokemon: Pokemons_InsertParameters) {
//   await pokemons(db).delete(pokemon);
// }

async function deletePokemon(pokemon: Pokemons_InsertParameters) {
  try {
    await pokemons(db).delete(pokemon)
    .then(() => {return "Pokemon deleted successfully"});
    console.log('Pokemon deleted successfully');
  } catch (error) {
    console.error('Error deleting pokemon:', error.message);
    throw error; // Re-lance l'erreur pour que l'appelant puisse la gérer
  }
}

async function updatePokemon(id: number, pokemon: Pokemons_InsertParameters){
  try {
    await pokemons(db).update({id : id}, pokemon); // Mettre à jour avec les nouvelles données
    console.log('Pokemon updated successfully');
  } catch (error) {
    console.error('Error updating pokemon:', error.message);
    throw error;
  }
}


export {insertPokemon, getPokemonsById, deletePokemon, createTable, dropTableIfExists, updatePokemon};