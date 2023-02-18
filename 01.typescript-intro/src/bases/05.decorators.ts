
export class NewPokemon {
  
  constructor(
    public readonly id: number,
    public name: string,
  ) {}

  private scream(){
    console.log('NO QUIERO GRITAR')
  }

  private speak(){
    console.log('no quiero hablar')
  }

  public communicate(){
    this.speak()
    this.scream()
  }
}

const MyDecorator = () => {
  return ( target: Function ) => {
    console.log(target)
    return NewPokemon;
  }
}

@MyDecorator()
export class Pokemon {
  
  constructor(
    public readonly id: number,
    public name: string,
  ) {}

  private scream(){
    console.log(`${this.name.toUpperCase()}!!`)
  }

  private speak(){
    console.log(`${this.name}, ${this.name}!`)
  }

  public communicate(){
    this.speak()
    this.scream()
  }
}

export const charmander = new Pokemon (4, 'Charmander')

charmander.communicate()