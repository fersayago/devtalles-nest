import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=386',
    );

    data.results.forEach(({ name, url }) => {
      const segments: string = url.split('/').at(-2);
      const no: number = +segments;
      console.log({ name, no });
    });
    return data.results;
  }
}
