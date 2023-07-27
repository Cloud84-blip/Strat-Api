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


  getPokemonById(id: number): {} {
    const pokemon = getPokemonsById(id);
    return pokemon;
  }

  postPokemon(pokemon:{}): {} {
    insertPokemon(pokemon as Pokemons_InsertParameters);
    return pokemon;
  }
}
