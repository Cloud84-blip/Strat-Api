import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api-name')
  getApiName(): string {
    return this.appService.getApiName();
  }

  @Get('/equipes')
  getEquipes(): string[] {
    return this.appService.getEquipes();
  }

  @Post('/equipes')
  postEquipes(equipe:{}): string[] {
    return this.appService.postEquipes(equipe);
  }

  // get a pokemon by id
  @Get('/pokemons/:id')
  getPokemonById(@Param('id') id: number): Promise<{}> {
    return this.appService.getPokemonById(id);
  }

  @Post('/pokemons')
  postPokemon(@Body() pokemon:{}): Promise<void> {
    return this.appService.postPokemon(pokemon);
  }
  

  @Delete('/pokemons/:id')
  deletePokemon(@Param('id') id: number): Promise<void> {
    return this.appService.deletePokemon(id);
  }

}
