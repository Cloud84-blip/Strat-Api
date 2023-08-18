import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getApiName(): string;
    getEquipes(): string[];
    postEquipes(equipe: {}): string[];
    getPokemonById(id: number): Promise<{}>;
    postPokemon(pokemon: {}): Promise<void>;
    deletePokemon(id: number): Promise<void>;
    putPokemon(id: number, pokemon: {}): Promise<void>;
}
