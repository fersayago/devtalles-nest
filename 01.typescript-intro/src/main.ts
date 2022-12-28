import { name, age } from './bases/01.types'

import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${ name }</h1>
  <>edad: ${ age }</
`
