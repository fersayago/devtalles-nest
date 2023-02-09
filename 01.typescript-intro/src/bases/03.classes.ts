import axios from "axios";
import { PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';
import { PokeapiResponse, Move } from '../interfaces/pokeapi-response.interface';

// Definir clases de forma explicita
// export class Pokemon {
//   public id: number
//   public name: string

//   constructor( id: number, name: string ){
//     this.id = id;
//     this.name = name;
//     console.log('constructor llamado')
//   }
// }

// Definir clases de forma corta
export class Pokemon {

  // usamos el id para no tener que recibir como parametro la imagen ya que solo varia el numero en la URL. Para esto mismo usamos el getter
  get imageUrl(): string{ 
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ this.id }.png`
  }

  constructor(
    public id: number,
    public name: string,
    // public imageUrl: string
    // ! Inyeccion de dependencias
    private readonly http: PokeApiAdapter
  ) {}

  // ! METODOS: funciones que tienen acceso a las propiedades y otros metodos
  public scream() {
    this.speak()
    console.log(`${ this.name.toUpperCase() }!!!`)
  }

  // ! Si defiimos un metodo privado solo se puede usar dentro de la misma clase
  private speak() {
    console.log(`${ this.name } ${ this.name }`)
  }

  async getMoves(): Promise<Move[]>{
    // const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/4')
    // return resp.data.moves;

    const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
    return data.moves;
  }
}

// const PokeApiAxios = new PokeApiAdapter()
const PokeApiFetch = new PokeApiFetchAdapter()

// export const charmander = new Pokemon( 4, 'Charmander', PokeApiAxios )
export const charmander = new Pokemon( 4, 'Charmander', PokeApiFetch )

// charmander.speak()
// charmander.scream()

charmander.getMoves()