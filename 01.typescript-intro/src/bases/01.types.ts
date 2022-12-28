export const name: string | undefined = 'Fernando';
export const age: number | string = 30;
export const isValid: boolean = true;

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores: ${ name }
expresiones ${ 1 + 1 }
numeros: ${ age }
booleanos: ${ isValid }
`

console.log(templateString)