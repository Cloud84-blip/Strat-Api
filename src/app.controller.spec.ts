import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {createTable, deletePokemon, dropTableIfExists} from './database.functions';
import db from './database';


describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });


  afterAll(async () => {
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

  // describe('pokemon', () => {
  //   it('should return the pokxemon with id 1 after post', async () => {
  //     const id = 1;
  //     const pokemon = { id: 1, name_en: 'bulbasaur', name_fr: null,  _type: null, default_sprite: null, moves: null };
  //     return appController.postPokemon(pokemon).then(() => {
  //       expect(appController.getPokemonById(id)).resolves.toStrictEqual(pokemon);
  //       deletePokemon(pokemon);
  //       expect.assertions(1);
  //     });
      
  //   });
  // });
});
