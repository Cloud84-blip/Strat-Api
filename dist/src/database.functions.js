"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePokemon = exports.dropTableIfExists = exports.createTable = exports.deletePokemon = exports.getPokemonsById = exports.insertPokemon = void 0;
const database_1 = require("./database");
async function createTable() {
    await database_1.default.query((0, database_1.sql) `
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
exports.createTable = createTable;
async function dropTableIfExists() {
    await database_1.default.query((0, database_1.sql) `DROP TABLE IF EXISTS pokemons;`);
}
exports.dropTableIfExists = dropTableIfExists;
async function insertPokemon(pokemon) {
    await (0, database_1.pokemons)(database_1.default).insert(pokemon);
}
exports.insertPokemon = insertPokemon;
async function getPokemonsById(id) {
    return await (0, database_1.pokemons)(database_1.default).findOne({ id });
}
exports.getPokemonsById = getPokemonsById;
async function deletePokemon(pokemon) {
    try {
        await (0, database_1.pokemons)(database_1.default).delete(pokemon)
            .then(() => { return "Pokemon deleted successfully"; });
        console.log('Pokemon deleted successfully');
    }
    catch (error) {
        console.error('Error deleting pokemon:', error.message);
        throw error;
    }
}
exports.deletePokemon = deletePokemon;
async function updatePokemon(id, pokemon) {
    try {
        await (0, database_1.pokemons)(database_1.default).update({ id: id }, pokemon);
        console.log('Pokemon updated successfully');
    }
    catch (error) {
        console.error('Error updating pokemon:', error.message);
        throw error;
    }
}
exports.updatePokemon = updatePokemon;
//# sourceMappingURL=database.functions.js.map