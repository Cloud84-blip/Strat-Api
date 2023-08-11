"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemons = exports.sql = void 0;
const pg_1 = require("@databases/pg");
Object.defineProperty(exports, "sql", { enumerable: true, get: function () { return pg_1.sql; } });
const pg_2 = require("@databases/pg");
const pg_typed_1 = require("@databases/pg-typed");
require('dotenv').config();
const db = (0, pg_2.default)({
    bigIntMode: 'number',
    connectionString: process.env.DATABASE_URL,
});
exports.default = db;
const { pokemons } = (0, pg_typed_1.default)({
    databaseSchema: require('./__generated__/schema.json'),
});
exports.pokemons = pokemons;
//# sourceMappingURL=database.js.map