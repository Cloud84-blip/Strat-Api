import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getApiName(): string;
    getEquipes(): string[];
    postEquipes(equipe: {}): string[];
    getPokemonById(id: number): {};
}
