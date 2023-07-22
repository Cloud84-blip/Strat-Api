import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
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
  }
  );
});
