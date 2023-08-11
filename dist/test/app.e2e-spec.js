"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const request = require("supertest");
const app_module_1 = require("./../src/app.module");
describe('AppController (e2e)', () => {
    let app;
    beforeEach(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [app_module_1.AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('Hello World!');
    });
    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/api-name')
            .expect(200)
            .expect('Pokemon Strat API');
    });
    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/equipes')
            .expect(200)
            .expect('[]');
    });
    it('/ (POST)', () => {
        return request(app.getHttpServer())
            .post('/equipes')
            .send({ name: 'equipe1', pokemons: [] })
            .expect(201)
            .expect({ name: 'equipe1', pokemons: [] });
    });
    afterAll(async () => {
        await app.close();
    });
});
//# sourceMappingURL=app.e2e-spec.js.map