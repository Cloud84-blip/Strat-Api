interface Pokemons {
    _type: (string) | null;
    default_sprite: (string) | null;
    id: number & {
        readonly __brand?: 'pokemons_id';
    };
    moves: (Array<string | null>) | null;
    name_en: (string) | null;
    name_fr: (string) | null;
}
export default Pokemons;
interface Pokemons_InsertParameters {
    _type?: (string) | null;
    default_sprite?: (string) | null;
    id?: number & {
        readonly __brand?: 'pokemons_id';
    };
    moves?: (Array<string | null>) | null;
    name_en?: (string) | null;
    name_fr?: (string) | null;
}
export type { Pokemons_InsertParameters };
