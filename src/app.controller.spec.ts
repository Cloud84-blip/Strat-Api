import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {createTable, deletePokemon, dropTableIfExists} from './database.functions';
import db from './database';
import { after } from 'node:test';


describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);

    await dropTableIfExists();
    await createTable();
  });

  afterEach(async () => {
    await dropTableIfExists();
  });


  afterAll(async () => {
    await createTable();
    db.dispose();
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
  })

  describe('equipes', () => {
    it('should return empty list if nothing was posted', () => {
      expect(appController.getEquipes()).toStrictEqual([]);
    });
  }
  );

  describe('equipes', () => {
    it('should return list of equipes if something was posted', () => {
      const equipe = { name: 'equipe1', pokemons: [] };
      expect(appController.postEquipes(equipe)).toStrictEqual([equipe]);
    });
  })

  describe('pokemon', () => {
    it('should raise error on empty table', async () => {
      
      const id = 1;
      await appController.getPokemonById(id).then((pokemon) => {
        expect.assertions(1);
        expect(pokemon).toBeNull();
      });
    });
  })

  describe('pokemon', () => {
    it('should return the pokxemon with id 1 after post', async () => {
      const id = 1;
      const pokemon = { id: 1, name_en: 'bulbasaur', name_fr: null,  _type: null, default_sprite: null, moves: null };
      return appController.postPokemon(pokemon).then(async () => {
        await appController.getPokemonById(id).then((pokemon) => {
          expect.assertions(1);
          expect(pokemon).toBe(pokemon);
        })
      });
    });
  });


  describe('pokemon', () => {
    it('should delete the pokemon with id 1 after post', async () => {
      const id = 1;
      const pokemon = { id: 1, name_en: 'bulbasaur', name_fr: null,  _type: null, default_sprite: null, moves: null };
      return appController.postPokemon(pokemon).then(async () => {
        await deletePokemon({id});
        await appController.getPokemonById(id).then((pokemon) => {
          expect.assertions(1);
          expect(pokemon).toBeNull();
        })
      });
    });
  })
});
