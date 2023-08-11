import { sql } from '@databases/pg';
export { sql };
declare const db: import("@databases/pg").ConnectionPool;
export default db;
declare const pokemons: import("@databases/pg-typed").TableHelper<import("./__generated__/pokemons").default, import("./__generated__/pokemons").Pokemons_InsertParameters, "defaultConnection">;
export { pokemons };
