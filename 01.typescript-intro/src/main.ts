// import { name, age } from './bases/01.types'
// import { pokemonIds } from './bases/02.objects'
import { bulbasaur } from './bases/02.objects'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${ bulbasaur.name }!</h1>
`
