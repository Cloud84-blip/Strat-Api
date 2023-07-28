import { Injectable } from '@nestjs/common';
import { insertPokemon, getPokemonsById } from './database.functions';
import { Pokemons_InsertParameters } from './__generated__/pokemons';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the strat world!';
  }

  getApiName(): string {
    return 'Pokemon Strat API';
  }

  getEquipes(): string[] {
    return [];
  }

  postEquipes(equipe:{}): string[] {
    const equipes = [];
    equipes.push(equipe);
    return equipes;
  }


  getPokemonById(id: number): Promise<{}> {
    return getPokemonsById(id);
  }

  postPokemon(pokemon:{}): Promise<void> {
   return insertPokemon(pokemon as Pokemons_InsertParameters);
  }
}
