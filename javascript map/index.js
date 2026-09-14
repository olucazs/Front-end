// O MAP() SERVE PARA MAPEAR TODOS ITENS DE UM ARRAY

const numbers = [1, 4, 5, 11, 27];
const doubleNumbers = numbers.map( num => num * 2)

//console.log(doubleNumbers)

const fahrenheit = [ 2, 32, 45, 54, 76, 80, 120]
const celsius = fahrenheit.map( demo => Math.round( (demo- 32) * 5/9 ))

console.log(celsius)