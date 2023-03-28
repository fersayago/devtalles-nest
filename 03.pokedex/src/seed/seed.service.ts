import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    //implementamos patron adaptador
    private readonly http: AxiosAdapter,
  ) {}

  // borra las bases de datos almacenados y las puebla con los datos extraidos de pokeapi
  async executeSeed() {
    // Al ejecutar la seed borramos la tabla de pokemons
    await this.pokemonModel.deleteMany({});

    // Una vez limpia la tabla la poblamos
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=151',
    );

    const pokemonToInsert: {
      name: string;
      no: number;
    }[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segments: string = url.split('/').at(-2);
      const no: number = +segments;
      //const pokemon = await this.pokemonModel.create({ name, no });

      pokemonToInsert.push({ name, no });
    });

    // crea una inserción con un montón de entradas
    this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }
}
