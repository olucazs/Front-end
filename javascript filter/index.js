//   FILTER SERVE PRA TIRAR ITENS REPETIDOS DE UM ARRAY

const array = [1, 2, 3, 4, 2, 5, 2, 2, 1, 3]
const anotherArray = array.filter((demo, index, arr) => arr.indexOf(demo) === index) 
console.log(anotherArray)