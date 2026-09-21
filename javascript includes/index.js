// INCLUDES SERVE PRA SABER QUANDO UM ARRAY OU OBJ POSSUI UM VALOR OU ELEMENTO;

console.log( [1, 2, 3, NaN].includes(4))

// =================================================

const pessoas = ['Alison', 'Natan', 'Ryan', 'Roger'];

console.log(pessoas.includes('Ryan'))

// ======================================================

const people = [
    {id: 0, nome: 'Adam'},
    {id: 1, nome: 'Sandro'},
    {id: 2, nome: 'Mauricio'},
    {id: 3, nome: 'Laura'}
];

const filteredPeople = people.filter ( p => p.nome.includes('au'))

console.log(filteredPeople)