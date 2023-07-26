import { Injectable } from '@nestjs/common';

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
    return { id: id, name: 'bulbasaur' };
  }
}
