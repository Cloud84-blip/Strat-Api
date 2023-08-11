"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_functions_1 = require("./database.functions");
const database_1 = require("./database");
describe('AppController', () => {
    let appController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        }).compile();
        appController = app.get(app_controller_1.AppController);
        await (0, database_functions_1.dropTableIfExists)();
        await (0, database_functions_1.createTable)();
    });
    afterEach(async () => {
        await (0, database_functions_1.dropTableIfExists)();
    });
    afterAll(async () => {
        await (0, database_functions_1.createTable)();
        database_1.default.dispose();
    });
    describe('root', () => {
        it('should return "Welcome to the strat world!"', () => {
            expect(appController.getHello()).toBe('Welcome to the strat world!');
        });
    });
    describe('api-name', () => {
        it('should return "Pokemon Strat API"', () => {
            expect(appController.getApiName()).toBe('Pokemon Strat API');
        });
    });
    describe('equipes', () => {
        it('should return empty list if nothing was posted', () => {
            expect(appController.getEquipes()).toStrictEqual([]);
        });
    });
    describe('equipes', () => {
        it('should return list of equipes if something was posted', () => {
            const equipe = { name: 'equipe1', pokemons: [] };
            expect(appController.postEquipes(equipe)).toStrictEqual([equipe]);
        });
    });
    describe('pokemon', () => {
        it('should raise error on empty table', async () => {
            const id = 1;
            await appController.getPokemonById(id).then((pokemon) => {
                expect.assertions(1);
                expect(pokemon).toBeNull();
            });
        });
    });
    describe('pokemon', () => {
        it('should return the pokxemon with id 1 after post', async () => {
            const id = 1;
            const pokemon = { id: 1, name_en: 'bulbasaur', name_fr: null, _type: null, default_sprite: null, moves: null };
            return appController.postPokemon(pokemon).then(async () => {
                await appController.getPokemonById(id).then((pokemon) => {
                    expect.assertions(1);
                    expect(pokemon).toBe(pokemon);
                });
            });
        });
    });
});
//# sourceMappingURL=app.controller.spec.js.map