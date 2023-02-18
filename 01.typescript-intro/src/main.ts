// import { name, age } from './bases/01.types'
// import { pokemonIds } from './bases/02.objects'
// import { bulbasaur, ivysaur } from './bases/02.objects'
// import { charmander } from './bases/03.classes'
// import { charmander } from './bases/05.decorators'
import { charmander } from './bases/06.decorators'
import './style.css'

charmander

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${ charmander.name } ${ charmander.id }!</h1>
`
