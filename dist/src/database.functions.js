"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropTableIfExists = exports.createTable = exports.deletePokemon = exports.getPokemonsById = exports.insertPokemon = void 0;
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
    await (0, database_1.pokemons)(database_1.default).delete(pokemon);
}
exports.deletePokemon = deletePokemon;
//# sourceMappingURL=database.functions.js.map