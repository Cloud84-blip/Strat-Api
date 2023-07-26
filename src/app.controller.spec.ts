import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
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
    it('should return pokemon by id', () => {
      const id = 1;
      const pokemon = { id: id, name: 'bulbasaur' };
      expect(appController.getPokemonById(id)).toStrictEqual(pokemon);
    });
  })


});
