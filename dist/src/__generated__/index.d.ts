import Pokemons, { Pokemons_InsertParameters } from './pokemons';
interface DatabaseSchema {
    pokemons: {
        record: Pokemons;
        insert: Pokemons_InsertParameters;
    };
}
export default DatabaseSchema;
declare function serializeValue(_tableName: string, _columnName: string, value: unknown): unknown;
export { serializeValue };
export type { Pokemons, Pokemons_InsertParameters, };
