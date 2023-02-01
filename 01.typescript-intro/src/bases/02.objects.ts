export const pokemonIds = [1, 20, 30, 34, 66]

interface Pokemon {
  id: number
  name: string
  age?: number
}

// la diferencia principal con las clasese es que no se pueden instanciar interfaces
// const pikachu = new Pokemon() // Error

export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
}

export const ivysaur: Pokemon = {
  id: 2,
  name: 'Ivysaur',
}

export const pokemons: Pokemon[] = [bulbasaur, ivysaur]