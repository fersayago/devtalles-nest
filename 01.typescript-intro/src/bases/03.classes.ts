
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
}

export const charmander = new Pokemon( 4, 'Charmander' )

//charmander.speak()
charmander.scream()