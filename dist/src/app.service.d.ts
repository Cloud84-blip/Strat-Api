export declare class AppService {
    getHello(): string;
    getApiName(): string;
    getEquipes(): string[];
    postEquipes(equipe: {}): string[];
    getPokemonById(id: number): Promise<{}>;
    postPokemon(pokemon: {}): Promise<void>;
}
