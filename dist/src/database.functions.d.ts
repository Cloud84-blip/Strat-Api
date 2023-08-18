import { Pokemons_InsertParameters } from './__generated__';
declare function createTable(): Promise<void>;
declare function dropTableIfExists(): Promise<void>;
declare function insertPokemon(pokemon: Pokemons_InsertParameters): Promise<void>;
declare function getPokemonsById(id: number): Promise<{}>;
declare function deletePokemon(pokemon: Pokemons_InsertParameters): Promise<void>;
declare function updatePokemon(id: number, pokemon: Pokemons_InsertParameters): Promise<void>;
export { insertPokemon, getPokemonsById, deletePokemon, createTable, dropTableIfExists, updatePokemon };
